

chat= new ReactiveVar();
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
	"click #ABRIRCHAT":function(e) {
		var idd = this._id;
		chat.set(idd);
		$('#'+this._id).slideToggle('slow', function() {});
		return false;		
	},
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


Template.chateando.helpers({
	nombre:function(){
		return Accounts.user().profile.nombre;
	},
	imagenes() {
		//Respuesta.findOne({userId:idUsuario}).texto
		var va=Meteor.users.findOne({_id:this.userId}).profile.image;
	
   		return Images.findOne(va);
	},
	yo:function(){
		if (Meteor.userId()==this.userId) {
			return true;
		}
		return false;
	},
	readychat:function(){
		return FlowRouter.subsReady("chats");
	},
    listachat: function () {
    	//var va=Clases.findOne({_id:this.cursId})._id;
		return Chat.find({claseId:this._id}).fetch();
	},
	userschat :  function () {
		//console.log(Meteor.users.findOne({_id:this._id}));
		return	Meteor.users.findOne({_id:this.userId});
	}
})


Template.chateando.events({
	'submit form': function (e) {
		var pre=chat.get();
	    var obj = {
	    	claseId: pre,
		  	userId : Accounts.user()._id,
			mensaje : e.target.cha.value,
			cursId : FlowRouter.getParam('id'),
			estado : false
		};
		console.log(obj);
		Meteor.call('guadarchat',obj);
		e.target.cha.value="";
		return false;
	}
});
