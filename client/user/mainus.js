Template.mainus.helpers({
	username:function(){
		//return Accounts.user().username;
		// mamni
		return Accounts.user().profile.nombre;

	}
});