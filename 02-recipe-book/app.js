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


const renderRecipes = function () {

}