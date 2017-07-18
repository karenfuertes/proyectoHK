
Template.usuarios.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});
Template.usuarios.helpers({
  facebook: function(){
    return BUTTONFACEBOOK.get();
  },
  username : function(){
    return Accounts.user().username;
  },
  lastname:function(){
      return Accounts.user().profile.lastname;
  },

  email :function(e){
      return Accounts.user().emails[0].address;
  }
});


