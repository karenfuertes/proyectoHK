Template.sistema_baneo.helpers({
	listPendientes: function(){
		return Meteor.users.find({ "$and": [{'profile.estado':false}]});
		return Meteor.users.find({_id:this._id}).fetch()
		return Meteor.users.find().fetch()
	},
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
Template.sistema_baneo.events({
	"click #Habilitar":function(e){
		//e.preventDefault();
		//alert(this._id);
		id=this._id;
		Meteor.call("addUsuario",id);
	},
	"click #Deshabilitar":function(e){
 		
		//e.preventDefault();
		//alert(this._id);
		id=this._id;
		Meteor.call("delUsuario",id);
	},
	"click #rolestu":function(e){

		//e.preventDefault();
		//alert(this._id);
		id=this._id;
		//r=Meteor.users.find({_id:this._id}).fetch();
		//if(r.profile.)
		//console.log(r);
		Meteor.call("addEstu",id);
	},
	"click #rolfacili":function(e){
		//e.preventDefault();
		alert(this._id);
		id=this._id;
		Meteor.call("addFaci",id);
	}
});

Meteor.subscribe('listPendientes');
