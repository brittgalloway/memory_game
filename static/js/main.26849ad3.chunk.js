(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"name":"brittney","img":"images/brittney.webp","isClicked":false},{"id":2,"name":"crystal","img":"images/crystal.webp","isClicked":false},{"id":3,"name":"damhan1","img":"images/damhan1.webp","isClicked":false},{"id":4,"name":"damhan2","img":"images/damhan2.webp","isClicked":false},{"id":5,"name":"felicity1","img":"images/felicity1.webp","isClicked":false},{"id":6,"name":"felicity2","img":"images/felicity2.webp","isClicked":false},{"id":7,"name":"harmony1","img":"images/harmony1.webp","isClicked":false},{"id":8,"name":"harmony2","img":"images/harmony2.webp","isClicked":false},{"id":9,"name":"joy1","img":"images/joy1.webp","isClicked":false},{"id":10,"name":"joy2","img":"images/joy2.webp","isClicked":false},{"id":11,"name":"love1","img":"images/love1.webp","isClicked":false},{"id":12,"name":"love2","img":"images/love2.webp","isClicked":false},{"id":13,"name":"nirvana1","img":"images/nirvana1.webp","isClicked":false},{"id":14,"name":"nirvana2","img":"images/nirvana2.webp","isClicked":false},{"id":15,"name":"tranquility1","img":"images/tranquility1.webp","isClicked":false}]')},11:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(4),r=t.n(s),l=(t(16),t(8)),m=t(5),c=t(6),o=t(9),d=t(7),g=t(10);t(3);var f=function(e){var a=e.score,t=e.topScore;return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("a",{className:"navbar-item",href:"https://sleepygallows.com/"},n.a.createElement("img",{src:"/memory_game/images/sg_logo.webp",alt:"Sleepy Gallows Logo"})),n.a.createElement("h1",{className:"title is-1 navbar-item"},"Memory Game"),n.a.createElement("h2",{className:"subtitle navbar-item "},"Score:",a," | Top Score:",t))),n.a.createElement("section",null,n.a.createElement("img",{id:"headImg",alt:"plh cover",src:"/memory_game/images/plhGame.svg"})))};var u=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"content has-text-centered"},n.a.createElement("p",null,n.a.createElement("strong",null,"Brittney Galloway")," |",n.a.createElement("a",{href:"https://sleepygallows.com/for-peace-love-and-harmony"},"For Peace, Love, and Harmony"),"| Made with REACT")))};var p=function(e){var a=e.img,t=e.name,i=e.id,s=e.handleClick;return e.isClicked,n.a.createElement("div",{className:"column is-one-fifth    "},n.a.createElement("div",{className:"box"},n.a.createElement("figure",null,n.a.createElement("img",{src:a,alt:t,id:i,onClick:s}))))},h=t(1),v=function(e){function a(){var e,t;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={images:h,score:0,topScore:0},t.handleClick=function(e){var a=e.target.id,i=t.state.images.find((function(e){return e.id===parseInt(a)}));if(i.isClicked)if(t.state.topScore<t.state.score){t.state.topScore=t.state.score;var n=t.state.topScore;t.makeFalse(),t.setState({images:t.shuffleArray(h),score:0,topScore:n})}else{t.makeFalse();var s=t.state.topScore;t.setState({images:t.shuffleArray(h),score:0,topScore:s})}else{i.isClicked=!0;var r=t.state.images.filter((function(e){return e.id!==parseInt(a)})),m=[i].concat(Object(l.a)(r)),c=t.state.score+=1;t.setState({images:t.shuffleArray(m),score:c}),15===t.state.score&&alert("you win!")}},t.makeFalse=function(){t.state.images.map((function(e){return!0===e.isClicked&&(e.isClicked=!1),e.isClicked}))},t.shuffleArray=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[t],e[t]=i,a--}return e},t}return Object(g.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement("div",{className:"container"},n.a.createElement("section",{id:"images"},n.a.createElement("div",{className:"columns is-multiline is-mobile"},this.state.images.map((function(a){return n.a.createElement(p,{key:a.id,id:a.id,img:a.img,name:a.name,handleClick:e.handleClick,isClicked:a.isClicked})}))))),n.a.createElement(u,null))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.26849ad3.chunk.js.map