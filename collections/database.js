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
Chat = new Mongo.Collection("chat");
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

Cursos = new Mongo.Collection('cursos'/*,{
	transform:function(item){
		if(Accounts.user() != null && item.userId == Accounts.user()._id){
			item.can_editar = true;
		}else {
			item.can_editar = false;
		}
		return item;
	}
}*/
);


Clases = new Mongo.Collection("clases");
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
//Users = new Mongo.Collection("users");*/


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
	}/*,
	clasesId: { 
		type: [String]	
	}
	,
	
	clasesId : { 
		type : Object , 
		autoValue :function(){
			return "";
		}
	}*/
	//clases:[Clases]
    
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

