(this["webpackJsonpreact-projects-master-final"]=this["webpackJsonpreact-projects-master-final"]||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(2),i=a.n(n),r=a(12),s=a.n(r),o=a(3),l=[{id:1,name:"Bertie Yates",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"},{id:2,name:"Hester Hogan",age:32,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},{id:3,name:"Larry Little",age:36,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},{id:4,name:"Sean Walsh",age:34,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},{id:5,name:"Lola Gardner",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}],j=function(e){var t=e.people;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){var t=e.id,a=e.name,n=e.age,i=e.image;return Object(c.jsxs)("article",{className:"person",children:[Object(c.jsx)("img",{src:i,alt:a}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:a}),Object(c.jsxs)("p",{children:[n," years"]})]})]},t)}))})};a(21);var u=function(){var e=Object(n.useState)(l),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(c.jsx)("main",{children:Object(c.jsxs)("section",{className:"container",children:[Object(c.jsxs)("h3",{children:[a.length," birthdays today!"]}),Object(c.jsx)(j,{people:a}),Object(c.jsx)("button",{onClick:function(){return i([])},children:"clear all"})]})})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))},b=a(5),m=a.n(b),h=a(9),p=function(){return Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("h1",{children:"loading..."})})},g=a(7),f=function(e){var t=e.id,a=e.image,i=e.info,r=e.name,s=e.price,l=e.removeTour,j=Object(n.useState)(!1),u=Object(o.a)(j,2),d=u[0],b=u[1];return Object(c.jsxs)("article",{className:"single-tour",children:[Object(c.jsx)("img",{src:a,alt:r}),Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"tour-info",children:[Object(c.jsx)("h4",{children:r}),Object(c.jsxs)("h4",{className:"tour-price",children:["$",s]})]}),Object(c.jsxs)("p",{children:[d?i:"".concat(i.substring(0,200),"..."),Object(c.jsx)("button",{onClick:function(){return b(!d)},children:d?"show less":"  read more"})]}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return l(t)},children:"not interested"})]})]})},O=function(e){var t=e.tours,a=e.removeTour;return Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"our tours"}),Object(c.jsx)("div",{className:"underline"})]}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(f,Object(g.a)(Object(g.a)({},e),{},{removeTour:a}),e.id)}))})]})};a(23);var x=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),s=Object(o.a)(r,2),l=s[0],j=s[1],u=function(){var e=Object(h.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fetch("https://course-api.netlify.app/api/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,i(!1),j(a),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),a?Object(c.jsx)("main",{children:Object(c.jsx)(p,{})}):0===l.length?Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"no tours left"}),Object(c.jsx)("button",{className:"btn",onClick:function(){return u()},children:"refresh"})]})}):Object(c.jsx)("main",{children:Object(c.jsx)(O,{tours:l,removeTour:function(e){var t=l.filter((function(t){return t.id!==e}));j(t)}})})},v=[{id:1,name:"susan smith",job:"web developer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},{id:2,name:"anna johnson",job:"web designer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",text:"Helvetica artisan kinfolk thundercats lumber blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},{id:3,name:"peter jones",job:"intern",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},{id:4,name:"bill anderson",job:"the boss",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}],y=a(4),k=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],i=t[1],r=v[a],s=r.name,l=r.job,j=r.image,u=r.text,d=function(e){return e>v.length-1?0:e<0?v.length-1:e};return Object(c.jsxs)("article",{className:"review",children:[Object(c.jsxs)("div",{className:"img-container1",children:[Object(c.jsx)("img",{src:j,alt:s,className:"person-img"}),Object(c.jsx)("span",{className:"quote-icon",children:Object(c.jsx)(y.d,{})})]}),Object(c.jsx)("h4",{className:"author",children:s}),Object(c.jsx)("p",{className:"job",children:l}),Object(c.jsx)("p",{className:"info",children:u}),Object(c.jsxs)("div",{className:"button-container1",children:[Object(c.jsx)("button",{className:"prev-btn",onClick:function(){i((function(e){return d(e-1)}))},children:Object(c.jsx)(y.b,{})}),Object(c.jsx)("button",{className:"next-btn",onClick:function(){i((function(e){return d(e+1)}))},children:Object(c.jsx)(y.c,{})})]}),Object(c.jsx)("button",{className:"random-btn",onClick:function(){var e=Math.floor(Math.random()*v.length);e===a&&(e=a+1),i(d(e))},children:"surprise me"})]})};a(24);var N=function(){return Object(c.jsx)("main",{children:Object(c.jsxs)("section",{className:"container1",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"our reviews"}),Object(c.jsx)("div",{className:"underline"})]}),Object(c.jsx)(k,{})]})})},q=[{id:1,title:"Do I have to allow the use of cookies?",info:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},{id:2,title:"How do I change my My Page password?",info:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."},{id:3,title:"What is BankID?",info:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."},{id:4,title:"Whose birth number can I use?",info:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."},{id:5,title:"When do I recieve a password ordered by letter?",info:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan "}],w=a(13),S=a(14),C=function(e){var t=e.title,a=e.info,i=Object(n.useState)(!1),r=Object(o.a)(i,2),s=r[0],l=r[1];return Object(c.jsxs)("article",{className:"question",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{children:t}),Object(c.jsx)("button",{className:"btn1",onClick:function(){return l(!s)},children:s?Object(c.jsx)(w.a,{}):Object(c.jsx)(S.a,{})})]}),s&&Object(c.jsx)("p",{children:a})]})};a(25);var I=function(){var e=Object(n.useState)(q),t=Object(o.a)(e,2),a=t[0];return t[1],Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"container3",children:[Object(c.jsx)("h3",{children:"questions and answers about login"}),Object(c.jsx)("section",{className:"info",children:a.map((function(e){return Object(c.jsx)(C,Object(g.a)({},e),e.id)}))})]})})},_=a(15),z=function(e){var t=e.items;return Object(c.jsx)("div",{className:"section-center",children:t.map((function(e){var t=e.id,a=e.title,n=e.img,i=e.desc,r=e.price;return Object(c.jsxs)("article",{className:"menu-item",children:[Object(c.jsx)("img",{src:n,alt:a,className:"photo"}),Object(c.jsxs)("div",{className:"item-info",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{children:a}),Object(c.jsxs)("h4",{className:"price",children:["$",r]})]}),Object(c.jsx)("p",{className:"item-text",children:i})]})]},t)}))})},E=function(e){var t=e.categories,a=e.filterItems;return Object(c.jsx)("div",{className:"btn-container1",children:t.map((function(e,t){return Object(c.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return a(e)},children:e},t)}))})},L=[{id:1,title:"buttermilk pancakes",category:"breakfast",price:15.99,img:"./images/item-1.jpeg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"diner double",category:"lunch",price:13.99,img:"./images/item-2.jpeg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"godzilla milkshake",category:"shakes",price:6.99,img:"./images/item-3.jpeg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"country delight",category:"breakfast",price:20.99,img:"./images/item-4.jpeg",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"egg attack",category:"lunch",price:22.99,img:"./images/item-5.jpeg",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"oreo dream",category:"shakes",price:18.99,img:"./images/item-6.jpeg",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"bacon overflow",category:"breakfast",price:8.99,img:"./images/item-7.jpeg",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"american classic",category:"lunch",price:12.99,img:"./images/item-8.jpeg",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"quarantine buddy",category:"shakes",price:16.99,img:"./images/item-9.jpeg",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}],F=(a(26),["all"].concat(Object(_.a)(new Set(L.map((function(e){return e.category}))))));var M=function(){var e=Object(n.useState)(L),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(F),s=Object(o.a)(r,2),l=s[0];return s[1],Object(c.jsx)("main",{children:Object(c.jsxs)("section",{className:"menu section",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"our menu"}),Object(c.jsx)("div",{className:"underline1"})]}),Object(c.jsx)(E,{categories:l,filterItems:function(e){if("all"!==e){var t=L.filter((function(t){return t.category===e}));i(t)}else i(L)}}),Object(c.jsx)(z,{items:a})]})})};a(27);var P=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),s=Object(o.a)(r,2),l=s[0],j=s[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),b=d[0],p=d[1],g=function(){var e=Object(h.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.netlify.app/api/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,j(a),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){g()}),[]),a)return Object(c.jsx)("section",{className:"section loading",children:Object(c.jsx)("h1",{children:"Loading..."})});var f=l[b],O=f.company,x=f.dates,v=f.duties,k=f.title;return Object(c.jsxs)("section",{className:"section1",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"experience"}),Object(c.jsx)("div",{className:"underline"})]}),Object(c.jsxs)("div",{className:"jobs-center",children:[Object(c.jsx)("div",{className:"btn-container",children:l.map((function(e,t){return Object(c.jsx)("button",{onClick:function(){return p(t)},className:"job-btn ".concat(t===b&&"active-btn"),children:e.company},e.id)}))}),Object(c.jsxs)("article",{className:"job-info",children:[Object(c.jsx)("h3",{children:k}),Object(c.jsx)("h4",{children:O}),Object(c.jsx)("p",{className:"job-date",children:x}),v.map((function(e,t){return Object(c.jsxs)("div",{className:"job-desc",children:[Object(c.jsx)(y.a,{className:"job-icon"}),Object(c.jsx)("p",{children:e})]},t)}))]})]}),Object(c.jsx)("button",{type:"button",className:"btn",children:"more info"})]})},B=a(11),T=[{id:1,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",name:"maria ferguson",title:"office manager",quote:"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."},{id:2,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",name:"john doe",title:"regular guy",quote:"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."},{id:3,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",name:"peter smith",title:"product designer",quote:"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."},{id:4,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",name:"susan andersen",title:"the boss",quote:"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. "}];a(28);var D=function(){var e=Object(n.useState)(T),t=Object(o.a)(e,2),a=t[0],i=(t[1],Object(n.useState)(0)),r=Object(o.a)(i,2),s=r[0],l=r[1];return Object(n.useEffect)((function(){console.log(a);var e=a.length-1;s<0&&l(e),s>e&&l(0)}),[s,a]),Object(n.useEffect)((function(){var e=setInterval((function(){l(s+1)}),5e3);return function(){clearInterval(e)}}),[s]),Object(c.jsxs)("section",{className:"section1",children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsxs)("h2",{children:[Object(c.jsx)("span",{children:"/"}),"reviews"]})}),Object(c.jsxs)("div",{className:"section-center1",children:[a.map((function(e,t){var n=e.id,i=e.image,r=e.name,o=e.title,l=e.quote,j="nextSlide";return t===s&&(j="activeSlide"),(t===s-1||0===s&&t===a.length-1)&&(j="lastSlide"),Object(c.jsxs)("article",{className:"current ".concat(j),children:[Object(c.jsx)("img",{src:i,alt:r,className:"person-img1"}),Object(c.jsx)("h4",{className:"test",children:r}),Object(c.jsx)("p",{className:"title",children:o}),Object(c.jsx)("p",{className:"text",children:l}),Object(c.jsx)(y.d,{className:"icon"})]},n)})),Object(c.jsx)("button",{className:"prev",onClick:function(){return l(s-1)},children:Object(c.jsx)(B.a,{})}),Object(c.jsx)("button",{className:"next",onClick:function(){return l(s+1)},children:Object(c.jsx)(B.b,{})})]})]})};s.a.render(Object(c.jsxs)(i.a.StrictMode,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(x,{}),Object(c.jsx)(N,{}),Object(c.jsx)(I,{}),Object(c.jsx)(M,{}),Object(c.jsx)(P,{}),Object(c.jsx)(D,{})]}),document.getElementById("root")),d()}},[[29,1,2]]]);
//# sourceMappingURL=main.feb6b5d5.chunk.js.map