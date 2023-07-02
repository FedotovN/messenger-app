"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[272],{4272:function(e,a,s){s.r(a),s.d(a,{default:function(){return b}});var t=s(3396),l=s(9242),r=s(7139);const i={class:"bg-white dark:bg-dark-200 sm:shadow sm:rounded items-center flex flex-col w-full h-full sm:h-auto px-4 overflow-hidden"},o={class:"flex justify-center items-center py-2 gap-2 w-full flex-col border-b-2 border-gray-300 dark:border-gray-500"},n={class:"font-semibold tracking-wide text-lg text-gray-700 dark:text-gray-300"},m=(0,t._)("small",{class:"text-lg"},"🔨",-1),u={class:"flex flex-col gap-2 w-full my-2"},d={class:"flex flex-col gap-2 w-full my-2"},f={key:0,class:"flex justify-between items-center w-full transition-all pb-2 text-gray-700 dark:text-gray-300"};function c(e,a,s,c,g,p){const w=(0,t.up)("base-input"),h=(0,t.up)("base-button"),k=(0,t.up)("base-link"),b=(0,t.up)("base-loader");return(0,t.wg)(),(0,t.iD)("form",{onSubmit:a[1]||(a[1]=(0,l.iM)(((...e)=>p.onSubmit&&p.onSubmit(...e)),["prevent"])),class:"flex justify-center items0-center w-full sm:h-auto h-full lg:max-w-[620px]"},[(0,t._)("div",i,[(0,t._)("header",o,[(0,t._)("p",n,[(0,t.Uk)((0,r.zw)(e.$t("titles.passwordRecovery"))+" ",1),m])]),(0,t._)("main",u,[(0,t.Wm)(w,{label:e.$t("form.placeholders.email"),modelValue:g.email,"onUpdate:modelValue":a[0]||(a[0]=e=>g.email=e),errorMessage:g.v$.email.$errors.length?e.$t("form.errors.email.required"):""},null,8,["label","modelValue","errorMessage"])]),(0,t._)("footer",d,[(0,t.Wm)(h,{onClick:p.onSubmit},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.$t("phrases.sendLink")),1)])),_:1},8,["onClick"]),(0,t.Wm)(k,{to:{name:"login"},class:"w-full text-end py-2 text-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(e.$t("links.internal.back")),1)])),_:1})]),(0,t.Wm)(l.uT,{name:"appear"},{default:(0,t.w5)((()=>[g.message||g.loading?((0,t.wg)(),(0,t.iD)("p",f,[(0,t.Uk)((0,r.zw)(e.$t(g.message))+" ",1),g.loading?((0,t.wg)(),(0,t.j4)(b,{key:0})):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])),_:1})])],32)}var g=s(4219),p=s(5420),w={name:"PasswordReset",data(){return{v$:(0,g.Xw)(),email:"",message:"",loading:!1}},validations(){return{email:{email:p.Do,required:p.C1}}},methods:{async onSubmit(){if(await this.v$.$validate())try{this.loading=!0,this.message="form.operations.titles.wait",await this.$store.dispatch("auth/resetPassword",this.email),this.message="form.operations.messages.auth/verifying-link",this.loading=!1}catch(e){this.loading=!1,this.message="form.operations.messages."+e.code}}}},h=s(89);const k=(0,h.Z)(w,[["render",c]]);var b=k}}]);
//# sourceMappingURL=272.3130593d.js.map