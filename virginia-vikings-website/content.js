/*
  VIRGINIA VIKINGS WEBSITE CONTENT
  Edit this file to update profiles, players, media and news.
  Image paths are relative to index.html (recommended: assets/filename.jpg).
  Do not add private credentials or API keys here.
*/
window.VIKINGS_CONTENT = {
  management: [
    {name:"Sharath Chetty", role:"Founder", org:"ProCorp Systems", bio:"Providing the vision and leadership behind the Virginia Vikings journey.", image:"", instagram:"https://instagram.com/sharath.chetty?srtk=NGw0ZzV0aW01Y3hn"},
    {name:"Chakri Vanimisetti", role:"Co-Founder", org:"ProCorp Systems", bio:"Building the foundation and supporting the team's ambitions.", image:"", instagram:"https://www.instagram.com/chakri_vanimisetti?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw=="},
    {name:"Vardhan", role:"Team Mentor", org:"Virginia Vikings", bio:"Guiding the team with perspective, encouragement and a winning mindset.", image:"", instagram:"https://www.instagram.com/its_mevardhan?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw=="},
    {name:"Phani", role:"Team Captain", org:"Virginia Vikings", bio:"Leading from the front and bringing the squad together on match day.", image:"", instagram:"https://www.instagram.com/phani.champ/?utm_source=ig_web_button_share_sheet"},
    {name:"Bandaru Ayyappa", role:"Team Coach", org:"Virginia Vikings", bio:"Former IPL player who represented Delhi Capitals in 2019. Biography can be updated by the team.", image:"", instagram:"https://www.instagram.com/ayyappabandaru_ab_3?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw=="}
  ],
  players: Array.from({length:20}, (_,i)=>({
    name:`Player ${String(i+1).padStart(2,"0")}`, jersey:"—", role:"Role TBA", bio:"", stats:"", image:"", instagram:""
  })),
  media: [
    {title:"Match posters", description:"Official fixtures and match-day artwork will be added here.", category:"posters", date:"Coming soon", image:"", video:""},
    {title:"Match highlights", description:"Watch official match highlights when videos are published.", category:"highlights", date:"Coming soon", image:"", video:""},
    {title:"Vikings in action", description:"Team photography and behind-the-scenes moments.", category:"photos", date:"Coming soon", image:"", video:""},
    {title:"Team announcements", description:"Official team updates and tournament announcements.", category:"announcements", date:"Coming soon", image:"", video:""}
  ],
  news: [
    {title:"The Vikings journey begins", category:"TEAM NEWS", date:"Announcement pending", description:"Official team announcements and season updates will be published here.", image:"", video:""},
    {title:"Match previews & reports", category:"MATCH CENTER", date:"Updates after confirmation", description:"Confirmed fixtures, match previews and verified post-match reports will appear here.", image:"", video:""},
    {title:"Player spotlight", category:"THE SQUAD", date:"Coming soon", description:"Meet the players and discover their stories once the roster is announced.", image:"", video:""}
  ],
  socials: [
    {name:"Virginia Vikings", url:"https://www.instagram.com/virginia_vikings?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="},
    {name:"USCL T20", url:"https://www.instagram.com/usclt20?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw=="},
    {name:"Wesley Elite Sports", url:"https://www.instagram.com/wesleyelitesports?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw=="}
  ]
};