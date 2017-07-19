Template.subirmaterial.helpers({
	subirmaterial:()=>{
		var id=FlowRouter.getParam('id');	
		return Cursos.findOne({_id:id});
	},
	listCursos: function(){
		var id=FlowRouter.getParam('id');
		console.log(id);
		return Cursos.findOne({_id:id});

		
	},
});
Template.subirmaterial.events({
  'submit form': function(event){
  	var id=FlowRouter.getParam('id');
  	//var ida=Accounts.user()._id;
  	//console.log(id);
	var obj ={
			nombre:event.target.nombre.value,
			detalle:event.target.detalles.value,
			archivo:'null',
			chatId:'null',
			cursId : id
	}
    Meteor.call("addSesiones",obj);
	return true;
  }	
});

Meteor.subscribe('listCursosMios');