import './polyfills.server.mjs';
import{A as P,B as c,C as v,D as i,E as S,F as A,T as w,U as J,V as Y,Y as F,Z,_ as X,aa as b,ba as B,c as g,d as q,g as p,h as f,i as C,j as y,s as u,t as _,v as E,w as h,x as e,y as t,z as d}from"./chunk-ZJX4HYE3.mjs";import{a as $,b as W}from"./chunk-5XUXGTUW.mjs";var I=class s{nombre="";tipoSeleccionado="";fechaRenta="";tiempoRenta="1";seleccionarTipo(r){let n=r.target;this.tipoSeleccionado=n.value}actualizarNombre(r){let n=r.target;this.nombre=n.value}actualizarFechaRenta(r){let n=r.target;this.fechaRenta=n.value}actualizarTiempoRenta(r){let n=r.target;this.tiempoRenta=n.value}guardarDatos(){let r=localStorage.getItem("datosRenta"),n=[];if(r)try{n=JSON.parse(r),Array.isArray(n)||(n=[n])}catch(a){console.error("Error al parsear los datos existentes:",a)}let o={nombre:this.nombre,tipo:this.tipoSeleccionado,fechaRenta:this.fechaRenta,tiempoRenta:this.tiempoRenta};n.push(o),localStorage.setItem("datosRenta",JSON.stringify(n)),console.log("Datos guardados:",n),alert("Datos guardados correctamente!")}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["app-compra"]],decls:50,vars:0,consts:[["id","header"],["src","assets/imagenes/filmhouse.png","alt","Logo","id","logo"],["id","nav"],["href","#"],["id","payment"],["src","assets/imagenes/pago.png","alt","Pago","id","payment-icon"],["id","textPago"],["id","rental-container"],["id","rental-content"],["id","movie-info"],["src","assets/movie-poster.jpg","alt","Poster","id","poster"],["id","rental-form"],[3,"change"],["value",""],["value","pelicula"],["value","serie"],["type","text","placeholder","Nombre",3,"input"],["type","date",3,"input"],["value","1"],["value","2"],["id","rental-summary"],["type","button",3,"click"]],template:function(n,o){n&1&&(e(0,"body")(1,"div",0),d(2,"img",1),e(3,"nav",2)(4,"a",3),i(5,"PELICULAS"),t(),e(6,"a",3),i(7,"SERIES"),t(),e(8,"a",3),i(9,"HISTORIAL"),t()(),e(10,"div",4),d(11,"img",5),e(12,"span",6),i(13,"PAGO"),t()()(),e(14,"div",7)(15,"div",8)(16,"div",9),d(17,"img",10),t(),e(18,"div",11)(19,"h2"),i(20,"Seleccione Pel\xEDcula o Serie"),t(),e(21,"select",12),c("change",function(l){return o.seleccionarTipo(l)}),e(22,"option",13),i(23,"Seleccionar"),t(),e(24,"option",14),i(25,"Pel\xEDcula"),t(),e(26,"option",15),i(27,"Serie"),t()(),e(28,"h2"),i(29,"Ingrese su nombre"),t(),e(30,"input",16),c("input",function(l){return o.actualizarNombre(l)}),t(),e(31,"h2"),i(32,"Fecha de renta"),t(),e(33,"input",17),c("input",function(l){return o.actualizarFechaRenta(l)}),t(),e(34,"h2"),i(35,"Tiempo a rentar"),t(),e(36,"select",12),c("change",function(l){return o.actualizarTiempoRenta(l)}),e(37,"option",18),i(38,"1 semana"),t(),e(39,"option",19),i(40,"2 semanas"),t()(),e(41,"div",20)(42,"h3"),i(43,"FECHA RENTA: --/--/----"),t(),e(44,"h3"),i(45,"FECHA A ENTREGAR: --/--/----"),t(),e(46,"h3"),i(47,"TOTAL: --"),t()(),e(48,"button",21),c("click",function(){return o.guardarDatos()}),i(49,"Finalizar"),t()()()()())},styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%]{background:radial-gradient(circle at 30% 40%,#00ffb2,transparent 40%),radial-gradient(circle at 60% 40%,#00ccff,transparent 50%),radial-gradient(circle at 80% 60%,#002f4e,transparent 50%),radial-gradient(circle at 50% 60%,#0b0b0b,#0b0b0b 70%);background-color:#000;background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;margin:0;padding:0}#header[_ngcontent-%COMP%]{width:100%;background-color:#1e1e1e;padding:20px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 4px 8px #00000080}#textPago[_ngcontent-%COMP%]{color:#fff}#logo[_ngcontent-%COMP%]{height:50px}#nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:20px;color:#fff;text-decoration:none;font-weight:700}#payment[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}#payment-icon[_ngcontent-%COMP%]{width:30px}#rental-container[_ngcontent-%COMP%]{background-color:#1e1e1e;width:80%;max-width:900px;padding:20px;border-radius:10px;box-shadow:0 4px 8px #00000080;color:#fff;margin:40px auto;display:flex;justify-content:center;align-items:center}#rental-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;gap:40px}#movie-info[_ngcontent-%COMP%]{flex:1;padding-right:20px}#poster[_ngcontent-%COMP%]{width:100%;border-radius:10px;box-shadow:0 4px 8px #00000080}#rental-form[_ngcontent-%COMP%]{flex:1;background-color:#2a2a2a;padding:20px;border-radius:10px;width:100%;max-width:500px}h2[_ngcontent-%COMP%]{margin-bottom:10px;font-size:16px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:20px;border:none;border-radius:5px;background-color:#444;color:#fff}input[_ngcontent-%COMP%]::placeholder{color:#bbb}#rental-summary[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:15px;border-radius:10px}h3[_ngcontent-%COMP%]{margin:5px 0}button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#0c6;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-top:20px}button[_ngcontent-%COMP%]:hover{background-color:#0c6}"]})};var k=class s{constructor(r){this.router=r}onCompras(){this.router.navigate(["/compra"])}onHistorial(){this.router.navigate(["/historial"])}static \u0275fac=function(n){return new(n||s)(_(b))};static \u0275cmp=p({type:s,selectors:[["app-principal"]],decls:37,vars:0,consts:[["id","container"],["id","header"],["src","./assets/imagenes/filmhouse.png","alt","Filmhouse Logo","id","logo"],["id","nav"],["id","nav-list"],["href","#"],["id","movie-suggestions"],["id","suggestion-title"],["id","large-movie-card",1,"movie-card"],["id","card-title"],["id","movies"],[1,"movie-item"],["src","./assets/imagenes/Megamind.webp","alt","Megamind","id","megamente-img"],["id","rent-button-1","type","button",1,"rent-button",3,"click"],["src","./assets/imagenes/proyectoX.jpg","alt","The Hangover 2","id","hangover-img"],["id","rent-button-2","type","button",1,"rent-button",3,"click"],["src","./assets/imagenes/zombiland.jpg","alt","Zombieland","id","zombieland-img"],["id","rent-button-3","type","button",1,"rent-button",3,"click"]],template:function(n,o){n&1&&(e(0,"body")(1,"div",0)(2,"header",1),d(3,"img",2),e(4,"nav",3)(5,"ul",4)(6,"li")(7,"a",5),i(8,"RENTAL DE PELICULAS Y SERIES"),t()(),e(9,"li")(10,"a",5),i(11,"MOVIES"),t()(),e(12,"li")(13,"a",5),i(14,"SERIES"),t()(),e(15,"li")(16,"a",5),i(17,"HISTORY"),t()()()()(),e(18,"section",6)(19,"h2",7),i(20,"Tal vez te gusten estas pel\xEDculas"),t(),e(21,"div",8)(22,"h3",9),i(23,"Sugerencias de Pel\xEDculas"),t(),e(24,"div",10)(25,"div",11),d(26,"img",12),e(27,"button",13),c("click",function(){return o.onCompras()}),i(28,"RENTAR"),t()(),e(29,"div",11),d(30,"img",14),e(31,"button",15),c("click",function(){return o.onCompras()}),i(32,"RENTAR"),t()(),e(33,"div",11),d(34,"img",16),e(35,"button",17),c("click",function(){return o.onCompras()}),i(36,"RENTAR"),t()()()()()()())},styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%]{background:radial-gradient(circle at 30% 40%,#00ffb2,transparent 40%),radial-gradient(circle at 60% 40%,#00ccff,transparent 50%),radial-gradient(circle at 80% 60%,#002f4e,transparent 50%),radial-gradient(circle at 50% 60%,#0b0b0b,#0b0b0b 70%);background-color:#000;background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;margin:0;padding:0}#header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#2f2f2f;padding:40px 20px;width:100%;position:relative;top:0}#container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px}#nav-list[_ngcontent-%COMP%]{list-style:none;display:flex;justify-content:center;margin:0;padding:0;align-items:center;gap:20px}#nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px}#main-title[_ngcontent-%COMP%]{text-align:center;font-size:24px;margin:20px 0}#nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:18px}#nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1abc9c}#logo[_ngcontent-%COMP%]{width:150px;margin-bottom:10px}#movie-suggestions[_ngcontent-%COMP%]{margin-top:20px;text-align:center}#large-movie-card[_ngcontent-%COMP%]{background-color:#1a1a1a;border-radius:10px;padding:30px;max-width:800px;box-shadow:0 4px 10px #000000b3;margin:20px auto}#card-title[_ngcontent-%COMP%]{font-size:28px;margin-bottom:20px;color:#fff}#movies[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:20px}.movie-item[_ngcontent-%COMP%]{flex:1;margin:0 10px;text-align:center}.movie-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:10px;margin-bottom:10px}.rent-button[_ngcontent-%COMP%]{background-color:#0c6;color:#fff;border:none;border-radius:5px;padding:10px 20px;cursor:pointer;font-size:16px;margin-top:10px}.rent-button[_ngcontent-%COMP%]:hover{background-color:#00994c}"]})};function te(s,r){if(s&1){let n=P();e(0,"tr")(1,"td"),d(2,"input",7),t(),e(3,"td")(4,"input",8),c("change",function(a){let l=C(n).$implicit,M=v();return y(M.actualizarCampo(l,"fechaRenta",a))}),t()(),e(5,"td")(6,"input",9),c("change",function(a){let l=C(n).$implicit,M=v();return y(M.actualizarCampo(l,"fechaEntrega",a))}),t()(),e(7,"td"),i(8),t(),e(9,"td")(10,"button",10),c("click",function(){let a=C(n).$implicit,l=v();return y(l.eliminarRenta(a))}),i(11,"Eliminar"),t()()()}if(s&2){let n=r.$implicit,o=v();u(2),h("value",n.nombre),u(2),h("value",n.fechaRenta)("disabled",!o.editar),u(2),h("disabled",!o.editar),u(2),S(n.total||"$0")}}function ne(s,r){if(s&1){let n=P();e(0,"tr")(1,"td"),d(2,"input",7),t(),e(3,"td")(4,"input",8),c("change",function(a){let l=C(n).$implicit,M=v();return y(M.actualizarCampo(l,"fechaRenta",a))}),t()(),e(5,"td")(6,"input",9),c("change",function(a){let l=C(n).$implicit,M=v();return y(M.actualizarCampo(l,"fechaEntrega",a))}),t()(),e(7,"td"),i(8),t(),e(9,"td")(10,"button",10),c("click",function(){let a=C(n).$implicit,l=v();return y(l.eliminarRenta(a))}),i(11,"Eliminar"),t()()()}if(s&2){let n=r.$implicit,o=v();u(2),h("value",n.nombre),u(2),h("value",n.fechaRenta)("disabled",!o.editar),u(2),h("disabled",!o.editar),u(2),S(n.total||"$0")}}function ie(s,r){if(s&1){let n=P();e(0,"tr")(1,"td"),d(2,"input",7),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td")(10,"button",10),c("click",function(){let a=C(n).$implicit,l=v();return y(l.eliminarRenta(a))}),i(11,"Eliminar"),t()()()}if(s&2){let n=r.$implicit;u(2),h("value",n.nombre),u(2),S(n.tipoSuscripcion),u(2),S(n.fechaRenta),u(2),S(n.metodoPago)}}var N=class s{datosPeliculas=[];datosSeries=[];datosSuscripciones=[];editar=!1;ngOnInit(){this.cargarDatos()}cargarDatos(){let r=localStorage.getItem("datosRenta");if(r)try{let n=JSON.parse(r);this.datosPeliculas=n.filter(o=>o.tipo==="pelicula"),this.datosSeries=n.filter(o=>o.tipo==="serie")}catch(n){console.error("Error al parsear los datos de localStorage:",n)}this.cargarSuscripciones()}cargarSuscripciones(){let r=JSON.parse(localStorage.getItem("suscripciones")||"[]");this.datosSuscripciones=r.map(n=>({nombre:n.nombre,fechaRenta:n.fecha,tipoSuscripcion:n.tipoSuscripcion,metodoPago:n.metodoPago,tipo:"suscripcion"}))}activarEdicion(){this.editar&&this.guardarDatos(),this.editar=!this.editar}actualizarCampo(r,n,o){let l=o.target.value;(n==="fechaEntrega"||n==="fechaRenta")&&(r[n]=l),this.guardarDatos()}eliminarRenta(r){confirm("\xBFEst\xE1s seguro de que deseas eliminar esta renta?")&&(this.datosPeliculas=this.datosPeliculas.filter(n=>n!==r),this.datosSeries=this.datosSeries.filter(n=>n!==r),this.datosSuscripciones=this.datosSuscripciones.filter(n=>n!==r),this.guardarDatos(),alert("Renta eliminada correctamente"))}guardarDatos(){let r=[...this.datosPeliculas,...this.datosSeries,...this.datosSuscripciones];localStorage.setItem("datosRenta",JSON.stringify(r))}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["app-historial"]],decls:61,vars:4,consts:[["id","historial-section"],["id","historial-title"],[1,"editar",3,"click"],["id","historial-table",1,"table-style"],[4,"ngFor","ngForOf"],["id","series-table",1,"table-style"],["id","suscripciones-table",1,"table-style"],["type","text","readonly","",3,"value"],["type","date",3,"change","value","disabled"],["type","date","placeholder","Fecha de entrega",3,"change","disabled"],[1,"eliminar",3,"click"]],template:function(n,o){n&1&&(e(0,"body")(1,"div",0)(2,"h2",1),i(3,"HISTORIAL DE RENTAS"),t(),e(4,"button",2),c("click",function(){return o.activarEdicion()}),i(5),t(),e(6,"h3"),i(7,"Pel\xEDculas"),t(),e(8,"table",3)(9,"thead")(10,"tr")(11,"th"),i(12,"NOMBRE"),t(),e(13,"th"),i(14,"PEL\xCDCULA"),t(),e(15,"th"),i(16,"FECHA RENTADA"),t(),e(17,"th"),i(18,"FECHA ENTREGA"),t(),e(19,"th"),i(20,"TOTAL A PAGAR"),t(),e(21,"th"),i(22,"ACCIONES"),t()()(),e(23,"tbody"),E(24,te,12,5,"tr",4),t()(),e(25,"h3"),i(26,"Series"),t(),e(27,"table",5)(28,"thead")(29,"tr")(30,"th"),i(31,"NOMBRE"),t(),e(32,"th"),i(33,"SERIE"),t(),e(34,"th"),i(35,"FECHA RENTADA"),t(),e(36,"th"),i(37,"FECHA ENTREGA"),t(),e(38,"th"),i(39,"TOTAL A PAGAR"),t(),e(40,"th"),i(41,"ACCIONES"),t()()(),e(42,"tbody"),E(43,ne,12,5,"tr",4),t()(),e(44,"h3"),i(45,"Suscripciones"),t(),e(46,"table",6)(47,"thead")(48,"tr")(49,"th"),i(50,"NOMBRE"),t(),e(51,"th"),i(52,"TIPO DE SUSCRIPCI\xD3N"),t(),e(53,"th"),i(54,"FECHA DE SUSCRIPCI\xD3N"),t(),e(55,"th"),i(56,"M\xC9TODO DE PAGO"),t(),e(57,"th"),i(58,"ACCIONES"),t()()(),e(59,"tbody"),E(60,ie,12,4,"tr",4),t()()()()),n&2&&(u(5),A(" ",o.editar?"Guardar Cambios":"Editar Fechas"," "),u(19),h("ngForOf",o.datosPeliculas),u(19),h("ngForOf",o.datosSeries),u(17),h("ngForOf",o.datosSuscripciones))},dependencies:[w],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%]{background:radial-gradient(circle at 30% 40%,#00ffb2,transparent 40%),radial-gradient(circle at 60% 40%,#00ccff,transparent 50%),radial-gradient(circle at 80% 60%,#002f4e,transparent 50%),radial-gradient(circle at 50% 60%,#0b0b0b,#0b0b0b 70%);background-color:#000;background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;margin:0;padding:0}#container[_ngcontent-%COMP%]{width:100%;background-color:#1b1b1b;color:#fff;font-family:Arial,sans-serif}#header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px;background-color:#333}#logo-container[_ngcontent-%COMP%]{display:flex;align-items:center}#logo[_ngcontent-%COMP%]{width:50px;height:auto;margin-right:10px}#title[_ngcontent-%COMP%]{font-size:24px;margin:0}#nav[_ngcontent-%COMP%]{display:flex;gap:15px}#nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;padding:10px}#content[_ngcontent-%COMP%]{padding:20px}.section-table[_ngcontent-%COMP%]{margin-top:20px;background-color:#333;padding:20px;border-radius:8px}.section-title[_ngcontent-%COMP%]{font-size:18px;margin-bottom:15px}.table-style[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#222}.table-style[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-style[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 15px;border:1px solid #444}.table-style[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#444}.table-style[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#2b2b2b;text-align:left}.table-style[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#555}#historial-section[_ngcontent-%COMP%]{margin-top:20px}#historial-title[_ngcontent-%COMP%]{font-size:18px;margin-bottom:15px}#historial-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#222}#historial-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #historial-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 15px;border:1px solid #444}#historial-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#444}#historial-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#2b2b2b;text-align:left}#historial-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#555}#series-section[_ngcontent-%COMP%]{margin-top:20px}#series-title[_ngcontent-%COMP%]{font-size:18px;margin-bottom:15px}#series-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background-color:#222}#series-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #series-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 15px;border:1px solid #444}#series-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#444}#series-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#2b2b2b;text-align:left}#series-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#555}button[_ngcontent-%COMP%]{padding:10px 20px;margin:10px 0;font-size:16px;color:#fff;background-color:#ff5733;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease,transform .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#e84e24;transform:translateY(-2px)}button[_ngcontent-%COMP%]:disabled{background-color:#555;color:#ccc}button.editar[_ngcontent-%COMP%]{background-color:#4caf50;padding:8px 16px;margin-left:5px}button.editar[_ngcontent-%COMP%]:hover{background-color:#45a049}button.eliminar[_ngcontent-%COMP%]{background-color:#f009}button.eliminar[_ngcontent-%COMP%]:hover{background-color:#f00c}"]})};var R=class s{constructor(r){this.router=r}usuario="";password="";onSubmit(){let r=JSON.parse(localStorage.getItem("users")||"[]");console.log(r),r.some(o=>o.usuario===this.usuario&&o.password===this.password)?this.router.navigate(["/principal"]):alert("Usuario o contrase\xF1a incorrectos")}captureUsuario(r){this.usuario=r.target.value}capturePassword(r){this.password=r.target.value}static \u0275fac=function(n){return new(n||s)(_(b))};static \u0275cmp=p({type:s,selectors:[["app-login"]],decls:16,vars:0,consts:[[1,"login-container"],[1,"login-box"],[1,"form-group"],["for","user"],["type","text","id","user","name","user"],["for","password"],["type","password","id","password","name","password"],["type","submit"]],template:function(n,o){n&1&&(e(0,"body")(1,"div",0)(2,"div",1)(3,"h2"),i(4,"LOGIN"),t(),e(5,"form")(6,"div",2)(7,"label",3),i(8,"USER"),t(),d(9,"input",4),t(),e(10,"div",2)(11,"label",5),i(12,"PASSWORD"),t(),d(13,"input",6),t(),e(14,"button",7),i(15,"INICIAR"),t()()()()())},styles:["body[_ngcontent-%COMP%]{background:radial-gradient(circle at 30% 40%,#001f3f,transparent 30%),radial-gradient(circle at 60% 40%,#003f7f,transparent 40%),radial-gradient(circle at 80% 60%,#00a0ff,transparent 50%),radial-gradient(circle at 50% 60%,#001f3f,#001f3f 60%);background-color:#000;background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;margin:0;padding:0}#login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background:linear-gradient(135deg,#1e3c72,#2a5298)}.login-box[_ngcontent-%COMP%]{background-color:#1e3c72;padding:30px;border-radius:10px;box-shadow:0 0 15px #00000080;text-align:center;color:#fff;width:300px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;text-transform:uppercase;font-size:12px;color:silver}input[_ngcontent-%COMP%]{width:100%;padding:8px;border:none;border-radius:5px;background-color:#2a5298;color:#fff}button[_ngcontent-%COMP%]{width:100%;padding:10px;border:none;border-radius:5px;background-color:#fff;color:#1e3c72;cursor:pointer;text-transform:uppercase}button[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}"]})};var T=class s{constructor(r){this.router=r}nombre="";apellido="";usuario="";password="";onSubmit(){let r={nombre:this.nombre,apellido:this.apellido,usuario:this.usuario,password:this.password},n=JSON.parse(localStorage.getItem("users")||"[]");n.push(r),localStorage.setItem("users",JSON.stringify(n)),this.nombre="",this.apellido="",this.usuario="",this.password="",this.router.navigate(["/login"])}captureNombre(r){this.nombre=r.target.value}captureApellido(r){this.apellido=r.target.value}captureUsuario(r){this.usuario=r.target.value}capturePassword(r){this.password=r.target.value}static \u0275fac=function(n){return new(n||s)(_(b))};static \u0275cmp=p({type:s,selectors:[["app-login-for"]],decls:21,vars:0,consts:[[1,"login-container"],[1,"login-box"],[1,"form-group"],["for","firstName"],["type","text","id","firstName","placeholder","Ingrese su nombre","required","",3,"input"],["for","lastName"],["type","text","id","lastName","placeholder","Ingrese su apellido","required","",3,"input"],["for","user"],["type","text","id","user","placeholder","Ingrese su nombre de usuario","required","",3,"input"],["for","password"],["type","password","id","password","placeholder","Ingrese su contrase\xF1a","required","",3,"input"],["type","button",3,"click"]],template:function(n,o){n&1&&(e(0,"body")(1,"div",0)(2,"div",1)(3,"div",2)(4,"label",3),i(5,"Nombre"),t(),e(6,"input",4),c("input",function(l){return o.captureNombre(l)}),t()(),e(7,"div",2)(8,"label",5),i(9,"Apellido"),t(),e(10,"input",6),c("input",function(l){return o.captureApellido(l)}),t()(),e(11,"div",2)(12,"label",7),i(13,"Usuario"),t(),e(14,"input",8),c("input",function(l){return o.captureUsuario(l)}),t()(),e(15,"div",2)(16,"label",9),i(17,"Contrase\xF1a"),t(),e(18,"input",10),c("input",function(l){return o.capturePassword(l)}),t()(),e(19,"button",11),c("click",function(){return o.onSubmit()}),i(20,"Guardar"),t()()()())},styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.login-box[_ngcontent-%COMP%]{background-color:#1e3c72e6;padding:30px;border-radius:10px;box-shadow:0 0 15px #00000080;text-align:center;color:#fff;width:300px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;text-transform:uppercase;font-size:12px;color:silver}input[_ngcontent-%COMP%]{width:100%;padding:8px;border:none;border-radius:5px;background-color:#2a5298;color:#fff;font-size:14px}input[_ngcontent-%COMP%]::placeholder{color:#a0a0a0}button[_ngcontent-%COMP%]{width:100%;padding:10px;border:none;border-radius:5px;background-color:#fff;color:#1e3c72;cursor:pointer;text-transform:uppercase}button[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}body[_ngcontent-%COMP%]{background:radial-gradient(circle at 30% 40%,#004080,transparent 30%),radial-gradient(circle at 60% 40%,#0066cc,transparent 40%),radial-gradient(circle at 80% 60%,#0099ff,transparent 50%),radial-gradient(circle at 50% 60%,#036,#036 60%);background-color:#001f3f;background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;margin:0;padding:0}"]})};var j=class s{constructor(r){this.router=r}onCompras(){this.router.navigate(["/compra"])}onHistorial(){this.router.navigate(["/historial"])}static \u0275fac=function(n){return new(n||s)(_(b))};static \u0275cmp=p({type:s,selectors:[["app-series"]],decls:37,vars:0,consts:[["id","container"],["id","header"],["src","./assets/imagenes/filmhouse.png","alt","Filmhouse Logo","id","logo"],["id","nav"],["id","nav-list"],["href","#"],["id","movie-suggestions"],["id","suggestion-title"],["id","large-movie-card",1,"movie-card"],["id","card-title"],["id","movies"],[1,"movie-item"],["src","./assets/imagenes/breaking.jpeg","alt","Megamind","id","megamente-img"],["id","rent-button-1","type","button",1,"rent-button",3,"click"],["src","./assets/imagenes/daredevil.jpg","alt","The Hangover 2","id","hangover-img"],["id","rent-button-2","type","button",1,"rent-button",3,"click"],["src","./assets/imagenes/theboys.jpg","alt","Zombieland","id","zombieland-img"],["id","rent-button-3","type","button",1,"rent-button",3,"click"]],template:function(n,o){n&1&&(e(0,"body")(1,"div",0)(2,"header",1),d(3,"img",2),e(4,"nav",3)(5,"ul",4)(6,"li")(7,"a",5),i(8,"RENTAL DE PELICULAS Y SERIES"),t()(),e(9,"li")(10,"a",5),i(11,"MOVIES"),t()(),e(12,"li")(13,"a",5),i(14,"SERIES"),t()(),e(15,"li")(16,"a",5),i(17,"HISTORY"),t()()()()(),e(18,"section",6)(19,"h2",7),i(20,"Tal vez te gusten estas series "),t(),e(21,"div",8)(22,"h3",9),i(23,"Sugerencias de series "),t(),e(24,"div",10)(25,"div",11),d(26,"img",12),e(27,"button",13),c("click",function(){return o.onCompras()}),i(28,"RENTAR"),t()(),e(29,"div",11),d(30,"img",14),e(31,"button",15),c("click",function(){return o.onCompras()}),i(32,"RENTAR"),t()(),e(33,"div",11),d(34,"img",16),e(35,"button",17),c("click",function(){return o.onCompras()}),i(36,"RENTAR"),t()()()()()()())},styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%]{background:radial-gradient(circle at 30% 40%,#00ffb2,transparent 40%),radial-gradient(circle at 60% 40%,#00ccff,transparent 50%),radial-gradient(circle at 80% 60%,#002f4e,transparent 50%),radial-gradient(circle at 50% 60%,#0b0b0b,#0b0b0b 70%);background-color:#000;background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;margin:0;padding:0}#header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#2f2f2f;padding:40px 20px;width:100%;position:relative;top:0}#container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px}#nav-list[_ngcontent-%COMP%]{list-style:none;display:flex;justify-content:center;margin:0;padding:0;align-items:center;gap:20px}#nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px}#main-title[_ngcontent-%COMP%]{text-align:center;font-size:24px;margin:20px 0}#nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:18px}#nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1abc9c}#logo[_ngcontent-%COMP%]{width:150px;margin-bottom:10px}#movie-suggestions[_ngcontent-%COMP%]{margin-top:20px;text-align:center}#large-movie-card[_ngcontent-%COMP%]{background-color:#1a1a1a;border-radius:10px;padding:30px;max-width:800px;box-shadow:0 4px 10px #000000b3;margin:20px auto}#card-title[_ngcontent-%COMP%]{font-size:28px;margin-bottom:20px;color:#fff}#movies[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:20px}.movie-item[_ngcontent-%COMP%]{flex:1;margin:0 10px;text-align:center}.movie-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:10px;margin-bottom:10px}.rent-button[_ngcontent-%COMP%]{background-color:#0c6;color:#fff;border:none;border-radius:5px;padding:10px 20px;cursor:pointer;font-size:16px;margin-top:10px}.rent-button[_ngcontent-%COMP%]:hover{background-color:#00994c}"]})};var G=class s{constructor(r){this.router=r}onCompras(){this.router.navigate(["/pago"])}static \u0275fac=function(n){return new(n||s)(_(b))};static \u0275cmp=p({type:s,selectors:[["app-subscription"]],decls:70,vars:0,consts:[[1,"navbar"],[1,"navbar-logo"],[1,"navbar-links"],["href","#"],[1,"navbar-icon"],[1,"background"],[1,"title"],[1,"subscription-container"],[1,"subscription-card"],[1,"price"],[3,"click"]],template:function(n,o){n&1&&(e(0,"body")(1,"nav",0)(2,"div",1),i(3,"FilmHouse"),t(),e(4,"div",2)(5,"a",3),i(6,"Pel\xEDculas"),t(),e(7,"a",3),i(8,"Series"),t(),e(9,"a",3),i(10,"Historial"),t()(),d(11,"div",4),t(),e(12,"div",5)(13,"h2",6),i(14,"Planes de Suscripci\xF3n"),t(),e(15,"div",7)(16,"div",8)(17,"h3"),i(18,"Individual"),t(),e(19,"p",9),i(20,"80$/mes"),t(),e(21,"ul")(22,"li"),i(23,"Disfruta de todas nuestras ofertas que tenemos"),t(),e(24,"li"),i(25,"Descuentos exclusivos y de las mejores pel\xEDculas/series"),t(),e(26,"li"),i(27,"\xA1Obten ya tu cuenta premium!"),t()(),e(28,"button",10),c("click",function(){return o.onCompras()}),i(29,"suscribirse"),t()(),e(30,"div",8)(31,"h3"),i(32,"Duo"),t(),e(33,"p",9),i(34,"130$/mes"),t(),e(35,"ul")(36,"li"),i(37,"Disfruta de todos los beneficios anteriores"),t(),e(38,"li"),i(39,"Ahora con pel\xEDculas y series m\xE1s nuevas"),t()(),e(40,"button",10),c("click",function(){return o.onCompras()}),i(41,"suscribirse"),t()(),e(42,"div",8)(43,"h3"),i(44,"Familiar"),t(),e(45,"p",9),i(46,"160$/mes"),t(),e(47,"ul")(48,"li"),i(49,"Disfruta y comparte todas las pel\xEDculas/series"),t(),e(50,"li"),i(51,"Pel\xEDculas/series de la mayor calidad"),t(),e(52,"li"),i(53,"\xA1\xDAnete para m\xE1s beneficios!"),t()(),e(54,"button",10),c("click",function(){return o.onCompras()}),i(55,"suscribirse"),t()(),e(56,"div",8)(57,"h3"),i(58,"Estudiantes"),t(),e(59,"p",9),i(60,"60$/mes"),t(),e(61,"ul")(62,"li"),i(63,"Descuento especial para estudiantes universitarios"),t(),e(64,"li"),i(65,"Explora nuestro cat\xE1logo"),t(),e(66,"li"),i(67,"\xA1Disfruta despu\xE9s de un examen!"),t()(),e(68,"button",10),c("click",function(){return o.onCompras()}),i(69,"suscribirse"),t()()()()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%;height:100%;overflow-x:hidden;margin:0;padding:0}.background[_ngcontent-%COMP%]{background:radial-gradient(circle,#006a6a,#001a1a);min-height:100vh;color:#fff;margin:0;padding:0}.navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#333;padding:15px 30px;color:#fff}.navbar-logo[_ngcontent-%COMP%]{font-weight:700;font-size:1.5em}.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin:0 15px}.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.navbar-icon[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;margin-left:10px}.title[_ngcontent-%COMP%]{text-align:center;font-size:2em;margin-bottom:20px}.subscription-container[_ngcontent-%COMP%]{display:flex;gap:20px;justify-content:center;padding:20px}.subscription-card[_ngcontent-%COMP%]{background-color:#1e1e1e;border:1px solid #333;border-radius:8px;padding:20px;width:220px;color:#fff;text-align:center}.subscription-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1db954;margin-bottom:10px}.subscription-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1.5em;color:#fff;margin:10px 0}.subscription-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em;color:#b3b3b3;margin:5px 0}.subscription-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:15px 0;font-size:.9em}.subscription-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.subscription-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#1db954;border:none;border-radius:20px;color:#fff;padding:10px 20px;cursor:pointer;font-size:1em;transition:background .3s}.subscription-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#14863d}"]})};function re(s,r){if(s&1&&(e(0,"option",18),i(1),t()),s&2){let n=r.$implicit;h("value",n.value),u(),A(" ",n.label," ")}}function oe(s,r){s&1&&(e(0,"div",19),i(1," Suscripci\xF3n guardada con \xE9xito! "),t())}var H=class s{nombre="";fecha=new Date().toISOString().substring(0,10);tipoSuscripcion="";metodoPago="";mensajeGuardado=!1;suscripcionesGuardadas=[];suscripciones=[{value:"individual",label:"Individual"},{value:"duo",label:"Duo"},{value:"familiar",label:"Familiar"},{value:"estudiante",label:"Estudiante"}];ngOnInit(){this.cargarSuscripciones()}onSubmit(r){if(r.preventDefault(),console.log("Nombre:",this.nombre),console.log("Fecha:",this.fecha),console.log("Tipo de Suscripci\xF3n:",this.tipoSuscripcion),console.log("M\xE9todo de Pago:",this.metodoPago),!this.nombre.trim()||!this.fecha.trim()||!this.tipoSuscripcion.trim()||!this.metodoPago.trim()){alert("Por favor, completa todos los campos.");return}let n={nombre:this.nombre,fecha:this.fecha,tipoSuscripcion:this.tipoSuscripcion,metodoPago:this.metodoPago},o=JSON.parse(localStorage.getItem("suscripciones")||"[]");o.push(n),localStorage.setItem("suscripciones",JSON.stringify(o)),this.suscripcionesGuardadas=o,window.alert("Suscripci\xF3n guardada con \xE9xito!"),this.mensajeGuardado=!0,setTimeout(()=>{this.mensajeGuardado=!1},3e3),this.resetForm()}cargarSuscripciones(){this.suscripcionesGuardadas=JSON.parse(localStorage.getItem("suscripciones")||"[]")}resetForm(){this.nombre="",this.fecha=new Date().toISOString().substring(0,10),this.tipoSuscripcion="",this.metodoPago=""}onNombreChange(r){let n=r.target;this.nombre=n.value}onFechaChange(r){let n=r.target;this.fecha=n.value}onTipoSuscripcionChange(r){let n=r.target;this.tipoSuscripcion=n.value}onMetodoPagoChange(r){let n=r.target;this.metodoPago=n.value}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["app-login-suscp"]],decls:32,vars:2,consts:[[1,"login-container"],["id","login-suscp-container",1,"login-box"],[3,"submit"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","required","",3,"input"],["for","fecha"],["type","date","id","fecha","required","",3,"input"],["for","tipoSuscripcion"],["id","tipoSuscripcion","required","",3,"change"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","metodoPago"],["id","metodoPago","required","",3,"change"],["value","Tarjeta"],["value","Transferencia"],["type","submit"],["class","mensaje-guardado",4,"ngIf"],[3,"value"],[1,"mensaje-guardado"]],template:function(n,o){n&1&&(e(0,"body")(1,"div",0)(2,"div",1)(3,"form",2),c("submit",function(l){return o.onSubmit(l)}),e(4,"div",3)(5,"label",4),i(6,"Nombre:"),t(),e(7,"input",5),c("input",function(l){return o.onNombreChange(l)}),t()(),e(8,"div",3)(9,"label",6),i(10,"Fecha:"),t(),e(11,"input",7),c("input",function(l){return o.onFechaChange(l)}),t()(),e(12,"div",3)(13,"label",8),i(14,"Tipo de Suscripci\xF3n:"),t(),e(15,"select",9),c("change",function(l){return o.onTipoSuscripcionChange(l)}),e(16,"option",10),i(17,"Selecciona una opci\xF3n"),t(),E(18,re,2,2,"option",11),t()(),e(19,"div",3)(20,"label",12),i(21,"M\xE9todo de Pago:"),t(),e(22,"select",13),c("change",function(l){return o.onMetodoPagoChange(l)}),e(23,"option",10),i(24,"Selecciona un m\xE9todo"),t(),e(25,"option",14),i(26,"Tarjeta"),t(),e(27,"option",15),i(28,"Transferencia"),t()()(),e(29,"button",16),i(30,"Guardar Suscripci\xF3n"),t()(),E(31,oe,2,0,"div",17),t()()()),n&2&&(u(18),h("ngForOf",o.suscripciones),u(13),h("ngIf",o.mensajeGuardado))},dependencies:[w,J],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%]{background:radial-gradient(circle at 30% 40%,#00ffb2,transparent 40%),radial-gradient(circle at 60% 40%,#00ccff,transparent 50%),radial-gradient(circle at 80% 60%,#002f4e,transparent 50%),radial-gradient(circle at 50% 60%,#0b0b0b,#0b0b0b 70%);background-color:#000;background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;margin:0;padding:0}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.login-box[_ngcontent-%COMP%]{background-color:#1e1e1e;padding:30px;border-radius:10px;box-shadow:0 4px 8px #00000080;color:#fff;width:300px}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;text-transform:uppercase;font-size:12px;color:silver}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:20px;border:none;border-radius:5px;background-color:#444;color:#fff}input[_ngcontent-%COMP%]::placeholder{color:#bbb}button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#0c6;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-top:10px;width:100%}button[_ngcontent-%COMP%]:hover{background-color:#095}#historial-section[_ngcontent-%COMP%]{margin-top:20px;background-color:#1e1e1e;padding:20px;border-radius:10px;box-shadow:0 4px 8px #00000080}#historial-title[_ngcontent-%COMP%]{color:#fff;margin-bottom:15px}.section-table[_ngcontent-%COMP%]{margin-top:10px}.table-style[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.table-style[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-style[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 15px;border:1px solid #444}.table-style[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#444}.table-style[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#2b2b2b;text-align:left}.table-style[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#555}.mensaje-guardado[_ngcontent-%COMP%]{color:#4caf50;margin-top:10px;text-align:center}"]})};var se=[{path:"compra",component:I},{path:"principal",component:k},{path:"series",component:j},{path:"historial",component:N},{path:"",component:R},{path:"formulario",component:T},{path:"subscrip",component:G},{path:"pago",component:H}],D=class s{static \u0275fac=function(n){return new(n||s)};static \u0275mod=f({type:s});static \u0275inj=g({imports:[B.forRoot(se),B]})};var V=class s{static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["app-root"]],decls:1,vars:0,template:function(n,o){n&1&&d(0,"router-outlet")},dependencies:[X]})};var ae={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},dt=W($({},ae),{"[class.ng-submitted]":"isSubmitted"});var le=new q("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";var ce=(()=>{class s{static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275mod=f({type:s})}static{this.\u0275inj=g({})}}return s})();var Q=(()=>{class s{static withConfig(n){return{ngModule:s,providers:[{provide:le,useValue:n.callSetDisabledState??K}]}}static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275mod=f({type:s})}static{this.\u0275inj=g({imports:[ce]})}}return s})();var L=class s{static \u0275fac=function(n){return new(n||s)};static \u0275mod=f({type:s});static \u0275inj=g({imports:[Y]})};var U=class s{static \u0275fac=function(n){return new(n||s)};static \u0275mod=f({type:s,bootstrap:[V]});static \u0275inj=g({providers:[Z()],imports:[F,D,L]})};var z=class s{static \u0275fac=function(n){return new(n||s)};static \u0275mod=f({type:s,bootstrap:[V]});static \u0275inj=g({imports:[F,D,U,Q]})};export{z as a};
