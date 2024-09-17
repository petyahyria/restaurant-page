export {loadMenupage}
import { root } from "./variables";

function loadMenupage(){
    const content = document.createElement("div");

    content.innerHTML = `
    <h1>Starters:</h1>
    <h2>Garden of Eden Salad</h2>
    <p>A fresh mix of organic greens, heirloom tomatoes, cucumbers, olives, and figs, dressed with cold-pressed olive oil and a sprinkle of sea salt.</p>

    <h2>Lentil & Herb Soup</h2>
    <p>A hearty, biblical-inspired soup made with organic lentils, fresh herbs, garlic, and a hint of lemon.</p>

    <h2>Olive & Flatbread Platter</h2>
    <p>House-baked flatbread served with a trio of marinated olives, hummus, and extra-virgin olive oil.</p>

    <h1>Main Dishes:</h1>
    <h2>Grilled Pasture-Raised Lamb with Herbs</h2>
    <p>Tender lamb marinated in a blend of rosemary, thyme, and garlic, served with roasted root vegetables and a side of ancient grains.</p>

    <h2>Manna Bowl</h2>
    <p>A nourishing bowl filled with quinoa, roasted chickpeas, sweet potatoes, avocado, and drizzled with tahini dressing.</p>

    <h2>Fish of Galilee</h2>
    <p>Grilled sustainably-sourced fish (such as tilapia or sea bass) seasoned with herbs and lemon, served alongside wild rice and sautéed greens.</p>

    <h2>Stuffed Grape Leaves with Quinoa & Pomegranate</h2>
    <p>Grape leaves stuffed with a mixture of quinoa, pine nuts, herbs, and pomegranate seeds, served with a lemon yogurt sauce.</p>

    <h2>Biblical Harvest Plate</h2>
    <p>A colorful medley of roasted seasonal vegetables, ancient grains, and a variety of legumes, topped with fresh herbs and a drizzle of olive oil.</p>

    <h1>Sides:</h1>
    <h2>Roasted Root Vegetables</h2>
    <p>A blend of carrots, parsnips, and beets roasted with honey and olive oil.</p>

    <h2>Ancient Grain Pilaf</h2>
    <p>A mix of quinoa, farro, and barley, seasoned with fresh herbs and lemon zest.</p>

    <h2>Sautéed Greens with Garlic & Olive Oil</h2>
    <p>A simple but flavorful side of organic greens, lightly sautéed in garlic and olive oil.</p>

    <h1>Desserts:</h1>
    <h2>Honey & Fig Tart</h2>
    <p>A delightful tart made with whole wheat crust, filled with figs and drizzled with raw honey.</p>

    <h2>Almond & Date Cake</h2>
    <p>A moist, naturally sweet cake made from almond flour, dates, and a touch of cinnamon.</p>

    <h2>Pomegranate Sorbet</h2>
    <p>A refreshing, dairy-free sorbet made from fresh pomegranate juice and a hint of mint.</p>

    <h1>Drinks:</h1>
    <h2>Herbal Infusion Tea</h2>
    <p>A soothing blend of mint, chamomile, and lavender, served hot or iced.</p>

    <h2>Pomegranate & Orange Spritzer</h2>
    <p>A refreshing drink made from fresh pomegranate juice, orange, and sparkling water.</p>

    <h2>Cucumber & Lemon Water</h2>
    <p>Hydrating cucumber and lemon-infused water with a hint of fresh mint.</p>
    `;

    root.appendChild(content);
}