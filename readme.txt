dirtyFields Plugin
*******************

dirtyFields is a jQuery plugin that makes a user aware of which form elements have been updated on an HTML form and can reset the form values back to their previous state.


Demos / Documentation
*********************

Online documentation and demos can be found at http://www.thoughtdelimited.org/dirtyFields/index.cfm


Usage / License
***************

This plugin is covered by the MIT open-source license (see license.txt), which pretty much states that you use the plugin in any project and can modify it as needed so long as the license notice itself is associated with the plugin.  Basically, I want you to be able to use it anywhere you want and modify it in any way you want: just don't take credit for writing the original version of the plugin.

This download includes a packed version of the plugin, a human-readable version of the plugin which you're free to modify to meet your needs, a documentation HTML page and an HTML page with working examples of how to use the plugin which should work as long as the plugin file is in the same directory.


Change Log
**********
Version 2.0.0 (January 2013):
-----------------------------

	--Added manifest file so the plugin can be listed in the jQuery plugin registry.
	--Moved version number up to 2.0.0 to conform with semver standards used by jQuery plugin registry.


Version 1.2 (January 2013):
---------------------------

	--Added two new public functions:
		--getDirtyFieldNames() returns an array of all currently dirty fields
		--updateFormState() checks the clean/dirty state of all form fields in the specified container.
		
	--Made two changes to how the CSS class denoting a dirty/changed form is applied:
		--Added a new configuration option ("self") to apply the class to the actual form element.
		--Split the single option for applying a style to a changed text input and select drop-down into two separate options for granular control (if you used the textboxSelectContext
		option with a previous version of the plugin, you will need to update your code).
		
	--Added three new configuration options to control plugin behavior:
		--The denoteDirtyFields option controls whether or not the dirty CSS class is applied to the form elements that are dirty/changed.
		--The exclusionClass option specifies the name of the CSS class that, when applied to a form field, will exclude that field from being processed by the plugin.
		--The ignoreCaseClass option specifies the name of the CSS class that, when applied to a form field, will instruct the plugin to do a case-insensitive evaluation
		of the current and original states of the field.
		
All version 1.2 changes were implemented in response to code suggestions made a team of developers: Pawar Aishwarya, Gadkari Amit, and Naik Pankaj.
	--Pawar Aishwarya
	--Gadkari Amit
	--Naik Pankaj
	--Milan Pandey
	--Ved Nirmal
	--Injulkar Nilesh
	--Jain Navneet 
		
		

Version 1.1 (November 2011):
----------------------------

	--Updated the plugin to be compatible with update to attr() function introduced in  jQuery 1.6.
