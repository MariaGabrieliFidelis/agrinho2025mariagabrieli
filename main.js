document.addEventListener('DOMContentLoaded', () => {
    const vegetableGrid = document.querySelector('.vegetable-grid');
    const addVegetableForm = document.getElementById('add-vegetable-form');

    // Initial list of vegetables
    let vegetables = [
        {
            name: "Tomate",
            season: "Primavera-Verão",
            care: "Precisa de sol pleno e rega regular. Suporte para os ramos é recomendado."
        },
        {
            name: "Alface",
            season: "Ano todo (dependendo da variedade)",
            care: "Prefere sombra parcial e solo úmido. Colha as folhas externas primeiro."
        },
        {
            name: "Cenoura",
            season: "Outono-Inverno",
            care: "Solo solto e bem drenado é essencial. Mantenha o solo úmido, mas não encharcado."
        },
        {
            name: "Batata",
            season: "Primavera",
            care: "Requer sol pleno e solo fértil. Acompanhe o crescimento e faça a 'amontoa' para cobrir os tubérculos."
        },
        {
            name: "Pimentão",
            season: "Primavera-Verão",
            care: "Gosta de calor e sol. Rega consistente e solo rico em nutrientes."
        }
    ];

    // Function to display vegetables
    function displayVegetables() {
        vegetableGrid.innerHTML = ''; // Clear existing cards
        vegetables.forEach(veg => {
            const card = document.createElement('div');
            card.classList.add('vegetable-card');
            card.innerHTML = `
                <h3>${veg.name}</h3>
                <p><strong>Época de Plantio:</strong> ${veg.season}</p>
                <p><strong>Dicas de Cuidado:</strong> ${veg.care}</p>
            `;
            vegetableGrid.appendChild(card);
        });
    }

    // Handle form submission to add new vegetable
    addVegetableForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const nameInput = document.getElementById('name');
        const seasonInput = document.getElementById('season');
        const careInput = document.getElementById('care');

        const newVegetable = {
            name: nameInput.value,
            season: seasonInput.value,
            care: careInput.value
        };

        vegetables.push(newVegetable); // Add new vegetable to the array
        displayVegetables(); // Re-render the list

        // Clear the form
        nameInput.value = '';
        seasonInput.value = '';
        careInput.value = '';

        alert('Legume adicionado com sucesso!');
    });

    // Initial display of vegetables when the page loads
    displayVegetables();
});