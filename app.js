const content = window.VIKINGS_CONTENT;
const $ = (s, root=document) => root.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const instagramIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.6" cy="6.6" r="1.1" fill="currentColor"/></svg>`;
function portrait(image, initials, extra="") {
  if (image) return `<div class="portrait ${extra}"><img src="${esc(image)}" alt="" loading="lazy" onerror="this.parentElement.classList.add('image-error');this.remove()"><span class="portrait-fallback">${esc(initials)}</span></div>`;
  return `<div class="portrait ${extra}"><span class="portrait-fallback">${esc(initials)}</span><span class="portrait-note">PHOTO TO BE ADDED</span></div>`;
}
function socialButton(url, name) {
  if (!url) return "";
  return `<a class="instagram-icon" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(name)} Instagram profile in a new tab">${instagramIcon}</a>`;
}
$("#management-grid").innerHTML = content.management.map((p,i)=>`
  <article class="management-card">
    ${portrait(p.image,p.name.split(" ").map(x=>x[0]).join("").slice(0,2),"management-portrait")}
    <div class="management-card-body"><span class="card-index">LEADERSHIP / 0${i+1}</span><h3>${esc(p.name)}</h3><div class="role">${esc(p.role)}</div><div class="org">${esc(p.org)}</div><p>${esc(p.bio)}</p><div class="card-social">${socialButton(p.instagram,p.name)}</div></div>
  </article>`).join("");

$("#players-grid").innerHTML = content.players.map((p,i)=>`
  <article class="player-card ${p.image || p.name !== `Player ${String(i+1).padStart(2,"0")}` ? "player-filled":""}">
    ${portrait(p.image, String(i+1).padStart(2,"0"),"player-portrait")}
    <div class="player-details"><span class="player-number">#${esc(p.jersey || "—")}</span><h3>${esc(p.name)}</h3><p>${esc(p.role || "Role TBA")}</p>${p.bio ? `<p class="player-bio">${esc(p.bio)}</p>`:""}${p.stats ? `<span class="player-stats">${esc(p.stats)}</span>`:""}${socialButton(p.instagram,p.name)}</div>
  </article>`).join("");

function mediaCard(item) {
  const videoId = item.video && (item.video.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{6,})/)||[])[1];
  const visual = videoId ? `<a class="media-visual video-visual" href="${esc(item.video)}" target="_blank" rel="noopener noreferrer"><img src="https://img.youtube.com/vi/${esc(videoId)}/hqdefault.jpg" alt="" loading="lazy"><span class="play-button">▶</span></a>` : item.image ? `<div class="media-visual"><img src="${esc(item.image)}" alt="" loading="lazy"></div>` : `<div class="media-visual media-placeholder"><span class="media-glyph">${item.category==="highlights"?"▶":item.category==="posters"?"✦":item.category==="photos"?"▧":"＋"}</span><span>VIKINGS MEDIA</span></div>`;
  return `<article class="media-card" data-category="${esc(item.category)}">${visual}<div class="media-card-body"><div class="media-meta"><span>${esc(item.category.replace(/^\w/,c=>c.toUpperCase()))}</span><time>${esc(item.date)}</time></div><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></div></article>`;
}
function renderMedia(filter="all") {
  const items = content.media.filter(m=>filter==="all"||m.category===filter);
  $("#media-grid").innerHTML = items.length ? items.map(mediaCard).join("") : `<div class="empty-state">No items in this category yet.</div>`;
}
renderMedia();
document.querySelectorAll(".filter-btn").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter-btn").forEach(b=>b.classList.toggle("active",b===btn)); renderMedia(btn.dataset.filter);
}));
$("#news-grid").innerHTML = content.news.map((n,i)=>`
  <article class="news-card">${n.image?`<div class="news-image"><img src="${esc(n.image)}" alt="" loading="lazy"></div>`:`<div class="news-image news-placeholder"><span>VV</span><small>NEWS / 0${i+1}</small></div>`}
  <div class="news-body"><div class="news-meta"><span>${esc(n.category)}</span><time>${esc(n.date)}</time></div><h3>${esc(n.title)}</h3><p>${esc(n.description)}</p>${n.video?`<a class="inline-link" href="${esc(n.video)}" target="_blank" rel="noopener noreferrer">WATCH VIDEO ↗</a>`:""}</div></article>`).join("");
$("#social-links").innerHTML = content.socials.map(s=>`<a class="social-card" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(s.name)} Instagram in a new tab">${instagramIcon}<span>${esc(s.name)}</span><b>↗</b></a>`).join("");
const toggle = $(".menu-toggle"), nav = $(".nav-links");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("nav-open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("nav-open");toggle.setAttribute("aria-expanded","false");}));
