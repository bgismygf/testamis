"use strict";(self["webpackChunkamis"]=self["webpackChunkamis"]||[]).push([[807],{807:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});t(7658);var n=t(3396),o=t(9242),s=t(7139),l=t(4870),i=t(2483);const r=e=>((0,n.dD)("data-v-41902a40"),e=e(),(0,n.Cn)(),e),u={class:"mt-5"},d=["onSubmit"],c=r((()=>(0,n._)("h1",{class:"h3 mb-3 font-weight-normal text-center"},"登入",-1))),p=r((()=>(0,n._)("label",{for:"inputEmail",class:"sr-only"},"address",-1))),m=r((()=>(0,n._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1))),f={class:"btn btn-lg btn-main-dark2 w-100",type:"submit"},w={key:0},y={key:1};var v={__name:"loginIndex",setup(e){const a=(0,l.iH)({userId:"admin",password:"115799"}),t=(0,l.iH)(""),r=(0,n.f3)("fetchFunction"),v=(0,i.tv)(),{fetchApi:b}=r;async function g(){const e="/api/Login";document.cookie="token=";const n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a.value)},o=await b(e,n);if(o.statusCode>=400)return t.value=o.message,h(),null;document.cookie=`token=${o.data.token};`;const s={employeeId:o.data.employeeId,employeeName:o.data.employeeName,role:o.data.role};localStorage.setItem("employee",JSON.stringify(s)),v.push("/appointment")}function h(){setTimeout((()=>{t.value=""}),3e3)}return(e,l)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",u,[(0,n._)("form",{class:"form-signin",onSubmit:(0,o.iM)(g,["prevent"])},[c,p,(0,n.wy)((0,n._)("input",{type:"text",id:"inputEmail",class:"form-control mb-2",placeholder:"address",required:"",autofocus:"","onUpdate:modelValue":l[0]||(l[0]=e=>a.value.userId=e)},null,512),[[o.nr,a.value.userId]]),m,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control mb-2",placeholder:"Password",required:"","onUpdate:modelValue":l[1]||(l[1]=e=>a.value.password=e)},null,512),[[o.nr,a.value.password]]),(0,n._)("button",f,[t.value?((0,n.wg)(),(0,n.iD)("span",y,(0,s.zw)(t.value),1)):((0,n.wg)(),(0,n.iD)("span",w,"Sign in"))])],40,d)])]))}},b=t(89);const g=(0,b.Z)(v,[["__scopeId","data-v-41902a40"]]);var h=g}}]);
//# sourceMappingURL=807.d86d056f.js.map