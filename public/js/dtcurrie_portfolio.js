/*
 public/js/script.js
 Devin T. Currie
 */
// scrolling animations
$(window).scroll(function () {
    var windowTop = $(window).scrollTop(),
        windowBottom = $(window).scrollTop() + $(window).height();  // bottom of window
    checkNavbar(windowTop);
    checkScrolling(windowBottom);
});

// animate scroll to target element by id
function scrollToSection(id) {
    $('html,body').animate({scrollTop: $("#" + id).offset().top - 60}, 'fast');
}

// animate scroll to top of window
function scrollToTop() {
    $('html,body').animate({scrollTop: 0}, 'fast');
}

// animate scrolling fade-ins
function checkScrolling(windowBottom) {
    $('.scrolling').each(function () {
        if (!$(this).hasClass('animated')) {
            var elementTop = $(this).offset().top + 20; // top of element plus 20px

            // if the element is above the bottom of the window and isn't currently visible, show it
            if (windowBottom > elementTop && $(this).css("opacity") == 0) {
                // clone the element and add the animated class to trigger its animation
                $(this).replaceWith($(this).clone(true).addClass('animated'));
            }
        }
    });
}

// animate navbar fade-in
function checkNavbar(windowTop) {
    var jumbo = $('.jumbotron-portrait'),
        navbar = $('.navbar');
    if (jumbo && !$(navbar).hasClass('animated')) {
        if (windowTop > (jumbo.offset().top + jumbo.height()) && navbar.css("opacity") == 0) {
            // clone the element and add the animated class to trigger its animation
            navbar.replaceWith($(navbar).clone(true).addClass('animated'));
        }
    } else {
        if (windowTop < (jumbo.offset().top + jumbo.height()) && navbar.css("opacity") == 1) {
            // clone the element and add the animated class to trigger its animation
            navbar.removeClass('animated fade-in').addClass('fade-out')
                .replaceWith($(navbar).clone(true).addClass('animated'));
            setTimeout(function () {
                $('.navbar').removeClass('animated fade-out').addClass('fade-in');
            }, 1000);

        }
    }
}

// if the window does no require vertical scrolling, hide the back-to-top button
function checkBackToTop() {
    var button = $('#backToTop');
    if (document.body.scrollHeight > window.innerHeight) {
        button.css({"visibility": "visible"});
    } else {
        button.css({"visibility": "hidden"});
    }
}

// animate nav and footer on page load
function animateOnLoad() {
    var hiddenElements = $('nav, footer');
    if (!hiddenElements.hasClass('animated')) {
        setTimeout(function () {
            $.each(hiddenElements, function () {
                $(this).replaceWith($(this).clone(true).addClass('animated'));
            });
        }, 500);
    }
}
/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-checked-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-display_runin-displaytable-ellipsis-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-generatedcontent-hsla-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-preserve3d-regions-rgba-shapes-siblinggeneral-subpixelfont-supports-target-textalignlast-textshadow-unicode-unicoderange-userselect-wrapflow-shiv !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,a,s;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),x.push((r?"":"no-")+s.join("-"))}}function o(e){var t=z.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?z.className.baseVal=t:z.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return e-1===t||e===t||e+1===t}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){if("object"==typeof e)for(var n in e)M(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function c(){var e=t.body;return e||(e=a(E?"svg":"body"),e.fake=!0),e}function f(e,n,i,r){var o,s,d,l,u="modernizr",f=a("div"),p=c();if(parseInt(i,10))for(;i--;)d=a("div"),d.id=r?r[i]:u+(i+1),f.appendChild(d);return o=a("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=z.style.overflow,z.style.overflow="hidden",z.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),z.style.overflow=l,z.offsetHeight):f.parentNode.removeChild(f),!!s}function p(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?p(r,n||t):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+m(t[r])+":"+i+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function b(e,t,r,o){function d(){c&&(delete L.style,delete L.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var u=g(e,r);if(!i(u,"undefined"))return u}for(var c,f,p,h,m,b=["modernizr","tspan"];!L.style;)c=!0,L.modElem=a(b.shift()),L.style=L.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],m=L.style[h],s(h,"-")&&(h=l(h)),L.style[h]!==n){if(o||i(r,"undefined"))return d(),"pfx"==t?h:!0;try{L.style[h]=r}catch(v){}if(L.style[h]!=m)return d(),"pfx"==t?h:!0}return d(),!1}function v(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+q.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?b(s,t,r,o):(s=(e+" "+W.join(a+" ")+a).split(" "),h(s,t,n))}function y(e,t,i){return v(e,n,n,t,i)}var x=[],T=[],w={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C=e.CSS;Modernizr.addTest("cssescape",C?"function"==typeof C.escape:!1),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}});var k="CSS"in e&&"supports"in e.CSS,S="supportsCSS"in e;Modernizr.addTest("supports",k||S);var z=t.documentElement,E="svg"===z.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,l(t)}function o(e){var t=v[e[g]];return t||(t={},b++,e[g]=b,v[b]=t),t}function a(e,n,i){if(n||(n=t),c)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():m.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||h.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),a=0,s=i(),d=s.length;d>a;a++)r.createElement(s[a]);return r}function d(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var i=o(e);return!y.shivCSS||u||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||d(e,i),e}var u,c,f="3.7.3",p=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",b=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:r};e.html5=y,l(t),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=a("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("regions",function(){if(E)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),i=!1;if(!e||!t)return i;var r=a("iframe"),o=a("div"),s=a("div"),d=a("div"),l="modernizr_flow_for_regions_check";s.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=l,o.appendChild(s),o.appendChild(d),z.appendChild(o);var u,c,f=s.getBoundingClientRect();return s.style[t]=l,u=s.getBoundingClientRect(),c=parseInt(u.left-f.left,10),z.removeChild(o),42==c?i=!0:(z.appendChild(r),f=r.getBoundingClientRect(),r.style[t]=l,u=r.getBoundingClientRect(),f.height>0&&f.height!==u.height&&0===u.height&&(i=!0)),s=d=o=r=n,i}),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var _={elem:a("modernizr")};Modernizr._q.push(function(){delete _.elem}),Modernizr.addTest("csschunit",function(){var e,t=_.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=_.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});var j=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=j,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+j.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=a("a");return e.style.cssText=j.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=j.length-1;o>r;r++)e=0===r?"to ":"",i+=t+j[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var s=a("a"),d=s.style;return d.cssText=i,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=j.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=a("a"),i=n.style;return i.cssText=e+j.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)}),Modernizr.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",s(e.backgroundColor,"rgba")||s(e.backgroundColor,"hsla")});var M;!function(){var e={}.hasOwnProperty;M=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=u});var R=w.testStyles=f;Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],n=0;n<t.length;n++){var i=a("span");i.innerHTML=t[n],i.className=n%2?"mono":"",e.appendChild(i),t[n]=i.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})}),Modernizr.addTest("unicode",function(){var e,t=a("span"),n=a("span");return R("#modernizr{font-family:Arial,sans;font-size:300em;}",function(i){t.innerHTML=E?"妇":"&#5987",n.innerHTML=E?"☆":"&#9734",i.appendChild(t),i.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e}),Modernizr.addTest("checked",function(){return R("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),R("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var N=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||i}();N?Modernizr.addTest("fontface",!1):R('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),R('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),Modernizr.addTest("cssinvalid",function(){return R("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),R("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),R("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),R("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+j.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return R("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),R("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return R("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=a("input");return e.appendChild(t),t.clientWidth>10})}),R("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],i=t.childNodes[1],r=t.childNodes[0],o=parseInt((i.offsetWidth-i.clientWidth)/2,10),a=r.clientWidth/100,s=r.clientHeight/100,l=parseInt(50*Math.min(a,s),10),u=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvminunit",d(l,u)||d(l,u-o))},3),R("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],i=t.childNodes[1],r=t.childNodes[0],o=parseInt((i.offsetWidth-i.clientWidth)/2,10),a=r.clientWidth/100,s=r.clientHeight/100,l=parseInt(50*Math.max(a,s),10),u=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",d(l,u)||d(l,u-o))},3),R("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",i==n)}),R("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",i==n)});var B=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return f("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=B,Modernizr.addTest("mediaqueries",B("only all"));var L={style:_.elem.style};Modernizr._q.unshift(function(){delete L.style});var P="Moz O ms Webkit",W=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=W;var q=w._config.usePrefixes?P.split(" "):[];w._cssomPrefixes=q;var H=function(t){var i,r=j.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var a=0;r>a;a++){var s=j[a],d=s.toUpperCase()+"_"+i;if(d in o)return"@-"+s.toLowerCase()+"-"+t}return!1};w.atRule=H;var A=w.testProp=function(e,t,i){return b([e],n,t,i)};Modernizr.addTest("textshadow",A("textShadow","1px 1px")),w.testAllProps=v;var F=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?H(e):(-1!=e.indexOf("-")&&(e=l(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",F("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!F("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("wrapflow",function(){var e=F("wrapFlow");if(!e||E)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),i=a("div"),r=a("div"),o=a("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",i.appendChild(r),i.appendChild(o),z.appendChild(i);var s=o.offsetLeft;return z.removeChild(i),r=o=i=n,150==s}),w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("backdropfilter",y("backdropFilter")),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("backgroundcliptext",function(){return y("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=y("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("displayrunin",y("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=a("a");return e.style.cssText=j.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("ellipsis",y("textOverflow","ellipsis")),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexwrap",y("flexWrap","wrap",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=a("div"),n=a("span"),i=e.style,r=0,o=0,s=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,d),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+j.join("hyphens:auto; "),s=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),s}catch(l){return!1}}function o(e,n){try{var i=a("div"),r=a("span"),o=i.style,s=0,d=!1,l=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,c),r.innerHTML="mm",s=r.offsetHeight,r.innerHTML="m"+e+"m",l=r.offsetHeight>s,n?(r.innerHTML="m<br />m",s=r.offsetWidth,r.innerHTML="m"+e+"m",u=r.offsetWidth>s):u=!0,l===!0&&u===!0&&(d=!0),t.body.removeChild(i),i.removeChild(r),d}catch(f){return!1}}function s(n){try{var i,r=a("input"),o=a("div"),s="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=s+n+s,t.body.insertBefore(o,l),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?d=e.find(s+s):(i=e.self.document.body.createTextRange(),d=i.findText(s+s))}catch(u){d=!1}return t.body.removeChild(o),t.body.removeChild(r),d}catch(u){return!1}}return t.body||t.getElementsByTagName("body")[0]?(u("csshyphens",function(){if(!y("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),u("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void u("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("cssmask",y("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("cssresize",y("resize","both",!0)),Modernizr.addTest("shapes",y("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",y("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in z.style)){var n,i="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",R(i+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("preserve3d",y("transformStyle","preserve-3d")),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("userselect",y("userSelect","none",!0)),r(),o(x),delete w.addTest,delete w.addAsyncTest;for(var I=0;I<Modernizr._q.length;I++)Modernizr._q[I]();e.Modernizr=Modernizr}(window,document);