// src/components/IngredientList/IngredientList.jsx

import Ingredient from '../Ingredient/Ingredient';

const IngredientList = (props) => {
  // Group ingredients by category
  const categories = {};
  props.ingredients.forEach(ingredient => {
    if (!categories[ingredient.category]) {
      categories[ingredient.category] = [];
    }
    categories[ingredient.category].push(ingredient);
  });

  return (
    <div className="ingredient-list-container">
      <h2>Available Ingredients</h2>
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <ul>
            {categories[category].map((ingredient, index) => (
              <Ingredient
                key={index}
                name={ingredient.name}
                color={ingredient.color}
                textColor={ingredient.textColor}
                emoji={ingredient.emoji}
                image={ingredient.image}  
                buttonText="+"
                handleClick={() => props.addToBurger(ingredient)}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IngredientList;