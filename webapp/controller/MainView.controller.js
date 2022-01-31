sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("pt.pcdinis.ui5webcenter.webcenter.controller.MainView", {

		onInit: function(evt) {
			var tile1 = this.getView().byId("tile1");
			var tileZOrangeGetLeave = this.getView().byId("idTileZOrangeGetLeave");
			tile1.setVisible(false);
			tileZOrangeGetLeave.setVisible(false);
			// switch (userLevel) {
			// 	// User
			// 	case "1":
			// 		tile1.setVisible(true);
			// 		break;
			// 		// Admin				
			// 	case "2":
			// 		tile1.setVisible(true);
			// 		tileZOrangeGetLeave.setVisible(true);
			// 		break;
			// }
					tile1.setVisible(true);
					tileZOrangeGetLeave.setVisible(true);			
		},

		handleLogOffPress: function(evt) {
			window.location.replace("https://www.deploy.pt/deployApps/users/logout.php");
		},

		pressTile1: function(evt) {
			MessageToast.show("The Tile is pressed.");
		},

		pressTileZOrangeGetLeave: function(evt) {
			window.location.replace("https://www.deploy.pt/deployApps/ZOrangeGetLeave/webapp/index.php");
		}

	});

});