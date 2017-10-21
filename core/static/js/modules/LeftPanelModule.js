/* LeftPanelModule.js
*
* left-panel controls
*
* Dependancies : 
*
*/
LeftPanelModule = {
	instance : function(){
		return this;
	},

	init : function(){
		$("#menu-search").click(this.open);
		$("#menu-map").click(this.close);
		var _module = this;
		$("#left-panel .widget-pane-toggle-button-container .btn").on("click",function(){
			_module.toggle();
		});
	},

	open : function(){
		$("#left-panel").removeClass("closePanel");
		$("#left-panel .widget-pane-toggle-button-container .btn").focusout().blur()
			.attr('data-original-title', "Close the side panel")
			.find(".glyphicon").removeClass("glyphicon-triangle-right")
			.addClass("glyphicon-triangle-left");

		$("#menu-map").removeClass("active");
		$("#menu-search").addClass("active");
	},

	close : function(){
		$("#left-panel").addClass("closePanel");
		$("#left-panel .widget-pane-toggle-button-container .btn").focusout().blur()
			.attr('data-original-title', "Open the side panel")
			.find(".glyphicon").removeClass("glyphicon-triangle-left")
			.addClass("glyphicon-triangle-right");

		$("#menu-search").removeClass("active");
		$("#menu-map").addClass("active");
	},

	isOpen : function(){
		return !$("#left-panel").hasClass("closePanel");
	},

	toggle : function(){
		if(this.isOpen()){
			this.close();
		}
		else{
			this.open();
		}
	}
};
