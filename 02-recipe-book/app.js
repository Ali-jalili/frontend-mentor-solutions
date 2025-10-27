import { fetchRandomRecipe } from "./utils/api.js";

// 2. DOM Selection: انتخاب عناصر DOM مورد نیاز
const recipeListEl = document.getElementById('recipe-list');
const statusMessageEl = document.querySelector('.container p'); // فرض می‌کنیم اولین <p> در container پیام وضعیت است


async function init() {

    statusMessageEl.textContent = 'در حال بارگذاری دستورالعمل‌ها... ⌛';

    const recipeData = await fetchRandomRecipe();

    if (recipeData) {
        statusMessageEl.textContent = '';

        renderRecipes(recipeData);

    } else {
        statusMessageEl.textContent = '❌ متأسفانه، در حال حاضر امکان دریافت دستورالعمل‌ها وجود ندارد.';
    }



}


const getIngredientsList = function (recipe) {

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {

        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== '') {

            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return ingredients.join('، ');

}


const renderRecipes = function () {




}