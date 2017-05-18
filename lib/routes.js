FlowRouter.route("/",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("main",{});
	}
});
FlowRouter.route("/estudiantes",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("estudiantes",{});
	}
});
FlowRouter.route("/form",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("form",{});
	}
});
FlowRouter.route("/main",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("main",{});
	}
});