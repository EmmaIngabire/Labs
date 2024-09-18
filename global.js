console.log("ITS ALIVE!");
function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}
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
// Insert the color scheme switcher at the beginning of the body
document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
      Theme:
      <select>
        <option value="light dark">Automatic</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  `);
  
  // Get a reference to the select element
  const select = document.querySelector('.color-scheme select');
  
  // Function to set the color scheme
  function setColorScheme(scheme) {
    document.documentElement.style.setProperty("color-scheme", scheme);
    select.value = scheme;
    localStorage.colorScheme = scheme;
  }
  
  // Add event listener for changes
  select.addEventListener("input", function (event) {
    setColorScheme(event.target.value);
  });
  
  // Check for saved preference on page load
  if ("colorScheme" in localStorage) {
    setColorScheme(localStorage.colorScheme);
  } else {
    setColorScheme("light dark"); // Default to automatic
  }