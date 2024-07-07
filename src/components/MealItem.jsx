export default function MealItem({meal,onAdd}){
    return(
        <article className="meal-item">
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <div className="meal-item-price">{meal.price}</div>
                <div className="meal-item-description">{meal.description}</div>
            </div>
            <div className="meal-item-actions">
                <button className="button" onClick={()=>onAdd(meal)}>Add to Cart</button>
            </div>
        </article>
    )
}