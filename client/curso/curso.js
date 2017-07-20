idEditar = new ReactiveVar("0");
Template.mostrarcurso.onRendered(function(){
  $("#container_curso").risizeDiv(function(num){
    $(".rectangle_hidden").animate({scrollTop:num},400);
  });
  
});

Template.mostrarcurso.helpers({
  imagen:function(){
    return Images.findOne(this.imagen);
  },
  listCursos: function(){
    
    return Cursos.find({},{
      //esta parte es del aldo
    transform : function(item) {
        if(Accounts.user() != null && item.userId == Accounts.user()._id){
          item.can_editar = true;
        }else {
          item.can_editar = false;
        }
        return item;
      }
    });
  
    //return this.userId == Meteor.userId();
    //return Cursos.find();
    
  },
  /*listEditarCursoFacili:function(){
    var idd=idEditar.get();

    return Cursos.find({_id:idd}).;
  },*/
  fechacd:function(){
    //id=this._id;
    var ss=Meteor.users.findOne({_id:this._id});
    /*

    var date1 = moment("01.01.2016 23:59:00", "DD.MM.YYYY HH.mm.ss");
    var date2 = moment("02.01.2016 00:01:00", "DD.MM.YYYY HH.mm.ss");
    var date = new Date()
    var begun1 = moment(date1).format("MM.DD.YYYY");  
    var mostrar;
    var begun = moment(date).format("MM.DD.YYYY");  
    
    if(begun>begun1){
      return true;
    }

    

    return false;*/
    console.log(ss);
  }
});

Template.mostrarcurso.events({
  "click #elimincursoadmi ":function(e){
    id=this._id;
    Meteor.call("deleteCurso",id);
  },
  "click #editFaci":function(e){
    //id=this._id;
    idEditar.set(this);
    //console.log(idEditar.get());
    //alert(id);
  }

  /*,
  "click #suscurso" : function(e) {
    obj = {
      iduser : Accounts.user()._id,
      idcurso: this._id
    }
    Meteor.call("checkCourse",obj, function(err,r) {
      if(r) {
        //regitrarle en curso
        
      }else {
        //alert("Tu ya tomaste este curso");
      }
    })
  }*/
});

Meteor.subscribe('listCurso');
//Meteor.subscribe('list', function() {});
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