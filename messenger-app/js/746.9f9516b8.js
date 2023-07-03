"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[746],{7080:function(e,t,s){s.d(t,{JD:function(){return r},Sf:function(){return n},Zp:function(){return i},nn:function(){return l},xF:function(){return c}});var a=s(1294),o=s(3410);async function i(e){const t=(e.clipboardData||e.originalEvent.clipboardData).items[0];if("file"===t.kind){const e=t.getAsFile();return await n(e,1,800,800)}return null}function n(e,t,s,a,o){return new Promise((a=>{const i=new FileReader;i.readAsDataURL(e),i.onload=function(e){const i=e.target.result,n=document.createElement("img");n.src=i,n.onload=function(e){const i=s/e.target.width,r=document.createElement("canvas"),l=r.getContext("2d");r.width=s,r.height=o||e.target.height,r.height*=i,l.drawImage(n,0,0,r.width,r.height);const c=l.canvas.toDataURL("image/jpeg",t);a({dataUrl:c,additionalData:c.split(",")[0],coded:c.split(",")[1]})}}}))}async function r(e){try{if(e.includes("firebasestorage"))return null;const t=await((await fetch(e))?.blob()),s=new File([t],"File",{type:t.type});return s}catch(t){throw console.warn("Failed to fetch an image URL, this may be a CORS"),t}}async function l(e=""){if(!e)for(let s=0;s<6;s++)e+=Math.floor(47*Math.random()).toString();const t=await fetch(`https://api.multiavatar.com/${e}.png?apikey=2xi9ve1j34EPd8`);if(200!=t.status)throw new Error;return t.url}async function c(e,t,s){const a=`rooms/${s}/${t}`;return await d(e,a)}async function d(e,t){const s=await r(e),i=(0,a.iH)(o.tO,t);return s?(await(0,a.KV)(i,s),await(0,a.Jt)(i)):(console.warn("Unable to parse dataURL in URLtoFile method in sendImageToServer method of imageUpload "),null)}},3746:function(e,t,s){s.r(t),s.d(t,{default:function(){return je}});var a=s(3396),o=s(7139);const i={class:"flex flex-col max-h-[100vh] w-full dark:bg-gray-600 relative overflow-hidden"},n={key:0,class:"overflow-x-hidden"},r={key:1},l={key:2},c={class:"flex gap-5 items-center h-14 dark:bg-dark-200 bg-gray-700 shadow pr-2"},d=(0,a._)("i",{class:"fa-solid fa-angle-left text-xl"},null,-1),u=[d],g={class:"flex items-center justify-center min-h-[2.5rem] min-w-[2.5rem] max-h-[2.5rem] max-w-[2.5rem] bg-gray-300 rounded-full overflow-hidden"},h=["src"],m={key:0,class:"flex-1 overflow-hidden"},p={class:"font-semibold text-ellipsis overflow-hidden w-full dark:text-gray-300 text-gray-300 text-sm"},f={class:"font-semibold text-ellipsis overflow-hidden w-full dark:text-gray-500 text-gray-500 text-xs"},w={key:1,class:"flex items-center h-full pl-4"},x={class:"flex-1"},y={class:"absolute bottom-0 w-full min-h-[64px] bg-gray-100 dark:bg-gray-700"},b={key:0,class:"flex gap-2 w-full min-h-[64px] p-2"};function v(e,t,s,d,v,_){const k=(0,a.up)("base-modal"),D=(0,a.up)("base-loader"),I=(0,a.up)("messages-list"),C=(0,a.up)("base-chat-input");return(0,a.wg)(),(0,a.iD)("div",i,[e.contactInfo?((0,a.wg)(),(0,a.j4)(k,{key:0,modelValue:e.showProfile,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showProfile=t)},{header:(0,a.w5)((()=>[(0,a.Uk)(" Пользователь "+(0,o.zw)(e.contactInfo.name),1)])),default:(0,a.w5)((()=>[e.contactInfo.bio?((0,a.wg)(),(0,a.iD)("p",n,"О себе: "+(0,o.zw)(e.contactInfo.bio),1)):((0,a.wg)(),(0,a.iD)("p",r,"Решил не рассказывать о себе ничего!")),e.contactInfo.email?((0,a.wg)(),(0,a.iD)("p",l,"Почта: "+(0,o.zw)(e.contactInfo.email),1)):(0,a.kq)("",!0)])),_:1},8,["modelValue"])):(0,a.kq)("",!0),(0,a._)("header",c,[(0,a._)("div",{class:"flex items-center justify-center h-full w-16 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100 transition-colors",onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},u),e.loading?((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(D,{size:"small"})])):((0,a.wg)(),(0,a.iD)("div",{key:0,class:"flex gap-2 items-center h-full cursor-pointer",onClick:t[2]||(t[2]=(...t)=>e.openProfile&&e.openProfile(...t))},[(0,a._)("div",g,[e.contactInfo?.photoURL?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.contactInfo?.photoURL,alt:"",class:"h-[2.5rem] w-[2.5rem] object-cover"},null,8,h)):(0,a.kq)("",!0)]),e.contactInfo?.name?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("p",p,(0,o.zw)(e.contactInfo.name),1),(0,a._)("p",f,(0,o.zw)(e.contactInfo.uid),1)])):(0,a.kq)("",!0)]))]),(0,a._)("main",x,[e.messages?.length?((0,a.wg)(),(0,a.j4)(I,{key:0,messages:e.messages,uid:e.getUser.uid},null,8,["messages","uid"])):(0,a.kq)("",!0),(0,a._)("div",{class:(0,o.C_)(["top-0 left-0 absolute flex flex-col items-center sm:h-full h-[calc(100%)] justify-center gap-4 z-50 w-full bg-[rgba(0,0,0,.4)] transition-all pointer-events-none",e.loading?"":"opacity-0"])},[(0,a.Wm)(D,{size:"big"})],2)]),(0,a._)("footer",y,[e.contactInfo?((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(C,{modelValue:e.newMessageText,"onUpdate:modelValue":t[3]||(t[3]=t=>e.newMessageText=t),chatPartner:e.contactInfo.name,onEnter:e.print,onSendImage:e.sendImage,class:"self-center"},null,8,["modelValue","chatPartner","onEnter","onSendImage"])])):(0,a.kq)("",!0)])])}s(7658);var _=s(4806),k=s.n(_),D=s(65),I=s(3978);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function M(e,t){if("object"!==C(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var a=s.call(e,t||"default");if("object"!==C(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function U(e){var t=M(e,"string");return"symbol"===C(t)?t:String(t)}function E(e,t,s){return t=U(t),t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class S{constructor(e,t,s,a,o,i,n,r){E(this,"id",void 0),E(this,"created_at",void 0),E(this,"sended_at",void 0),E(this,"sended_by_uid",void 0),E(this,"sended_by_name",void 0),E(this,"sended_by_photo_url",void 0),E(this,"content",void 0),E(this,"read_status",void 0),this.id=e,this.created_at=t,this.sended_at=s,this.sended_by_uid=a,this.sended_by_name=o,this.sended_by_photo_url=i,this.content=n,this.read_status=r}}var P=s(9242);const j={class:"flex w-full max-w-full flex-col"},T={class:"flex flex-col gap-2"},$={class:"w-full flex justify-center items-center h-64"},B=["src"],R={class:"flex gap-2 items-center justify-center"},N={class:"flex gap-2 py-2"},V={class:"flex w-full gap-2 max-w-full"},q={class:"rounded-full min-w-[36px] min-h-[32px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group"},L={class:"sm:text-lg"},z={class:"flex w-full flex-col max-w-full"},O=["placeholder","value"],Z=(0,a._)("i",{class:"block fa-solid fa-paper-plane text-gray-700 group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-400 transition-colors"},null,-1),F=[Z];function H(e,t,s,i,n,r){const l=(0,a.up)("base-input"),c=(0,a.up)("base-button"),d=(0,a.up)("base-modal"),u=(0,a.up)("base-emoji"),g=(0,a.up)("base-tooltip"),h=(0,a.Q2)("tooltip");return(0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(d,{modelValue:e.showImagePopup,"onUpdate:modelValue":t[2]||(t[2]=t=>e.showImagePopup=t)},{header:(0,a.w5)((()=>[(0,a.Uk)("Прикрепить картинку")])),footer:(0,a.w5)((()=>[(0,a._)("div",N,[(0,a.Wm)(c,{onClick:t[1]||(t[1]=t=>e.showImagePopup=!1),theme:"passive"},{default:(0,a.w5)((()=>[(0,a.Uk)("Отмена")])),_:1}),(0,a.Wm)(c,{onClick:e.sendImage},{default:(0,a.w5)((()=>[(0,a.Uk)("Отправить")])),_:1},8,["onClick"])])])),default:(0,a.w5)((()=>[(0,a._)("div",T,[(0,a._)("div",$,[(0,a._)("img",{src:e.imageDataUrl.dataUrl,alt:"",ref:"image",class:"object-contain max-h-full h-full"},null,8,B)]),(0,a._)("div",R,[(0,a.Wm)(l,{label:"Добавить подпись...",autofocus:"",modelValue:e.imageMessage,"onUpdate:modelValue":t[0]||(t[0]=t=>e.imageMessage=t),class:"w-full"},null,8,["modelValue"])])])])),_:1},8,["modelValue"]),(0,a._)("div",V,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",q,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("span",L,[(0,a.Uk)((0,o.zw)(e.emoji),1)])),[[h,"Эмодзи"]]),(0,a.Wm)(g,{options:{trigger:"click"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{onPushEmoji:e.onEmojiPick},null,8,["onPushEmoji"])])),_:1})])),[[h,"Эмодзи"]]),(0,a._)("div",z,[(0,a._)("textarea",{placeholder:e.placeholder,class:"text-sm sm:text-md rounded-2xl bg-gray-200 dark:bg-gray-800 flex w-full p-2 dark:text-gray-300 text-gray-600 whitespace-wrap overflow-auto outline-none scrollbar-hide resize-none m-0 focus:bg-gray-200 dark:focus:bg-gray-900 transition-colors",ref:"textarea",value:e.modelValue,onFocusin:t[3]||(t[3]=t=>e.focused=!0),onFocusout:t[4]||(t[4]=t=>e.focused=!1),onInput:t[5]||(t[5]=(...t)=>e.onInput&&e.onInput(...t)),onKeydown:[t[6]||(t[6]=(0,P.D2)((0,P.iM)(((...t)=>e.pushEnter&&e.pushEnter(...t)),["shift"]),["enter"])),t[7]||(t[7]=(0,P.D2)((0,P.iM)(((...t)=>e.onEnter&&e.onEnter(...t)),["prevent","exact"]),["enter"]))],onPaste:t[8]||(t[8]=(...t)=>e.onPaste&&e.onPaste(...t))},null,40,O)]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{class:"rounded-full min-w-[36px] min-h-[32px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group",onClick:t[9]||(t[9]=(...t)=>e.onEnter&&e.onEnter(...t))},F)),[[h,"Отправить"]])])])}var W=s(6964),A=s(7080),G=(0,a.aZ)({name:"BaseChatInput",props:{modelValue:{type:String,required:!1,default:""},maxHeight:{type:Number,required:!1,default:180},minHeight:{type:Number,required:!1,default:32},chatPartner:{type:String,required:!1,default:""}},data:()=>({textarea:null,height:"",focused:!1,emoji:"",showImagePopup:!1,imageDataUrl:{},imageElement:null,imageMessage:""}),methods:{getRandomEmoji:W.l,onImagePaste:A.Zp,calculateStyles(){const e=e=>e>this.maxHeight?this.maxHeight:e;this.textarea.style.height=this.minHeight+"px"||0,this.textarea.style.height=e(this.textarea.scrollHeight)+"px"},onEmojiPick(e,t){const s=t?this[t]:this.modelValue;this.onInput({target:{value:s+e}},t),this.$refs.textarea.focus()},async sendImage(){this.$emit("sendImage",{url:this.imageDataUrl.dataUrl,desc:this.imageMessage}),this.showImagePopup=!1},async onPaste(e){if(this.imageDataUrl=await this.onImagePaste(e),this.imageDataUrl){const e=document.createElement("img");e.src=this.imageDataUrl.dataUrl,e.onload=t=>{this.textarea.blur(),this.showImagePopup=!0,e.onload=null}}},onInput(e,t){this.calculateStyles(),t?this[t]+=e.target.value:this.$emit("update:modelValue",e.target.value)},onEnter(e){this.$emit("enter"),this.$emit("update:modelValue",""),this.$nextTick((()=>{this.calculateStyles()}))},onFocus(){this.focused=!0},pushEnter(){this.modelValue&&(this.$emit("update:modelValue",this.modelValue+"\n"),this.$nextTick((()=>{this.textarea.scrollTop=this.textarea.scrollHeight,this.calculateStyles()})))}},mounted(){this.textarea=this.$refs.textarea,this.imageElement=this.$refs.image,this.calculateStyles(),this.emoji=this.getRandomEmoji()},watch:{placeholder(){this.emoji=this.getRandomEmoji()}},computed:{placeholder(){return this.chatPartner?`Написать ${this.chatPartner}`:"Введите сообщение..."}}}),J=s(89);const K=(0,J.Z)(G,[["render",H]]);var Q=K;const Y={class:"sm:h-[calc(100vh_-_6.5rem)] h-[calc(100vh_-_11.5rem)] relative"},X={class:"text-sm text-gray-600 dark:text-gray-400"},ee={class:"flex gap-2 pt-2"},te={class:"absolute top-2 left-1/2 -translate-x-1/2 z-50"},se={class:"flex flex-col gap-2 px-2 py-1 overflow-scroll scrollbar-hide h-full relative",ref:"messages_container"};function ae(e,t,s,i,n,r){const l=(0,a.up)("base-button"),c=(0,a.up)("base-modal"),d=(0,a.up)("base-date-badge"),u=(0,a.up)("base-message"),g=(0,a.Q2)("on-scroll");return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a.Wm)(c,{modelValue:e.showConfirmDialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.showConfirmDialog=t)},{header:(0,a.w5)((()=>[(0,a.Uk)(" Подтверждение операции")])),default:(0,a.w5)((()=>[(0,a._)("p",X,"Вы уверены, что хотите "+(0,o.zw)(e.operationName)+" ?",1),(0,a._)("div",ee,[(0,a.Wm)(l,{theme:"alert",onClick:e.deleteMessage},{default:(0,a.w5)((()=>[(0,a.Uk)("Удалить")])),_:1},8,["onClick"]),(0,a.Wm)(l,{theme:"neutral",onClick:t[0]||(t[0]=t=>e.showConfirmDialog=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("Отмена")])),_:1})])])),_:1},8,["modelValue"]),(0,a._)("div",te,[(0,a.Wm)(P.uT,{name:"fade"},{default:(0,a.w5)((()=>[this.showBadge?((0,a.wg)(),(0,a.j4)(d,{key:0,date:new Date},null,8,["date"])):(0,a.kq)("",!0)])),_:1})]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",se,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.messages,((t,s)=>((0,a.wg)(),(0,a.j4)(u,{parentElement:e.containter,isCounterMessage:e.isCounterMessage(t.sended_by_uid),message:t,key:e.getMessageKey(t.sended_at),placementOrder:e.getMessagePlacementOrder(s),onDelete:e.onDeleteMessageClick},null,8,["parentElement","isCounterMessage","message","placementOrder","onDelete"])))),128))])),[[g,{callback:e.showDateBadge}]])])}const oe={class:"flex flex-col w-36 gap-2"},ie=(0,a._)("p",{class:"text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors"},"Редактировать",-1),ne=(0,a._)("p",{class:"text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors"},"Переслать",-1),re=(0,a._)("p",{class:"text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors"},"Сохранить",-1),le={class:"flex gap-2 items-center h-full self-end overflow-hidden"},ce={class:"flex gap-2 overflow-hidden items-center"},de={key:1,class:"flex flex-col gap-2"},ue={class:"div flex justify-center p-1 flex-col gap-2"},ge=["src"],he={class:"flex items-center"},me={key:0,class:"fa-solid fa-check-double text-gray-700 text-xs"},pe={key:1,class:"fa-solid fa-check text-gray-700 text-xs"},fe={key:2,class:"fa-solid fa-hourglass-half text-gray-700 text-xs"};function we(e,t,s,i,n,r){const l=(0,a.up)("base-tooltip");return(0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(["w-full h-auto gap-2 items-center flex group",{"justify-end flex-row":!e.isCounterMessage}])},[(0,a.wy)((0,a._)("small",{class:"text-gray-500 dark:text-gray-300 text-xs will-dissapear group-hover:opacity-100 opacity-0 transition-all"},(0,o.zw)(e.filterDate(e.message.sended_at)),513),[[P.F8,!e.isCounterMessage]]),(0,a._)("div",{onClick:t[2]||(t[2]=t=>e.showTooltip=!0),class:(0,o.C_)(["cursor-pointer rounded-3xl max-w-[calc(100%_-_2rem)] min-h-[1.5rem] h-auto min-w-[4rem] shadow-md inline-flex transition-all px-3 py-2 overflow-hidden",e.getStyles])},[e.showTooltip?((0,a.wg)(),(0,a.j4)(l,{key:0,options:{allowHTML:!0,trigger:"click",followCursor:"initial"}},{default:(0,a.w5)((()=>[(0,a._)("div",oe,[e.isTextMessage(e.message.content)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",{key:0,class:"text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors",onClick:t[0]||(t[0]=(...t)=>e.openPicture&&e.openPicture(...t))},"Открыть картинку")),(0,a._)("p",{class:"text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors",onClick:t[1]||(t[1]=t=>e.onClick("onDelete",e.message))},"Удалить"),ie,ne,re])])),_:1})):(0,a.kq)("",!0),(0,a._)("div",le,[(0,a._)("div",ce,[e.isTextMessage(e.message.content)?((0,a.wg)(),(0,a.iD)("p",{key:0,class:(0,o.C_)(["text-sm text-ellipsis px-2 overflow-hidden",{"text-gray-300":e.isCounterMessage,"text-gray-700":!e.isCounterMessage}])},(0,o.zw)(e.message.content),3)):((0,a.wg)(),(0,a.iD)("div",de,[(0,a._)("div",ue,[(0,a._)("img",{src:e.message.content.uploadImageURL,alt:"",class:"object-cover rounded-2xl"},null,8,ge)]),(0,a._)("small",{class:(0,o.C_)(["text-sm text-ellipsis px-2 overflow-hidden",{"text-gray-300":e.isCounterMessage,"text-gray-700":!e.isCounterMessage}])},(0,o.zw)(e.message.content.description),3)])),(0,a.wy)((0,a._)("div",he,["READ"===e.messageStatus?((0,a.wg)(),(0,a.iD)("i",me)):"SENDED"===e.messageStatus?((0,a.wg)(),(0,a.iD)("i",pe)):"SENDING"===e.messageStatus?((0,a.wg)(),(0,a.iD)("i",fe)):(0,a.kq)("",!0)],512),[[P.F8,!e.isCounterMessage]])])])],2),(0,a.wy)((0,a._)("small",{class:"text-gray-500 dark:text-gray-300 text-xs will-dissapear group-hover:opacity-100 opacity-0 transition-all"},(0,o.zw)(e.filterDate(e.message.sended_at)),513),[[P.F8,e.isCounterMessage]])],2)}var xe=s(1727),ye=(0,a.aZ)({data:()=>({showTooltip:!0}),name:"BaseMessage",props:{message:{type:Object,required:!0},isCounterMessage:{type:Boolean,required:!0,default:!0},placementOrder:{type:String,required:!1,default:"middle"},parentElement:{type:HTMLElement,required:!1}},methods:{openPicture(){const e=document.createElement("a");e.href=this.message.content.uploadImageURL,e.target="_blank",e.click()},filterDate(e){return(0,xe.n)(e)},onClick(e,t){this[e]?.(t),this.showTooltip=!1},onDelete(e){this.$emit("delete",e.id)},isTextMessage(e){return!Object.keys(e).includes("uploadImageURL")}},computed:{getBorderStyles(){return"middle"===this.placementOrder?"":this.isCounterMessage?"first"===this.placementOrder?"message-first-counter":"message-last-counter":this.isCounterMessage?"":"first"===this.placementOrder?"message-first":"message-last"},getStyles(){const e=this.isCounterMessage;return this.getBorderStyles+" "+(e?"bg-gray-900":"bg-blue-300")},messageStatus(){return this.message.read_status===I.Z.READ?"READ":this.message.read_status===I.Z.SENDED?"SENDED":this.message.read_status===I.Z.SENDING?"SENDING":""}}});const be=(0,J.Z)(ye,[["render",we]]);var ve=be;const _e={class:"bg-[rgba(0,0,0,.8)] rounded-full text-gray-300 font-semibold py-1 px-2 transtion-colors max-h-8 pointer-events-none"};function ke(e,t,s,i,n,r){return(0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("small",null,(0,o.zw)(e.filteredDate),1)])}var De=(0,a.aZ)({name:"BaseDateBadge",props:{date:{type:Object,required:!0,default:new Date}},computed:{filteredDate(){const e=Intl.DateTimeFormat("Ru-ru",{day:"numeric",weekday:"long",month:"long"}).format(this.date)+"";return e[0].toUpperCase()+e.slice(1,e.length)}}});const Ie=(0,J.Z)(De,[["render",ke]]);var Ce=Ie,Me=(0,a.aZ)({name:"MessagesList",components:{BaseMessage:ve,BaseDateBadge:Ce},mounted(){this.scrollToBottom()},data:()=>({containter:null,loading:!1,showBadgeTimeout:null,showBadge:!1,showConfirmDialog:!1,operationName:"",chosenMessageId:""}),props:{uid:{type:String,required:!0,default:""},messages:{type:Array,required:!0,default:()=>[]}},methods:{showDateBadge(){clearTimeout(this.showBadgeTimeout),this.showBadge=!0,this.showBadgeTimeout=setTimeout((()=>{this.showBadge=!1,clearTimeout(this.showBadgeTimeout)}),2e3)},scrollToBottom(e){function t(){"smooth"===e?this.container.scrollTo({top:this.container.scrollHeight,behavior:"smooth"}):this.container.scrollTop=this.container.scrollHeight}this.container=this.$refs.messages_container,this.$nextTick(t)},getMessageKey(e){return+new Date(JSON.parse(e))},getMessagePlacementOrder(e){return e===this.messages.length-1?"last":0===e?"first":"middle"},isCounterMessage(e){return e!=this.uid},async deleteMessage(){this.showConfirmDialog=!0,this.$store.dispatch("room/deleteMessage",{id:this.chosenMessageId,counterId:this.$route.params.chatId}),this.$toast.show("Сообщение было удалено"),this.showConfirmDialog=!1},async onDeleteMessageClick(e){this.showConfirmDialog=!0,this.operationName="удалить сообщение",this.chosenMessageId=e}},watch:{messages:{handler(e){e[e.length-1]?.sended_by_uid===this.uid&&this.scrollToBottom("smooth")},deep:!0},"$route.params.chatId"(){this.showDateBadge()}}});const Ue=(0,J.Z)(Me,[["render",ae]]);var Ee=Ue,Se=(0,a.aZ)({name:"ChatLayout",components:{BaseChatInput:Q,MessagesList:Ee},data:()=>({contactInfo:null,messagesContainer:null,messages:[],loading:!1,showProfile:!1,newMessageText:""}),methods:{close(){this.$router.push({name:"main"})},openProfile(){this.showProfile=!0},print(){this.messagesContainer=this.$refs.messages_container;const e=Math.random()+"",t=new S(e,new Date,JSON.stringify(new Date),this.getUser.uid,this.getUser.displayName,this.getUser.photoURL,this.newMessageText,I.Z.SENDING);this.sendMessage(t)},async sendImage({url:e,desc:t}){const s=Math.random()+"",a=await(0,A.xF)(e,s,this.chatId);if(a){const e={uploadImageURL:a,description:t},o=new S(s,new Date,JSON.stringify(new Date),this.getUser.uid,this.getUser.displayName,this.getUser.photoURL,e,I.Z.SENDING);this.sendMessage(o)}else console.warn("Unable to send image message")},async sendMessage(e){try{this.messages.push(e),await this.$store.dispatch("room/sendMessageToUser",{message:e,counterId:this.contactInfo.uid})}catch(t){console.warn(t)}},async getContactInfo(){const e=this.$route.params.chatId;let t=this.getContacts.find((t=>t.uid===e));return t||(t=await this.$store.dispatch("contacts/getUserInfoByUid",this.$route.params.chatId)),t}},watch:{"$route.params.chatId":{async handler(e){this.messages=[],e&&(this.loading=!0,this.contactInfo=await this.getContactInfo(),this.messages=k().cloneDeep(this.getMessages),this.loading=!1,this.contactInfo||"chat"!==this.$route.name||this.$router.push({name:"main"}).then((()=>{this.$toast.error("Пользователь не найден")})))},immediate:!0},getMessages:{handler(e){this.messages=k().cloneDeep(e)},deep:!0}},computed:{...(0,D.Se)("auth",["getUser"]),...(0,D.Se)("contacts",["getContacts"]),...(0,D.Se)("room",["getRoomInfo"]),getRoomHash(){return this.getContacts?.find((e=>e.uid===this.$route.params.chatId))?.room_hash},getMessages(){return this.getRoomInfo(this.getRoomHash)?.messages||[]},chatId(){return this.$route.params.chatId}}});const Pe=(0,J.Z)(Se,[["render",v]]);var je=Pe}}]);
//# sourceMappingURL=746.9f9516b8.js.map