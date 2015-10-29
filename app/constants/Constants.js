var Constants = {
  rsvpApiUrl: "https://api.meetup.com/2/rsvps?callback=?&photo-host=public&group_urlname=ny-tech&event_id=225163014&member_id=131615892&page=20&sig_id=131615892&sig=add76de6c6322f706ac785f08196535659ac4a87&sign=true&key=6849657a564a6819122d46612f471d5f&order=name",
  eventApiUrl: "https://api.meetup.com/2/rsvps?callback=?&member_id=131615892&offset=0&format=json&limited_events=False&group_urlname=ny-tech&event_id=225163014&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=131615892&sig=add76de6c6322f706ac785f08196535659ac4a87&sign=true&key=6849657a564a6819122d46612f471d5f",
  
  ActionTypes: {
    MEMBERS_BATCH_LOADED: "membersBatchLoaded",
  },
};  

module.exports = Constants;