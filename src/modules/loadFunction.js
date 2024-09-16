export {loadFunction};
import heroImg from "../images/hero.jpg"

function loadFunction(){

    const root = document.querySelector("#content")
    const heroImage = document.createElement("img");
    heroImage.src = heroImg;
    heroImage.classList.add("hero-image");
    
    const header = document.createElement("h1");
    header.textContent = "Best Header";
    const para = document.createElement("p");
    para.textContent = "this is the best restaurant you ever visited in your life, you can check out the menu"


    root.appendChild(heroImage);
    root.appendChild(header);
    root.appendChild(para);

};
