import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	publishComposite('listarPreguntas', function(idCurso){
		return {
			find(){
				console.log(Preguntas.find({idCurso:idCurso}).fetch());
				return Preguntas.find({idCurso:idCurso});
			},
			children:[
			{
				find(pregunta){
					console.log(Meteor.users.find({_id:pregunta.idUsuario}).fetch());
					return Meteor.users.find({_id:pregunta.idUsuario});
				}
			}
			]
		}
	});
	Meteor.publishComposite("chat",function(id){
    return {
      find(){
      	//console.log(Pregunta.find({cursId:id}).fetch());
        return Chat.find({cursId:id});
      },
      children:[{
          find(preg){
          	//console.log(Meteor.users.find({_id:preg.userId}).fetch());
            return Meteor.users.find({_id:preg.userId});
          }          
        }]
    }});

	Meteor.publishComposite('listaClases', function(id){
		return {
			find(){
				return Clases.find({cursId:id});
			},
			children: [
				{
					find(clases){
						return Cursos.find({_id:clases.id});
					}
				}
			]
		}
	});
	Meteor.methods({
		
		"guadarchat": function(msnObj){
			Chat.insert(msnObj);
			return true;
		},
		
		"facicursos":function(id,msnObj){
			Cursos.update({_id:id},{$set:{nombre:msnObj.nombre,detalle:msnObj.detalle}});
			return true;
		},
		"deleteCurso": function(msnObj){
			Cursos.remove(msnObj);
			return true;
		},
		"addCourse": function(msnObj){
			Cursos.insert(msnObj);
			return true;
		},
		"addSesiones": function(msnObj){
			Clases.insert(msnObj);
			return true;
		},
		"addUsuario":function(id){
			//console.log(id);	
			Meteor.users.update(id,{ $set: {'profile.estado':true }});
		},
		"delUsuario":function(id){
			//console.log(id);	
			Meteor.users.update(id,{ $set: {'profile.estado':false }});
		},
		"addEstu":function(id){
			//console.log(id);	
			Roles.addUsersToRoles(id,['estudiante'],'estudiante');
		},
		"addFaci":function(id){
			//console.log(id);	
			Roles.addUsersToRoles(id,['facilitador'],'facilitador');
		},
		"updateperfil":function(id,obj){
			//console.log(id);	

			Meteor.users.update({_id:id},{$set:{
				'username':obj.username,
				'emails.0.address':obj.email,
				'profile.nombre':obj.nombre,
			    'profile.apellido':obj.apellido,
			    'profile.image':obj.image
			}});
		},
		'insertarPregunta': function(pregunta){
			Preguntas.insert(pregunta);
		}


	});
	Meteor.publish('imagenes', function () {
	    return Images.find().cursor;
	  });


	Meteor.publish('listCurso', function() {
	  return Cursos.find();
	});
	Meteor.publish('listCursosMios', function() {
	  return Cursos.find();
	});

	Meteor.publish('listPendientes', function() {
	  
	  return Meteor.users.find();
	});
	

  
});


Meteor.startup(() => {

	Meteor.publishComposite("getConnections",{
		find(){
			return CONNECT.find({stade:true});
		},
		children:[{
			find(connect){
				return Meteor.users.find({_id:connect.idUs});
			}
		}]
	});
	Meteor.methods({
		"checkAccount": function(username){
			
			var t = Meteor.users.find({username:username}).fetch();
			console.log(t);
			if(t.length == 1){
				return true;
			}
			return false;
		},
		"checkConnection": function(id){
			// select * from connect where idus=id and stade = true
			var result = CONNECT.find({idUs:id,stade:true}).fetch();
			if(result.length>0){
				return {value:true,id:result[0]._id};
			}
			return {value:false};
		},
		"createConnection": function(idus){
			console.log(idus);
			var id = CONNECT.insert({idUs:idus,connectionDate:new Date(),disconnectionDate:new Date(),stade:true});
			return id;
		},
		"disconnection": function(id){
			CONNECT.update(id,{$set:{stade:false,disconnectionDate:new Date()}});
			return true;
		},
		"addChat": function(msnObj){
			CHAT.insert(msnObj);
			return true;
		}
	});
});