"use strict";(self.webpackChunkcontasync=self.webpackChunkcontasync||[]).push([[263],{5263:(w,g,i)=>{i.r(g),i.d(g,{GENERAL_ROUTES:()=>b});var d=i(177),p=i(1957),e=i(4438);let u=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=e.VBU({type:n,selectors:[["app-dashboard"]],standalone:!0,features:[e.aNF],decls:42,vars:0,consts:[["href",e.wXG`https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css`,"rel","stylesheet"],[1,"my-5","py-5"],[1,"section","full-height","pt-5"],[1,"container","mt-4"],["role","alert",1,"alert","alert-dark","alert-dismissible","fade","show"],[1,"alert-heading"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],[1,"row","row-cols-1","row-cols-md-3","g-4"],[1,"col"],[1,"card","h-100","border-0","rounded-3","shadow"],["href","empleados"],[1,"card-body"],[1,"card-title"],[1,"bi","bi-people"],[1,"card-text"],["href","planilla"],[1,"bi","bi-file-earmark-text"],["href","presupuesto"],[1,"bi","bi-currency-dollar"]],template:function(o,a){1&o&&(e.j41(0,"div"),e.nrm(1,"link",0)(2,"app-header"),e.j41(3,"div")(4,"div",1)(5,"div",2)(6,"div",3)(7,"div",4)(8,"h4",5),e.EFF(9,"\xa1Bienvenido al sistema de planillas!"),e.k0s(),e.j41(10,"p"),e.EFF(11,"Hemos desarrollado un sistema de planillas para su empresa de comercializaci\xf3n. El sistema est\xe1 dise\xf1ado para estar disponible las 24 horas del d\xeda, los 7 d\xedas de la semana. Se ha creado pensando en la facilidad de uso, la navegabilidad y la capacidad de realizar consultas r\xe1pidas y confiables."),e.k0s(),e.nrm(12,"button",6),e.k0s()(),e.j41(13,"div",3)(14,"div",7)(15,"div",8)(16,"div",9)(17,"a",10)(18,"div",11)(19,"h5",12),e.nrm(20,"i",13),e.EFF(21," Empleados"),e.k0s(),e.j41(22,"p",14),e.EFF(23,"Informaci\xf3n sobre empleados."),e.k0s()()()()(),e.j41(24,"div",8)(25,"div",9)(26,"a",15)(27,"div",11)(28,"h5",12),e.nrm(29,"i",16),e.EFF(30," Planillas"),e.k0s(),e.j41(31,"p",14),e.EFF(32,"Informaci\xf3n sobre planillas."),e.k0s()()()()(),e.j41(33,"div",8)(34,"div",9)(35,"a",17)(36,"div",11)(37,"h5",12),e.nrm(38,"i",18),e.EFF(39," Presupuesto"),e.k0s(),e.j41(40,"p",14),e.EFF(41,"Informaci\xf3n sobre presupuesto."),e.k0s()()()()()()()()()()())},dependencies:[d.MD,p.l],styles:[".card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2rem;background-color:#f8f9fa;border-radius:1rem;transition:all .3s;height:100%}.card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);transition:all .3s ease}.card-title[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem}.card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;font-size:3rem;color:#0d1a34;margin-bottom:1rem}.card-text[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:2rem}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}"]})}return n})();var c=i(8573),s=i(4341),m=i(5498);let h=(()=>{class n{constructor(t){this.router=t}canActivate(){return!!localStorage.getItem("token")||(this.router.navigate(["/login"]),!1)}static#e=this.\u0275fac=function(o){return new(o||n)(e.KVO(c.Ix))};static#n=this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),f=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=e.$C({type:n});static#t=this.\u0275inj=e.G2t({providers:[m.u,h],imports:[d.MD]})}return n})();const C=()=>["/reset-password"],b=[{path:"dashboard",component:u},{path:"login",component:(()=>{class n{constructor(t,o){this.authService=t,this.router=o,this.credentials={email:"",password:""}}login(){this.authService.login(this.credentials).subscribe(t=>{console.log("Usuario autenticado",t),localStorage.setItem("token",t.access_token),this.router.navigate(["/dashboard"])},t=>{console.error("Error al iniciar sesi\xf3n",t)})}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(m.u),e.rXU(c.Ix))};static#n=this.\u0275cmp=e.VBU({type:n,selectors:[["app-login"]],standalone:!0,features:[e.aNF],decls:24,vars:4,consts:[[1,"login-container"],[1,"logo-container","vertical-center"],["src","../../../assets/images/ContaSync.png","alt",""],[1,"vertical-center","text-center"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3"],[3,"ngSubmit"],["src","../../../assets/images/ContaSync slogan.png","width","250",1,"mb-4"],[1,"h3","mb-3","fw-normal"],[1,"form-floating"],["type","email","id","floatingInput","placeholder","name@example.com","name","email",1,"form-control",3,"ngModelChange","ngModel"],["for","floatingInput"],[1,"form-floating","mt-3"],["type","password","id","floatingPassword","placeholder","Password","name","password",1,"form-control",3,"ngModelChange","ngModel"],["for","floatingPassword"],["type","submit",1,"w-100","btn","btn-lg","btn-primary","mt-3"],[1,"mt-5","mb-3","text-muted"],["id","forgot-password",3,"routerLink"]],template:function(o,a){1&o&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"img",2),e.k0s(),e.j41(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7),e.bIt("ngSubmit",function(){return a.login()}),e.nrm(8,"img",8),e.j41(9,"h1",9),e.EFF(10,"\xa1Bienvenido!"),e.k0s(),e.j41(11,"div",10)(12,"input",11),e.mxI("ngModelChange",function(r){return e.DH7(a.credentials.email,r)||(a.credentials.email=r),r}),e.k0s(),e.j41(13,"label",12),e.EFF(14,"Correo electronico"),e.k0s()(),e.j41(15,"div",13)(16,"input",14),e.mxI("ngModelChange",function(r){return e.DH7(a.credentials.password,r)||(a.credentials.password=r),r}),e.k0s(),e.j41(17,"label",15),e.EFF(18,"Contrase\xf1a"),e.k0s()(),e.j41(19,"button",16),e.EFF(20,"Entrar"),e.k0s(),e.j41(21,"p",17)(22,"a",18),e.EFF(23,"\xbfHa olvidado su contrase\xf1a?"),e.k0s()()()()()()()()),2&o&&(e.R7$(12),e.R50("ngModel",a.credentials.email),e.R7$(4),e.R50("ngModel",a.credentials.password),e.R7$(6),e.Y8G("routerLink",e.lJ4(3,C)))},dependencies:[d.MD,s.YN,s.qT,s.me,s.BC,s.cb,s.vS,s.cV,f,c.iI,c.Wk],styles:[".login-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;height:100vh;width:100vw}.vertical-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.logo-container[_ngcontent-%COMP%]{background-color:#0d1a34}.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:400px}.btn-primary[_ngcontent-%COMP%]{background-color:#003489;border:#003489}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.text-muted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#6c757d;text-decoration:none}.text-muted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (max-width: 575.98px){.login-container[_ngcontent-%COMP%]{grid-template-columns:100%}.logo-container[_ngcontent-%COMP%]{display:none}}"]})}return n})()},{path:"reset-password",component:(()=>{class n{constructor(t,o){this.authService=t,this.router=o,this.email="",this.newPassword="",this.confirmPassword=""}resetPassword(){this.newPassword===this.confirmPassword?this.authService.resetPassword(this.email,this.newPassword).subscribe(t=>{alert("Restablecimiento de contrase\xf1a exitoso"),this.router.navigate(["/login"])},t=>{console.error("Error al restablecer la contrase\xf1a",t),alert("Error al restablecer la contrase\xf1a")}):alert("Las contrase\xf1as no coinciden")}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(m.u),e.rXU(c.Ix))};static#n=this.\u0275cmp=e.VBU({type:n,selectors:[["app-reset-password"]],standalone:!0,features:[e.aNF],decls:24,vars:3,consts:[[1,"reset-password-container"],[1,"logo-container","vertical-center"],["src","../../../assets/images/ContaSync.png","alt",""],[1,"vertical-center","text-center"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3"],[3,"ngSubmit"],[1,"h3","mb-3","fw-normal"],[1,"form-floating"],["type","email","id","email","name","email","placeholder","name@example.com","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","floatingInput"],[1,"form-floating","mt-3"],["type","password","id","newPassword","name","newPassword","placeholder","Nueva Contrase\xf1a","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","password","id","confirmPassword","name","confirmPassword","placeholder","Restablecer Contrase\xf1a","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"w-100","btn","btn-lg","btn-primary","mt-3"]],template:function(o,a){1&o&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"img",2),e.k0s(),e.j41(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7),e.bIt("ngSubmit",function(){return a.resetPassword()}),e.j41(8,"h1",8),e.EFF(9,"Restablecer Contrase\xf1a"),e.k0s(),e.j41(10,"div",9)(11,"input",10),e.mxI("ngModelChange",function(r){return e.DH7(a.email,r)||(a.email=r),r}),e.k0s(),e.j41(12,"label",11),e.EFF(13,"Correo Electr\xf3nico"),e.k0s()(),e.j41(14,"div",12)(15,"input",13),e.mxI("ngModelChange",function(r){return e.DH7(a.newPassword,r)||(a.newPassword=r),r}),e.k0s(),e.j41(16,"label",11),e.EFF(17,"Nueva Contrase\xf1a"),e.k0s()(),e.j41(18,"div",12)(19,"input",14),e.mxI("ngModelChange",function(r){return e.DH7(a.confirmPassword,r)||(a.confirmPassword=r),r}),e.k0s(),e.j41(20,"label",11),e.EFF(21,"Confirmar Nueva Contrase\xf1a"),e.k0s()(),e.j41(22,"button",15),e.EFF(23,"Restablecer Contrase\xf1a"),e.k0s()()()()()()()),2&o&&(e.R7$(11),e.R50("ngModel",a.email),e.R7$(4),e.R50("ngModel",a.newPassword),e.R7$(4),e.R50("ngModel",a.confirmPassword))},dependencies:[d.MD,s.YN,s.qT,s.me,s.BC,s.cb,s.YS,s.vS,s.cV],styles:[".reset-password-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;height:100vh;width:100vw}.vertical-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.logo-container[_ngcontent-%COMP%]{background-color:#0d1a34}.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:400px}.btn-primary[_ngcontent-%COMP%]{background-color:#003489;border:#003489}@media (max-width: 575.98px){.reset-password-container[_ngcontent-%COMP%]{grid-template-columns:100%}.logo-container[_ngcontent-%COMP%]{display:none}}"]})}return n})()}]}}]);