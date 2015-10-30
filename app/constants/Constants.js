var Constants = {
  
  apiKey: '6849657a564a6819122d46612f471d5f',
  eventID: '225163014',
  rsvpApiUrl: "https://api.meetup.com/2/rsvps?callback=?&photo-host=public&group_urlname=ny-tech&event_id=225163014&member_id=131615892&page=20&sig_id=131615892&sig=add76de6c6322f706ac785f08196535659ac4a87&sign=true&key=6849657a564a6819122d46612f471d5f&order=name",
  commentsApiUrl: "https://api.meetup.com/2/event_comments?callback=?&offset=0&format=json&event_id=225163014&photo-host=public&page=20&order=time&desc=desc&sig_id=131615892&sig=de81e206148d5d1035605fe0a1b6efb626384173&sign=true&key=6849657a564a6819122d46612f471d5f",
  commentPostApiUrl: "https://api.meetup.com/2/event_comment",
  
  ActionTypes: {
    MEMBERS_BATCH_LOADED: "membersBatchLoaded",
    COMMENTS_LOADED: "commentsLoaded",
  },
};  

module.exports = Constants;