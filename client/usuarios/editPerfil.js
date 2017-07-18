Template.editPerfil.helpers({
	sexo:function(){
    return Accounts.user().profile.sexo;
  },
  ejercer:function(){
		return Accounts.user().profile.ejercer;
	},
  nombre:function(){
    return Accounts.user().profile.nombre;
  },
  apellido :function(){
      return Accounts.user().profile.apellido;
  },
   username :function(){
      return Accounts.user().username;
  },
  email :function(e){
      return Accounts.user().emails[0].address;
  }
});
Template.editPerfil.events({
	"click #abrir":function(){

	},
	"submit form": function(e){
	    e.preventDefault();
	    obj ={
	      username:e.target.username.value,
	      password:e.target.password.value,
	      nombre:e.target.nombre.value,
	      apellido:e.target.apellido.value,
	      email:e.target.email.value
	    }
	    id=Accounts.user()._id;
	    Meteor.call("updateperfil",id,obj);
	    $('#editPerfil').on('shown.bs.modal', function (event) {
	    if (closeEditModal) {
	        $('#editPerfil').modal('hide');
	        closeModal = false;
    	}
		});
	}
});