// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// Toggle navigation visibility
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.textContent = navigation.classList.contains('open') ? '✖' : '☰';
});

// Ensure the menu is hidden on page load
document.addEventListener("DOMContentLoaded", () => {
    navigation.classList.remove("open");
});

// Responsive hamburger button visibility
const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleResize(e) {
    if (e.matches) {
        navigation.classList.add('open');  // Keep menu visible on larger screens
    } else {
        navigation.classList.remove('open'); // Hide it on smaller screens
    }
}

mediaQuery.addEventListener('change', handleResize);
handleResize(mediaQuery);









// Java Temple Images

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Asunción Paraguay",
      location: "Asunción, Paraguay",
      dedicated: "2002, May, 19",
      area: 11906,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg"
    },
    {
        templeName: "Belém Brazil",
      location: "Belém, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17-19",
      area: 30659,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
    {
        templeName: "Cobán Guatemala",
        location: "Cobán, Guatemala",
        dedicated: "2024, June, 9",
        area: 8772,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
    }
  ];


  
  function displayTemples(filteredTemples) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    filteredTemples.forEach(t => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        card.innerHTML = `
            <h3>${t.templeName}</h3>
            <p>LOCATION: ${t.location}</p>
            <p>DEDICATED: ${t.dedicated}</p>
            <p>SIZE: ${t.area} sqft</p>
            <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
        `;
        gallery.appendChild(card);
    });
}

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.getAttribute('data-filter');
        let filtered = temples;

        if (filter === 'old') filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        if (filter === 'new') filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        if (filter === 'large') filtered = temples.filter(t => t.area > 90000);
        if (filter === 'small') filtered = temples.filter(t => t.area < 10000);

        displayTemples(filtered);
    });
});

displayTemples(temples); 