const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  })) 

  function openMenu(evt, menuName) {
    var i, menuTabs, menuContents;

    // Get all menu tabs and menu contents
    menuTabs = document.getElementsByClassName("menu-tab");
    menuContents = document.getElementsByClassName("menu-content");

    // Hide all menu contents
    for (i = 0; i < menuContents.length; i++) {
        menuContents[i].style.display = "none";
    }

    // Remove the 'active' class from all menu tabs
    for (i = 0; i < menuTabs.length; i++) {
        menuTabs[i].classList.remove("active");
    }

    // Display the clicked menu content and mark the clicked menu tab as active
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Default menu on page load
document.getElementsByClassName("menu-tab")[0].click();
