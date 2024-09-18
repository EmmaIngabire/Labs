console.log("ITS ALIVE!");
// Utility function to select multiple elements
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

// Define your pages
const pages = [
    {url: "", title: "Home"},
    {url: "Projects/", title: "Projects"},
    {url: "Contact/", title: "Contact"},
    {url: "Contact/resume.html", title: "Resume"},
    {url: "https://github.com/EmmaIngabire", title: "GitHub"}
];

// Check if we're on the home page
const ARE_WE_HOME = document.documentElement.classList.contains("home");

// Create navigation
const nav = document.createElement("nav");
const ul = document.createElement("ul");
nav.appendChild(ul);

// Create and add navigation links
for (let p of pages) {
    let url = p.url;
    let title = p.title;

    // Adjust URL for non-home pages
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    // Add 'current' class to current page link
    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);

    // Add target="_blank" for external links
    if (a.host !== location.host) {
        a.target = "_blank";
    }

    li.appendChild(a);
    ul.appendChild(li);
}

// Insert the navigation at the beginning of the body
document.body.prepend(nav);

console.log("Navigation menu created!");