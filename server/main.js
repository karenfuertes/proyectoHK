import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	
	/*Meteor.publishComposite('listaCursos', function(idCurso){
		return {
			find(){
				return Cursos.find();
			},
			children: [
				{
					find(curso){
						return Clases.find({cursId:idCurso});
					}
				}
			]
		}
	});*/
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
	/*Meteor.publishComposite('listaCursos', function(idCurso){
		return {
			find(){
				return Cursos.find({_id:idCurso});
			},
			children: [
				{
					find(curso){
						return Clases.find({cursId:idCurso});
					}
				}
			]
		}
	});
	*/
	Meteor.methods({
		/*"checkCourse" : function(obj) {
			var l = Curso_User.find({iduser : obj.iduser,idcurso : obj.idcurso}).fetch();
			if(l.length == 0){
				return true;
			}
			return false;
		},*/
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
			//Clases.update({_id:idP},{$set:{like:cont}});
			Clases.insert(msnObj);
			///var ids=Clases.find({'cursId':ida},{sort:{ fecha: -1 }, limit: 1}).fetch();
		    //	console.log(ids);
			// primero insertamos
			// ida es el ID del del users
			// id  es el ID del curso
			// msnObj es el ID  
			// var es que el que optiene los el array de clasesId
			
			//var ids=Clases.findOne({'cursId':ida},{sort:{ fecha: -1 }, limit: 1}).fetch();
			
			//var ids=Clases.find({'clasesId':ida}).fetch();
			//Cursos.update({_id:id},{$push:{clasesId:ids}});
			// label: "Tags",
			//Cursos.update({_id:id},{clasesId:[{ids}]});
			
			//Cursos.update({_id:"xnYwCnXbninoxE8ms"}, {$set: {clasesId:p}});

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
				//'services.password.bcrypt':obj.password,
				'emails.0.address':obj.email,
				'profile.nombre':obj.nombre,
			    'profile.apellido':obj.apellido
			}});
		},
		'insertarPregunta': function(pregunta){
			Preguntas.insert(pregunta);
		}


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
	publishComposite('listarPreguntas', function(idCurso){
		return {
			find(){
				return Preguntas.find({idCurso:idCurso});
			},
			children:[
			{
				find(pregunta){
					return Meteor.users.find({_id:pregunta.idUsuario});
				}
			}
			]
		}
	});
  
});


Meteor.startup(() => {
	Meteor.publishComposite("getMSN",function(idUs,idMe){
		return {
			find(){
				return CHAT.find(
					{$or:
						[
							{idSource:idMe,idDestination:idUs},
							{idSource:idUs,idDestination:idMe}
							]});
			},
			children:[
				{
					find(chat){
						return Meteor.users.find({_id:chat.idSource});
					}
					
				},
				{
					find(chat){
						return Meteor.users.find({_id:chat.idDestination});
						
					}
				}
			]
		}
	});
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