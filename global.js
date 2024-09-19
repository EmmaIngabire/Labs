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
    console.log("setupColorScheme function called");
    let select = document.querySelector('.color-scheme select');
    
    if (!select) {
      console.log("Select element not found, creating it");
      const label = document.createElement('label');
      label.className = 'color-scheme theme-switcher'; 
      label.textContent = 'Theme: ';
      
      select = document.createElement('select');
      const options = [
        {value: 'light dark', text: 'Automatic'},
        {value: 'light', text: 'Light'},
        {value: 'dark', text: 'Dark'}
      ];
      
      options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        select.appendChild(optionElement);
      });
      
      label.appendChild(select);
      document.body.insertAdjacentElement('afterbegin', label);
    }
  
    console.log("Select element:", select);
  
    function setColorScheme(scheme) {
      console.log("Setting color scheme to:", scheme);
      document.documentElement.style.setProperty('color-scheme', scheme);
      select.value = scheme;
      localStorage.setItem('colorScheme', scheme);
    }
  
    select.addEventListener('change', function(event) {
      console.log("Select value changed to:", event.target.value);
      setColorScheme(event.target.value);
    });
  
    const savedScheme = localStorage.getItem('colorScheme');
    if (savedScheme) {
      console.log("Found saved scheme:", savedScheme);
      setColorScheme(savedScheme);
    } else {
      console.log("No saved scheme found");
    }
  }
  
  // global.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    // Add event listener for form submission
    form?.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Create a new FormData object from the form
        const data = new FormData(form);
        
        // Initialize the mailto URL
        let mailtoUrl = 'mailto:emmangabire2000@gmail.com';
        
        // Get subject and body from the form and encode them
        let subject = '';
        let body = '';
        
        for (let [name, value] of data) {
            if (name === 'subject') {
                subject = encodeURIComponent(value);
            } else if (name === 'body') {
                body = encodeURIComponent(value);
            }
        }
        
        // Build the final mailto URL with subject and body
        mailtoUrl += `?subject=${subject}&body=${body}`;
        
        // Open the mailto link
        location.href = mailtoUrl;
    });
});
