export {loadAboutpage}
import { root } from "./variables.js";
import aboutpageImg from "../images/aboutpageImage.jpg"

function loadAboutpage(){

    const aboutpageImage = document.createElement("img");
    aboutpageImage.src = aboutpageImg;
    aboutpageImage.classList.add("hero-image");

    const header = document.createElement("h1");
    header.textContent = "Nourishing Body & Soul with Every Meal";
    
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.innerHTML = `
    <h2>Address:</h2>
        <p>123 Harvest Lane<p>
        <p>Eden Valley, CA 90210<p>

    <h2>Contact Information:</h2>
    <p><strong>Phone:</strong> (555) 123-4567</p>
    <p><strong>Email:</strong> info@mannagarden.com</p>

    <h2>Hours of Operation:</h2>
    <p><strong>Sunday:</strong> 12:00 PM - 8:00 PM</p>
    <p><strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM</p>
    <p><strong>Friday:</strong> 11:00 AM - 3:00 PM</p>
    <p><strong>Saturday:</strong> Closed</p>

    <h2>Follow us on social media:</h2>
    <p><strong>Instagram:</strong> @MannaGardenDining</p>
    <p><strong>Facebook:</strong> facebook.com/MannaGarden</p>
`;

    root.appendChild(header);
    root.appendChild(aboutpageImage);
    root.appendChild(descriptionDiv);
}