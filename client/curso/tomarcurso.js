/*Template.tomarcurso.helpers({
	tomarcurso:()=>{
		var id=FlowRouter.getParam('id');	
		return Cursos.findOne({_id:id});
	},
	fechaa:()=>{
		var id=FlowRouter.getParam('id');
		console.log(id);
		var date1 = moment("01.01.2016 23:59:00", "DD.MM.YYYY HH.mm.ss");
		var date2 = moment("02.01.2016 00:01:00", "DD.MM.YYYY HH.mm.ss");
		var date = new Date()
		var begun1 = moment(date1).format("MM.DD.YYYY");	
		var mostrar;
		var begun = moment(date).format("MM.DD.YYYY");	
		if(begun>begun1){
			return true;
		}
		return false;
	}
});

Template.temario.onRendered(function(){
	$(document).ready(function() {
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
	        $input = $( this );
	        $target = $('#'+$input.attr('data-toggle'));
	        $target.slideToggle();
	    });
	});	
	
       
});

Template.tomarcurso.helpers({
	
    clases() {
        return Clases.find();
    },
    clasesCurso() {
        return Cursos.findOne(this.id);
    }
})
*/
Template.tomarcurso.helpers({
	tomarcurso:()=>{
		var id=FlowRouter.getParam('id');	
		return Cursos.findOne({_id:id});
	},
	fechaa:()=>{
		var id=FlowRouter.getParam('id');
		console.log(id);
		var date1 = moment("01.01.2016 23:59:00", "DD.MM.YYYY HH.mm.ss");
		var date2 = moment("02.01.2016 00:01:00", "DD.MM.YYYY HH.mm.ss");
		var date = new Date()
		var begun1 = moment(date1).format("MM.DD.YYYY");	
		var mostrar;
		var begun = moment(date).format("MM.DD.YYYY");	
		if(begun>begun1){
			return true;
		}
		return false;
	}
});

Template.temario.onRendered(function(){
	$(document).ready(function() {
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
	        $input = $( this );
	        $target = $('#'+$input.attr('data-toggle'));
	        $target.slideToggle();
	    });
	});	
	
       
});


Template.tomarcurso.helpers({	
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

Template.tomarcurso.events({
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