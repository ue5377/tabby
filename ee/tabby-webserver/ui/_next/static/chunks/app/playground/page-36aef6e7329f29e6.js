(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{99227:function(e,t,n){Promise.resolve().then(n.bind(n,1302)),Promise.resolve().then(n.bind(n,93079))},1302:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eA}});var s=n(57437),l=n(2265);let a=!0,r=(e,t)=>{let n=function(){let[e,t]=l.useState(()=>!a);return l.useEffect(function(){a=!1,t(!0)},[]),e}(),s=e(e=>null==e?void 0:e._hasHydrated),r=e(t),[i,o]=l.useState(n&&s?r:void 0);return l.useEffect(()=>{o(r)},[r]),i};var i=n(94660),o=n(74810),d=n(39311);let c=["_hasHydrated","setHasHydrated","activeChatId"],u={_hasHydrated:!1,chats:void 0,activeChatId:(0,d.x0)()},m=(0,i.Ue)()((0,o.tJ)(e=>({...u,setHasHydrated:t=>{e({_hasHydrated:t})}}),{name:"tabby-chat-storage",partialize:e=>Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!c.includes(t)})),onRehydrateStorage:()=>e=>{e&&e.setHasHydrated(!0)}})),f=(e,t)=>{if(Array.isArray(e)&&t)return e.find(e=>e.id===t)};var h=n(82504),x=n(83390),p=n(16630),v=n(5925),g=n(4913),j=n(88809),b=n(62601);let y=b.env.NEXT_PUBLIC_TABBY_SERVER_URL||"",N=new TextDecoder("utf-8");async function w(e,t){for(let n of e){let{content:e}=JSON.parse(n);t.enqueue(e)}}async function k(e,t){let n="";for(;;){let{value:s,done:l}=await e.read();if(l)break;n+=N.decode(s,{stream:!0});let a=n.split(/\r\n|\n|\r/g);n=a.pop()||"",await w(a,t)}if(n){let e=[n];await w(e,t)}t.close()}m.getState;let C=m.setState,z=e=>{C(()=>({activeChatId:e}))},R=(e,t)=>{let n=null!=e?e:(0,d.x0)();C(e=>({activeChatId:n,chats:[{id:n,title:null!=t?t:"",messages:[],createdAt:new Date,userId:"",path:""},...e.chats||[]]}))},E=e=>{C(t=>{var n;return{activeChatId:(0,d.x0)(),chats:null===(n=t.chats)||void 0===n?void 0:n.filter(t=>t.id!==e)}})},S=()=>{C(()=>({activeChatId:(0,d.x0)(),chats:[]}))},_=(e,t)=>{C(n=>{var s;return{chats:null===(s=n.chats)||void 0===s?void 0:s.map(n=>n.id===e?{...n,messages:t}:n)}})},D=(e,t)=>{C(n=>{var s;return{chats:null===(s=n.chats)||void 0===s?void 0:s.map(n=>n.id===e?{...n,...t}:n)}})};var T=n(16775),I=n(16691),Z=n.n(I),H=n(48975),L=n(82180),O=n(30513),M=n(4523),A=n(77723),F=n(93023),P=n(84168);let V={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},q=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="ABCDEFGHJKLMNPQRSTUVWXY3456789",s="";for(let t=0;t<e;t++)s+=n.charAt(Math.floor(Math.random()*n.length));return t?s.toLowerCase():s},B=(0,l.memo)(e=>{let{language:t,value:n}=e,{isCopied:l,copyToClipboard:a}=(0,A.m)({timeout:2e3});return(0,s.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,s.jsx)("span",{className:"text-xs lowercase",children:t}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsxs)(F.z,{variant:"ghost",className:"hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=V[t]||".file",s="file-".concat(q(3,!0)).concat(e),l=window.prompt("Enter file name",s);if(!l)return;let a=new Blob([n],{type:"text/plain"}),r=URL.createObjectURL(a),i=document.createElement("a");i.download=l,i.href=r,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},size:"icon",children:[(0,s.jsx)(P.Dj,{}),(0,s.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,s.jsxs)(F.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{l||a(n)},children:[l?(0,s.jsx)(P.NO,{}):(0,s.jsx)(P.vU,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,s.jsx)(O.Z,{language:t,style:M.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:n})]})});B.displayName="CodeBlock";var U=n(33555);function Y(e){let{message:t,className:n,handleMessageAction:l,...a}=e;return(0,s.jsxs)("div",{className:(0,d.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",n),...a,children:["user"===t.role?(0,s.jsxs)(F.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"edit"),children:[(0,s.jsx)(P.yl,{}),(0,s.jsx)("span",{className:"sr-only",children:"Edit message"})]}):(0,s.jsxs)(F.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"regenerate"),children:[(0,s.jsx)(P.tr,{}),(0,s.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,s.jsxs)(F.z,{variant:"ghost",size:"icon",onClick:e=>l(t.id,"delete"),children:[(0,s.jsx)(P.IT,{}),(0,s.jsx)("span",{className:"sr-only",children:"Delete message"})]}),(0,s.jsx)(U.q,{value:t.content})]})}var K=n(19349);let J=(0,l.memo)(K.D,(e,t)=>e.children===t.children&&e.className===t.className);function Q(e){let{message:t,handleMessageAction:n,...l}=e;return(0,s.jsxs)("div",{className:(0,d.cn)("group relative mb-4 flex items-start md:-ml-12"),...l,children:[(0,s.jsx)("div",{className:(0,d.cn)("flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow","user"===t.role?"bg-background":"bg-primary text-primary-foreground"),children:"user"===t.role?(0,s.jsx)(P.f7,{}):(0,s.jsx)(X,{})}),(0,s.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,s.jsx)(J,{className:"prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[H.Z,L.Z],components:{p(e){let{children:t}=e;return(0,s.jsx)("p",{className:"mb-2 last:mb-0",children:t})},code(e){let{node:t,inline:n,className:l,children:a,...r}=e;if(a.length){if("▍"==a[0])return(0,s.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});a[0]=a[0].replace("`▍`","▍")}let i=/language-(\w+)/.exec(l||"");return n?(0,s.jsx)("code",{className:l,...r,children:a}):(0,s.jsx)(B,{language:i&&i[1]||"",value:String(a).replace(/\n$/,""),...r},Math.random())}},children:t.content}),(0,s.jsx)(Y,{message:t,handleMessageAction:n})]})]})}function X(){return(0,s.jsx)(Z(),{style:{borderRadius:4},src:"https://avatars.githubusercontent.com/u/125617854?s=128&v=4",alt:"tabby",width:"128",height:"128"})}function W(e){let{messages:t,handleMessageAction:n}=e;return t.length?(0,s.jsx)("div",{className:"relative mx-auto max-w-2xl px-4",children:t.map((e,l)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(Q,{message:e,handleMessageAction:n}),l<t.length-1&&(0,s.jsx)(T.Z,{className:"my-4 md:my-8"})]},l))}):null}function $(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=l.useState(!1);return l.useEffect(()=>{let t=()=>{n(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[e]),t}function G(e){let{className:t,...n}=e,l=$();return(0,s.jsxs)(F.z,{variant:"outline",size:"icon",className:(0,d.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",l?"opacity-0":"opacity-100",t),onClick:()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"}),...n,children:[(0,s.jsx)(P.BD,{}),(0,s.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}function ee(e){let{href:t,children:n}=e;return(0,s.jsxs)("a",{href:t,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,s.jsx)("span",{children:n}),(0,s.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,s.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function et(e){let{className:t,...n}=e;return(0,s.jsxs)("p",{className:(0,d.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",t),...n,children:[(0,s.jsx)(ee,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}var en=n(50976),es=n(91067),el=n(30713),ea=n(1592),er=n(92402),ei=n(24144),eo=n(62700),ed=n(45470),ec=n(19190);let eu=ec.fC;ec.xz;let em=ec.x8,ef=ec.h_,eh=ec.ee,ex=l.forwardRef((e,t)=>{let{className:n,sideOffset:l=4,...a}=e;return(0,s.jsx)(ec.VY,{ref:t,sideOffset:l,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})});ex.displayName=ec.VY.displayName;let ep=l.createContext({}),ev=l.forwardRef((e,t)=>(0,s.jsx)(eh,{...e,ref:t}));ev.displayName="ComboboxAnchor";let eg=l.forwardRef((e,t)=>{let{getInputProps:n,open:a}=l.useContext(ep),{onKeyDown:r,onChange:i,onInput:o,onBlur:d,onClick:c,...u}=e;return(0,s.jsx)(ed.Z,{...n((0,eo.Z)({onKeyDown:e=>{"Enter"===e.key&&a?e.preventDefault():null==r||r(e)},onChange:i,onInput:o,onBlur:d,onClick:c,ref:t},ei.Z)),...u})});eg.displayName="ComboboxTextarea";let ej=l.forwardRef((e,t)=>{let{children:n,style:a,popupMatchAnchorWidth:r,...i}=e,{getMenuProps:o,anchorRef:d}=l.useContext(ep),c=l.useRef(void 0);return l.useLayoutEffect(()=>{if(r){let e=d.current;if(e){let t=e.getBoundingClientRect();c.current=t.width}}},[]),(0,s.jsx)(ef,{children:(0,s.jsx)(ex,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:c.current,...a},...o({ref:t},{suppressRefError:!0}),...i,children:n})})});ej.displayName="ComboboxContent";let eb=l.forwardRef((e,t)=>{let{item:n,index:a,className:r,children:i,disabled:o,...c}=e,{highlightedIndex:u,selectedItem:m,getItemProps:f}=l.useContext(ep),h=u===a,x=m===n;return(0,s.jsx)(em,{asChild:!0,children:(0,s.jsx)("div",{className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",h&&"bg-accent text-accent-foreground",x&&"font-bold",o&&"pointer-events-none opacity-50",r),...f({item:n,index:a,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof i?i({highlighted:h,selected:x}):i})},n.id)});function ey(e){let{options:t,onSelect:n,inputRef:a,children:r}=e,[i,o]=l.useState(!1),d=l.useRef(null),c=null!=a?a:d,u=l.useRef(null),m=l.useCallback((e,t)=>{let{type:n,changes:s}=t;return n===er.Kb.stateChangeTypes.MenuMouseLeave?{...s,highlightedIndex:e.highlightedIndex}:s},[]),f=(0,er.Kb)({items:null!=t?t:[],isOpen:i,onSelectedItemChange(e){let{selectedItem:t}=e;t&&(null==n||n(t),o(!1))},onIsOpenChange:e=>{let{isOpen:t}=e;t||o(!1)},stateReducer:m}),{setHighlightedIndex:h,highlightedIndex:x}=f,p=i&&!!(null==t?void 0:t.length);l.useEffect(()=>{p&&t.length&&-1===x&&h(0),p&&!t.length&&o(!1)},[p,t]),l.useEffect(()=>{(null==t?void 0:t.length)?o(!0):o(!1)},[t]);let v=l.useMemo(()=>({...f,open:p,inputRef:c,anchorRef:u}),[f,p,c,u]);return(0,s.jsx)(ep.Provider,{value:v,children:(0,s.jsx)(eu,{open:p,children:"function"==typeof r?r(v):r})})}eb.displayName="ComboboxOption";var eN=n(95482);let ew=l.forwardRef(function(e,t){let{onSubmit:n,input:a,setInput:r,isLoading:i}=e,{formRef:o,onKeyDown:c}=function(){let e=(0,l.useRef)(null);return{formRef:e,onKeyDown:t=>{if("Enter"===t.key&&!t.shiftKey&&!t.nativeEvent.isComposing){var n;null===(n=e.current)||void 0===n||n.requestSubmit(),t.preventDefault()}}}}(),[u,m]=l.useState(null),f=l.useRef(null),h=l.useRef(),x=l.useRef(),[p,v]=l.useState([]),[g,b]=l.useState({}),{data:y}=(0,el.ZP)((0,j.X0)(u),ea.Z,{revalidateOnFocus:!1,dedupingInterval:0,errorRetryCount:0});l.useEffect(()=>{var e;v(null!==(e=null==y?void 0:y.hits)&&void 0!==e?e:[])},[null==y?void 0:y.hits]),l.useImperativeHandle(t,()=>({focus:()=>{var e;null===(e=f.current)||void 0===e||e.focus()}})),l.useEffect(()=>{a&&f.current&&f.current!==document.activeElement&&f.current.focus()},[a]),l.useLayoutEffect(()=>{var e,t,n;(null===(e=x.current)||void 0===e?void 0:e.length)&&(null===(n=f.current)||void 0===n||null===(t=n.setSelectionRange)||void 0===t||t.call(n,x.current[0],x.current[1]),x.current=void 0)});let N=l.useMemo(()=>(0,en.Z)(e=>{var t,n,s,l;let a=null!==(s=null===(t=e.target)||void 0===t?void 0:t.value)&&void 0!==s?s:"",r=null!==(l=null===(n=e.target)||void 0===n?void 0:n.selectionEnd)&&void 0!==l?l:0,i=ek(a,r),o=null==i?void 0:i[1];if(o){let e=encodeURIComponent("name:".concat(o," AND kind:function")),t="/v1beta/search?q=".concat(e);m(t)}else v([])},200),[]),w=async e=>{if(e.preventDefault(),!(null==a?void 0:a.trim()))return;let t=a;Object.keys(g).forEach(e=>{var n,s,l;let a=g[e];(null==a?void 0:a.doc)&&(t=t.replaceAll(e,"\n```".concat(null!==(s=null===(n=a.doc)||void 0===n?void 0:n.language)&&void 0!==s?s:"","\n").concat(null!==(l=a.doc.body)&&void 0!==l?l:"","\n","```","\n")))}),r(""),await n(t)},k=(e,t)=>{t&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?v([]):c(e)};return(0,s.jsx)("form",{onSubmit:w,ref:o,children:(0,s.jsx)(ey,{inputRef:f,options:p,onSelect:e=>{var t,n,s;let l=null!==(t=h.current)&&void 0!==t?t:0,i=ek(a,l);if(i){b({...g,["@".concat(null===(n=e.doc)||void 0===n?void 0:n.name)]:e});let t="@".concat(null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.name," "),o=a.substring(0,l).replace(new RegExp(i[0]),""),d=o.length+t.length;x.current=[d,d],r(o+t+a.slice(l))}v([])},children:e=>{var t,n,l,o;let{open:c,highlightedIndex:u}=e,m=null==p?void 0:p[u];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ev,{children:(0,s.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,s.jsx)("span",{className:(0,d.cn)((0,F.d)({size:"sm",variant:"ghost"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 hover:bg-background sm:left-4"),children:(0,s.jsx)(P.yl,{})}),(0,s.jsx)(eg,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm",value:a,ref:f,onChange:e=>{(0,es.Z)(e,"target.value")?(h.current=e.target.selectionEnd,r(e.target.value),N(e)):h.current=void 0},onKeyDown:e=>k(e,c)}),(0,s.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,s.jsxs)(eN.u,{children:[(0,s.jsx)(eN.aJ,{asChild:!0,children:(0,s.jsxs)(F.z,{type:"submit",size:"icon",disabled:i||""===a,children:[(0,s.jsx)(P.vq,{}),(0,s.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,s.jsx)(eN._v,{children:"Send message"})]})})]})}),(0,s.jsx)(ej,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,s.jsxs)(eu,{open:c&&!!m,children:[(0,s.jsx)(eh,{asChild:!0,children:(0,s.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:c&&!!(null==p?void 0:p.length)&&p.map((e,t)=>{var n,l,a;return(0,s.jsx)(eb,{item:e,index:t,children:(0,s.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(eC,{kind:null==e?void 0:null===(n=e.doc)||void 0===n?void 0:n.kind}),(0,s.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.name,"(...)"]})]}),(0,s.jsx)("div",{className:"flex-1 truncate text-right text-sm text-muted-foreground",children:null==e?void 0:null===(a=e.doc)||void 0===a?void 0:a.body})]})},null==e?void 0:e.id)})})}),(0,s.jsx)(ex,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,s.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,s.jsxs)("div",{className:"mb-2",children:[(null==m?void 0:null===(t=m.doc)||void 0===t?void 0:t.kind)?"(".concat(null==m?void 0:null===(n=m.doc)||void 0===n?void 0:n.kind,") "):"",null==m?void 0:null===(l=m.doc)||void 0===l?void 0:l.name]}),(0,s.jsx)("div",{className:"flex-1 whitespace-pre-wrap break-all text-muted-foreground",children:null==m?void 0:null===(o=m.doc)||void 0===o?void 0:o.body})]})})]})})]})}})})});function ek(e,t){let n=e.substring(0,t),s=/@(\w+)$/.exec(n);return s}function eC(e){let{kind:t,...n}=e;return(0,s.jsx)(P.sW,{...n})}function ez(e){let{id:t,isLoading:n,stop:a,append:r,reload:i,input:o,setInput:c,messages:u,className:m,onSubmit:f}=e,h=l.useRef(null);return l.useEffect(()=>{var e;null==h||null===(e=h.current)||void 0===e||e.focus()},[t]),(0,s.jsxs)("div",{className:(0,d.cn)("bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%",m),children:[(0,s.jsx)(G,{}),(0,s.jsxs)("div",{className:"mx-auto sm:max-w-2xl sm:px-4",children:[(0,s.jsx)("div",{className:"flex h-10 items-center justify-center",children:n?(0,s.jsxs)(F.z,{variant:"outline",onClick:()=>a(),className:"bg-background",children:[(0,s.jsx)(P.zu,{className:"mr-2"}),"Stop generating"]}):(null==u?void 0:u.length)>0&&(0,s.jsxs)(F.z,{variant:"outline",onClick:()=>i(),className:"bg-background",children:[(0,s.jsx)(P.tr,{className:"mr-2"}),"Regenerate response"]})}),(0,s.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,s.jsx)(ew,{ref:h,onSubmit:f,input:o,setInput:c,isLoading:n}),(0,s.jsx)(et,{className:"hidden sm:block"})]})]})]})}var eR=n(4327);function eE(e){let{trackVisibility:t}=e,n=$(),{ref:a,entry:r,inView:i}=(0,eR.YD)({trackVisibility:t,delay:100,rootMargin:"0px 0px -150px 0px"});return l.useEffect(()=>{n&&t&&!i&&(null==r||r.target.scrollIntoView({block:"start"}))},[i,r,n,t]),(0,s.jsx)("div",{ref:a,className:"h-px w-full"})}let eS=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function e_(e){let{setInput:t}=e;return(0,s.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,s.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,s.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to Playground!"}),(0,s.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,s.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:eS.map((e,n)=>(0,s.jsxs)(F.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>t(e.message),children:[(0,s.jsx)(P.Ec,{className:"mr-2 text-muted-foreground"}),e.heading]},n))})]})})}let eD=()=>(0,s.jsxs)("ul",{className:"space-y-3",children:[(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"}),(0,s.jsx)("li",{className:"h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"})]});function eT(e){let{id:t,initialMessages:n,loading:a,className:i}=e;!function(){let{data:e}=(0,j.kP)();(0,l.useEffect)(()=>{window._originFetch||(window._originFetch=window.fetch);let t=window._originFetch;window.fetch=async function(n,s){var l;if("/api/chat"!==n)return t(n,s);let a={"Content-Type":"application/json"};(null==e?void 0:e.accessToken)&&(a.Authorization="Bearer ".concat(null==e?void 0:e.accessToken));let r=await t("".concat(y,"/v1beta/chat/completions"),{...s,method:"POST",headers:a}),i=(l=void 0,(function(e){var t;let n=null===(t=e.body)||void 0===t?void 0:t.getReader();return new ReadableStream({async start(e){if(!n){e.close();return}await k(n,e)}})})(r).pipeThrough((0,g.T_)(l)).pipeThrough((0,g.h6)(null==l?void 0:l.experimental_streamData)));return new g.wn(i)}},[null==e?void 0:e.accessToken])}();let o=r(m,e=>e.chats),{messages:c,append:u,reload:f,stop:b,isLoading:N,input:w,setInput:C,setMessages:z}=(0,h.R)({initialMessages:n,id:t,body:{id:t},onResponse(e){401===e.status&&v.toast.error(e.statusText)}}),[E,S]=l.useState(),D=e=>{let t=(0,p.Z)(c,{id:e}),n=null==c?void 0:c[t-1];(null==n?void 0:n.role)==="user"&&(z(c.slice(0,t-1)),u(n))},T=e=>{let t=(0,x.Z)(c,{id:e});t&&z(c.filter(t=>t.id!==e))},I=e=>{let t=(0,x.Z)(c,{id:e});t&&(C(t.content),S(e))},Z=async e=>{if(-1===(0,p.Z)(o,{id:t}))R(t,(0,d.aF)(e));else if(E){let e=(0,p.Z)(c,{id:E});z(c.slice(0,e)),S(void 0)}await u({id:(0,d.x0)(),content:e,role:"user"})};return l.useEffect(()=>{t&&_(t,c)},[c]),l.useEffect(()=>{let e=document.documentElement.scrollHeight;return window.scrollTo(0,e),()=>b()},[]),(0,s.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,s.jsxs)("div",{className:"w-full max-w-2xl px-4",children:[(0,s.jsx)("div",{className:(0,d.cn)("pb-[200px] pt-4 md:pt-10",i),children:a?(0,s.jsxs)("div",{className:"group relative mb-4 flex animate-pulse items-start md:-ml-12",children:[(0,s.jsx)("div",{className:"shrink-0",children:(0,s.jsx)("span",{className:"block h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700"})}),(0,s.jsx)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:(0,s.jsx)(eD,{})})]}):c.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(W,{messages:c,handleMessageAction:(e,t)=>{switch(t){case"edit":I(e);break;case"delete":T(e);break;case"regenerate":D(e)}}}),(0,s.jsx)(eE,{trackVisibility:N})]}):(0,s.jsx)(e_,{setInput:C})}),(0,s.jsx)(ez,{onSubmit:Z,className:"fixed inset-x-0 bottom-0 lg:ml-[280px]",id:t,isLoading:N,stop:b,append:u,reload:f,messages:c,input:w,setInput:C})]})})}let eI=e=>{let{onClear:t,onClick:n,onBlur:a,...r}=e,[i,o]=l.useState(!1),d=()=>{o(!1)};return(0,s.jsx)(F.z,{className:"h-12 w-full justify-start",variant:"ghost",...r,onClick:e=>{i?(t(),o(!1)):o(!0),null==n||n(e)},onBlur:e=>{i&&d(),null==a||a(e)},children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(P.NO,{}),(0,s.jsx)("span",{className:"ml-2",children:"Confirm Clear Chats"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(P.IT,{}),(0,s.jsx)("span",{className:"ml-2",children:"Clear Chats"})]})})};var eZ=n(12609),eH=n(51908);let eL=e=>{let{children:t,initialValue:n,chatId:a}=e,[r,i]=l.useState(!1),o=l.useRef(null),[d,c]=l.useState(n),u=async e=>{e.preventDefault(),(null==d?void 0:d.trim())&&(D(a,{title:d}),i(!1))};return(0,s.jsxs)(eZ.Vq,{open:r,onOpenChange:i,children:[(0,s.jsxs)(eN.u,{children:[(0,s.jsx)(eN.aJ,{asChild:!0,children:(0,s.jsxs)(F.z,{variant:"ghost",size:"icon",onClick:()=>i(!0),children:[(0,s.jsx)(P.yl,{}),(0,s.jsx)("span",{className:"sr-only",children:"Edit"})]})}),(0,s.jsx)(eN._v,{side:"bottom",children:"Edit"})]}),(0,s.jsx)(eZ.cZ,{className:"bg-background",children:(0,s.jsxs)(eZ.fK,{className:"gap-3",children:[(0,s.jsx)(eZ.$N,{children:"Set Chat Title"}),(0,s.jsx)(eZ.Be,{asChild:!0,children:(0,s.jsxs)("form",{className:"relative",onSubmit:u,ref:o,children:[(0,s.jsx)(eH.I,{className:"h-10 pr-12",value:d,onChange:e=>c(e.target.value),onKeyDown:e=>{if("Enter"===e.key){var t;null===(t=o.current)||void 0===t||t.requestSubmit(),e.preventDefault()}}}),(0,s.jsx)("div",{className:"absolute right-2 top-1",children:(0,s.jsxs)(eN.u,{children:[(0,s.jsx)(eN.aJ,{asChild:!0,children:(0,s.jsxs)(F.z,{type:"submit",size:"icon",disabled:""===d,children:[(0,s.jsx)(P.vq,{}),(0,s.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,s.jsx)(eN._v,{children:"Edit Title"})]})})]})})]})})]})},eO=e=>{let{className:t}=e,n=r(m,e=>e._hasHydrated),l=r(m,e=>e.chats),a=r(m,e=>e.activeChatId),i=(e,t)=>{E(t)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:(0,d.cn)(t),children:(0,s.jsxs)("div",{className:"fixed inset-y-0 left-0 flex w-[279px] flex-col gap-2 overflow-hidden px-3 pt-16",children:[(0,s.jsx)("div",{className:"shrink-0 pb-0 pt-2",children:(0,s.jsxs)(F.z,{className:"h-12 w-full justify-start",variant:"ghost",onClick:e=>{z((0,d.x0)())},children:[(0,s.jsx)(P.SC,{}),(0,s.jsx)("span",{className:"ml-2",children:"New Chat"})]})}),(0,s.jsx)(T.Z,{}),(0,s.jsx)("div",{className:"flex flex-1 flex-col gap-2 overflow-y-auto",children:n?(0,s.jsx)(s.Fragment,{children:null==l?void 0:l.map(e=>{let t=a===e.id;return(0,s.jsxs)("div",{onClick:t=>z(e.id),className:(0,d.cn)("flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-zinc-900 transition-all hover:bg-accent hover:text-zinc-900  dark:text-zinc-50 hover:dark:bg-zinc-900 dark:hover:text-zinc-50",t&&"!bg-zinc-200 dark:!bg-zinc-800"),children:[(0,s.jsx)("span",{className:"truncate leading-8",children:e.title||"(Untitled)"}),t&&(0,s.jsxs)("div",{className:"flex items-center",onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(eL,{initialValue:e.title,chatId:e.id}),(0,s.jsxs)(eN.u,{children:[(0,s.jsx)(eN.aJ,{asChild:!0,children:(0,s.jsxs)(F.z,{variant:"ghost",size:"icon",onClick:t=>i(t,e.id),children:[(0,s.jsx)(P.IT,{}),(0,s.jsx)("span",{className:"sr-only",children:"Delete"})]})}),(0,s.jsx)(eN._v,{side:"bottom",children:"Delete"})]})]})]},e.id)})}):(0,s.jsx)(eD,{})}),(0,s.jsx)(T.Z,{}),(0,s.jsx)("div",{className:"shrink-0 pb-2",children:(0,s.jsx)(eI,{disabled:(null==l?void 0:l.length)===0,onClear:()=>{S()}})})]})})})},eM=[];function eA(){var e;let t=r(m,e=>e._hasHydrated),n=r(m,e=>e.chats),l=r(m,e=>e.activeChatId),a=f(n,l);return(0,s.jsxs)("div",{className:"grid flex-1 overflow-hidden lg:grid-cols-[280px_1fr]",children:[(0,s.jsx)(eO,{className:"hidden w-[280px] border-r bg-zinc-100/40 dark:bg-zinc-800/40 lg:block"}),(0,s.jsx)(eT,{loading:!t,id:l,initialMessages:null!==(e=null==a?void 0:a.messages)&&void 0!==e?e:eM},l)]})}},33555:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var s=n(57437);n(2265);var l=n(77723),a=n(93023),r=n(84168);function i(e){let{className:t,value:n,...i}=e,{isCopied:o,copyToClipboard:d}=(0,l.m)({timeout:2e3});return n?(0,s.jsxs)(a.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{o||d(n)},...i,children:[o?(0,s.jsx)(r.NO,{className:"text-green-600"}):(0,s.jsx)(r.vU,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},93079:function(e,t,n){"use strict";n.r(t),n.d(t,{Header:function(){return j}});var s=n(57437),l=n(2265),a=n(61396),r=n.n(a),i=n(73737),o=n(91067),d=n(70349),c=n(13287),u=n(1589),m=n(8724),f=n(88809),h=n(39311),x=n(93023),p=n(84168),v=n(6435);function g(){let{setTheme:e,theme:t}=(0,v.F)(),[n,a]=l.useTransition();return(0,s.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:()=>{a(()=>{e("light"===t?"dark":"light")})},children:["dark"===t?(0,s.jsx)(p.C9,{className:"transition-all"}):(0,s.jsx)(p.O3,{className:"transition-all"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function j(){var e;(0,f.av)();let{data:t}=(0,c.Q)(),n=(0,m.s)(),l=(0,o.Z)(n,d.xj.Chat),a=null==t?void 0:null===(e=t.version)||void 0===e?void 0:e.git_describe,{data:v}=(0,u.Z)("https://api.github.com/repos/TabbyML/tabby/releases/latest",e=>fetch(e).then(e=>e.json())),j=function(e,t){try{return e&&t&&(0,i.q)(t.name,e,">")}catch(e){return console.warn(e),!0}}(a,v);return(0,s.jsxs)("header",{className:"sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(g,{}),(0,s.jsx)(r(),{href:"/",className:(0,h.cn)((0,x.d)({variant:"link"})),children:"Dashboard"}),(0,s.jsx)(r(),{href:"/api",className:(0,h.cn)((0,x.d)({variant:"link"})),children:"API"}),l&&(0,s.jsx)(r(),{href:"/playground",className:(0,h.cn)((0,x.d)({variant:"link"})),children:"Playground"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[j&&(0,s.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/latest",rel:"noopener noreferrer",className:(0,x.d)({variant:"ghost"}),children:[(0,s.jsx)(p.Qs,{className:"text-yellow-600 dark:text-yellow-400"}),(0,s.jsxs)("span",{className:"ml-2 hidden md:flex",children:["New version (",null==v?void 0:v.name,") available"]})]}),(0,s.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby",rel:"noopener noreferrer",className:(0,h.cn)((0,x.d)({variant:"outline"})),children:[(0,s.jsx)(p.Mr,{}),(0,s.jsx)("span",{className:"ml-2 hidden md:flex",children:"GitHub"})]})]})]})}},12609:function(e,t,n){"use strict";n.d(t,{$N:function(){return h},Be:function(){return x},Vq:function(){return o},cN:function(){return f},cZ:function(){return u},fK:function(){return m}});var s=n(57437),l=n(2265),a=n(25555),r=n(39311),i=n(84168);let o=a.fC;a.xz;let d=e=>{let{className:t,children:n,...l}=e;return(0,s.jsx)(a.h_,{className:(0,r.cn)(t),...l,children:(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:n})})};d.displayName=a.h_.displayName;let c=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,s.jsx)(a.aV,{ref:t,className:(0,r.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",n),...l})});c.displayName=a.aV.displayName;let u=l.forwardRef((e,t)=>{let{className:n,children:l,...o}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{}),(0,s.jsxs)(a.VY,{ref:t,className:(0,r.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",n),...o,children:[l,(0,s.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(i.bM,{}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=a.VY.displayName;let m=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,r.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};m.displayName="DialogHeader";let f=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,r.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};f.displayName="DialogFooter";let h=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,s.jsx)(a.Dx,{ref:t,className:(0,r.cn)("text-lg font-semibold leading-none tracking-tight",n),...l})});h.displayName=a.Dx.displayName;let x=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,s.jsx)(a.dk,{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",n),...l})});x.displayName=a.dk.displayName},51908:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});var s=n(57437),l=n(2265),a=n(39311);let r=l.forwardRef((e,t)=>{let{className:n,type:l,...r}=e;return(0,s.jsx)("input",{type:l,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...r})});r.displayName="Input"},16775:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(57437),l=n(2265),a=n(26823),r=n(39311);let i=l.forwardRef((e,t)=>{let{className:n,orientation:l="horizontal",decorative:i=!0,...o}=e;return(0,s.jsx)(a.f,{ref:t,decorative:i,orientation:l,className:(0,r.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",n),...o})});i.displayName=a.f.displayName},95482:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return o}});var s=n(57437),l=n(2265),a=n(75224),r=n(39311);let i=a.zt,o=a.fC,d=a.xz,c=l.forwardRef((e,t)=>{let{className:n,sideOffset:l=4,...i}=e;return(0,s.jsx)(a.VY,{ref:t,sideOffset:l,className:(0,r.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...i})});c.displayName=a.VY.displayName},77723:function(e,t,n){"use strict";n.d(t,{m:function(){return l}});var s=n(2265);function l(e){let{timeout:t=2e3}=e,[n,l]=s.useState(!1);return{isCopied:n,copyToClipboard:e=>{var n;(null===(n=navigator.clipboard)||void 0===n?void 0:n.writeText)&&e&&navigator.clipboard.writeText(e).then(()=>{l(!0),setTimeout(()=>{l(!1)},t)})}}}},13287:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var s=n(30713),l=n(1592),a=n(88809);function r(){return(0,s.ZP)((0,a.X0)("/v1/health"),l.Z)}},8724:function(e,t,n){"use strict";n.d(t,{s:function(){return h}});var s=n(2265),l=n(16630),a=n(91317),r=n(35512),i=n(58835),o=n(70349),d=n(7820),c=n(13287);let u={[o.xj.Chat]:"chat_model",[o.xj.Completion]:"model"};function m(e,t){var n;return{kind:t,device:e.device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:null!==(n=null==e?void 0:e[u[t]])&&void 0!==n?n:"",cpuCount:e.cpu_count,cudaDevices:e.cuda_devices}}let f=(0,i.BX)("\n  query GetWorkers {\n    workers {\n      kind\n      name\n      addr\n      device\n      arch\n      cpuInfo\n      cpuCount\n      cudaDevices\n    }\n  }\n");function h(){let{data:e}=(0,c.Q)(),{data:t}=(0,d.J9)(f),n=null==t?void 0:t.workers,i=s.useMemo(()=>{let t=(0,r.Z)(n),s=(0,l.Z)(t,{kind:o.xj.Completion})>-1,i=(0,l.Z)(t,{kind:o.xj.Chat})>-1;return!s&&(null==e?void 0:e.model)&&t.push(m(e,o.xj.Completion)),!i&&(null==e?void 0:e.chat_model)&&t.push(m(e,o.xj.Chat)),(0,a.Z)(t,"kind")},[e,n]);return i}},1592:function(e,t,n){"use strict";function s(e){let[t,n]=e,s=new Headers;return s.append("authorization","Bearer ".concat(n)),fetch(t,{headers:s}).then(e=>e.json())}n.d(t,{Z:function(){return s}})}},function(e){e.O(0,[320,948,505,629,529,555,141,787,894,971,864,744],function(){return e(e.s=99227)}),_N_E=e.O()}]);