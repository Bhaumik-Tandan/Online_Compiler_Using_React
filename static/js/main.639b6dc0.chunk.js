(this.webpackJsonpcode_edit=this.webpackJsonpcode_edit||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var o,i,a,s=n(1),c=n.n(s),h=n(17),l=n.n(h),d=n(5),j=n(6),r=n(3),b=n(8),p=n(7),u=n(9),v=n.n(u),O=n(0),m=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{name:"data",action:"https://pastebin.com/api/api_post.php",method:"post",children:[Object(O.jsx)("input",{type:"hidden",name:"api_dev_key",value:"Q27q0AJZD9-bwo-wui4YemOqPPVEdg-R"}),Object(O.jsx)("input",{type:"hidden",name:"api_paste_name",value:"Untitled"}),Object(O.jsx)("input",{type:"hidden",name:"api_paste_code",value:this.props.doc}),Object(O.jsx)("input",{type:"hidden",name:"api_paste_private",value:"0"}),Object(O.jsx)("input",{type:"hidden",name:"api_paste_expire_date",placeholder:"10000M"}),Object(O.jsx)("input",{type:"hidden",name:"api_paste_format",value:"html5"}),Object(O.jsx)("input",{type:"hidden",name:"api_option",value:"paste"}),Object(O.jsx)("button",{type:"submit",value:"Create paste",children:"Share"})]})})}}]),n}(s.Component),g=(n(30),n(31),n(32),n(33),n(34),n(35),n(36),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).onChangeh=s.onChangeh.bind(Object(r.a)(s)),s.onChangec=s.onChangec.bind(Object(r.a)(s)),s.onChangej=s.onChangej.bind(Object(r.a)(s)),s.onLoadh=s.onLoadh.bind(Object(r.a)(s)),s.onLoadc=s.onLoadc.bind(Object(r.a)(s)),s.onLoadj=s.onLoadj.bind(Object(r.a)(s)),o=void 0==localStorage["19BIT0292html"]?"":localStorage["19BIT0292html"],i=void 0==localStorage["19BIT0292css"]?"":localStorage["19BIT0292css"],a=void 0==localStorage["19BIT0292js"]?"":localStorage["19BIT0292js"],s.state={html:o,css:i,js:a},s}return Object(j.a)(n,[{key:"onLoadh",value:function(e){e.setValue(this.state.html)}},{key:"onLoadc",value:function(e){e.setValue(this.state.css)}},{key:"onLoadj",value:function(e){e.setValue(this.state.js)}},{key:"onChangeh",value:function(e){localStorage["19BIT0292html"]=e,this.setState({html:e})}},{key:"onChangej",value:function(e){localStorage["19BIT0292js"]=e,this.setState({js:e})}},{key:"onChangec",value:function(e){localStorage["19BIT0292css"]=e,this.setState({css:e})}},{key:"render",value:function(){var e="<html><body>"+this.state.html+"</body><style>"+this.state.css+"</style><script>"+this.state.js+"<\/script></html>";return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{doc:e}),Object(O.jsxs)("div",{style:{position:"absolute",left:"2.5vw",top:"0.5vh",width:"30vw"},children:[Object(O.jsx)("center",{children:Object(O.jsx)("h3",{children:"HTML"})}),Object(O.jsx)(v.a,{style:{border:"0.25vh solid #73AD21",width:"30vw",height:"50vh"},onLoad:this.onLoadh,placeholder:"ASSUME YOU ARE WRITING IN BODY DIRECTLY",mode:"html",theme:"monokai",onChange:this.onChangeh,fontSize:"1.2vw",showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})]}),Object(O.jsxs)("div",{style:{position:"absolute",left:"34.5vw",top:"0.5vh",width:"30vw"},children:[Object(O.jsx)("center",{children:Object(O.jsx)("h3",{children:"CSS"})}),Object(O.jsx)(v.a,{style:{border:"0.25vh solid #73AD21",width:"30vw",height:"50vh"},onLoad:this.onLoadc,onChange:this.onChangec,placeholder:"ASSUME YOU ARE WRITING IN STYLE DIRECTLY",mode:"css",theme:"solarized_dark",fontSize:"1.2vw",showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})]}),Object(O.jsxs)("div",{style:{position:"absolute",left:"66.5vw",top:"0.5vh",width:"30vw"},children:[Object(O.jsx)("center",{children:Object(O.jsx)("h3",{children:"JS"})}),Object(O.jsx)(v.a,{style:{border:"0.25vh solid #73AD21",width:"30vw",height:"50vh"},onLoad:this.onLoadj,onChange:this.onChangej,placeholder:"ASSUME YOU ARE WRITING IN SCRIPT DIRECTLY",mode:"javascript",theme:"terminal",fontSize:"1.2vw",showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})]}),Object(O.jsxs)("div",{style:{position:"absolute",top:"60vh",left:"1vw",right:"1vw"},children:[Object(O.jsx)("center",{children:Object(O.jsx)("h3",{children:"PREVIEW"})}),Object(O.jsx)("iframe",{srcdoc:e,width:"100%"})]})]})}}]),n}(s.Component));l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.639b6dc0.chunk.js.map