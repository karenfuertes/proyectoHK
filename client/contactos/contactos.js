Template.contactos.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});
Template.contactos.helpers({
  facebook: function(){
    return BUTTONFACEBOOK.get();
  },
  username : function(){
    return Accounts.user().username;
  }
});