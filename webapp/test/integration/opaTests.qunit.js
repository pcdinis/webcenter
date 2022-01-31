/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["pt/pcdinis/ui5webcenter/webcenter/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
