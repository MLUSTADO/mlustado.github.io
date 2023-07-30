// Function to handle form validation and display success message
function validate() {
    var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
    var check = true;

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === "") {
            var errorSpan = fields[i].nextElementSibling;
            if (!errorSpan) {
                errorSpan = document.createElement("span");
                errorSpan.classList.add("error");
                fields[i].parentNode.appendChild(errorSpan);
            }
            errorSpan.innerHTML = "Oops! " + fields[i].placeholder + " is required.";
            fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
            check = false;
        } else {
            var errorSpan = fields[i].nextElementSibling;
            if (errorSpan) {
                errorSpan.innerHTML = "";
            }
            fields[i].style.boxShadow = "none";
        }
    }

    return check;
}

// Function to show the success message
function showSuccessMessage() {
    var successMessage = document.createElement("div");
    successMessage.textContent = "Message has been sent. Expect a response within 24 hours.";
    successMessage.classList.add("success-message");
    document.body.appendChild(successMessage);

    // Hide the success message after 5 seconds (adjust as needed)
    setTimeout(function () {
        document.body.removeChild(successMessage);
    }, 5000);
}

// Function to clear the form fields after successful submission
function clearForm(fields) {
    for (var i = 0; i < fields.length; i++) {
        fields[i].value = "";
    }
}

function submitForm() {
    if (validate()) {
        showSuccessMessage();
        var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
        clearForm(fields);
    }
}


  // Menu Logic
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
