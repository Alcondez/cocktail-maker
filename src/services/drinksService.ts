import { Drink } from "../store/appReducer";

const searchDrinks = async (query: string): Promise<Drink[]> => {
    try {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        )
        const json = await response.json();
        return json.drinks.map((drink: any) => {
            return {
                id: drink.idDrink,
                imageUrl: drink.strDrinkThumb,
                name: drink.strDrink
            }
        })
    } catch (error) {
        console.log('ERROR', error)
        throw(error)
    }
}

const drinksService = { searchDrinks }
export default drinksService;