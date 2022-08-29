const loadMeal = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displaymeal(data.meals))
}
const displaymeal = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    for (const meal of meals) {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('card', 'card-compact', 'bg-base-100', 'shadow-xl')
        mealDiv.innerHTML = `
        <figure><img class="h-44 w-full" src="${meal.strMealThumb}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${meal.strMeal}</h2>
        <p>${meal.strInstructions.slice(0, 100)}</p>
        <div class="card-actions justify-end">
            <label onclick = "loadMealDetail(${meal.idMeal})" for="my-modal-4" class="btn modal-button btn-primary">Details</label>
        </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    }
}

const loadMealDetail = (code) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`)
        .then(res => res.json())
        .then(data => displaymealDetail(data.meals))
}

const displaymealDetail = meals => {
    const mealDetail = document.getElementById('meal-detail');
    for (const meal of meals){
        console.log(meal)
    mealDetail.innerHTML = `
    <label class="modal-box relative" for="">
    <div class="flex">
    <img class="h-64 w-52 mr-5" src="${meal.strMealThumb}" alt="Shoes" />
    <div>
    <h3 class="text-lg font-semibold text-white mb-3">Food Name: ${meal.strMeal}</h3>
    <p>Food Category: ${meal.strCategory}</p>
    <p class="mb-3">Food Category: ${meal.strArea}</p>
    <p>Details: ${meal.strInstructions.slice(0, 100)}</p>
    <div class="flex justify-end"><button class="btn btn-active btn-primary mt-3 ">Buy Now</button></div>
    
    </div>
    </div>
    </label>
    `       
    }
}

const searchMeal = () => {
    const mealField = document.getElementById('meal-value');
    const mealValue = mealField.value;
    loadMeal(mealValue);
    mealField.value = '';
}

loadMeal('');