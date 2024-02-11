/*global QUnit*/

sap.ui.define([
	"gms/gms_serviceprofile/controller/serviceProfile.controller"
], function (Controller) {
	"use strict";

	QUnit.module("serviceProfile Controller");

	QUnit.test("I should test the serviceProfile controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
