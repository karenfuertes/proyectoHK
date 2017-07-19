FlowRouter.route("/loginForm",{
	action : function(params,queryParams) {
		BlazeLayout.render("loginForm",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/registerForm",{
	action : function(params,queryParams) {
		BlazeLayout.render("registerForm",{mainmenu:"mainnav"});
	}
});

FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("mainpage",{mainmenu:"mainnav"});
	}
});

FlowRouter.route("/curso",{
	action : function(params,queryParams) {
		BlazeLayout.render("curso",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/editPerfil",{
	action : function(params,queryParams) {
		BlazeLayout.render("editPerfil",{mainmenu:"mainnav"});
	}
});
// cuando te vi con ella quise quitarme la vida 
FlowRouter.route("/perfil",{	
	action : function(params,queryParams) {
		BlazeLayout.render("perfil",{mainmenu:"mainnav"});
		
	}
});
FlowRouter.route("/notificaciones",{	
	action : function(params,queryParams) {
		BlazeLayout.render("notificaciones",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/sistema_baneo",{	
	action : function(params,queryParams) {
		BlazeLayout.render("sistema_baneo",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/cursos",{	
	action : function(params,queryParams) {
		BlazeLayout.render("cursos",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/curso",{	
	action : function(params,queryParams) {
		BlazeLayout.render("curso",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/crearcurso",{	
	action : function(params,queryParams) {
		BlazeLayout.render("crearcurso",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/listface",{	
	action : function(params,queryParams) {
		BlazeLayout.render("listface",{mainmenu:"mainnav"});
	}
});
FlowRouter.route("/listestu",{	
	action : function(params,queryParams) {
		BlazeLayout.render("listestu",{mainmenu:"mainnav"});
	}
});

FlowRouter.route("/micuenta",{	
	action : function(params,queryParams) {
		BlazeLayout.render("micuenta",{mainmenu:"mainnav"});
	}
});

FlowRouter.route("/tomarcurso/:id", {
  name: 'tomarcurso',
  subscriptions:function(params, queryParams){
		this.register("listaCursos",Meteor.subscribe('listaClases', params.id));
		this.register("listarPreguntas",Meteor.subscribe('listarPreguntas', params.id));
		this.register("listarRespuestas",Meteor.subscribe('listarRespuestas', params.id))
  },
  action: function() {
    BlazeLayout.render("tomarcurso",{mainmenu:'mainnav'});
  }
});


FlowRouter.route("/subirmaterial/:id", {
  name: 'subirmaterial',
  action: function() {
    BlazeLayout.render("subirmaterial",{mainmenu:'mainnav'}); 
  }
});

FlowRouter.route("/contactos", {
  action: function() {
    BlazeLayout.render("contactos",{mainmenu:'mainnav'}); 
  }
});
FlowRouter.route("/editcurso", {
  action: function() {
    BlazeLayout.render("editcurso",{mainmenu:'mainnav'}); 
  }
});

FlowRouter.route("/inscritos", {
  action: function() {
    BlazeLayout.render("inscritos",{mainmenu:'mainnav'}); 
  }
});


FlowRouter.route("/chat/:id", {
  name: 'chat',
  subscriptions:function(params, queryParams){
  	this.register("listarPreguntas",Meteor.subscribe('listarPreguntas', params.id));
  },
  action: function() {
    BlazeLayout.render("tomarcurso",{mainmenu:'mainnav'});
  }
});