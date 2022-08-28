const loadMeal = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displaymeal(data.meals))
}
const displaymeal = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    for(const meal of meals){
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('card','card-compact','bg-base-100','shadow-xl')
        mealDiv.innerHTML = `
        <figure><img class="h-44 w-full" src="${meal.strMealThumb}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${meal.strMeal}</h2>
        <p>${meal.strInstructions.slice(0, 100)}</p>
        <div class="card-actions justify-end">
            <button onclick = "loadMealDetail(${meal.idMeal})" class="buy-btn btn btn-primary">Details</button>
        </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    }
}

const loadMealDetail = (code) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`)
    .then(res => res.json())
    .then(data => console.log(data.meals))
}

const searchMeal = () => {
    const mealField = document.getElementById('meal-value');
    const mealValue = mealField.value;
    loadMeal(mealValue);
    mealField.value = '';
}

loadMeal('');