webpackJsonp(["app/js/settings/setup/index"],{0:function(e,t){e.exports=jQuery},"9c2d1572c2ca385dc301":function(e,t,n){"use strict";var s=n("b334fd7e4c5a19234db2"),a=function(e){return e&&e.__esModule?e:{default:e}}(s),i=$("#setup-form"),r=$(".js-submit-setup-form");if(i.length){var c=i.validate({email:{required:!0,es_email:!0,es_remote:{type:"POST"}},nickname:{required:!0,minlength:4,maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}}});r.click(function(){c.form()&&(r.button("loadding"),$.post(i.attr("action"),i.serialize(),function(){(0,a.default)("success",Translator.trans("settings.setup.set_success.hint")),window.location.href=r.data("goto")}).error(function(){r.button("reset"),(0,a.default)("danger",Translator.trans("settings.setup.set_failed.hint"))}))})}}},["9c2d1572c2ca385dc301"]);