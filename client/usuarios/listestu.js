Template.mostrarestu.helpers({
	imagen() {
    	return Images.findOne(this.profile.image);
  	},
	listestudiantes: function(){
		//console.log(Meteor.users.find({'roles.facilitador':'facilitador'}).fetch());
		return Meteor.users.find({'roles.estudiante':'estudiante'}).fetch();
	}
});