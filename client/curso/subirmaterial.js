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
  	var upload = Videos.insert({
        file: event.target.imagen.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic',
      });

	var obj ={
			nombre:event.target.nombre.value,
			detalle:event.target.detalles.value,
			archivo:upload.config.fileId,
			chatId:'null',
			cursId : id
	}
    Meteor.call("addSesiones",obj);
	return true;
  }	
});

Meteor.subscribe('listCursosMios');