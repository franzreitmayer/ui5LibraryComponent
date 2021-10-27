/*!
 * ${copyright}
 */

// Provides control eu.reitmayer.ui5.ui5LibraryComponent.Example.
sap.ui.define([
	"./library", 
	"sap/ui/core/Control", 
	"./ExampleRenderer"
], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>eu.reitmayer.ui5.ui5LibraryComponent.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author Franz Reitmayer
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias eu.reitmayer.ui5.ui5LibraryComponent.Example
	 */
	var Example = Control.extend("eu.reitmayer.ui5.ui5LibraryComponent.Example", /** @lends eu.reitmayer.ui5.ui5LibraryComponent.Example.prototype */ {
		metadata: {
			library: "eu.reitmayer.ui5.ui5LibraryComponent",
			properties: {
				/**
				 * The text to display.
				 */
				text: {
					type: "string",
					group: "Data",
					defaultValue: null
				},
				/**
				 * The color to use (default to "Default" color).
				 */
				color: {
					type: "eu.reitmayer.ui5.ui5LibraryComponent.ExampleColor",
					group: "Appearance",
					defaultValue: ExampleColor.Default
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer,
    onclick: function() {
      this.firePress();
    }
	});
	return Example;

});
