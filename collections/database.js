import {Mongo} from "meteor/mongo";


Videos = new FilesCollection({
  collectionName: 'videos',
  allowClientCode: false, // Disallow remove files from g
  storagePath:'/home/beto/Escritorio/files/',
});

Images = new FilesCollection({
  collectionName: 'images',
  allowClientCode: false, // Disallow remove files from g
  storagePath:'/home/beto/Escritorio/files/',
});

GALERIA = new Mongo.Collection('galeria',{
    transform:function(item){
        _.extend(item,{imagen:Images.findOne({_id:item.idImagen})});
        return item;
    }
});

var galeriaSchema = new SimpleSchema({
    idUser: {
        type : String,
        autoValue : function(){
            return Meteor.userId();
        }
    },
    idImagen : {
        type : String
    }
});
GALERIA.attachSchema(galeriaSchema);

//ANSWER

Answer = new Mongo.Collection("answer");
Questions = new Mongo.Collection("questions");
PERFIL = new Mongo.Collection("perfil");

//Curso_User = new Mongo.Collection("cursos_user");

//Curso_User = new Mongo.Collection"cursos_user"()
Tomarcurso=new Mongo.Collection('tomarcurso')
var tomar=new SimpleSchema({
	fecha:{
		type:Date
	},
	courseId:{
		type:String
	},
	userId:{
		type:String
	}
});

Tomarcurso.attachSchema(tomar);

Cursos = new Mongo.Collection('cursos');


Clases = new Mongo.Collection('clases');
var clase=new SimpleSchema({
	nombre:{
		type:String
	},
	detalle:{
		type:String
	},
	fecha:{
		type:Date,
		autoValue: function(){
			return new Date();
		}
	},
	archivo:{
		type:String
	},
	chatId:{
		type:String
	},
	cursId:{
		type:String
	}
});
Clases.attachSchema(clase);


var cursoss = new SimpleSchema({
	nombre: {
		type:String
	},
	detalle: {
		type:String
	},
	inicio: {
		type:Date
	},
	fin: {
		type:Date
	},
	userId: {
		type:String
	},
	imagen:{
		type: String
	}
    
});
Cursos.attachSchema(cursoss); 

Preguntas = new Mongo.Collection('preguntas');

var preguntasSchema = new SimpleSchema({
	texto: {
		type: String
	},
	idCurso: {
		type: String
	},
	idUsuario:{
		type: String
	},
	votos: {
		type: Number
	}
});


Respuesta = new Mongo.Collection('respuesta');

var respuesta=new SimpleSchema({
    
    texto : {
        type:String,
    },
    userId : {
        type : String
    },
    pregId: {
        type : String
    },
    cursId : {
        type : String
    },
    fecha:{
        type:Date,
        autoValue: function(){
            return new Date();
        }
    } 
});





MESSAGES = new Mongo.Collection("messages",{
	transform:function(row){
		//row.username="Ditmaros";
		var user = Meteor.users.findOne({_id:row.user})
		if(!!user.profile)
		{
			row.username = user.profile.name; 
		}
		if(!!user.emails)
		{
			row.username = user.emails[0].address;
		}
		return row;
	}
});



Chat = new Mongo.Collection("chat");
var mensajesSchema =new SimpleSchema({
    claseId : {
        type:String,
    },
    userId : {
        type:String,
    },
    mensaje : {
        type : String
    },
    cursId : {
        type : String
    },
    estado : {
    	type : Boolean
    }
});

Chat.attachSchema(mensajesSchema);
