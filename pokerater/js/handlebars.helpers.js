	//Handlebars Helpers
	
	
	
	Handlebars.registerHelper ("webroot", function () { return WEBROOT; });
	Handlebars.registerHelper ("webrootHTTPS", function () { return WEBROOT_HTTPS; });
	Handlebars.registerHelper ("time", function () { return Date.now(); });
	
	Handlebars.registerHelper('selected', function(val1, options) {
		var div = $('<div>').html(options.fn(this));
		// alert(val1);
		// val1 = val1 == null ? "" : val1;
		// alert(val1);
		div.find("[value='"+val1+"']").attr('selected', true);
		return div.html();
	});

	Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

		switch (operator) {
			case '==':
				return (v1 == v2) ? options.fn(this) : options.inverse(this);
			case '!=':
				return (v1 != v2) ? options.fn(this) : options.inverse(this);
			case '===':
				return (v1 === v2) ? options.fn(this) : options.inverse(this);
			case '<':
				return (v1 < v2) ? options.fn(this) : options.inverse(this);
			case '<=':
				return (v1 <= v2) ? options.fn(this) : options.inverse(this);
			case '>':
				return (v1 > v2) ? options.fn(this) : options.inverse(this);
			case '>=':
				return (v1 >= v2) ? options.fn(this) : options.inverse(this);
			case '&&':
				return (v1 && v2) ? options.fn(this) : options.inverse(this);
			case '||':
				return (v1 || v2) ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	});
	
	Handlebars.registerHelper('ifIsNthItem', function(options) {
	  var index = options.data.index + 1,
		  nth = options.hash.nth;
	  
	  if (index % nth === 0) {
		return options.fn(this);
	  }
	});