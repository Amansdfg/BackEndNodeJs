import MealItem from "./MealItem"
export default function Meals({meals,addToCart}){
    return(
        <>
        <main id="meals">
            {meals.map((meal)=>(
               <MealItem key={meal.id} meal={meal} onAdd={addToCart}/>
            ))}
        </main>
        </>
    )
}