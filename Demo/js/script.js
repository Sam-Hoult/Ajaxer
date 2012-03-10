(function($){
$.fn.ajaxer = function(options){

	var defaults = {
		buttons: '#next, #prev',
		first: ''
	},settings = $.extend({}, defaults, options);
	
	var content = $(this);
	function loaded(){
		$(settings.buttons).click(function(){
			var $this = $(this);
			var link = $this.attr('href');
			$this.removeAttr('href');
			content.fadeOut('slow',function(){
					content.load(link, function(responseText, textStatus, XMLHttpRequest){
						if(textStatus == 'success'){
							content.fadeIn('slow');
							loaded();
					}
				});
			});
		});//End of click
	}
	function initialLoad(){
		content.load(settings.first, function(responseText, textStatus, XMLHttpRequest){
			if(textStatus == 'success'){
				content.fadeIn('slow');
				loaded();
			}
		});//loading first as default
	}
	initialLoad();
	return this;
}
})(jQuery);