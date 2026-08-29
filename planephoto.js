const airlines = ["Aeroflot", "Aeromexico", "AeroUnion", "Air Baltic", "Air Canada", 
    "Air Dolomiti", "Air France", "Air Tahiti Nui", "Alaska Airlines", "All Nippon Airways",
    "Allegiant Air", "American Airlines", "Asiana Airlines",
];

const grid = document.getElementById("project-grid");

for (let i = 0; i < airlines.length; i++) {
    const card = document.createElement("div");
    card.className = "photo-card";
    
    card.innerHTML = `<figure>
        <img src ="assets/planespotting/${airlines[i]}.jpg" />
        <figcaption>${airlines[i]}</figcaption>
    </figure>`;

    grid.appendChild(card);
}