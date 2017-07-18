Template.registerForm.onRendered(function(){
	$("select").material_select();
});
Template.registerForm.events({
	"submit form" :function(e){
Template.valid = new ReactiveVar(false);
		var usernameReg = /^[a-zA-Z]{3,}$/i
		var passwordReg = /^[\w]{3,}$/
		var emailReg = /^[a-zA-Z0-9]{1,}@\w{3,}[.][a-zA-Z]{2,3}$/
		var valid = true;
		//var nombreReg = /[a-z0-9]{1,}/i
		///var apellidoReg = /[a-z0-9]{1,}/i
		if(!usernameReg.test(e.target.username.value)){
		alert("tu nombre de usuario no cumple los requisitos")
		var valid = false;
		}
		if(!passwordReg.test(e.target.password.value)){
		alert("tu password no cumple los requisitos")
		var valid = false;
		}
		if(!emailReg.test(e.target.email.value)){
		alert("tu email no cumple los requisitos")
		var valid = false;
		}
		/*if(!nombreReg.test(e.target.nombre.value)){
		alert("tu nombre no cumple los requisitos")
		return;
		}
		if(!apellidoReg.test(e.target.apellido.value)){
		alert("tu apellido no cumple los requisitos")
		return;
		}*/
		if(!valid){
		return;
		}
		var user={
			"username": e.target.username.value,
			"email": e.target.email.value,
			"password": e.target.password.value,
			"profile": {
				"nombre":e.target.nombre.value,
				"apellido":e.target.apellido.value,
				"sexo":e.target.sexo.value,
				"ejercer":e.target.ejercer.value,
				"carrera":e.target.carrera.value,
				"estado":false,		
			} // Meteor.users.update({_id:'dHufK34dY82EzfH8k'},{$set:{'profile.sexo':'Masculino','profile.ejercer':'Administrador','profile.carrera':'Experto Backend','profile.estado':true}});
		}

	Accounts.createUser(user,function(e){
			if(e==undefined){
				Meteor.loginWithPassword(user.username,user.password);
			}
			FlowRouter.go('/');
		});
		return false;
	}
});


