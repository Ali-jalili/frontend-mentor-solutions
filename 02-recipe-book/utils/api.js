


const api = 'https://www.themealdb.com/api/json/v1/1/random.php'


export const fetchRandomRecipe = async function () {

    try {

        const res = await fetch(api);

        if (!res.status) throw new Error(`مشکل در دریافت داده‌ها. وضعیت: ${res.status}`)

        const data = await res.json();
        return data.meals[0];





    }

    catch (err) {

        console.error("خطا در Fetch API:", err.message)
        return null

    }

}