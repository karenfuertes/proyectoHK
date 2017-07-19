
Template.perfil.helpers({
  image(){
    if (this.imagen!=undefined) { 
      return true;
    }
  }
});

Template.perfil.onRendered(function(){
    
  document.getElementById("apellido").disabled = true;
  document.getElementById("username").disabled = true;

});

Template.perfil.helpers({
  imagenes:function(){
    var re=Meteor.users.findOne({_id:Accounts.user()._id}).profile.image;
    return Images.findOne({_id:re});
  },
	sexo:function(){
    return Accounts.user().profile.sexo;
  },
  ejercer:function(){
		return Accounts.user().profile.ejercer;
	},
  nombre:function(){
    return Accounts.user().profile.nombre;
  },
   carrera :function(){
      return Accounts.user().profile.carrera;
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

Template.perfil.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});

Template.perfil.events({
  "click #editar":function(e){

       document.getElementById("guardar").disabled = false;
      document.getElementById("cancelar").disabled = false;
       document.getElementById("editar").disabled = true;


  },
  "click #guardar":function(e){
      document.getElementById("guardar").disabled = true;
      document.getElementById("editar").disabled = false;
      document.getElementById("cancelar").disabled = true;
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
    //$('#myModal').hide();
    $("#myModal .close").click()
  }
});

Meteor.subscribe('imagenes');


/*Template.modalperfil.onRendered(function(){
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
      });
});*/