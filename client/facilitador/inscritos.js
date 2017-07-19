Template.inscritos.helpers({

	listActivos: function(){
		return Meteor.users.find({ "$or": [{'roles.facilitador':'facilitador'},{ 'roles.estudiante':'estudiante' }]});
		return Meteor.users.find({ "$and": [{'profile.estado':true}]});

	},
	lis: function(){
		return Meteor.users.find().fetch()
		return Meteor.users.find({ "$or": [{'roles.facilitador':'facilitador'},{ 'roles.estudiante':'estudiante' }]});
		return Meteor.users.find({_id:this._id}).fetch()

	}

});