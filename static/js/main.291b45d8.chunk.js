(this["webpackJsonpreact-projects-master-final"]=this["webpackJsonpreact-projects-master-final"]||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a(2),c=a.n(r),n=a(12),s=a.n(n),o=a(3),l=[{id:1,name:"Bertie Yates",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"},{id:2,name:"Hester Hogan",age:32,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},{id:3,name:"Larry Little",age:36,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},{id:4,name:"Sean Walsh",age:34,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},{id:5,name:"Lola Gardner",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}],u=function(e){var t=e.people;return Object(i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.id,a=e.name,r=e.age,c=e.image;return Object(i.jsxs)("article",{className:"person",children:[Object(i.jsx)("img",{src:c,alt:a}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:a}),Object(i.jsxs)("p",{children:[r," years"]})]})]},t)}))})};a(21);var m=function(){var e=Object(r.useState)(l),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(i.jsx)("main",{children:Object(i.jsxs)("section",{className:"container",children:[Object(i.jsxs)("h3",{children:[a.length," birthdays today!"]}),Object(i.jsx)(u,{people:a}),Object(i.jsx)("button",{onClick:function(){return c([])},children:"clear all"})]})})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),r(e),c(e),n(e)}))},b=a(5),h=a.n(b),j=a(9),p=function(){return Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("h1",{children:"loading..."})})},g=a(7),f=function(e){var t=e.id,a=e.image,c=e.info,n=e.name,s=e.price,l=e.removeTour,u=Object(r.useState)(!1),m=Object(o.a)(u,2),d=m[0],b=m[1];return Object(i.jsxs)("article",{className:"single-tour",children:[Object(i.jsx)("img",{src:a,alt:n}),Object(i.jsxs)("footer",{children:[Object(i.jsxs)("div",{className:"tour-info",children:[Object(i.jsx)("h4",{children:n}),Object(i.jsxs)("h4",{className:"tour-price",children:["$",s]})]}),Object(i.jsxs)("p",{children:[d?c:"".concat(c.substring(0,200),"..."),Object(i.jsx)("button",{onClick:function(){return b(!d)},children:d?"show less":"  read more"})]}),Object(i.jsx)("button",{className:"delete-btn",onClick:function(){return l(t)},children:"not interested"})]})]})},v=function(e){var t=e.tours,a=e.removeTour;return Object(i.jsxs)("section",{children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{children:"our tours"}),Object(i.jsx)("div",{className:"underline"})]}),Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(f,Object(g.a)(Object(g.a)({},e),{},{removeTour:a}),e.id)}))})]})};a(23);var O=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)([]),s=Object(o.a)(n,2),l=s[0],u=s[1],m=function(){var e=Object(j.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("https://course-api.netlify.app/api/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c(!1),u(a),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),c(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){m()}),[]),a?Object(i.jsx)("main",{children:Object(i.jsx)(p,{})}):0===l.length?Object(i.jsx)("main",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{children:"no tours left"}),Object(i.jsx)("button",{className:"btn",onClick:function(){return m()},children:"refresh"})]})}):Object(i.jsx)("main",{children:Object(i.jsx)(v,{tours:l,removeTour:function(e){var t=l.filter((function(t){return t.id!==e}));u(t)}})})},y=[{id:1,name:"susan smith",job:"web developer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},{id:2,name:"anna johnson",job:"web designer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",text:"Helvetica artisan kinfolk thundercats lumber blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},{id:3,name:"peter jones",job:"intern",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},{id:4,name:"bill anderson",job:"the boss",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}],x=a(4),k=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=y[a],s=n.name,l=n.job,u=n.image,m=n.text,d=function(e){return e>y.length-1?0:e<0?y.length-1:e};return Object(i.jsxs)("article",{className:"review",children:[Object(i.jsxs)("div",{className:"img-container1",children:[Object(i.jsx)("img",{src:u,alt:s,className:"person-img"}),Object(i.jsx)("span",{className:"quote-icon",children:Object(i.jsx)(x.d,{})})]}),Object(i.jsx)("h4",{className:"author",children:s}),Object(i.jsx)("p",{className:"job",children:l}),Object(i.jsx)("p",{className:"info",children:m}),Object(i.jsxs)("div",{className:"button-container1",children:[Object(i.jsx)("button",{className:"prev-btn",onClick:function(){c((function(e){return d(e-1)}))},children:Object(i.jsx)(x.b,{})}),Object(i.jsx)("button",{className:"next-btn",onClick:function(){c((function(e){return d(e+1)}))},children:Object(i.jsx)(x.c,{})})]}),Object(i.jsx)("button",{className:"random-btn",onClick:function(){var e=Math.floor(Math.random()*y.length);e===a&&(e=a+1),c(d(e))},children:"surprise me"})]})};a(24);var w=function(){return Object(i.jsx)("main",{children:Object(i.jsxs)("section",{className:"container1",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{children:"our reviews"}),Object(i.jsx)("div",{className:"underline"})]}),Object(i.jsx)(k,{})]})})},N=[{id:1,title:"Do I have to allow the use of cookies?",info:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},{id:2,title:"How do I change my My Page password?",info:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."},{id:3,title:"What is BankID?",info:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."},{id:4,title:"Whose birth number can I use?",info:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."},{id:5,title:"When do I recieve a password ordered by letter?",info:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan "}],q=a(13),S=a(14),C=function(e){var t=e.title,a=e.info,c=Object(r.useState)(!1),n=Object(o.a)(c,2),s=n[0],l=n[1];return Object(i.jsxs)("article",{className:"question",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h4",{children:t}),Object(i.jsx)("button",{className:"btn1",onClick:function(){return l(!s)},children:s?Object(i.jsx)(q.a,{}):Object(i.jsx)(S.a,{})})]}),s&&Object(i.jsx)("p",{children:a})]})};a(25);var I=function(){var e=Object(r.useState)(N),t=Object(o.a)(e,2),a=t[0];return t[1],Object(i.jsx)("main",{children:Object(i.jsxs)("div",{className:"container3",children:[Object(i.jsx)("h3",{children:"questions and answers about login"}),Object(i.jsx)("section",{className:"info",children:a.map((function(e){return Object(i.jsx)(C,Object(g.a)({},e),e.id)}))})]})})},z=a(15),P=function(e){var t=e.items;return Object(i.jsx)("div",{className:"section-center",children:t.map((function(e){var t=e.id,a=e.title,r=e.img,c=e.desc,n=e.price;return Object(i.jsxs)("article",{className:"menu-item",children:[Object(i.jsx)("img",{src:r,alt:a,className:"photo"}),Object(i.jsxs)("div",{className:"item-info",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h4",{children:a}),Object(i.jsxs)("h4",{className:"price",children:["$",n]})]}),Object(i.jsx)("p",{className:"item-text",children:c})]})]},t)}))})},B=function(e){var t=e.categories,a=e.filterItems;return Object(i.jsx)("div",{className:"btn-container1",children:t.map((function(e,t){return Object(i.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return a(e)},children:e},t)}))})},T=[{id:1,title:"buttermilk pancakes",category:"breakfast",price:15.99,img:"./images/item-1.jpeg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"diner double",category:"lunch",price:13.99,img:"./images/item-2.jpeg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"godzilla milkshake",category:"shakes",price:6.99,img:"./images/item-3.jpeg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"country delight",category:"breakfast",price:20.99,img:"./images/item-4.jpeg",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"egg attack",category:"lunch",price:22.99,img:"./images/item-5.jpeg",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"oreo dream",category:"shakes",price:18.99,img:"./images/item-6.jpeg",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"bacon overflow",category:"breakfast",price:8.99,img:"./images/item-7.jpeg",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"american classic",category:"lunch",price:12.99,img:"./images/item-8.jpeg",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"quarantine buddy",category:"shakes",price:16.99,img:"./images/item-9.jpeg",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}],_=(a(26),["all"].concat(Object(z.a)(new Set(T.map((function(e){return e.category}))))));var F=function(){var e=Object(r.useState)(T),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(_),s=Object(o.a)(n,2),l=s[0];return s[1],Object(i.jsx)("main",{children:Object(i.jsxs)("section",{className:"menu section",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{children:"our menu"}),Object(i.jsx)("div",{className:"underline1"})]}),Object(i.jsx)(B,{categories:l,filterItems:function(e){if("all"!==e){var t=T.filter((function(t){return t.category===e}));c(t)}else c(T)}}),Object(i.jsx)(P,{items:a})]})})};a(27);var M=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)([]),s=Object(o.a)(n,2),l=s[0],u=s[1],m=Object(r.useState)(0),d=Object(o.a)(m,2),b=d[0],p=d[1],g=function(){var e=Object(j.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.netlify.app/api/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(a),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(r.useEffect)((function(){g()}),[]),a)return Object(i.jsx)("section",{className:"section loading",children:Object(i.jsx)("h1",{children:"Loading..."})});var f=l[b],v=f.company,O=f.dates,y=f.duties,k=f.title;return Object(i.jsxs)("section",{className:"section1",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{children:"experience"}),Object(i.jsx)("div",{className:"underline"})]}),Object(i.jsxs)("div",{className:"jobs-center",children:[Object(i.jsx)("div",{className:"btn-container",children:l.map((function(e,t){return Object(i.jsx)("button",{onClick:function(){return p(t)},className:"job-btn ".concat(t===b&&"active-btn"),children:e.company},e.id)}))}),Object(i.jsxs)("article",{className:"job-info",children:[Object(i.jsx)("h3",{children:k}),Object(i.jsx)("h4",{children:v}),Object(i.jsx)("p",{className:"job-date",children:O}),y.map((function(e,t){return Object(i.jsxs)("div",{className:"job-desc",children:[Object(i.jsx)(x.a,{className:"job-icon"}),Object(i.jsx)("p",{children:e})]},t)}))]})]}),Object(i.jsx)("button",{type:"button",className:"btn",children:"more info"})]})},E=a(11),D=[{id:1,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",name:"maria ferguson",title:"office manager",quote:"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."},{id:2,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",name:"john doe",title:"regular guy",quote:"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."},{id:3,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",name:"peter smith",title:"product designer",quote:"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."},{id:4,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",name:"susan andersen",title:"the boss",quote:"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. "}];a(28);var L=function(){var e=Object(r.useState)(D),t=Object(o.a)(e,2),a=t[0],c=(t[1],Object(r.useState)(0)),n=Object(o.a)(c,2),s=n[0],l=n[1];return Object(r.useEffect)((function(){console.log(a);var e=a.length-1;s<0&&l(e),s>e&&l(0)}),[s,a]),Object(r.useEffect)((function(){var e=setInterval((function(){l(s+1)}),5e3);return function(){clearInterval(e)}}),[s]),Object(i.jsxs)("section",{className:"section1",children:[Object(i.jsx)("div",{className:"title",children:Object(i.jsxs)("h2",{children:[Object(i.jsx)("span",{children:"/"}),"reviews"]})}),Object(i.jsxs)("div",{className:"section-center1",children:[a.map((function(e,t){var r=e.id,c=e.image,n=e.name,o=e.title,l=e.quote,u="nextSlide";return t===s&&(u="activeSlide"),(t===s-1||0===s&&t===a.length-1)&&(u="lastSlide"),Object(i.jsxs)("article",{className:"current ".concat(u),children:[Object(i.jsx)("img",{src:c,alt:n,className:"person-img1"}),Object(i.jsx)("h4",{className:"test",children:n}),Object(i.jsx)("p",{className:"title",children:o}),Object(i.jsx)("p",{className:"text",children:l}),Object(i.jsx)(x.d,{className:"icon"})]},r)})),Object(i.jsx)("button",{className:"prev",onClick:function(){return l(s-1)},children:Object(i.jsx)(E.a,{})}),Object(i.jsx)("button",{className:"next",onClick:function(){return l(s+1)},children:Object(i.jsx)(E.b,{})})]})]})},H=["Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee souffl\xe9 chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake drag\xe9e pie.","Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.","Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit\u200b\u200b, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.","Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. ","This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.\nI just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.","Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.","Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.","Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.","Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm."];a(29);var Y=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)([]),s=Object(o.a)(n,2),l=s[0],u=s[1];return Object(i.jsxs)("section",{className:"section-center2",children:[Object(i.jsx)("h3",{className:"h3",children:"tired of boring lorem ipsum?"}),Object(i.jsxs)("form",{className:"lorem-form",onSubmit:function(e){e.preventDefault();var t=parseInt(a);a<=0&&(t=1),a>8&&(t=8),u(H.slice(0,t))},children:[Object(i.jsx)("label",{htmlFor:"amount",children:"paragraphs:"}),Object(i.jsx)("input",{type:"number",name:"amount",id:"amount",value:a,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("button",{className:"btn2",children:"generate"})]}),Object(i.jsx)("article",{className:"lorem-text",children:l.map((function(e,t){return Object(i.jsx)("p",{children:e},t)}))})]})};s.a.render(Object(i.jsxs)(c.a.StrictMode,{children:[Object(i.jsx)(m,{}),Object(i.jsx)(O,{}),Object(i.jsx)(w,{}),Object(i.jsx)(I,{}),Object(i.jsx)(F,{}),Object(i.jsx)(M,{}),Object(i.jsx)(L,{}),Object(i.jsx)(Y,{})]}),document.getElementById("root")),d()}},[[30,1,2]]]);
//# sourceMappingURL=main.291b45d8.chunk.js.map