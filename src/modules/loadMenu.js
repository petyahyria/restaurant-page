export {loadMenupage}
import { root } from "./variables";
import gardenOfEdenSalad from "../images/gardenOfEdenSalad.jpeg"
import lentilAndHerbSoap from "../images/lentilAndHerbSoap.jpg"
import oliveAndFlatbreadPlatter from "../images/oliveAndFlatbreadPlatter.jpg"
import ancientGrainAndHerb from "../images/ancientGrainAndHerb.jpg"
import grilledLamb from "../images/grilledLamb.jpg"
import mannaBowl from "../images/mannaBowl.jpg"
import fishGalilee from "../images/fishGalilee.jpg"
import grapeLeavesWithQuinoa from "../images/grapeLeavesWithQuinoa.jpg"
import harvestPlate from "../images/harvestPlate.jpg"
import salmonWithHoney from "../images/salmonWithHoney.jpg"
import rootVegetables from "../images/rootVegetables.jpg"
import grainPillaf from "../images/grainPillaf.jpg"
import sauteedGreens from "../images/sauteedGreens.jpg"
import roastedCauliFlower from "../images/roastedCauliFlower.jpg"
import honeyAndFigTart from "../images/honeyAndFigTart.jpg"
import almondAndDateCake from "../images/almondAndDateCake.jpg"
import pomegranateSorbet from "../images/pomegranateSorbet.jpg"
import coconutAlmondBlissBites from "../images/coconutAlmondBlissBites.jpg"
import herbalInfusionTea from "../images/herbalInfusionTea.jpg"
import pomegranateAndOrangeSpitzer from "../images/pomegranateAndOrangeSpitzer.jpg"
import cucumberAndLemonWater from "../images/cucumberAndLemonWater.jpg"
import figAndHoneyIcedTea from "../images/figAndHoneyIcedTea.jpg"


function loadMenupage(){
    const content = document.createElement("div");

    content.innerHTML = `
    
    <h1>Starters:</h1>
    <div class="starters">
        <div>
            <h2>Garden of Eden Salad</h2>
            <img src="${gardenOfEdenSalad}" alt="salad">
            <p>A fresh mix of organic greens, heirloom tomatoes, cucumbers, olives, and figs, dressed with cold-pressed olive oil and a sprinkle of sea salt.</p>
        </div>
        <div>
            <h2>Lentil & Herb Soup</h2>
            <img src="${lentilAndHerbSoap}" alt="soup">
            <p>A hearty, biblical-inspired soup made with organic lentils, fresh herbs, garlic, and a hint of lemon.</p>
        </div>

        <div>
            <h2>Olive & Flatbread Platter</h2>
            <img src="${oliveAndFlatbreadPlatter}" alt="bread with olives">
            <p>House-baked flatbread served with a trio of marinated olives, hummus, and extra-virgin olive oil.</p>
        </div>
        <div>
            <h2>Ancient Grain & Herb Fritters</h2>
            <img src="${ancientGrainAndHerb}" alt="crispy fritters">
            <p>Crispy fritters made from a blend of organic quinoa, millet, and fresh herbs, lightly fried and served with a tangy yogurt dipping sauce.</p>
        </div>
    </div>

    <h1>Main Dishes:</h1>
    <div class="main-dishes">
        <div>
            <h2>Grilled Pasture-Raised Lamb with Herbs</h2>
            <img src="${grilledLamb}" alt="grilled lamb with roots">
            <p>Tender lamb marinated in a blend of rosemary, thyme, and garlic, served with roasted root vegetables and a side of ancient grains.</p>
        </div>
        <div>
            <h2>Manna Bowl</h2>
            <img src="${mannaBowl}" alt="roasted cheakpeas">
            <p>A nourishing bowl filled with quinoa, roasted chickpeas, sweet potatoes, avocado, and drizzled with tahini dressing.</p>
        </div>
        <div>
            <h2>Fish of Galilee</h2>
            <img src="${fishGalilee}" alt="fish and lemon">
            <p>Grilled sustainably-sourced fish (such as tilapia or sea bass) seasoned with herbs and lemon, served alongside wild rice and sautéed greens.</p>
        </div>
        <div>
            <h2>Stuffed Grape Leaves with Quinoa & Pomegranate</h2>
            <img src="${grapeLeavesWithQuinoa}" alt="quinoa">
            <p>Grape leaves stuffed with a mixture of quinoa, pine nuts, herbs, and pomegranate seeds, served with a lemon yogurt sauce.</p>
        </div>    
        <div>
            <h2>Biblical Harvest Plate</h2>
            <img src="${harvestPlate}" alt="salad">
            <p>A colorful medley of roasted seasonal vegetables, ancient grains, and a variety of legumes, topped with fresh herbs and a drizzle of olive oil.</p>
        </div>
        <div>
            <h2>Cedar Plank Salmon with Honey Glaze</h2>
            <img src="${salmonWithHoney}" alt="salmon">
            <p>Wild-caught salmon, marinated in a delicate honey and herb glaze, roasted on a cedar plank for a smoky flavor. Served with roasted asparagus and a side of ancient grain pilaf.</p>
        </div>

    </div>
    
    <h1>Sides:</h1>
    <div class="sides">
        <div>
            <h2>Roasted Root Vegetables</h2>
            <img src="${rootVegetables}" alt="roasted vegetables">
            <p>A blend of carrots, parsnips, and beets roasted with honey and olive oil.</p>
        </div>
        <div>
            <h2>Ancient Grain Pilaf</h2>
            <img src="${grainPillaf}" alt="cereal">
            <p>A mix of quinoa, farro, and barley, seasoned with fresh herbs and lemon zest.</p>
        </div>
        <div>
            <h2>Sautéed Greens with Garlic & Olive Oil</h2>
            <img src="${sauteedGreens}" alt="green salad">
            <p>A simple but flavorful side of organic greens, lightly sautéed in garlic and olive oil.</p>
        </div>
        <div>
            <h1>Tahini Roasted Cauliflower</h1>
            <img src="${roastedCauliFlower}" alt="cauliflover salad">
            <p>Oven-roasted cauliflower florets tossed in a creamy tahini sauce, topped with toasted pine nuts and fresh parsley for a burst of flavor.</p>
        </div>
    </div>
    <h1>Desserts:</h1>
    <div class="desserts">
        <div>
            <h2>Honey & Fig Tart</h2>
            <img src="${honeyAndFigTart}" alt="crispy fritters">
            <p>A delightful tart made with whole wheat crust, filled with figs and drizzled with raw honey.</p>
        </div>
        <div>
            <h2>Almond & Date Cake</h2>
            <img src="${almondAndDateCake}" alt="crispy fritters">
            <p>A moist, naturally sweet cake made from almond flour, dates, and a touch of cinnamon.</p>
        </div>    
        <div>
            <h2>Pomegranate Sorbet</h2>
            <img src="${pomegranateSorbet}" alt="crispy fritters">
            <p>A refreshing, dairy-free sorbet made from fresh pomegranate juice and a hint of mint.</p>
        </div>    
        <div>
            <h2>Coconut Almond Bliss Bites</h2>
            <img src="${coconutAlmondBlissBites}" alt="crispy fritters">
            <p>A delightful, no-bake treat made from shredded coconut, almond flour, and dates, rolled into bite-sized pieces and drizzled with dark chocolate.</p>
        </div>    
    </div>

    <h1>Drinks:</h1>
    <div class="drinks">
        <div>
            <h2>Herbal Infusion Tea</h2>
            <img src="${herbalInfusionTea}" alt="crispy fritters">
            <p>A soothing blend of mint, chamomile, and lavender, served hot or iced.</p>
        </div>
        <div>
            <h2>Pomegranate & Orange Spritzer</h2>
            <img src="${pomegranateAndOrangeSpitzer}" alt="crispy fritters">
            <p>A refreshing drink made from fresh pomegranate juice, orange, and sparkling water.</p>
        </div>
        <div>    
            <h2>Cucumber & Lemon Water</h2>
            <img src="${cucumberAndLemonWater}" alt="crispy fritters">
            <p>Hydrating cucumber and lemon-infused water with a hint of fresh mint.</p>
        </div>            
        <div>    
            <h2>Fig & Honey Iced Tea</h2>
            <img src="${figAndHoneyIcedTea}" alt="crispy fritters">
            <p>A refreshing blend of brewed herbal tea infused with the natural sweetness of figs and a touch of raw honey, served over ice with a slice of lemon.</p>
        </div>            
    </div>
    `;

    root.appendChild(content);
};