/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library eu.reitmayer.ui5.ui5LibraryComponent.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "eu.reitmayer.ui5.ui5LibraryComponent",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"eu.reitmayer.ui5.ui5LibraryComponent.ExampleColor"
		],
		interfaces: [],
		controls: [
			"eu.reitmayer.ui5.ui5LibraryComponent.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>ui5LibraryComponent</code>
	 *
	 * @namespace
	 * @name eu.reitmayer.ui5.ui5LibraryComponent
	 * @author Franz Reitmayer
	 * @version ${version}
	 * @public
	 */
	var thisLib = eu.reitmayer.ui5.ui5LibraryComponent;

	/**
	 * Semantic Colors of the <code>eu.reitmayer.ui5.ui5LibraryComponent.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
