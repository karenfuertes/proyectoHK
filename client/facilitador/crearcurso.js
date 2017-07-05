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

		// > mayor
		// < menor
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
				obj ={
					nombre:e.target.nombre.value,
					detalle:e.target.detalle.value,
					inicio:e.target.inicio.value,
					fin:e.target.fin.value,	
					userId : Accounts.user()._id,
					
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
