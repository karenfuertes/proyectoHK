Template.crearcurso.events({	
	"submit form": function(e){
		// esta parte hay q llevar al servidor y sera parte del aldo
		var fechaincribir=e.target.inicio.value;
		var fechafin=e.target.fin.value;

		var  inscribir= moment(fechaincribir).format("YYYY.MM.DD");
		var  fin= moment(fechafin).format("YYYY.MM.DD");
		// fecha actual de la maquina
		var fechaactual = new Date();
		var  actual= moment(fechaactual).format("YYYY.MM.DD");

		if(inscribir<=actual){
			alert("Las Fechas que pusiste estan pasados intente de nuevo");
			return false;
		}
		else{
			if(inscribir>fin){
				alert("La fecha de inicio no puede ser mayor a la fecha del fin");
				return false;
			}
			else{

				e.preventDefault();
				var upload = Images.insert({
            file: e.target.imagen.files[0],
            streams: 'dynamic',
            chunkSize: 'dynamic',
          });

        obj ={
					'nombre':e.target.nombre.value,
					'detalle':e.target.detalle.value,
					'inicio':e.target.inicio.value,
					'fin':e.target.fin.value,	
					'userId' : Accounts.user()._id,
          'imagen':upload.config.fileId
					
				}
				Meteor.call("addCourse",obj);
				e.target.nombre.value="";
				e.target.detalle.value="";
				e.target.inicio.value="";
				e.target.fin.value="";	
				return false;
			}
		}
	},
});
Template.crearcurso.helpers({
	username:function(){
		return Accounts.user().profile.nombre;
	}
});
idEditar = new ReactiveVar("0");
Template.mostrarcurso.onRendered(function(){
  $("#container_curso").risizeDiv(function(num){
    $(".rectangle_hidden").animate({scrollTop:num},400);
  });
  
});

Template.curso.helpers({
  
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
Template.crearcurso.helpers({
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
