Template.mainadmi.helpers({
	username:function(){
		//return Accounts.user().username;
		// mamni
		return Accounts.user().profile.nombre;

	}
});

Template.mainadmi.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});