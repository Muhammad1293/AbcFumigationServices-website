const words = ["Rodents", "Insects","Ticks","Mosquitoes", "Bugs", "Termites"];
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