(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(13),r=n.n(a),s=n(17),o=n.n(s),c=n(18),i=n.n(c),l=n(19),u=n.n(l),j=n(12),m=n.n(j),d=n(2),h=n.n(d),f=(n(255),n(1)),p=n.n(f),y=n(212),g=n(5),b=n(15),v=n(6);function k(){return p.a.createElement(v.a,{style:w.container},p.a.createElement(b.a,{style:w.text},"Getting the weather info..."))}var w=g.a.create({container:{flex:1,justifyContent:"center",paddingHorizontal:30,paddingVertical:100,backgroundColor:"#ecf0f1"},text:{textAlign:"center",color:"black",fontSize:30}}),_=n(0),C=n.n(_),E=n(45);function x(e){var t=e.hourlyData.map((function(e){return p.a.createElement(v.a,{style:e.index==C()().format("H")?z.hourCardNow:z.hourCard,key:e.index},p.a.createElement(v.a,{style:z.hourCard__hour},p.a.createElement(b.a,null,e.index.toString().padStart(2,"0"))),p.a.createElement(v.a,{style:z.hourCard__temp},p.a.createElement(E.a,{style:z.hourCard__icon,source:{uri:e.tempYIcon}}),p.a.createElement(b.a,null,e.tempY,"\xb0")),p.a.createElement(v.a,{style:z.hourCard__diff},p.a.createElement(b.a,null,e.diffYT)),p.a.createElement(v.a,{style:z.hourCard__temp},p.a.createElement(E.a,{style:z.hourCard__icon,source:{uri:e.tempCIcon}}),p.a.createElement(b.a,null,e.tempC,"\xb0")),p.a.createElement(v.a,{style:z.hourCard__diff},p.a.createElement(b.a,null,e.diffTT)),p.a.createElement(v.a,{style:z.hourCard__temp},p.a.createElement(E.a,{style:z.hourCard__icon,source:{uri:e.tempTIcon}}),p.a.createElement(b.a,null,e.tempT,"\xb0")),p.a.createElement(v.a,{style:z.hourCard__hour},p.a.createElement(b.a,null,e.index.toString().padStart(2,"0"))))}));return p.a.createElement(v.a,{style:z.container},p.a.createElement(v.a,{style:z.header},p.a.createElement(b.a,{style:z.header__title},"beforecast")),p.a.createElement(v.a,{style:z.subcontainer},t))}var z=g.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#E5E5E5"},header:{},header__title:{fontSize:30,marginTop:10},subcontainer:{flex:1,justifyContent:"space-between",alignItems:"center",margin:10,height:"70%",borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.22,shadowRadius:2.22,elevation:3},hourCard:{flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#FFFFFF",width:400,marginVertical:.5},hourCardNow:{flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#FFFFFF",width:400,marginVertical:.5,borderTopWidth:5,borderBottomWidth:5,borderColor:"#EFEAF7"},hourCard__hour:{flex:1,alignItems:"center"},hourCard__temp:{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},hourCard__diff:{flex:1,alignItems:"center"},hourCard__icon:{width:20,height:20}}),M=n(49),F=n(44),D=n.n(F);function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var I="0aedc667cde644b3b7042416212705",T=function(e){i()(n,e);var t=Y(n);function n(){var e;r()(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0},e.getWeather=function(t,n){var a,r,s,o,c,i,l;return h.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,h.a.awrap(D.a.get("https://api.weatherapi.com/v1/history.json?key="+I+"&q="+t+","+n+"&dt="+C()().subtract(1,"days").format("YYYY-MM-DD")));case 2:return a=u.sent,console.log(a.data.forecast.forecastday[0].hour.map((function(e){return e.temp_c}))),u.next=6,h.a.awrap(D.a.get("https://api.weatherapi.com/v1/history.json?key="+I+"&q="+t+","+n+"&dt="+C()().format("YYYY-MM-DD")));case 6:return r=u.sent,console.log(r.data.forecast.forecastday[0].hour.map((function(e){return e.temp_c}))),u.next=10,h.a.awrap(D.a.get("https://api.weatherapi.com/v1/forecast.json?key="+I+"&q="+t+","+n+"&days=2&aqi=no&alerts=no"));case 10:s=u.sent,console.log(s.data.forecast.forecastday[1].hour.map((function(e){return e.temp_c}))),o=a.data.forecast.forecastday[0].hour.map((function(e){return{temp:e.temp_c,icon:"https:"+e.condition.icon}})),c=r.data.forecast.forecastday[0].hour.map((function(e){return{temp:e.temp_c,icon:"https:"+e.condition.icon}})),i=s.data.forecast.forecastday[1].hour.map((function(e){return{temp:e.temp_c,icon:"https:"+e.condition.icon}})),l=o.map((function(e,t){return{index:t,tempY:Math.round(e.temp),tempYIcon:e.icon,diffYT:Math.round(c[t].temp-e.temp)<0?Math.round(c[t].temp-e.temp)+"\xb0":0===Math.round(c[t].temp-e.temp)?"=":"+"+Math.round(c[t].temp-e.temp)+"\xb0",tempC:Math.round(c[t].temp),tempCIcon:c[t].icon,diffTT:Math.round(i[t].temp-c[t].temp)<0?Math.round(i[t].temp-c[t].temp):0===Math.round(i[t].temp-c[t].temp)?"=":"+"+Math.round(i[t].temp-c[t].temp),tempT:Math.round(i[t].temp),tempTIcon:i[t].icon}})),console.log(l),e.setState({isLoading:!1,hourlyData:l});case 18:case"end":return u.stop()}}),null,null,null,Promise)},e.getLocation=function(){var t,n,a,r;return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,h.a.awrap(M.b());case 3:return s.next=5,h.a.awrap(M.a());case 5:t=s.sent,n=t.coords,a=n.latitude,r=n.longitude,e.getWeather(a,r),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),y.a.alert("Can't find your location","Allow the permission");case 15:case"end":return s.stop()}}),null,null,[[0,12]],Promise)},e}return o()(n,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.hourlyData;return t?p.a.createElement(k,null):p.a.createElement(x,{hourlyData:n})}}]),n}(p.a.Component)},216:function(e,t,n){n(217),e.exports=n(254)},217:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/beforecast/expo-service-worker.js",{scope:"/beforecast/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},228:function(e,t,n){var a={"./af":52,"./af.js":52,"./ar":53,"./ar-dz":54,"./ar-dz.js":54,"./ar-kw":55,"./ar-kw.js":55,"./ar-ly":56,"./ar-ly.js":56,"./ar-ma":57,"./ar-ma.js":57,"./ar-sa":58,"./ar-sa.js":58,"./ar-tn":59,"./ar-tn.js":59,"./ar.js":53,"./az":60,"./az.js":60,"./be":61,"./be.js":61,"./bg":62,"./bg.js":62,"./bm":63,"./bm.js":63,"./bn":64,"./bn-bd":65,"./bn-bd.js":65,"./bn.js":64,"./bo":66,"./bo.js":66,"./br":67,"./br.js":67,"./bs":68,"./bs.js":68,"./ca":69,"./ca.js":69,"./cs":70,"./cs.js":70,"./cv":71,"./cv.js":71,"./cy":72,"./cy.js":72,"./da":73,"./da.js":73,"./de":74,"./de-at":75,"./de-at.js":75,"./de-ch":76,"./de-ch.js":76,"./de.js":74,"./dv":77,"./dv.js":77,"./el":78,"./el.js":78,"./en-au":79,"./en-au.js":79,"./en-ca":80,"./en-ca.js":80,"./en-gb":81,"./en-gb.js":81,"./en-ie":82,"./en-ie.js":82,"./en-il":83,"./en-il.js":83,"./en-in":84,"./en-in.js":84,"./en-nz":85,"./en-nz.js":85,"./en-sg":86,"./en-sg.js":86,"./eo":87,"./eo.js":87,"./es":88,"./es-do":89,"./es-do.js":89,"./es-mx":90,"./es-mx.js":90,"./es-us":91,"./es-us.js":91,"./es.js":88,"./et":92,"./et.js":92,"./eu":93,"./eu.js":93,"./fa":94,"./fa.js":94,"./fi":95,"./fi.js":95,"./fil":96,"./fil.js":96,"./fo":97,"./fo.js":97,"./fr":98,"./fr-ca":99,"./fr-ca.js":99,"./fr-ch":100,"./fr-ch.js":100,"./fr.js":98,"./fy":101,"./fy.js":101,"./ga":102,"./ga.js":102,"./gd":103,"./gd.js":103,"./gl":104,"./gl.js":104,"./gom-deva":105,"./gom-deva.js":105,"./gom-latn":106,"./gom-latn.js":106,"./gu":107,"./gu.js":107,"./he":108,"./he.js":108,"./hi":109,"./hi.js":109,"./hr":110,"./hr.js":110,"./hu":111,"./hu.js":111,"./hy-am":112,"./hy-am.js":112,"./id":113,"./id.js":113,"./is":114,"./is.js":114,"./it":115,"./it-ch":116,"./it-ch.js":116,"./it.js":115,"./ja":117,"./ja.js":117,"./jv":118,"./jv.js":118,"./ka":119,"./ka.js":119,"./kk":120,"./kk.js":120,"./km":121,"./km.js":121,"./kn":122,"./kn.js":122,"./ko":123,"./ko.js":123,"./ku":124,"./ku.js":124,"./ky":125,"./ky.js":125,"./lb":126,"./lb.js":126,"./lo":127,"./lo.js":127,"./lt":128,"./lt.js":128,"./lv":129,"./lv.js":129,"./me":130,"./me.js":130,"./mi":131,"./mi.js":131,"./mk":132,"./mk.js":132,"./ml":133,"./ml.js":133,"./mn":134,"./mn.js":134,"./mr":135,"./mr.js":135,"./ms":136,"./ms-my":137,"./ms-my.js":137,"./ms.js":136,"./mt":138,"./mt.js":138,"./my":139,"./my.js":139,"./nb":140,"./nb.js":140,"./ne":141,"./ne.js":141,"./nl":142,"./nl-be":143,"./nl-be.js":143,"./nl.js":142,"./nn":144,"./nn.js":144,"./oc-lnc":145,"./oc-lnc.js":145,"./pa-in":146,"./pa-in.js":146,"./pl":147,"./pl.js":147,"./pt":148,"./pt-br":149,"./pt-br.js":149,"./pt.js":148,"./ro":150,"./ro.js":150,"./ru":151,"./ru.js":151,"./sd":152,"./sd.js":152,"./se":153,"./se.js":153,"./si":154,"./si.js":154,"./sk":155,"./sk.js":155,"./sl":156,"./sl.js":156,"./sq":157,"./sq.js":157,"./sr":158,"./sr-cyrl":159,"./sr-cyrl.js":159,"./sr.js":158,"./ss":160,"./ss.js":160,"./sv":161,"./sv.js":161,"./sw":162,"./sw.js":162,"./ta":163,"./ta.js":163,"./te":164,"./te.js":164,"./tet":165,"./tet.js":165,"./tg":166,"./tg.js":166,"./th":167,"./th.js":167,"./tk":168,"./tk.js":168,"./tl-ph":169,"./tl-ph.js":169,"./tlh":170,"./tlh.js":170,"./tr":171,"./tr.js":171,"./tzl":172,"./tzl.js":172,"./tzm":173,"./tzm-latn":174,"./tzm-latn.js":174,"./tzm.js":173,"./ug-cn":175,"./ug-cn.js":175,"./uk":176,"./uk.js":176,"./ur":177,"./ur.js":177,"./uz":178,"./uz-latn":179,"./uz-latn.js":179,"./uz.js":178,"./vi":180,"./vi.js":180,"./x-pseudo":181,"./x-pseudo.js":181,"./yo":182,"./yo.js":182,"./zh-cn":183,"./zh-cn.js":183,"./zh-hk":184,"./zh-hk.js":184,"./zh-mo":185,"./zh-mo.js":185,"./zh-tw":186,"./zh-tw.js":186};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=228}},[[216,1,2]]]);
//# sourceMappingURL=app.8c54c88c.chunk.js.map