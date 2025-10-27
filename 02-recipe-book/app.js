import { fetchRandomRecipe } from "./utils/api.js";

// 2. DOM Selection: انتخاب عناصر DOM مورد نیاز
const recipeListEl = document.getElementById('recipe-list');
const statusMessageEl = document.querySelector('.container p'); // فرض می‌کنیم اولین <p> در container پیام وضعیت است