sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("pt.pcdinis.ui5webcenter.webcenter.controller.MainView", {

		onInit: function(evt) {
		
		},

		handleLogOffPress: function(evt) {
			window.location.replace("https://www.pcdinis.com/webcenter/");
		},

		pressTileMemGame: function(evt) {
			window.location.replace("https://www.pcdinis.com/memorygame");
			//MessageToast.show("The Tile is pressed.");
		},

		pressTileMastermind: function(evt) {
			window.location.replace("https://www.pcdinis.com/mastermind");
		}

	});

});