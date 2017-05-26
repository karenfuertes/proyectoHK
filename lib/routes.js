FlowRouter.route("/",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("mainpage",{banner:"banner"});
	}
});

FlowRouter.route("/soporte",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("mainpage",{banner:"banner_nav",content:"soporteTemplate"});
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
FlowRouter.route("/acerca_de",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("acerca_de",{});
	}
});
FlowRouter.route("/templateClient",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("templateClient",{});
	}
});
FlowRouter.route("/templatesuppot",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("templatesuppot",{});
	}
});

