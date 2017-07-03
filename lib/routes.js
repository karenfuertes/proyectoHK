FlowRouter.route("/",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("mainpage",{});
	}
});
FlowRouter.route("/mainModuleLoggin",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("mainModuleLoggin",{});
	}
});

FlowRouter.route("/loginForm",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("loginForm",{});
	}
});
FlowRouter.route("/registerForm",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("registerForm",{});
	}
});
FlowRouter.route("/Form",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("Form",{});
	}
});
FlowRouter.route("/banner",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("banner",{});
	}
});
FlowRouter.route("/curso",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("curso",{});
	}
});
FlowRouter.route("/mostrarcurso",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("mostrarcurso",{});
	}
});
FlowRouter.route("/crearcurso",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("crearcurso",{});
	}
});
FlowRouter.route("/contactos",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("contactos",{});
	}
});
FlowRouter.route("/usuarios",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("usuarios",{});
	}
});
FlowRouter.route("/soporteTemplate",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("soporteTemplate",{});
	}
});
FlowRouter.route("/soporteClient",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("soporteClient",{});
	}
});
FlowRouter.route("/users",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("users",{});
	}
});
FlowRouter.route("/cursos",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("cursos",{});
	}
});



