Template.Usuarios.helpers({
  username : function(){
    return Accounts.user().username;
  }
});


Template.usuarios.events({
  "click #login" : function(){
    $(".panelForm").css("opacity",1);
  },
  "click #logout" : function(){
    Meteor.logout();
  }
});
Template.usuarios.helpers({
  facebook: function(){
    return BUTTONFACEBOOK.get();
  },
  username : function(){
    return Accounts.user().username;
  },
  lastname:function(){
      return Accounts.user().profile.lastname;
  },

  email :function(e){
      return Accounts.user().emails[0].address;
  }
});


Template.usuarios.events({
  "click #editar":function(e){

       document.getElementById("guardar").disabled = false;
      document.getElementById("cancelar").disabled = false;
       document.getElementById("editar").disabled = true;


  },
  "click #guardar":function(e){
      document.getElementById("guardar").disabled = true;
      document.getElementById("editar").disabled = false;
      document.getElementById("cancelar").disabled = true;
  }
});
