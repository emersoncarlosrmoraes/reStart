async function loadComponent(id,file){

const res = await fetch(file)
const html = await res.text()

document.getElementById(id).innerHTML = html

}

async function loadLayout(){

await loadComponent("navbar","../frontend/components/navbar.html")
await loadComponent("sidebar","../frontend/components/sidebar.html")

setupSidebar()
setupLogout()

}

/* SIDEBAR */

function setupSidebar(){

const menuBtn = document.getElementById("menuBtn")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("sidebarOverlay")

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("sidebar-open")
overlay.classList.toggle("overlay-show")

})

overlay.addEventListener("click",()=>{

sidebar.classList.remove("sidebar-open")
overlay.classList.remove("overlay-show")

})

}

}

/* LOGOUT */

function setupLogout(){

const logoutBtn = document.getElementById("logoutBtn")

if(logoutBtn){

logoutBtn.addEventListener("click",async()=>{

await supabase.auth.signOut()

window.location.href="index.html"

})

}

}

loadLayout()