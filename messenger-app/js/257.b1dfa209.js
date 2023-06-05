"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[257],{8257:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var l=a(3396),o=a(7139);const n={class:"flex flex-col h-full w-full bg-gray-100 dark:bg-gray-600"},r={key:0,class:"overflow-x-hidden"},s={key:1},i={key:2},c={class:"flex gap-5 items-center h-16 dark:bg-dark-200 bg-gray-700 shadow px-2"},u=(0,l._)("i",{class:"fa-solid fa-angle-left text-3xl"},null,-1),h=[u],d={class:"flex items-center justify-center min-h-[3rem] min-w-[3rem] max-h-[3rem] max-w-[3rem] bg-gray-300 rounded-full overflow-hidden"},f=["src"],m={key:0,class:"flex-1 overflow-hidden"},p={class:"font-semibold text-ellipsis overflow-hidden w-full dark:text-gray-300 text-gray-300"},g={key:1,class:"flex items-center h-full pl-4"},x={class:"flex-1"},w={key:0,class:"w-full h-full"};function y(e,t,a,u,y,k){const v=(0,l.up)("base-modal"),I=(0,l.up)("base-loader"),b=(0,l.up)("base-chat-input");return(0,l.wg)(),(0,l.iD)("div",n,[e.contactInfo?((0,l.wg)(),(0,l.j4)(v,{key:0,modelValue:e.showProfile,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showProfile=t)},{header:(0,l.w5)((()=>[(0,l.Uk)(" Пользователь "+(0,o.zw)(e.contactInfo.name),1)])),default:(0,l.w5)((()=>[e.contactInfo.bio?((0,l.wg)(),(0,l.iD)("p",r,"О себе: "+(0,o.zw)(e.contactInfo.bio),1)):((0,l.wg)(),(0,l.iD)("p",s,"Решил не рассказывать о себе ничего!")),e.contactInfo.email?((0,l.wg)(),(0,l.iD)("p",i,"Почта: "+(0,o.zw)(e.contactInfo.email),1)):(0,l.kq)("",!0)])),_:1},8,["modelValue"])):(0,l.kq)("",!0),(0,l._)("header",c,[(0,l._)("div",{class:"flex items-center h-full px-3 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100 transition-colors",onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},h),e.loading?((0,l.wg)(),(0,l.iD)("div",g,[(0,l.Wm)(I,{size:"small"})])):((0,l.wg)(),(0,l.iD)("div",{key:0,class:"flex gap-2 items-center h-full cursor-pointer",onClick:t[2]||(t[2]=(...t)=>e.openProfile&&e.openProfile(...t))},[(0,l._)("div",d,[e.contactInfo.photoURL?((0,l.wg)(),(0,l.iD)("img",{key:0,src:e.contactInfo.photoURL,alt:"",class:"h-full w-full object-cover"},null,8,f)):(0,l.kq)("",!0)]),e.contactInfo.name?((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("p",p,(0,o.zw)(e.contactInfo.name),1)])):(0,l.kq)("",!0)]))]),(0,l._)("main",x,(0,o.zw)(e.newMessageText),1),(0,l._)("footer",null,[e.contactInfo?((0,l.wg)(),(0,l.iD)("div",w,[(0,l.Wm)(b,{modelValue:e.newMessageText,"onUpdate:modelValue":t[3]||(t[3]=t=>e.newMessageText=t),chatPartner:e.contactInfo.name,onEnter:e.print},null,8,["modelValue","chatPartner","onEnter"])])):(0,l.kq)("",!0)])])}a(7658);var k=a(9242);const v={class:"flex flex-col max-w-full"},I=(0,l._)("p",null,"Shift + enter - Перенос строки",-1),b=[I],_=["placeholder","value"];function $(e,t,a,n,r,s){return(0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",{class:(0,o.C_)(["sm:flex hidden px-2 gap-10 justify-end text-xs text-gray-500 dark:text-gray-500 transition-all",{"opacity-0":e.focused}])},b,2),(0,l._)("textarea",{placeholder:e.placeholder,class:"flex sm:max-w-[calc(100vw_-_22.75rem)] m-0 p-2 dark:text-gray-300 text-gray-600 whitespace-wrap overflow-auto bg-transparent outline-none scrollbar-hide resize-none m-0 focus:bg-gray-200 dark:focus:bg-gray-700 transition-colors",ref:"textarea",value:e.modelValue,onFocusin:t[0]||(t[0]=t=>e.focused=!0),onFocusout:t[1]||(t[1]=t=>e.focused=!1),onInput:t[2]||(t[2]=(...t)=>e.onInput&&e.onInput(...t)),onKeydown:[t[3]||(t[3]=(0,k.D2)((0,k.iM)(((...t)=>e.pushEnter&&e.pushEnter(...t)),["shift"]),["enter"])),t[4]||(t[4]=(0,k.D2)((0,k.iM)(((...t)=>e.onEnter&&e.onEnter(...t)),["prevent","exact"]),["enter"]))]},null,40,_)])}var V=(0,l.aZ)({name:"BaseChatInput",props:{modelValue:{type:String,required:!1,default:""},maxHeight:{type:Number,required:!1,default:180},minHeight:{type:Number,required:!1,default:64},chatPartner:{type:String,required:!1,default:""}},data:()=>({textarea:null,height:"",focused:!1}),methods:{calculateStyles(){const e=e=>e>this.maxHeight?this.maxHeight:e;this.textarea.style.height=this.minHeight+"px"||0,this.textarea.style.height=e(this.textarea.scrollHeight)+"px"},onInput(e){this.calculateStyles(),this.$emit("update:modelValue",e.target.value)},onEnter(e){this.$emit("enter",e.target.value),this.$emit("update:modelValue","")},onFocus(){this.focused=!0},pushEnter(){this.modelValue&&(this.$emit("update:modelValue",this.modelValue+"\n"),this.$nextTick((()=>{this.textarea.scrollTop=this.textarea.scrollHeight})))}},mounted(){this.textarea=this.$refs.textarea,this.calculateStyles()},computed:{placeholder(){return this.chatPartner?`Написать ${this.chatPartner}`:"Введите сообщение..."}}}),D=a(89);const P=(0,D.Z)(V,[["render",$]]);var q=P,C=(0,l.aZ)({name:"ChatLayout",components:{BaseChatInput:q},data:()=>({contactInfo:null,loading:!0,showProfile:!1,newMessageText:""}),methods:{close(){this.$router.push({name:"main"})},openProfile(){this.showProfile=!0},print(e){this.$toast.show(e)}},watch:{"$route.params.chatId":{async handler(){this.loading=!0,this.contactInfo=await this.$store.dispatch("contacts/getUserInfoByUid",this.$route.params.chatId),this.contactInfo||"chat"!==this.$route.name||this.$toast.error("Пользователь не найден"),this.loading=!1},immediate:!0}}});const E=(0,D.Z)(C,[["render",y]]);var z=E}}]);
//# sourceMappingURL=257.b1dfa209.js.map