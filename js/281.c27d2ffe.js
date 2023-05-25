"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[281],{3281:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var s=a(3396);const l={class:"w-full sm:max-w-[480px] h-full bg-white dark:bg-dark-200 sm:rounded sm:shadow sm:h-auto flex justify-center items-center"};function r(e,t,a,r,i,o){const n=(0,s.up)("profile-edit");return(0,s.wg)(),(0,s.iD)("div",l,[e.user?((0,s.wg)(),(0,s.j4)(n,{key:0,user:e.user,onClose:o.redirect},null,8,["user","onClose"])):(0,s.kq)("",!0)])}a(7658);var i=a(9242),o=a(7139);const n={class:"flex flex-col gap-2"},c={class:"flex justify-between items-center"},m={class:"font-semibold text-lg text-gray-700 dark:text-gray-300"},d={key:0,class:"flex items-center gap-4 text-xs text-gray-700 dark:text-gray-300"},u={key:1,class:"flex items-center gap-4 text-xs text-gray-700 dark:text-gray-300"},h={class:"sm:overflow-visible flex flex-col flex-1 overflow-y-scroll scrollbar-hide sm:gap-4 gap-2"},f={class:"flex sm:flex-row flex-col gap-6 items-center flex-wrap w-full"},p={class:"sm:w-[6rem] w-[12rem] flex flex-col gap-2 text-center items-center mt-6"},g=["src","alt"],w={class:"min-w-[2rem] sm:flex sm:flex-col flex-1 justify-center w-full grid grid-cols-10 gap-2"},b={class:"col-span-4"},x={class:"grid grid-cols-5 gap-2"},y=(0,s._)("footer",{class:"flex flex-col gap-3"},[(0,s._)("small",{class:"text-gray-400 text-xs w-full text-end"},"Avatars by Multiavatar.com")],-1);function k(e,t,a,l,r,k){const v=(0,s.up)("base-loader"),U=(0,s.up)("base-input"),$=(0,s.up)("base-checkbox"),_=(0,s.up)("base-textarea"),L=(0,s.up)("base-button");return(0,s.wg)(),(0,s.iD)("form",{class:"relative flex flex-col sm:gap-4 gap-2 min-w-[220px] sm:max-w-[480px] sm:h-auto w-full h-full rounded px-4 py-2 bg-white dark:bg-dark-200",onSubmit:t[6]||(t[6]=(0,i.iM)(((...e)=>k.onSubmit&&k.onSubmit(...e)),["prevent"]))},[(0,s._)("header",n,[(0,s._)("div",c,[(0,s._)("p",m,(0,o.zw)(e.$t("titles.profile")),1),r.loading?((0,s.wg)(),(0,s.iD)("small",d,[(0,s.Uk)((0,o.zw)(e.$t("form.operations.titles.update")),1),(0,s.Wm)(v,{size:"small"})])):r.imageLoading?((0,s.wg)(),(0,s.iD)("small",u,[(0,s.Uk)((0,o.zw)(e.$t("form.operations.titles.wait")),1),(0,s.Wm)(v,{size:"small"})])):(0,s.kq)("",!0)])]),(0,s._)("main",h,[(0,s._)("div",f,[(0,s._)("div",p,[(0,s._)("div",{ref:"imageWrapper",onClick:t[0]||(t[0]=t=>e.$refs.fileInput.click()),class:"flex justify-center items-center w-40 h-40 sm:w-[6rem] sm:h-[6rem] rounded-full bg-gray-200 cursor-pointer transition-all hover:opacity-75 overflow-hidden",title:"Загрузка фото"},[(0,s._)("img",{src:r.form.photoUrl,alt:r.form.name,class:(0,o.C_)(r.imageLoading||!r.form.photoUrl?"hidden appearance-none":"h-full w-full object-cover")},null,10,g)],512),(0,s._)("input",{onChange:t[1]||(t[1]=(...e)=>k.imageUpload&&k.imageUpload(...e)),type:"file",name:"avatar",ref:"fileInput",accept:"image/*",class:"hidden"},null,544),(0,s._)("small",{class:"text-xs text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600 cursor-pointer whitespace-nowrap",onClick:t[2]||(t[2]=(...e)=>k.imageGenerate&&k.imageGenerate(...e))},(0,o.zw)(e.$t("phrases.randomAvatar")),1)]),(0,s._)("div",w,[(0,s._)("div",b,[(0,s.Wm)(U,{modelValue:r.form.name,"onUpdate:modelValue":t[3]||(t[3]=e=>r.form.name=e),label:e.$t("form.placeholders.username"),class:"pb-2"},null,8,["modelValue","label"]),(0,s.Wm)($,{modelValue:r.checked,"onUpdate:modelValue":t[4]||(t[4]=e=>r.checked=e),class:"pb-4"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.$t("phrases.namedAvatar")),1)])),_:1},8,["modelValue"])]),(0,s.Wm)(U,{value:a.user.email,label:e.$t("form.placeholders.email"),disabled:"",class:"col-span-6"},null,8,["value","label"])])]),(0,s.Wm)(_,{class:"max-h-full",maxLength:256,modelValue:r.form.bio,"onUpdate:modelValue":t[5]||(t[5]=e=>r.form.bio=e),label:e.$t("form.placeholders.bio")},null,8,["modelValue","label"]),(0,s._)("div",x,[(0,s.Wm)(L,{class:"col-span-3",type:"submit",onClick:k.onSubmit},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.$t("form.buttons.save")),1)])),_:1},8,["onClick"]),(0,s.Wm)(L,{class:"col-span-2",theme:"passive",onClick:k.close},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.$t("form.buttons.cancel")),1)])),_:1},8,["onClick"])])]),y],32)}var v=a(4806),U=a.n(v);function $(e,t,a,s){return new Promise((l=>{const r=new FileReader;r.readAsDataURL(e),r.onload=e=>{const r=e.target.result,i=document.createElement("img");i.src=r,i.onload=e=>{const r=a/e.target.width,o=document.createElement("canvas"),n=o.getContext("2d");o.width=a,o.height=s||e.target.height*r,n.drawImage(i,0,0,o.width,o.height);const c=n.canvas.toDataURL("image/jpeg",t);l({dataUrl:c,additionalData:c.split(",")[0],coded:c.split(",")[1]})}}}))}async function _(e){try{if(e.includes("firebasestorage"))return null;const t=await((await fetch(e))?.blob()),a=new File([t],"File",{type:t.type});return a}catch(t){throw console.warn("Failed to fetch an image URL, this may be a CORS"),t}}async function L(e=""){if(!e)for(let a=0;a<6;a++)e+=Math.floor(47*Math.random()).toString();const t=await fetch(`https://api.multiavatar.com/${e}.png?apikey=2xi9ve1j34EPd8`);if(200!=t.status)throw new Error;return t.url}var C={props:{user:{type:Object,required:!0}},data(){return{form:{name:"",bio:"",photoUrl:"",email:""},loading:!1,checked:!1,width:96,compressModifier:100,imageLoading:!1,debouncedAvatarQuery:null}},created(){this.form.email=this.user.email},mounted(){this.user||this.$toast.show("Пользователь не найден"),Object.keys(this.form).forEach((e=>{this.form[e]=this.user[e]}))},methods:{close(){this.$emit("close")},async imageUpload(e){try{const t=e.target.files[0];this.imageLoading=!0,this.form.photoUrl=(await $(t,90,this.width)).dataUrl,this.imageLoading=!1}catch{this.$toast.show("Что то пошло не так :("),this.imageLoading=!1}},async imageGenerate(){try{this.imageLoading=!0,this.form.photoUrl=await L()}catch(e){console.warn(e)}this.imageLoading=!1},async onSubmit(){this.loading=!0;let e={...this.form};try{const t=await _(this.form.photoUrl);e={...this.form,profile_photo_file:t}}catch(t){console.warn(t)}await this.$store.dispatch("auth/updateUserProfile",{...e}),await this.$store.dispatch("auth/cacheUser",{email:this.user.email,uid:this.user.uid,name:this.form.name,photoUrl:this.form.photoUrl,password:this.user.password,bio:this.form.bio}),this.loading=!1,this.$emit("close")}},watch:{async"form.name"(e){this.debouncedAvatarQuery&&this.debouncedAvatarQuery.cancel(),this.checked&&(this.imageLoading=!0,this.debouncedAvatarQuery=U().debounce((async function(e){this.form.photoUrl=await L(e),this.imageLoading=!1}),850).bind(this)(e))},async checked(e,t){!t&&e&&this.form.name&&(this.imageLoading=!0,this.form.photoUrl=await L(this.form.name),this.imageLoading=!1)}}},j=a(89);const z=(0,j.Z)(C,[["render",k]]);var V=z,W={props:{uid:{type:String,required:!0}},name:"ProfileEditPage",components:{ProfileEdit:V},data:()=>({user:null}),methods:{redirect(){this.$route.query.fallback?this.$router.push({name:this.$route.query.fallback}):this.$router.push("/")}},async created(){this.user=await this.$store.dispatch("auth/getCachedUser",this.uid),this.uid&&this.user||this.$router.push({name:this.$route.query.fallback||"login",query:{message:"auth/user-not-found"}})}};const q=(0,j.Z)(W,[["render",r]]);var A=q}}]);
//# sourceMappingURL=281.c27d2ffe.js.map