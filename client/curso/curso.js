
Template.mostrarcurso.onRendered(function(){
	$("#container_curso").risizeDiv(function(num){
		$(".rectangle_hidden").animate({scrollTop:num},400);
	});
	$ (document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    	$('.modal').modal();
	 });
});
Template.curso.helpers({
	listCursos: function(){
		return Cursos.find();
	}
});

Template.mostrarcurso.events({
	"click #eliminarcurso":function(e){
		e.preventDefault();
		alert(this._id);

	}
});

Meteor.subscribe('listCurso');
//Meteor.subscribe('list', function() {});