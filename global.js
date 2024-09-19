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
    {url: "Contact/", title: "Projects"},
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