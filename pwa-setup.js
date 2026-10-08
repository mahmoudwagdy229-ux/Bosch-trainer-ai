(function(){
 const head=document.head;
 const add=(tag,attrs)=>{const e=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));head.appendChild(e)};
 add('link',{rel:'manifest',href:'manifest.webmanifest'});
 add('link',{rel:'apple-touch-icon',href:'apple-touch-icon.png'});
 add('meta',{name:'apple-mobile-web-app-capable',content:'yes'});
 add('meta',{name:'apple-mobile-web-app-status-bar-style',content:'default'});
 add('meta',{name:'apple-mobile-web-app-title',content:'Trainer AI'});
 const style=document.createElement('style');style.textContent=`#appSplash{position:fixed;inset:0;z-index:99999;background:linear-gradient(160deg,#fff 0 70%,#eaf4f8 100%);display:grid;place-items:center;transition:opacity .45s,visibility .45s}#appSplash.hide{opacity:0;visibility:hidden}.splashBox{text-align:center;padding:28px}.splashIcon{width:116px;height:116px;border-radius:25px;box-shadow:0 14px 34px #001e3528}.splashBrand{color:#e20015;font-size:34px;font-weight:900;margin-top:22px}.splashTitle{font-size:22px;font-weight:800;margin-top:6px}.splashSub{color:#005691;font-size:11px;letter-spacing:1.4px;margin-top:8px}.splashLine{width:120px;height:4px;background:linear-gradient(90deg,#e20015,#005691,#008ecf);margin:24px auto 0}.splashLoad{color:#687078;font-size:11px;margin-top:16px}`;head.appendChild(style);
 const splash=document.createElement('div');splash.id='appSplash';splash.innerHTML='<div class="splashBox"><img class="splashIcon" src="icon-512.png" alt=""><div class="splashBrand">BOSCH</div><div class="splashTitle">Trainer AI Assistant</div><div class="splashSub">PRODUCT KNOWLEDGE & SALES SUPPORT</div><div class="splashLine"></div><div class="splashLoad">جاري تحميل دليل المنتج...</div></div>';document.body.prepend(splash);
 const close=()=>setTimeout(()=>splash.classList.add('hide'),900);document.readyState==='complete'?close():window.addEventListener('load',close);
 if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
