console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");
// Define your pages
const pages = [
    {url: "", title: "Home"},
    {url: "Projects/", title: "Projects"},
    {url: "Contact/", title: "Contact"},
    {url: "Contact/resume.html", title: "Resume"},
    {url: "https://github.com/dashboard", title: "GitHub"}
];
// Check if we're on the home page
const ARE_WE_HOME = document.documentElement.classList.contains("home");
function createNavigation() {
    const nav = document.createElement("nav");
    
    for (let p of pages) {
        let url = p.url;
        let title = p.title;
        
        // Adjust URL if not on home page and not an absolute URL
        if (!ARE_WE_HOME && !url.startsWith("http")) {
            url = "../" + url;
        }
        let a = document.createElement("a");
        a.href = url;
        a.textContent = title;
        
        // Add 'current' class if it's the current page
        a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
        
        // Add target="_blank" for external links
        if (a.host !== location.host) {
            a.target = "_blank";
        }
        
        nav.appendChild(a);
    }
    
    document.body.prepend(nav);
}

// Call the function to create the navigation
createNavigation();
function setupColorScheme() {
    const select = document.querySelector('select');
    
    if (!select) {
      console.error('Color scheme select element not found');
      return;
    }
  
    function setColorScheme(scheme) {
      document.documentElement.style.setProperty('color-scheme', scheme);
      select.value = scheme;
      localStorage.setItem('colorScheme', scheme);
    }
  
    select.addEventListener('change', function(event) {
      setColorScheme(event.target.value);
    });
  
    const savedScheme = localStorage.getItem('colorScheme');
    if (savedScheme) {
      setColorScheme(savedScheme);
    }
  }
  
  document.addEventListener('DOMContentLoaded', setupColorScheme);