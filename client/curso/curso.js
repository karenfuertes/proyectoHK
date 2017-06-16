
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
Template.curso.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
})
Template.curso.helpers({
  facebook: function(){
    return BUTTONFACEBOOK.get();
  },
  username : function(){
    return Accounts.user().username;
  }
});

Meteor.subscribe('listCurso');
//Meteor.subscribe('list', function() {});