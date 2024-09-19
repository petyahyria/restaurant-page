export {loadFunction};
import { root } from "./variables";
import {loadHomepage} from "./loadHomepage";
import {loadMenupage} from "./loadMenu"
import { loadAboutpage } from "./loadAboutpage";


function loadFunction(){
        loadMenupage();
        root.innerHTML = "";
        loadHomepage();

        const homeBtn = document.querySelector("#home-btn");
        const menuBtn = document.querySelector("#menu-btn");
        const aboutBtn = document.querySelector("#about-btn");

        const buttons = [homeBtn, menuBtn, aboutBtn]
        const removeClassActive = () => {buttons.forEach(el=> el.classList.remove("active-btn"))};

        const navButtons = document.querySelector(".nav");
        navButtons.addEventListener("click", e=>{
            const target = e.target;
            switch (target.id) {
                case "home-btn":
                    root.innerHTML = ""
                    loadHomepage();
                    removeClassActive();
                    target.classList.add("active-btn");
                    break;
                case "menu-btn":
                    root.innerHTML = ""
                    loadMenupage();
                    removeClassActive();
                    target.classList.add("active-btn");
                    break;
                case "about-btn":
                    root.innerHTML = ""
                    loadAboutpage();
                    removeClassActive();
                    target.classList.add("active-btn");
                    break;
            }
        })
};
