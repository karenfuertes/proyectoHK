Template.users.helpers({
  facebook: function(){
    return BUTTONFACEBOOK.get();
  },
  users : function(){
    return Meteor.users();
  },
  listusers: function(){
		//console.log(Meteor.users.find({'roles.facilitador':'facilitador'}).fetch());
		return Meteor.users.find({'roles.administrador':'administrador'}).fetch();
	}
});