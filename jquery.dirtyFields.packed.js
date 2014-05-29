(function(e){function t(t,n,r){var i=n.data("dF").dirtyFieldsDataProperty;var s=e.inArray(t,i);if(r=="dirty"&&s==-1){i.push(t);n.data("dF").dirtyFieldsDataProperty=i}else if(r=="clean"&&s>-1){i.splice(s,1);n.data("dF").dirtyFieldsDataProperty=i}}function n(t){if(t.data("dF").dirtyFieldsDataProperty.length>0){t.addClass(t.data("dF").dirtyFormClass);if(e.isFunction(t.data("dF").formChangeCallback)){t.data("dF").formChangeCallback.call(t,true,t.data("dF").dirtyFieldsDataProperty)}}else{t.removeClass(t.data("dF").dirtyFormClass);if(e.isFunction(t.data("dF").formChangeCallback)){t.data("dF").formChangeCallback.call(t,false,t.data("dF").dirtyFieldsDataProperty)}}}function r(t,n,r,i){if(i.data("dF").denoteDirtyFields){var s=i.data("dF").fieldOverrides;var o=n.attr("id");var u=false;for(var a in s){if(o==a){if(r=="changed"){e("#"+s[a]).addClass(i.data("dF").dirtyFieldClass)}else{e("#"+s[a]).removeClass(i.data("dF").dirtyFieldClass)}u=true}}if(u==false){var f=i.data("dF")[t];var l=f.split("-");switch(l[0]){case"next":if(r=="changed"){n.next(l[1]).addClass(i.data("dF").dirtyFieldClass)}else{n.next(l[1]).removeClass(i.data("dF").dirtyFieldClass)}break;case"previous":if(r=="changed"){n.prev(l[1]).addClass(i.data("dF").dirtyFieldClass)}else{n.prev(l[1]).removeClass(i.data("dF").dirtyFieldClass)}break;case"closest":if(r=="changed"){n.closest(l[1]).addClass(i.data("dF").dirtyFieldClass)}else{n.closest(l[1]).removeClass(i.data("dF").dirtyFieldClass)}break;case"self":if(r=="changed"){n.addClass(i.data("dF").dirtyFieldClass)}else{n.removeClass(i.data("dF").dirtyFieldClass)}break;default:if(l[0]=="id"||l[0]=="name"){switch(l[1]){case"class":if(r=="changed"){e("."+n.attr(l[0]),i).addClass(i.data("dF").dirtyFieldClass)}else{e("."+n.attr(l[0]),i).removeClass(i.data("dF").dirtyFieldClass)}break;case"title":if(r=="changed"){e("*[title='"+n.attr(l[0])+"']",i).addClass(i.data("dF").dirtyFieldClass)}else{e("*[title='"+n.attr(l[0])+"']",i).removeClass(i.data("dF").dirtyFieldClass)}break;case"for":if(r=="changed"){e("label[for='"+n.attr(l[0])+"']",i).addClass(i.data("dF").dirtyFieldClass)}else{e("label[for='"+n.attr(l[0])+"']",i).removeClass(i.data("dF").dirtyFieldClass)}break}}break}}}}function i(i,s){var o=i.attr("name");var u=false;if(s.data("dF").trimText){var a=jQuery.trim(i.val())}else{var a=i.val()}if(i.hasClass(s.data("dF").ignoreCaseClass)){var a=a.toUpperCase();var f=i.data(s.data("dF").startingValueDataProperty).toUpperCase()}else{var f=i.data(s.data("dF").startingValueDataProperty)}if(a!=f){r("textboxContext",i,"changed",s);t(o,s,"dirty");u=true}else{r("textboxContext",i,"unchanged",s);t(o,s,"clean")}if(e.isFunction(s.data("dF").fieldChangeCallback)){s.data("dF").fieldChangeCallback.call(i,i.data(s.data("dF").startingValueDataProperty),u)}if(s.data("dF").denoteDirtyForm){n(s)}}function s(i,s){var o=i.attr("name");var u=false;if(s.data("dF").denoteDirtyOptions==false&&i.attr("multiple")!=true){if(i.hasClass(s.data("dF").ignoreCaseClass)){var a=i.val().toUpperCase();var f=i.data(s.data("dF").startingValueDataProperty).toUpperCase()}else{var a=i.val();var f=i.data(s.data("dF").startingValueDataProperty)}if(a!=f){r("selectContext",i,"changed",s);t(o,s,"dirty");u=true}else{r("selectContext",i,"unchanged",s);t(o,s,"clean")}}else{var l=false;i.children("option").each(function(t){var n=e(this);var r=n.is(":selected");if(r!=n.data(s.data("dF").startingValueDataProperty)){if(s.data("dF").denoteDirtyOptions){n.addClass(s.data("dF").dirtyOptionClass)}l=true}else{if(s.data("dF").denoteDirtyOptions){n.removeClass(s.data("dF").dirtyOptionClass)}}});if(l){r("selectContext",i,"changed",s);t(o,s,"dirty");u=true}else{r("selectContext",i,"unchanged",s);t(o,s,"clean")}}if(e.isFunction(s.data("dF").fieldChangeCallback)){s.data("dF").fieldChangeCallback.call(i,i.data(s.data("dF").startingValueDataProperty),u)}if(s.data("dF").denoteDirtyForm){n(s)}}function o(i,s){var o=i.attr("name");var u=false;var a=i.attr("type");e(":"+a+"[name='"+o+"']",s).each(function(t){var n=e(this);var i=n.is(":checked");if(i!=n.data(s.data("dF").startingValueDataProperty)){r("checkboxRadioContext",n,"changed",s);u=true}else{r("checkboxRadioContext",n,"unchanged",s)}});if(u){t(o,s,"dirty")}else{t(o,s,"clean")}if(e.isFunction(s.data("dF").fieldChangeCallback)){s.data("dF").fieldChangeCallback.call(i,i.data(s.data("dF").startingValueDataProperty),u)}if(s.data("dF").denoteDirtyForm){n(s)}}e.fn.dirtyFields=function(t){var n=e.extend({},e.fn.dirtyFields.defaults,t);return this.each(function(){var t=e(this);t.data("dF",n);t.data("dF").dirtyFieldsDataProperty=new Array;e(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(n){e.fn.dirtyFields.configureField(e(this),t,"text")});e("select",t).not("."+t.data("dF").exclusionClass).each(function(n){e.fn.dirtyFields.configureField(e(this),t,"select")});e(":checkbox,:radio",t).not("."+t.data("dF").exclusionClass).each(function(n){e.fn.dirtyFields.configureField(e(this),t,"checkRadio")});e.fn.dirtyFields.setStartingValues(t)})};e.fn.dirtyFields.defaults={checkboxRadioContext:"next-span",denoteDirtyOptions:false,denoteDirtyFields:true,denoteDirtyForm:false,dirtyFieldClass:"dirtyField",dirtyFieldsDataProperty:"dirtyFields",dirtyFormClass:"dirtyForm",dirtyOptionClass:"dirtyOption",exclusionClass:"dirtyExclude",inclusionTextFields:["input:not([type='button'], [type='submit'], [type='reset'])","textarea"],fieldChangeCallback:"",fieldOverrides:{none:"none"},formChangeCallback:"",ignoreCaseClass:"dirtyIgnoreCase",preFieldChangeCallback:"",selectContext:"id-for",startingValueDataProperty:"startingValue",textboxContext:"id-for",trimText:false};e.fn.dirtyFields.configureField=function(t,n,r,u){if(!t.hasClass(n.data("dF").exclusionClass)){if(typeof u!="undefined"){n.data("dF").fieldOverrides[t.attr("id")]=u}switch(r){case"text":t.change(function(){if(e.isFunction(n.data("dF").preFieldChangeCallback)){if(n.data("dF").preFieldChangeCallback.call(t,t.data(n.data("dF").startingValueDataProperty))==false){return false}}i(t,n)});break;case"select":t.change(function(){if(e.isFunction(n.data("dF").preFieldChangeCallback)){if(n.data("dF").preFieldChangeCallback.call(t,t.data(n.data("dF").startingValueDataProperty))==false){return false}}s(t,n)});break;case"checkRadio":t.change(function(){if(e.isFunction(n.data("dF").preFieldChangeCallback)){if(n.data("dF").preFieldChangeCallback.call(t,t.data(n.data("dF").startingValueDataProperty))==false){return false}}o(t,n)});break}}};e.fn.dirtyFields.formSaved=function(t){e.fn.dirtyFields.setStartingValues(t);e.fn.dirtyFields.markContainerFieldsClean(t)};e.fn.dirtyFields.markContainerFieldsClean=function(t){var n=new Array;t.data("dF").dirtyFieldsDataProperty=n;e("."+t.data("dF").dirtyFieldClass,t).removeClass(t.data("dF").dirtyFieldClass);if(t.data("dF").denoteDirtyOptions){e("."+t.data("dF").dirtyOptionClass,t).removeClass(t.data("dF").dirtyOptionClass)}if(t.data("dF").denoteDirtyForm){t.removeClass(t.data("dF").dirtyFormClass)}};e.fn.dirtyFields.setStartingValues=function(t,n){e(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(n){var r=e(this);if(r.attr("type")=="radio"||r.attr("type")=="checkbox"){e.fn.dirtyFields.setStartingCheckboxRadioValue(r,t)}else{e.fn.dirtyFields.setStartingTextValue(r,t)}});e("select",t).not("."+t.data("dF").exclusionClass).each(function(n){e.fn.dirtyFields.setStartingSelectValue(e(this),t)})};e.fn.dirtyFields.setStartingTextValue=function(t,n){return t.not("."+n.data("dF").exclusionClass).each(function(){var t=e(this);t.data(n.data("dF").startingValueDataProperty,t.val())})};e.fn.dirtyFields.setStartingCheckboxRadioValue=function(t,n){return t.not("."+n.data("dF").exclusionClass).each(function(){var t=e(this);var r;if(t.is(":checked")){t.data(n.data("dF").startingValueDataProperty,true)}else{t.data(n.data("dF").startingValueDataProperty,false)}})};e.fn.dirtyFields.setStartingSelectValue=function(t,n){return t.not("."+n.data("dF").exclusionClass).each(function(){var t=e(this);if(n.data("dF").denoteDirtyOptions==false&&t.attr("multiple")!=true){t.data(n.data("dF").startingValueDataProperty,t.val())}else{var r=new Array;t.children("option").each(function(t){var i=e(this);if(i.is(":selected")){i.data(n.data("dF").startingValueDataProperty,true);r.push(i.val())}else{i.data(n.data("dF").startingValueDataProperty,false)}});t.data(n.data("dF").startingValueDataProperty,r)}})};e.fn.dirtyFields.rollbackTextValue=function(t,n,r){if(typeof r=="undefined"){r=true}return t.not("."+n.data("dF").exclusionClass).each(function(){var t=e(this);t.val(t.data(n.data("dF").startingValueDataProperty));if(r){i(t,n)}})};e.fn.dirtyFields.updateTextState=function(t,n){return t.not("."+n.data("dF").exclusionClass).each(function(){i(e(this),n)})};e.fn.dirtyFields.rollbackCheckboxRadioState=function(t,n,r){if(typeof r=="undefined"){r=true}return t.not("."+n.data("dF").exclusionClass).each(function(){var t=e(this);if(t.data(n.data("dF").startingValueDataProperty)){t.attr("checked",true)}else{t.attr("checked",false)}if(r){o(t,n)}})};e.fn.dirtyFields.updateCheckboxRadioState=function(t,n){return t.not("."+n.data("dF").exclusionClass).each(function(){o(e(this),n)})};e.fn.dirtyFields.rollbackSelectState=function(t,n,r){if(typeof r=="undefined"){r=true}return t.not("."+n.data("dF").exclusionClass).each(function(){var t=e(this);if(n.data("dF").denoteDirtyOptions==false&&t.attr("multiple")!=true){t.val(t.data(n.data("dF").startingValueDataProperty))}else{t.children("option").each(function(t){var r=e(this);if(r.data(n.data("dF").startingValueDataProperty)){r.attr("selected",true)}else{r.attr("selected",false)}})}if(r){s(t,n)}})};e.fn.dirtyFields.updateSelectState=function(t,n){return t.not("."+n.data("dF").exclusionClass).each(function(){s(e(this),n)})};e.fn.dirtyFields.rollbackForm=function(t){e(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(n){$object=e(this);if($object.attr("type")=="radio"||$object.attr("type")=="checkbox"){e.fn.dirtyFields.rollbackCheckboxRadioState($object,t,false)}else{e.fn.dirtyFields.rollbackTextValue($object,t,false)}});e("select",t).not("."+t.data("dF").exclusionClass).each(function(n){e.fn.dirtyFields.rollbackSelectState(e(this),t,false)});e.fn.dirtyFields.markContainerFieldsClean(t)};e.fn.dirtyFields.updateFormState=function(t){e(t.data("dF").inclusionTextFields.join(","),t).not("."+t.data("dF").exclusionClass).each(function(n){$object=e(this);if($object.attr("type")=="radio"||$object.attr("type")=="checkbox"){e.fn.dirtyFields.updateCheckboxRadioState($object,t)}else{e.fn.dirtyFields.updateTextState($object,t)}});e("select",t).not("."+t.data("dF").exclusionClass).each(function(n){$object=e(this);e.fn.dirtyFields.updateSelectState($object,t)})};e.fn.dirtyFields.getDirtyFieldNames=function(e){return e.data("dF").dirtyFieldsDataProperty};})(jQuery)