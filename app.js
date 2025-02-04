const words = ["Rodents", "Insects", "Ticks", "Mosquitoes", "Bugs", "Termites"];
let index = 0;
const textElement = document.querySelector(".changing-text");

setInterval(() => {
  textElement.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % words.length;
    textElement.textContent = words[index];
    textElement.style.opacity = 1;
  }, 500);
}, 2000);

// Services Section
const services = [
  {
    title: "Pest Control",
    image: "images/services/pest-control.jpg",
    description: "Safe and effective pest removal solutions."
  },
  {
    title: "Termite Treatment",
    image: "images/services/termite-control.jpg",
    description: "Protect your home from destructive termites."
  },
  {
    title: "Rodent Control",
    image: "images/services/rat-control.jpg",
    description: "Keep your house rodent-free with expert solutions."
  },
  {
    title: "Bed Bug Removal",
    image: "images/services/bed-bug-control.jpg",
    description: "Eliminate bed bugs with our specialized treatment."
  },
];

function generateWhatsAppLink(serviceTitle) {
  const phone = "923353482478";
  const message = `Hello, I am interested in your ${serviceTitle} service. Can you provide more details?`;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

const servicesContainer = document.getElementById("services-container");

services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add("services-sec", "col-lg-6", "col-md-12", "mb-4");
  card.innerHTML = `
    <div class="service-card d-flex flex-md-row flex-column align-items-center p-3" 
         data-aos="fade-up" data-aos-duration="3000" 
         style="border: 1px solid #ddd; border-radius: 10px; background: #fff;">
         
        <div class="service-image flex-shrink-0 w-100 text-center mb-3 mb-md-0" 
             style="max-width: 300px;">
            <img src="${service.image}" alt="${service.title}" 
                 style="width: 100%; border-radius: 10px;">
        </div>
        
        <div class="service-content text-center text-md-start ms-md-3 w-100">
            <h4 class="mt-2 font-bold text-success">${service.title}</h4>
            <p class="mb-2">${service.description}</p>
            <a href="${generateWhatsAppLink(service.title)}" target="_blank" class="btn btn-success">Contact Us</a>
        </div>
    </div>
  `;
  servicesContainer.appendChild(card);
});

// Video Section
const videoId = "vbyEVjsBDGM"; // Replace with your YouTube video ID
const videoModal = document.getElementById("videoModal");
const youtubeVideo = document.getElementById("youtubeVideo");

videoModal.addEventListener("show.bs.modal", function () {
  youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
});

videoModal.addEventListener("hidden.bs.modal", function () {
  youtubeVideo.src = "";
});

// Client Section
const clients = [
  "images/clients/Habib-Asset-Management.png",
  "images/clients/Habib-Metropolitan-Bank.png",
  "images/clients/Ismail-Industries-Limited.png",
  "images/clients/Ismail-Industries-Limited.png",
  "images/clients/Ismail-Industries-Limited.png",
  "images/clients/Lucky-Electric.png",
  "images/clients/Lucky-Electric.png",
  "images/clients/Lucky-Electric.png",
  "images/clients/Ismail-Industries-Limited.png",
  "images/clients/Ismail-Industries-Limited.png",
  "images/clients/Ismail-Industries-Limited.png",
  "images/clients/Ismail-Industries-Limited.png",
];

// Function to create slides dynamically
function createClientSlides() {
  const carouselContent = document.getElementById("carouselContent");
  carouselContent.innerHTML = ""; // Clear previous content

  let slides = "";
  let activeClass = "active";

  for (let i = 0; i < clients.length; i += 4) {
    let slideItems = clients
      .slice(i, i + 4)
      .map(client => `<img src="${client}" class="img-fluid client-logo" alt="Client">`)
      .join("");

    slides += `
      <div class="carousel-item ${activeClass}">
          <div class="d-flex justify-content-between align-items-center">
              ${slideItems}
          </div>
      </div>
    `;
    activeClass = ""; // Only first slide should be active
  }

  carouselContent.innerHTML = slides;
}

// Load client slides on page load
window.onload = createClientSlides;

// Contact Form Submission
$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault(); // Prevent default form submission

    let formData = $(this).serialize(); // Serialize form data

    // Basic validation before sending request
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let services = $("#services").val();
    let message = $("#message").val().trim();

    if (!name || !email || !phone || !services || !message) {
      $("#responseMessage").html(
        '<div class="alert alert-danger">All fields are required.</div>'
      );
      return;
    }

    $.ajax({
      url: "send_mail.php", // PHP script URL
      type: "POST",
      data: formData,
      dataType: "json",
      beforeSend: function () {
        $("#responseMessage").html(
          '<div class="alert alert-info">Sending message...</div>'
        );
      },
      success: function (response) {
        if (response.success) {
          $("#responseMessage").html(
            '<div class="alert alert-success">' + response.message + "</div>"
          );
          $("#contactForm")[0].reset(); // Reset form on success
        } else {
          $("#responseMessage").html(
            '<div class="alert alert-danger">' + response.message + "</div>"
          );
        }
      },
      error: function () {
        $("#responseMessage").html(
          '<div class="alert alert-danger">Error submitting form. Try again later.</div>'
        );
      },
    });
  });
});
