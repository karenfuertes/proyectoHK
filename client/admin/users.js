Template.users.helpers({
  facebook: function(){
    return BUTTONFACEBOOK.get();
  },
  users : function(){
    return Meteor.users();
  }
});