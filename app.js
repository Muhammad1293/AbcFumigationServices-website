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
    description: "Safe and effective pest removal solutions.",
  },
  {
    title: "Termite Treatment",
    image: "images/services/termite-control.jpg",
    description: "Protect your home from destructive termites.",
  },
  {
    title: "Rodent Control",
    image: "images/services/rat-control.jpg",
    description: "Keep your house rodent-free with expert solutions.",
  },
  {
    title: "Bed Bug Removal",
    image: "images/services/bad-bug-control.jpg",
    description: "Eliminate bed bugs with our specialized treatment.",
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
  card.classList.add("col-lg-3", "col-md-6", "mb-4");
  card.innerHTML = `
        <div class="service-card" data-aos="fade-up" data-aos-duration="3000">
            <img src="${service.image}" alt="${service.title}">
            <h4 class="mt-3 font-bold green">${service.title}</h4>
            <p>${service.description}</p>
            <a href="${generateWhatsAppLink(
              service.title
            )}" target="_blank" class="whatsapp-btn font-bold">Contact Us</a>
        </div>
    `;
  servicesContainer.appendChild(card);
});
