// Existing code in global.js (if any)
// ...

// Utility function to select multiple elements (if not already defined)
const $$ = (...args) => document.querySelectorAll(...args);

// Define your pages
const pages = [
    {url: "", title: "Home"},
    {url: "Projects/", title: "Projects"},
    {url: "Contact/", title: "Contact"},
    {url: "Contact/resume.html", title: "Resume"},
    {url: "https://github.com/yourusername", title: "GitHub"}
];

// Check if we're on the home page
const ARE_WE_HOME = document.documentElement.classList.contains("home");

// Create navigation
const nav = document.createElement("nav");
document.body.prepend(nav);

// Create and add navigation links
for (let p of pages) {
    let url = p.url;
    let title = p.title;

    // Adjust URL for non-home pages
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    // Add 'current' class to current page link
    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);

    // Add target="_blank" for external links
    if (a.host !== location.host) {
        a.target = "_blank";
    }

    nav.append(a);
}

document.addEventListener('DOMContentLoaded', function() {
    const pages = [
        {url: "index.html", title: "Home"},
        {url: "Projects/index.html", title: "Projects"},
        {url: "Contact/index.html", title: "Contact"},
        {url: "Contact/resume.html", title: "Resume"},
        {url: "https://github.com/EmmaIngabire", title: "GitHub"}
    ];

    const nav = document.getElementById('main-nav');
    const ul = document.createElement("ul");
    nav.appendChild(ul);

    pages.forEach(page => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = page.url;
        a.textContent = page.title;

        if (page.url.startsWith("http")) {
            a.target = "_blank";
        }

        li.appendChild(a);
        ul.appendChild(li);
    });
});