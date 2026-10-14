(() => {
  const tracks = [
    {id:1,title:"Golden Hour",artist:"Nia Sol",genre:"R&B",mood:"Warm & mellow",cover:"coral",symbol:"gh",minutes:"3:24"},
    {id:2,title:"Island Time",artist:"Kairo Blue",genre:"Caribbean",mood:"Easygoing",cover:"lime",symbol:"it",minutes:"2:58"},
    {id:3,title:"Neon Signs",artist:"June Avenue",genre:"Pop",mood:"Late-night drive",cover:"blue",symbol:"ns",minutes:"3:41"},
    {id:4,title:"No Small Thing",artist:"Milo West",genre:"Hip-Hop",mood:"Focused",cover:"purple",symbol:"nt",minutes:"2:49"},
    {id:5,title:"Soft Landing",artist:"Nia Sol",genre:"R&B",mood:"Slow down",cover:"gold",symbol:"sl",minutes:"4:02"},
    {id:6,title:"Blue Current",artist:"Kairo Blue",genre:"Caribbean",mood:"Coastal breeze",cover:"teal",symbol:"bc",minutes:"3:15"}
  ];
  const $ = id => document.getElementById(id);
  let filter="All", query="", favorites=new Set([2,5]), recent=[3,1,4];
  function track(id){return tracks.find(t=>t.id===id);}
  function make(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
  function cover(t){return make("div",`cover ${t.cover}`,t.symbol);}
  function info(t){const box=make("div","track-info");box.append(make("strong","",t.title),make("small","",t.artist));return box;}
  function markPlayed(id){recent=[id,...recent.filter(x=>x!==id)].slice(0,3);renderRecent();}
  function renderRecent(){
    const root=$("recentList");root.replaceChildren();
    recent.map(track).filter(Boolean).forEach(t=>{
      const item=make("article","recent-item");item.append(cover(t),info(t));
      const play=make("button","tiny-play","▶");play.type="button";play.title=`Mark ${t.title} as recently played`;play.addEventListener("click",()=>markPlayed(t.id));item.append(play);root.append(item);
    });
  }
  function renderTracks(){
    const root=$("trackGrid");root.replaceChildren();
    const shown=tracks.filter(t=>(filter==="All"||t.genre===filter)&&`${t.title} ${t.artist} ${t.genre} ${t.mood}`.toLowerCase().includes(query.toLowerCase()));
    $("noResults").hidden=shown.length>0;
    shown.forEach(t=>{
      const card=make("article","track-card");card.append(cover(t),info(t));
      const bottom=make("div","track-bottom"),genre=make("span","genre",t.genre),heart=make("button",`heart${favorites.has(t.id)?" saved":""}`,favorites.has(t.id)?"♥":"♡");
      heart.type="button";heart.setAttribute("aria-label",`${favorites.has(t.id)?"Remove":"Add"} ${t.title} ${favorites.has(t.id)?"from":"to"} favorites`);
      heart.addEventListener("click",()=>{favorites.has(t.id)?favorites.delete(t.id):favorites.add(t.id);renderTracks();renderFavorites();});
      bottom.append(genre,heart);card.append(bottom);root.append(card);
    });
    document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));
  }
  function renderFavorites(){
    const root=$("favoriteList");root.replaceChildren();const list=tracks.filter(t=>favorites.has(t.id));
    $("favoriteCount").textContent=`${list.length} SAVED`;
    if(!list.length){root.append(make("p","empty","No favorites yet. Tap the heart on a track to save it."));return;}
    list.forEach(t=>{const row=make("article","favorite-row");row.append(cover(t),info(t));const remove=make("button","","Remove");remove.type="button";remove.addEventListener("click",()=>{favorites.delete(t.id);renderTracks();renderFavorites();});row.append(remove);root.append(row);});
  }
  $("search").addEventListener("input",e=>{query=e.target.value;renderTracks();});
  document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{filter=b.dataset.filter;renderTracks();}));
  renderRecent();renderTracks();renderFavorites();
})();
