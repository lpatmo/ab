Router.map(function(){
    this.route('home', {path: '/'} );
    this.route('submit', {path: '/submit'});
    this.route('pledge',{
	    waitOn: function(){
	        return [IRLibLoader.load('https://www.simplify.com/commerce/v1/simplify.js')]
	    },
    	path: '/pledge'
  });
});


