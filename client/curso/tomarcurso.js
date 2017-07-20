Template.tomarcurso.onRendered(function(){

	$(document).ready(function(){
		$(".play-trailer").click(function(){
			toggleVideo('show');
			$(".moviecard").addClass("movie-view-trailer");
		});

		$(".back-btn").click(function(){
			$(".moviecard").removeClass("movie-view-trailer");
			toggleVideo('hide');
		});	
	});

	function toggleVideo(state) {
	    // if state == 'hide', hide. Else: show video
	    var div = document.getElementById("youvideo");
	    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
	    div.style.display = state == 'hide' ? 'none' : '';
	    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
	    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
	}       
});


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
	tomarcurso:()=>{
		var id=FlowRouter.getParam('id');	
		return Cursos.findOne({_id:id});
	},
	listCursos: function(){
		var id=FlowRouter.getParam('id');
		console.log(id);
		return Cursos.findOne({_id:id});

		
	},
});

Template.tomarcurso.helpers({	
    /*videos(){
		return Videos.findOne(this.archivo);
	},
	imagess() {
		var res=Cursos.findOne({_id:this.cursId}).imgId;
		if (res==undefined) {
			console.log("esta vacio");
		}
   		 return Images.findOne(res);
	},*/
	readyCu:function(){
		return FlowRouter.subsReady("listaCursos");
	},
    clases() {
        return Clases.find();
    },
    clasesCurso() {
        return Cursos.findOne(this.id);
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

Template.respuesta.events({
	'submit form': function(e){
		e.preventDefault();
		var target = e.target;
		var respuesta = {
			texto: target.respuesta.value,
			idCurso: FlowRouter.getParam('id'),
			idUsuario: Meteor.userId(),
			votos: 0
		};
		Meteor.call('insertarRespuesta', pregunta);
		target.respuesta.value = '';
	}
});