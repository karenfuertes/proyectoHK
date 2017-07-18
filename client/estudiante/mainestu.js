Template.mainestu.helpers({
	username:function(){
		//return Accounts.user().username;
		// mamni
		return Accounts.user().profile.nombre;

	}
});
Template.mainestu.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});