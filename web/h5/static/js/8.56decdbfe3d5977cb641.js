webpackJsonp([8],{P8if:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("Dd8w"),n=t.n(s),a=t("jW8y"),r=t("gMS5"),o=t("NYxO"),c=t("Du/2"),u={components:{Directory:a.a,DetailHead:r.a},computed:n()({},Object(o.mapState)("course",{details:function(e){return e.details}}),Object(o.mapState)({isLoading:function(e){return e.isLoading}})),beforeRouteLeave:function(e,i,t){this.$store.commit("course/"+c.i,{sourceType:"img"}),t()}},d={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"course-detail try"},[this.isLoading?i("e-loading"):this._e(),this._v(" "),i("detail-head",{attrs:{courseSet:this.details.courseSet}}),this._v(" "),i("directory",{attrs:{hiddeTitle:!0,courseItems:this.details.courseItems}})],1)},staticRenderFns:[]},l=t("VU/8")(u,d,!1,null,null,null);i.default=l.exports},gMS5:function(e,i,t){"use strict";var s=t("//Fk"),n=t.n(s),a=t("Xxa5"),r=t.n(a),o=t("woOf"),c=t.n(o),u=(t("eqfM"),t("/QYm")),d=t("exGp"),l=t.n(d),p=t("Dd8w"),v=t.n(p),y=t("PirY"),h=t.n(y),m=t("NYxO"),f=t("gyMJ"),w={data:function(){return{isEncryptionPlus:!1,mediaOpts:{},isCoverOpen:!1,isPlaying:!1,player:null}},props:{courseSet:{type:Object,default:{}}},computed:v()({},Object(m.mapState)("course",{sourceType:function(e){return e.sourceType},selectedPlanId:function(e){return e.selectedPlanId},taskId:function(e){return e.taskId},details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},user:function(e){return e.user}}),{textContent:function(){return this.mediaOpts.text}}),watch:{taskId:{immediate:!0,handler:function(e,i){["video","audio"].includes(this.sourceType)&&(window.scrollTo(0,0),this.initPlayer())}}},methods:{viewAudioDoc:function(){this.isCoverOpen=!0},hideAudioDoc:function(){this.isCoverOpen=!1},handlePlayer:function(){return this.isPlaying?this.player&&this.player.pause():this.player&&this.player.play()},getParams:function(){return!this.joinStatus?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId}}},initPlayer:function(){var e=this;return l()(r.a.mark(function i(){var t,s,n;return r.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e.$refs.video&&(e.$refs.video.innerHTML=""),i.next=3,f.a.getMedia(e.getParams());case 3:if(t=i.sent,e.isEncryptionPlus=t.media.isEncryptionPlus,!t.media.isEncryptionPlus){i.next=8;break}return Object(u.a)("该浏览器不支持云视频播放，请下载App"),i.abrupt("return");case 8:s=t.media,n={id:"course-detail__head--video",user:e.user,playlist:s.url,autoplay:!0,disableFullscreen:"audio"===e.sourceType,isAudio:"audio"===e.sourceType},e.mediaOpts=c()({text:t.media.text},n),e.$store.commit("UPDATE_LOADING_STATUS",!0),e.loadPlayerSDK().then(function(i){e.$store.commit("UPDATE_LOADING_STATUS",!1);var t=new i(n);t.on("playing",function(){e.isPlaying=!0}),t.on("paused",function(){e.isPlaying=!1}),e.player=t});case 13:case"end":return i.stop()}},i,e)}))()},loadPlayerSDK:function(){if(!window.VideoPlayerSDK){var e="//service-cdn.qiqiuyun.net/js-sdk/video-player/sdk-v1.js?v="+Date.now()/1e3/60;return new n.a(function(i,t){h()(e,function(e){e&&t(e),i(window.VideoPlayerSDK)})})}return n.a.resolve(window.VideoPlayerSDK)}}},_={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"course-detail__head"},[e.textContent?t("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus&&!e.isCoverOpen,expression:"['audio'].includes(sourceType) && !isEncryptionPlus && !isCoverOpen"}],staticClass:"course-detail__nav--btn",on:{click:e.viewAudioDoc}},[e._v("\n    文稿\n  ")]):e._e(),e._v(" "),e.textContent?t("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['audio'].includes(sourceType) && !isEncryptionPlus"}],staticClass:"course-detail__nav--cover web-view",class:{opened:e.isCoverOpen}},[t("div",{staticClass:"media-text",domProps:{innerHTML:e._s(e.textContent)}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isCoverOpen,expression:"isCoverOpen"}],staticClass:"course-detail__nav--cover-control",on:{click:e.handlePlayer}},[t("i",{staticClass:"h5-icon",class:e.isPlaying?"h5-icon-zanting":"h5-icon-bofang"})]),e._v(" "),t("div",{staticClass:"course-detail__nav--cover-close-btn",on:{click:e.hideAudioDoc}},[t("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow"})])]):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"img"===e.sourceType||e.isEncryptionPlus,expression:"sourceType === 'img' || isEncryptionPlus"}],staticClass:"course-detail__head--img"},[t("img",{attrs:{src:e.courseSet.cover.large,alt:""}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['video', 'audio'].includes(sourceType) && !isEncryptionPlus"}],ref:"video",attrs:{id:"course-detail__head--video"}})])},staticRenderFns:[]},P=t("VU/8")(w,_,!1,null,null,null);i.a=P.exports}});