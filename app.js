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
    description:
      "Safe and effective pest removal solutions Safe and effective pest removal solutions Safe and effective pest removal solutions Safe and effective pest removal solutions.",
  },
  {
    title: "Termite Treatment",
    image: "images/services/termite-control.jpg",
    description:
      "Protect your home from destructive termites.Safe and effective pest removal solutions Safe and effective pest removal solutions Safe and effective pest removal solutions.",
  },
  {
    title: "Rodent Control",
    image: "images/services/rat-control.jpg",
    description:
      "Keep your house rodent-free with expert solutions.Safe and effective pest removal solutions Safe and effective pest removal solutions Safe and effective pest removal solutions.",
  },
  {
    title: "Bed Bug Removal",
    image: "images/services/bed-bug-control.jpg",
    description:
      "Eliminate bed bugs with our specialized treatment.Safe and effective pest removal solutions Safe and effective pest removal solutions Safe and effective pest removal solutions.",
  },
];

function generateWhatsAppLink(serviceTitle) {
  const phone = "923353482478";
  const message = `Hello, I am interested in your ${serviceTitle} service. Can you provide more details?`;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;
}

const servicesContainer = document.getElementById("services-container");

services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add("services-sec", "col-lg-6", "col-md-12", "mb-4");
  card.innerHTML = `
        <div class="service-card d-flex flex-md-row flex-column align-items-center p-3" 
             data-aos="fade-up" data-aos-duration="3000" 
             style="border: 1px solid #ddd; border-radius: 10px; background: #fff;">
             
            <!-- Image (Larger & Adjusted on Small Screens) -->
            <div class="service-image flex-shrink-0 w-100 text-center mb-3 mb-md-0" 
                 style="max-width: 300px;">
                <img src="${service.image}" alt="${service.title}" 
                     style="width: 100%; border-radius: 10px;">
            </div>
            
            <!-- Text Content (Moves Below Image on Small Screens) -->
            <div class="service-content text-center text-md-start ms-md-3 w-100">
                <h4 class="mt-2 font-bold text-success">${service.title}</h4>
                <p class="mb-2">${service.description}</p>
                <a href="${generateWhatsAppLink(
                  service.title
                )}" target="_blank" class="btn btn-success">Contact Us</a>
            </div>
        </div>
    `;
  servicesContainer.appendChild(card);
});

// Vedio Section
const videoId = "vbyEVjsBDGM"; // Replace with your YouTube video ID
const videoModal = document.getElementById("videoModal");
const youtubeVideo = document.getElementById("youtubeVideo");

videoModal.addEventListener("show.bs.modal", function () {
  youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
});

videoModal.addEventListener("hidden.bs.modal", function () {
  youtubeVideo.src = "";
});

// client section

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
    // Change to 4 logos per slide
    // Create a new carousel item for every 4 logos
    let slideItems = clients
      .slice(i, i + 4)
      .map(
        (client) =>
          `<img src="${client}" class="img-fluid client-logo" alt="Client">`
      )
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
