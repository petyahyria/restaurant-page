export {loadFunction};
import homepageImg from "../images/homepage-img.jpg"

function loadFunction(){

    const root = document.querySelector("#content")
    const homepageImage = document.createElement("img");
    homepageImage.src = homepageImg;
    homepageImage.classList.add("hero-image");
    
    const header = document.createElement("h1");
    header.textContent = "Welcome to Manna Garden";
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.innerHTML = `
    <p>At Manna Garden, we believe that food is a divine gift, meant to nourish both body and soul. Inspired by the clean, wholesome principles found in the Bible, our meals are crafted with the finest organic ingredients, ensuring that every dish is pure, natural, and bursting with life-giving nutrients.</p>

    <p>Our menu is rooted in the abundance of the earth, offering a rich selection of plant-based and clean, ethically-sourced proteins. From garden-fresh produce to ancient grains, each ingredient is handpicked for its purity, sustainability, and alignment with Biblical dietary principles.</p>

    <p>We also take great care in providing clean meats, carefully chosen based on biblical standards. Each selection of meat is sourced from ethically raised animals, free from additives or artificial treatments. Whether it's grass-fed beef, pasture-raised poultry, or sustainably sourced fish, we ensure that all our meats are both wholesome and in harmony with ancient guidelines for clean, healthy living.</p>

    <p>At Manna Garden, we invite you to experience a sacred connection with your food. Every meal is prepared with care, honoring the earth's bounty and delivering flavors that are as nourishing as they are delicious.</p>

    <p>Whether you’re seeking a peaceful meal or a gathering with loved ones, our serene atmosphere reflects the tranquility of a garden—perfect for savoring life’s most essential blessings.</p>

    <p>Come and dine with us, where every meal is a gift, and every bite is a celebration of health, wholeness, and faith.</p>
`;


    root.appendChild(header);
    root.appendChild(homepageImage);
    root.appendChild(descriptionDiv);

};
