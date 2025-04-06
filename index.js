function loadFlowers(flower) {
    let card = document.createElement("div");
    card.classList.add("card", "col-3", "m-2");

    card.innerHTML = `
       <div class="card">
           <img src="${flower.Image}" class="card-img-top" alt="${flower.Title}">
           <div class="card-body">
               <h5 class="card-title">${flower.Title}</h5>
               <p class="card-text">${flower.Description}</p>
               <p class="card-text"><strong>Price:</strong> ${flower.price}</p>
               
           </div>
       
    `;

    document.getElementById("Flower-container").appendChild(card);
}

function getFlowers() {
    fetch("http://localhost:3000/flowers")
        .then((res) => res.json())
        .then((flowers) => {
            flowers.forEach(flower => loadFlowers(flower));
        })
        .catch((error) => console.error("Error fetching flowers:", error));
}

document.addEventListener("DOMContentLoaded", function() {
    getFlowers();
});

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
