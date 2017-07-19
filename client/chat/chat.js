Template.chat.helpers({	
    clases() {
        return Clases.find();
    },
    clasesCurso() {
        return Cursos.findOne(this.id);
    },
    preguntas(){
    	return Preguntas.find();
    },
    autorPreguntas(){
    	return Meteor.users.findOne(this.idUsuario);
    }



})

Template.chat.events({
	'submit form': function(e){
		e.preventDefault();
		var target = e.target;
		var pregunta = {
			texto: target.pregunta.value,
			idCurso: FlowRouter.getParam('id'),
			idUsuario: Meteor.userId(),
			votos: 0
		};
		Meteor.call('insertarPregunta', pregunta);
		target.pregunta.value = '';
	}
});