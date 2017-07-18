Template.mainfaci.helpers({
	username:function(){
		return Accounts.user().profile.nombre;
	}
});
Template.mainfaci.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});