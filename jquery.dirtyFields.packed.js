!function(a){function t(t,e,d){var i=e.data("dF").dirtyFieldsDataProperty,n=a.inArray(t,i);"dirty"==d&&-1==n?(i.push(t),e.data("dF").dirtyFieldsDataProperty=i):"clean"==d&&n>-1&&(i.splice(n,1),e.data("dF").dirtyFieldsDataProperty=i)}function e(t){t.data("dF").dirtyFieldsDataProperty.length>0?(t.addClass(t.data("dF").dirtyFormClass),a.isFunction(t.data("dF").formChangeCallback)&&t.data("dF").formChangeCallback.call(t,!0,t.data("dF").dirtyFieldsDataProperty)):(t.removeClass(t.data("dF").dirtyFormClass),a.isFunction(t.data("dF").formChangeCallback)&&t.data("dF").formChangeCallback.call(t,!1,t.data("dF").dirtyFieldsDataProperty))}function d(t,e,d,i){if(i.data("dF").denoteDirtyFields){var n=i.data("dF").fieldOverrides,r=e.attr("id"),s=!1;for(var l in n)r==l&&("changed"==d?a("#"+n[l]).addClass(i.data("dF").dirtyFieldClass):a("#"+n[l]).removeClass(i.data("dF").dirtyFieldClass),s=!0);if(0==s){var o=i.data("dF")[t],c=o.split("-");switch(c[0]){case"next":"changed"==d?e.next(c[1]).addClass(i.data("dF").dirtyFieldClass):e.next(c[1]).removeClass(i.data("dF").dirtyFieldClass);break;case"previous":"changed"==d?e.prev(c[1]).addClass(i.data("dF").dirtyFieldClass):e.prev(c[1]).removeClass(i.data("dF").dirtyFieldClass);break;case"closest":"changed"==d?e.closest(c[1]).addClass(i.data("dF").dirtyFieldClass):e.closest(c[1]).removeClass(i.data("dF").dirtyFieldClass);break;case"self":"changed"==d?e.addClass(i.data("dF").dirtyFieldClass):e.removeClass(i.data("dF").dirtyFieldClass);break;default:if("id"==c[0]||"name"==c[0])switch(c[1]){case"class":"changed"==d?a("."+e.attr(c[0]),i).addClass(i.data("dF").dirtyFieldClass):a("."+e.attr(c[0]),i).removeClass(i.data("dF").dirtyFieldClass);break;case"title":"changed"==d?a("*[title='"+e.attr(c[0])+"']",i).addClass(i.data("dF").dirtyFieldClass):a("*[title='"+e.attr(c[0])+"']",i).removeClass(i.data("dF").dirtyFieldClass);break;case"for":"changed"==d?a("label[for='"+e.attr(c[0])+"']",i).addClass(i.data("dF").dirtyFieldClass):a("label[for='"+e.attr(c[0])+"']",i).removeClass(i.data("dF").dirtyFieldClass)}}}}}function i(i,n){var r=i.attr("name"),s=!1;if(n.data("dF").trimText)var l=jQuery.trim(i.val());else var l=i.val();if(i.hasClass(n.data("dF").ignoreCaseClass))var l=l.toUpperCase(),o=i.data(n.data("dF").startingValueDataProperty).toUpperCase();else var o=i.data(n.data("dF").startingValueDataProperty);l!=o?(d("textboxContext",i,"changed",n),t(r,n,"dirty"),s=!0):(d("textboxContext",i,"unchanged",n),t(r,n,"clean")),a.isFunction(n.data("dF").fieldChangeCallback)&&n.data("dF").fieldChangeCallback.call(i,i.data(n.data("dF").startingValueDataProperty),s),n.data("dF").denoteDirtyForm&&e(n)}function n(i,n){var r=i.attr("name"),s=!1;if(0==n.data("dF").denoteDirtyOptions&&1!=i.attr("multiple")){if(i.hasClass(n.data("dF").ignoreCaseClass))var l=i.val().toUpperCase(),o=i.data(n.data("dF").startingValueDataProperty).toUpperCase();else var l=i.val(),o=i.data(n.data("dF").startingValueDataProperty);l!=o?(d("selectContext",i,"changed",n),t(r,n,"dirty"),s=!0):(d("selectContext",i,"unchanged",n),t(r,n,"clean"))}else{var c=!1;i.children("option").each(function(){var t=a(this),e=t.is(":selected");e!=t.data(n.data("dF").startingValueDataProperty)?(n.data("dF").denoteDirtyOptions&&t.addClass(n.data("dF").dirtyOptionClass),c=!0):n.data("dF").denoteDirtyOptions&&t.removeClass(n.data("dF").dirtyOptionClass)}),c?(d("selectContext",i,"changed",n),t(r,n,"dirty"),s=!0):(d("selectContext",i,"unchanged",n),t(r,n,"clean"))}a.isFunction(n.data("dF").fieldChangeCallback)&&n.data("dF").fieldChangeCallback.call(i,i.data(n.data("dF").startingValueDataProperty),s),n.data("dF").denoteDirtyForm&&e(n)}function r(i,n){var r=i.attr("name"),s=!1,l=i.attr("type");a(":"+l+"[name='"+r+"']",n).each(function(){var t=a(this),e=t.is(":checked");e!=t.data(n.data("dF").startingValueDataProperty)?(d("checkboxRadioContext",t,"changed",n),s=!0):d("checkboxRadioContext",t,"unchanged",n)}),s?t(r,n,"dirty"):t(r,n,"clean"),a.isFunction(n.data("dF").fieldChangeCallback)&&n.data("dF").fieldChangeCallback.call(i,i.data(n.data("dF").startingValueDataProperty),s),n.data("dF").denoteDirtyForm&&e(n)}a.fn.dirtyFields=function(t){var e=a.extend({},a.fn.dirtyFields.defaults,t);return this.each(function(){var t=a(this);t.data("dF",e),t.data("dF").dirtyFieldsDataProperty=new Array,a(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(){a.fn.dirtyFields.configureField(a(this),t,"text")}),a("select",t).not("."+t.data("dF").exclusionClass).each(function(){a.fn.dirtyFields.configureField(a(this),t,"select")}),a(":checkbox,:radio",t).not("."+t.data("dF").exclusionClass).each(function(){a.fn.dirtyFields.configureField(a(this),t,"checkRadio")}),a.fn.dirtyFields.setStartingValues(t)})},a.fn.dirtyFields.defaults={checkboxRadioContext:"next-span",denoteDirtyOptions:!1,denoteDirtyFields:!0,denoteDirtyForm:!1,dirtyFieldClass:"dirtyField",dirtyFieldsDataProperty:"dirtyFields",dirtyFormClass:"dirtyForm",dirtyOptionClass:"dirtyOption",exclusionClass:"dirtyExclude",inclusionTextFields:["input[type='text']","input[type='file']","input[type='password']","input[type='number']","input[type='tel']","input[type='email']","input[type='url']","input[type='color']","input[type='date']","input[type='datetime']","input[type='datetime-local']","input[type='month']","input[type='range']","input[type='search']","input[type='time']","input[type='week']","textarea"],fieldChangeCallback:"",fieldOverrides:{none:"none"},formChangeCallback:"",ignoreCaseClass:"dirtyIgnoreCase",preFieldChangeCallback:"",selectContext:"id-for",startingValueDataProperty:"startingValue",textboxContext:"id-for",trimText:!1},a.fn.dirtyFields.configureField=function(t,e,d,s){if(!t.hasClass(e.data("dF").exclusionClass))switch("undefined"!=typeof s&&(e.data("dF").fieldOverrides[t.attr("id")]=s),d){case"text":t.change(function(){return a.isFunction(e.data("dF").preFieldChangeCallback)&&0==e.data("dF").preFieldChangeCallback.call(t,t.data(e.data("dF").startingValueDataProperty))?!1:void i(t,e)});break;case"select":t.change(function(){return a.isFunction(e.data("dF").preFieldChangeCallback)&&0==e.data("dF").preFieldChangeCallback.call(t,t.data(e.data("dF").startingValueDataProperty))?!1:void n(t,e)});break;case"checkRadio":t.change(function(){return a.isFunction(e.data("dF").preFieldChangeCallback)&&0==e.data("dF").preFieldChangeCallback.call(t,t.data(e.data("dF").startingValueDataProperty))?!1:void r(t,e)})}},a.fn.dirtyFields.formSaved=function(t){a.fn.dirtyFields.setStartingValues(t),a.fn.dirtyFields.markContainerFieldsClean(t)},a.fn.dirtyFields.markContainerFieldsClean=function(t){var e=new Array;t.data("dF").dirtyFieldsDataProperty=e,a("."+t.data("dF").dirtyFieldClass,t).removeClass(t.data("dF").dirtyFieldClass),t.data("dF").denoteDirtyOptions&&a("."+t.data("dF").dirtyOptionClass,t).removeClass(t.data("dF").dirtyOptionClass),t.data("dF").denoteDirtyForm&&t.removeClass(t.data("dF").dirtyFormClass)},a.fn.dirtyFields.setStartingValues=function(t){a(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(){var e=a(this);"radio"==e.attr("type")||"checkbox"==e.attr("type")?a.fn.dirtyFields.setStartingCheckboxRadioValue(e,t):a.fn.dirtyFields.setStartingTextValue(e,t)}),a("select",t).not("."+t.data("dF").exclusionClass).each(function(){a.fn.dirtyFields.setStartingSelectValue(a(this),t)})},a.fn.dirtyFields.setStartingTextValue=function(t,e){return t.not("."+e.data("dF").exclusionClass).each(function(){var t=a(this);t.data(e.data("dF").startingValueDataProperty,t.val())})},a.fn.dirtyFields.setStartingCheckboxRadioValue=function(t,e){return t.not("."+e.data("dF").exclusionClass).each(function(){var t=a(this);t.is(":checked")?t.data(e.data("dF").startingValueDataProperty,!0):t.data(e.data("dF").startingValueDataProperty,!1)})},a.fn.dirtyFields.setStartingSelectValue=function(t,e){return t.not("."+e.data("dF").exclusionClass).each(function(){var t=a(this);if(0==e.data("dF").denoteDirtyOptions&&1!=t.attr("multiple"))t.data(e.data("dF").startingValueDataProperty,t.val());else{var d=new Array;t.children("option").each(function(){var t=a(this);t.is(":selected")?(t.data(e.data("dF").startingValueDataProperty,!0),d.push(t.val())):t.data(e.data("dF").startingValueDataProperty,!1)}),t.data(e.data("dF").startingValueDataProperty,d)}})},a.fn.dirtyFields.rollbackTextValue=function(t,e,d){return"undefined"==typeof d&&(d=!0),t.not("."+e.data("dF").exclusionClass).each(function(){var t=a(this);t.val(t.data(e.data("dF").startingValueDataProperty)),d&&i(t,e)})},a.fn.dirtyFields.updateTextState=function(t,e){return t.not("."+e.data("dF").exclusionClass).each(function(){i(a(this),e)})},a.fn.dirtyFields.rollbackCheckboxRadioState=function(t,e,d){return"undefined"==typeof d&&(d=!0),t.not("."+e.data("dF").exclusionClass).each(function(){var t=a(this);t.data(e.data("dF").startingValueDataProperty)?t.attr("checked",!0):t.attr("checked",!1),d&&r(t,e)})},a.fn.dirtyFields.updateCheckboxRadioState=function(t,e){return t.not("."+e.data("dF").exclusionClass).each(function(){r(a(this),e)})},a.fn.dirtyFields.rollbackSelectState=function(t,e,d){return"undefined"==typeof d&&(d=!0),t.not("."+e.data("dF").exclusionClass).each(function(){var t=a(this);0==e.data("dF").denoteDirtyOptions&&1!=t.attr("multiple")?t.val(t.data(e.data("dF").startingValueDataProperty)):t.children("option").each(function(){var t=a(this);t.data(e.data("dF").startingValueDataProperty)?t.attr("selected",!0):t.attr("selected",!1)}),d&&n(t,e)})},a.fn.dirtyFields.updateSelectState=function(t,e){return t.not("."+e.data("dF").exclusionClass).each(function(){n(a(this),e)})},a.fn.dirtyFields.rollbackForm=function(t){a(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(){$object=a(this),"radio"==$object.attr("type")||"checkbox"==$object.attr("type")?a.fn.dirtyFields.rollbackCheckboxRadioState($object,t,!1):a.fn.dirtyFields.rollbackTextValue($object,t,!1)}),a("select",t).not("."+t.data("dF").exclusionClass).each(function(){a.fn.dirtyFields.rollbackSelectState(a(this),t,!1)}),a.fn.dirtyFields.markContainerFieldsClean(t)},a.fn.dirtyFields.updateFormState=function(t){a(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(){$object=a(this),"radio"==$object.attr("type")||"checkbox"==$object.attr("type")?a.fn.dirtyFields.updateCheckboxRadioState($object,t):a.fn.dirtyFields.updateTextState($object,t)}),a("select",t).not("."+t.data("dF").exclusionClass).each(function(){$object=a(this),a.fn.dirtyFields.updateSelectState($object,t)})},a.fn.dirtyFields.getDirtyFieldNames=function(a){return a.data("dF").dirtyFieldsDataProperty}}(jQuery);