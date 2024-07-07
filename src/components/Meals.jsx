export default function Meals({meals,addToCart}){
    return(
        <>
        <main id="meals">
            {meals.map((meal)=>(
                <article key={meal.id} className="meal-item">
                    <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                    <h3>{meal.name}</h3>
                    <div className="meal-item-price">{meal.price}</div>
                    <div className="meal-item-description">{meal.description}</div>
                    <div className="meal-item-actions">
                        <button className="button" onClick={()=>addToCart(meal)}>Add to Cart</button>
                    </div>
                </article>
            ))}
        </main>
        </>
    )
}