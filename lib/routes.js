FlowRouter.route("/",{
	action : function(paramas,queryParams) {
		BlazeLayout.render("mainpage",{});
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
