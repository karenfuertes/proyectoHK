Template.mymodall.helpers({
	title(){
		return idEditar.get().nombre
	},
	text(){
		return idEditar.get().detalle
	},
	id(){
		return idEditar.get()._id
	}
});
Template.mymodall.events({
	"click #guardarfaci":function (e) {
		var nomb;var deta;
		var element = document.getElementById('nombree');
		var element1 = document.getElementById('detallee');
		if (element != null && element1 != null) {
		    nomb = element.value;deta = element1.value;
		}
		else {
		    nomb = null;deta = null;
		}	
		var curs={"nombre":nomb,"detalle":deta}
		Meteor.call("facicursos",idEditar.get()._id,curs,function(){
		});
		$("#myModal .close").click()

	}
});