var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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

// on connection
io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(process.env.PORT, function(){
  console.log('listening on *:' + process.env.PORT);
  
  function loadData()
  {
     // to do paul
     io.emit('newdata', { data: [] });
     setTimeout(loadData, 10000);
  }

  loadData();
});

