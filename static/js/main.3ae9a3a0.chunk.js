(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(3),s=a(6),c=a(5),i=a(4),d=a(0),o=a(1),u=a.n(o),l=a(8),b=a.n(l),j=(a(14),a.p+"static/media/2.4a6c6d67.jpg"),p=a.p+"static/media/01.1285f3d6.jpeg",h=a.p+"static/media/02.8e2b042d.jpeg",g=a.p+"static/media/03.f0fd3246.jpeg",m=a.p+"static/media/04.f553e3e7.jpeg",x=a.p+"static/media/05.4dd2f71b.jpeg",f=a.p+"static/media/06.af793070.jpeg",O=a.p+"static/media/07.d37120a3.jpeg",k=a.p+"static/media/08.0840e380.jpeg",C=a.p+"static/media/09.6d0b252f.jpeg",v=a.p+"static/media/10.30f76a53.jpeg",S=a.p+"static/media/11.13229438.jpeg",q=a.p+"static/media/12.7ebde2f0.jpeg",y=a.p+"static/media/13.110b9bff.jpeg",w=a.p+"static/media/14.b7315114.jpeg",N=a.p+"static/media/15.991438e5.jpeg",B=a.p+"static/media/16.250b370a.jpeg",I=a.p+"static/media/17.cb2c730c.jpeg",P=a.p+"static/media/18.fb204ca3.jpeg",L=a.p+"static/media/19.e5ca4f25.jpeg",M=a.p+"static/media/20.e7a0d4e6.jpeg",V=a.p+"static/media/21.0a9d7251.jpeg",G=a.p+"static/media/22.507fcb6b.jpeg",T=a.p+"static/media/23.d409c3ba.jpeg",z=a.p+"static/media/24.6ee8ebef.jpeg",A=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).changeColor=function(){n.setState({background:" #bc1a1a"})},n.state={background:"",value:null},n.changeColor=n.changeColor.bind(Object(s.a)(n)),n}return Object(n.a)(a,[{key:"changeImage",value:function(e){var t=document.getElementById("giftImage"),a=document.getElementById("giftText");switch(this.props.value){case 1:t.src=p,a.textContent="CanetRock!! Fiestaa!!!";break;case 2:t.src=h,a.textContent="Berlin 2018";break;case 3:t.src=g,a.textContent="Muro de Berlin 2018";break;case 4:t.src=m,a.textContent="Berlin 2018";break;case 5:t.src=x,a.textContent="Muro de Berlin 2018";break;case 6:t.src=f,a.textContent="Always pizzaaaa!!";break;case 7:t.src=O,a.textContent="Horseshoe bend 2016";break;case 8:t.src=k,a.textContent="Monument Valley 2016";break;case 9:t.src=C,a.textContent="Grand Canyon 2016";break;case 10:t.src=v,a.textContent="Las Vegas 2016";break;case 11:t.src=S,a.textContent="Viladecans 2019";break;case 12:t.src=q,a.textContent="Cumple Laura 2019";break;case 13:t.src=y,a.textContent="Alcatraz 2016";break;case 14:t.src=w,a.textContent="Berlin 2018";break;case 15:t.src=N,a.textContent="Berlin 2018";break;case 16:t.src=B,a.textContent="Praga 2018";break;case 17:t.src=I,a.textContent="Congost de Montrebei 2018";break;case 18:t.src=P,a.textContent="Las Vegas 2016";break;case 19:t.src=L,a.textContent="Antilope Canyon 2016";break;case 20:t.src=M,a.textContent="Las Vegas 2016";break;case 21:t.src=V,a.textContent="Praga 2018";break;case 22:t.src=G,a.textContent="Berlin 2018";break;case 23:t.src=T,a.textContent="Praga 2018";break;case 24:t.src=z,a.textContent="Pragra 2018. Bon Nadal!!!!"}}},{key:"render",value:function(){var e=this,t=null;return t=null==this.state.value?this.props.value:this.state.value,Object(d.jsx)("button",{style:{backgroundColor:this.state.background},className:"square",onClick:function(){(new Date).getDate()>=e.props.value?(e.changeColor(),e.changeImage(e.props.value)):alert("Os hemos pillado! No podeis abrir un d\xeda antes de que llegue!")},children:t})}}]),a}(u.a.Component),D=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{style:{color:"black"},id:"giftText",children:"Welcome to your calendar!"}),Object(d.jsx)("img",{src:j,alt:"Gifts",className:"photo",id:"giftImage",style:{alignContent:"center"}})]})}}]),a}(u.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"renderSquare",value:function(e){return Object(d.jsx)(A,{value:e})}},{key:"renderGift",value:function(){return Object(d.jsx)(D,{})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Fullboard",children:[Object(d.jsxs)("div",{className:"weekdays",children:[Object(d.jsx)("li",{children:"Mo"}),Object(d.jsx)("li",{children:"Tu"}),Object(d.jsx)("li",{children:"We"}),Object(d.jsx)("li",{children:"Th"}),Object(d.jsx)("li",{children:"Fr"}),Object(d.jsx)("li",{children:"Sa"}),Object(d.jsx)("li",{children:"Su"})]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(),this.renderSquare(),this.renderSquare()]}),Object(d.jsx)("div",{className:"gift",children:this.renderGift(0)})]})}}]),a}(u.a.Component),F=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=prompt("\xbfPuede indicar su amiga preferida?"),t=prompt("\xbfPuede indicar su amigo mas fan de starwars?");return"Laura"===e&&"Xavi"===t||"laura"===e&&"xavi"===t?Object(d.jsx)("div",{className:"game",children:Object(d.jsx)(E,{})}):(alert("wrong user and password"),Object(d.jsx)("h1",{children:"Wrong ID refresh the web to try again"}))}}]),a}(u.a.Component);b.a.render(Object(d.jsx)(F,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3ae9a3a0.chunk.js.map