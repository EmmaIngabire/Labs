document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Define your pages
    const pages = [
        {url: "index.html", title: "Home"},
        {url: "Projects/index.html", title: "Projects"},
        {url: "Contact/index.html", title: "Contact"},
        {url: "Contact/resume.html", title: "Resume"},
        {url: "https://github.com/EmmaIngabire", title: "GitHub"}
    ];

    // Create navigation
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    nav.appendChild(ul);

    // Create and add navigation links
    for (let p of pages) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = p.url;
        a.textContent = p.title;

        // Add target="_blank" for external links
        if (p.url.startsWith("http")) {
            a.target = "_blank";
        }

        li.appendChild(a);
        ul.appendChild(li);
    }

    // Insert the navigation at the beginning of the body
    document.body.prepend(nav);

    console.log("Navigation menu created!");
});