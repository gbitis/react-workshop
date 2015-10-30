var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var data;

var options = {
    host: 'api.meetup.com',
    //path: '/2/rsvps?callback=?&member_id=131615892&offset=0&format=json&limited_events=False&group_urlname=ny-tech&event_id=225163014&photo-host=public&page=20&fields=&order=social&desc=false&status=upcoming&sig_id=131615892&sig=add76de6c6322f706ac785f08196535659ac4a87&sign=true&key=6849657a564a6819122d46612f471d5f'
    path: '/2/event_comments?&sign=true&photo-host=public&event_id=225163014&page=20&key=6849657a564a6819122d46612f471d5f'
}

// routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/style.css', function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

app.get('/bundle.js', function(req, res){
  res.sendFile(__dirname + '/bundle.js');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('getPosts', function(){
    console.log("ask");
    io.emit('data', data);
  });
});

var callback = function(response) {
  var str = '';
  
  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });
  
  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    if(!data) {
      // first init the default data
      console.log('first time, init data');
      data = str;
      io.emit('data', str);
    } else {
      // if data has changed, emit msg
      if(data !== str) {
        console.log('data has changed');
        io.emit('data', str);  
        // update data
        data = str;
      } else {
         console.log('data has not changed');
      }
    }
  });
}

function loadData() {
  var http2 = require("http");
  http2.request(options, callback).end();
  setTimeout(loadData, 10000);
}

http.listen(process.env.PORT, function(){
  console.log('listening on *:' + process.env.PORT);
  loadData();
});
