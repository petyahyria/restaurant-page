export {loadFunction};
import {loadHomepage} from "./loadHomepage";

function loadFunction(){
        loadHomepage();
        const navButtons = document.querySelector(".nav");
        navButtons.addEventListener("click", e=>{
            const target = e.target;
            switch (target.id) {
                case "home-btn":
                    loadHomepage();
                    break;
            }
        })
};
