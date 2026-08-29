const travel = ['Amsterdam, Netherlands', 'Boston, Massachusetts, USA', 'Brussels, Belgium', 'Da Nang, Vietnam', 'Fira, Greece', 
    'Giethoorn, Netherlands', 'Hanoi, Vietnam', 'Ho Chi Minh City, Vietnam', 'Hoi An, Vietnam', 'Jersey City, New Jersey, USA', 
    'Jiufen, Taiwan', 'Kyoto, Japan', 'Las Vegas, Nevada, USA', 'Long Beach, California, USA', 'Los Angeles, California, USA', 
    'New York, New York, USA', 'Ninh Binh, Vietnam', 'Osaka, Japan', 'Oía, Greece', 'Portland, Maine, USA', 'Providence, Rhode Island, USA', 
    'San Diego, California, USA', 'Seabrook, New Hampshire, USA', 'Seattle, Washington, USA', 'Seoul, South Korea', 'Stamford, Connecticut, USA', 
    'Taipei, Taiwan', 'Vung Tau, Vietnam'
];

const grid = document.getElementById("project-grid");

for (let i = 0; i < travel.length; i++) {
    const card = document.createElement("div");
    card.className = "photo-card";
    
    card.innerHTML = `<figure>
        <img src ="assets/travelphotography/${travel[i]}.jpg" />
        <figcaption> ${travel[i]} </figcaption>
    </figure>`;

    grid.appendChild(card);
}