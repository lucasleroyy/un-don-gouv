
/* Logique du site. Les textes sont dans content.js : pas besoin de modifier ce fichier pour changer un titre. */

function fmt(s,v){return s.replace(/\{(\w+)\}/g,function(m,k){return v[k]!==undefined?v[k]:m})}
function get(path){return path.split(".").reduce(function(o,k){return o[k]},CONTENT)}
function contestName(){var p=PEOPLE.filter(function(x){return x.contest})[0];return p?p.name:""}

/* Remplit tous les éléments portant data-t="chemin.dans.CONTENT" */
document.title=CONTENT.pageTitle;
document.querySelectorAll("[data-t]").forEach(function(e){e.innerHTML=get(e.getAttribute("data-t"))});
document.getElementById("pick0").textContent=PEOPLE[0].name;
document.getElementById("pick1").textContent=PEOPLE[1].name;

var cur=1,tm=null,ct=null,ci=0,cw=0;
function $(i){return document.getElementById(i)}
function go(n){
 clearInterval(tm);if(n!==2)clearInterval(ct);cur=n;
 for(var i=1;i<=5;i++){var e=$("s"+i);if(e)e.classList.toggle("on",i===n);}
 var d=n>=5?4:n;$("stl").textContent=fmt(CONTENT.stepLabel,{n:d});$("bar").style.width=(d*25)+"%";
 if(n===3){dodges=0;$("c3").textContent=fmt(CONTENT.s3.counter,{n:0});var b=$("n3");b.textContent=CONTENT.s3.no;b.onclick=null;b.style.left="55%";b.style.top="20px";}
 if(n===4)game();
 window.scrollTo(0,0);
}




function card(p, main) {
  var isAndrea = p.name === "Andréa";

  return '<div class="card">' +
    (main && p.photos
      ? '<img class="av" alt="" src="' + p.photos[0].src + '">'
      : '') +
    '<h3>' +
      (main
        ? p.name
        : fmt(CONTENT.s5.alsoTitle, { name: p.name })) +
    '</h3>' +
    '<p>' + (main ? p.txt : CONTENT.s5.alsoText) + '</p>' +

    (isAndrea
      ? '<a class="btn" href="' + p.url +
        '" target="_blank" rel="noopener" ' +
        'onclick="giftAndrea()">Donner à Andréa</a>'
      : '<a class="btn' + (main ? '' : ' sec') +
        '" href="' + p.url + '" target="_blank" rel="noopener"' +
        (p.contest ? ' onclick="contest()" ' : '') + '>' +
        fmt(CONTENT.s5.giveButton, { name: p.name }) +
        '</a>') +
    '</div>';
}

function giftAndrea() {
  
  $("ovt").textContent = "Merci pour votre don à Andréa !";
  $("ovtext").textContent =
    "Votre générosité nous fait chaud au cœur ❤️ ! Et Erwan ? Si vous lui faites aussi un don, vous pourrez peut-être remporter un beau cadeau ! 🎁";

  $("reels").hidden = true;
  $("wheelbox").hidden = true;
  $("ovm").textContent = "";
  $("res").className = "alert";
  $("again").hidden = true;
  $("ov").hidden = false;

  var oldButton = $("giftErwan");
  if (oldButton) oldButton.remove();

  var btn = document.createElement("button");
  btn.id = "giftErwan";
  btn.type = "button";
  btn.className = "btn";
  btn.textContent = "Donner à Erwan 🎁";
  btn.onclick = function() {
    closeC();
  };

  var actions = $("ov").querySelector(".row");
  var closeButton = actions.querySelector('[onclick="closeC()"]');
  actions.insertBefore(btn, closeButton);
}




function pick(i){
 $("q2").textContent=fmt(CONTENT.s2.h2,{name:PEOPLE[i].name});
 $("cards").innerHTML=card(PEOPLE[i],true)+card(PEOPLE[1-i],false);
 nn=0;var o=$("o2"),n=$("n2");o.style.cssText="position:static";n.style.cssText="position:static";n.textContent=CONTENT.s2.no;n.onclick=nope;$("a2").className="alert";o.parentNode.insertBefore(o,n);
 carInit(i);go(2);
}
function carShow(k){
 var s=document.querySelectorAll("#frame .slide"),d=document.querySelectorAll("#dots button");
 ci=k%s.length;
 s.forEach(function(e,j){e.classList.toggle("on",j===ci)});
 d.forEach(function(e,j){e.classList.toggle("on",j===ci)});
 $("cap").textContent=PEOPLE[cw].photos[ci].caption;$("stamp").textContent=fmt(CONTENT.s2.photoStamp,{i:ci+1,total:s.length});
}
var GD=["☕","🧢","👕","🖊️","🔑","🧲","🎒"],gt=null,run=0,lc=0;
function closeC(){run++;clearInterval(gt);$("ov").hidden=true}
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeC();closeW()}});
function profile(P,link){return '<div class="prof"><img src="'+P.img+'" alt="'+P.alt+'"><div><h3>'+P.name+'</h3>'+(P.pole?'<span class="pole">'+P.pole+'</span>':'')+'<p class="role">'+P.role+'</p><p>'+P.text+'</p>'+(link?'<p><a href="'+P.linkUrl+'" target="_blank" rel="noopener">'+P.link+'</a></p>':'')+'<p class="where">'+P.where+'</p></div></div>'}
function openW(k){var P=CONTENT.who[k];$("whot").textContent=P.h2;$("whobody").innerHTML=profile(P,k==="erwan");$("who").hidden=false}
function closeW(){$("who").hidden=true}
$("who").addEventListener("click",function(e){if(e.target===this)closeW()});
function lose(){
 var n=++lc,res=$("res");
 $("ovm").textContent=CONTENT.contest.resultLabel;
 res.className="alert on";
 res.innerHTML='<b style="font-size:28px">'+CONTENT.contest.lostTitle+'</b><br>'+(n>1?CONTENT.contest.lostAgain:'')+fmt(CONTENT.contest.lostText,{name:contestName()});
 $("again").hidden=false;$("again").textContent=n>1?CONTENT.contest.retryMore:CONTENT.contest.retry;
}


function contest(only){
  var giftButton = $("giftErwan");
if (giftButton) giftButton.remove();
    var my = ++run;

  $("ovt").textContent = fmt(CONTENT.contest.h2, {
    name: contestName()
  });
  $("ovtext").textContent = fmt(CONTENT.contest.text, {
    name: contestName()
  });

  $("ov").hidden = false;
  $("res").className = "alert";
  $("again").hidden = true;

  clearInterval(gt);

  // Masque les trois rouleaux et affiche directement la roue.
  $("reels").hidden = true;
  $("wheelbox").hidden = false;

  // Lance directement l'animation de la roue.
  wheel(my);
}


/* Roue truquée : elle frôle « Gagné », puis glisse toujours sur le segment « lose » */
function buildWheel(){
 var S=CONTENT.contest.wheel,a=360/S.length,h="";
 S.forEach(function(s,i){
  var p=(i*a-90)*Math.PI/180,q=((i+1)*a-90)*Math.PI/180;
  h+='<path d="M0 0L'+100*Math.cos(p)+' '+100*Math.sin(p)+'A100 100 0 0 1 '+100*Math.cos(q)+' '+100*Math.sin(q)+'Z" fill="'+s.color+'" stroke="#fff" stroke-width="2"/>';
  h+='<text transform="rotate('+(i*a+a/2)+') translate(0,-62)" text-anchor="middle" fill="#fff" font-weight="700" font-size="15">'+s.label+'</text>';
 });
 $("wheel").innerHTML=h+'<circle r="9" fill="#fff"/>';
}
function wheel(my){
 var S=CONTENT.contest.wheel,a=360/S.length,L=0,w=$("wheel"),fast=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
 S.forEach(function(s,i){if(s.lose)L=i});
 var st=(L*a+a+3)%360,en=L*a+a/2,r1=1800+(360-st)%360,r2=r1+((st-en)%360+360)%360;
 $("wheelbox").hidden=false;
 w.style.transition="none";w.style.transform="rotate(0deg)";void w.getBoundingClientRect();
 $("ovm").textContent=CONTENT.contest.wheelSpin;
 w.style.transition="transform "+(fast?.01:4.2)+"s cubic-bezier(.15,.6,.1,1)";w.style.transform="rotate("+r1+"deg)";
 setTimeout(function(){if(my===run)$("ovm").textContent=CONTENT.contest.wheelAlmost},4400);
 setTimeout(function(){if(my!==run)return;w.style.transition="transform "+(fast?.01:1.4)+"s ease-in-out";w.style.transform="rotate("+r2+"deg)"},5300);
 setTimeout(function(){if(my===run)lose()},6900);
}
function carAuto(){clearInterval(ct);ct=setInterval(function(){carShow(ci+1)},3000)}
function carInit(i){
 clearInterval(ct);var P=PEOPLE[i].photos,car=$("car"),g=document.querySelector(".s2g");
 if(!P){car.hidden=true;g.className="s2g";return}
 cw=i;car.hidden=false;g.className="s2g has";
 $("frame").innerHTML=P.map(function(p){return '<img class="slide" alt="'+p.caption+'" src="'+p.src+'" style="object-position:'+p.pos+'">'}).join("")+'<div class="stamp" id="stamp"></div>';
 $("dots").innerHTML=P.map(function(p,j){return '<button aria-label="Photo '+(j+1)+'" onclick="carShow('+j+');carAuto()"></button>'}).join("");
 $("frame").onclick=function(){carShow(ci+1);carAuto()};
 carShow(0);carAuto();
}

// Étape 2 : le « Non » n’est pas recevable
var nn=0,msgs=CONTENT.s2.refusals;
function nope(){
 var a=$("a2"),o=$("o2"),n=$("n2");
 a.textContent=msgs[Math.min(nn,msgs.length-1)];a.className="alert on";nn++;
 var p=o.parentNode;
 if(nn%2){p.insertBefore(n,o)}else{p.insertBefore(o,n)}
 o.style.fontSize=(16+nn*3)+"px";o.style.padding=(8+nn*2)+"px "+(24+nn*6)+"px";
 n.style.fontSize=Math.max(9,16-nn*1.5)+"px";n.style.opacity=Math.max(.35,1-nn*.12);
 if(nn>=6){n.textContent=CONTENT.s2.yes;n.onclick=function(){go(3)}}
}

// Étape 3 : le « Non » s’échappe
var dodges=0,lines=CONTENT.s3.dodges;




function dodge(e) {
  var b = $("n3");
  var ar = $("ar3");

  if (dodges >= 8) return;

  if (e && e.preventDefault) e.preventDefault();

  dodges++;
  $("c3").textContent = fmt(CONTENT.s3.counter, { n: dodges });

  if (dodges >= 8) {
    b.textContent = "Finalement oui";
    b.onclick = function(e) {
      if (e) e.preventDefault();
      go(5);
    };
    return;
  }

  b.textContent = lines[Math.min(dodges, lines.length - 1)];
  b.style.left = Math.random() * Math.max(0, ar.clientWidth - b.offsetWidth) + "px";
  b.style.top = Math.random() * Math.max(0, ar.clientHeight - b.offsetHeight) + "px";
  b.style.bottom = "auto";
}




["pointerenter","pointerdown","focus"].forEach(function(ev){$("n3").addEventListener(ev,dodge)});

// Étape 4 : mini-jeu de pièces
function game(){
 var g=$("game"),c=0;g.innerHTML="";$("sc").textContent="Pièces collectées : 0 / 5";
 tm=setInterval(function(){
  var k=document.createElement("button");k.className="coin";k.textContent="🪙";k.setAttribute("aria-label","Pièce");
  k.style.left=Math.random()*(g.clientWidth-50)+"px";
  k.style.transition="top "+(1.6+Math.random()*1.2)+"s linear";
  g.appendChild(k);
  requestAnimationFrame(function(){requestAnimationFrame(function(){k.style.top=g.clientHeight+"px"})});
  k.onclick=function(){c++;k.remove();$("sc").textContent="Pièces collectées : "+c+" / 5";if(c>=5){clearInterval(tm);setTimeout(function(){go(5)},300)}};
  setTimeout(function(){k.remove()},3200);
 },650);
}

/* état initial */
buildWheel();
go(1);
