document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = navLinks.querySelectorAll("a");

  // Toggle dropdown when hamburger is clicked
  hamburger.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    }
  });

  // Close dropdown when a link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        navLinks.style.display = "none";
        // Scroll to top or hero section
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
});
