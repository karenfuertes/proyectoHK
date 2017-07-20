Template.mostrarfaci.helpers({
	imagen() {
    	return Images.findOne(this.profile.image);
  	},
	listfacilitadores: function(){
		//console.log(Meteor.users.find({'roles.facilitador':'facilitador'}).fetch());
		return Meteor.users.find({'roles.facilitador':'facilitador'}).fetch();
	}
});