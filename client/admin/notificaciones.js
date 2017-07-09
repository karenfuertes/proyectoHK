Template.notificaciones.events({
	'submit form'(e){
		var cur = {
			nombre: e.target.nombre.value,
			detalle: e.target.detalle.value,
		}
		Cursos.insert(cur);
		return false;
	}
});