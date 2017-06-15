Template.crearcurso.events({	
	"submit form": function(e){
		e.preventDefault();
		obj ={
			nombre:e.target.nombre.value,
			detalle:e.target.detalle.value,
			inicio:e.target.inicio.value,
			fin:e.target.fin.value,	
			userId : Accounts.user()._id
		}
		Meteor.call("addCourse",obj);
		e.target.nombre.value="";
		e.target.detalle.value="";
		e.target.inicio.value="";
		e.target.fin.value="";	
		return false;
	}	
	
});
Template.crearcurso.helpers({
	username:function(){
		return Accounts.user().profile.nombre;
	}
});
