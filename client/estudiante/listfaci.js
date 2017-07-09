Template.listface.helpers({
	listfacilitadores: function(){
		//console.log(Meteor.users.find({'roles.facilitador':'facilitador'}).fetch());
		return Meteor.users.find({'roles.facilitador':'administrador'}).fetch();
	}
});