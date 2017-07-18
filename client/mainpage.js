Template.mainpage.onRendered(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".panelForm").css("opacity",0);
});

Template.mainpage.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});
Template.mainpage.helpers({
  facebook: function(){
    return BUTTONFACEBOOK.get();
  },
 nombre:function(){
    return Accounts.user().profile.nombre;
  },
  apellido :function(){
      return Accounts.user().profile.apellido;
  },
  username :function(){
      return Accounts.user().username;
  },
  email :function(e){
      return Accounts.user().emails[0].address;
  }
});
