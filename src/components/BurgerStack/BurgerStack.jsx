// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = (props) => {
  return (
    <div className="burger-stack-container">
      <h2>Your Burger</h2>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            name={ingredient.name}
            color={ingredient.color}
            textColor={ingredient.textColor}
            emoji={ingredient.emoji}
            image={ingredient.image}  
            buttonText="X"
            handleClick={() => props.removeFromBurger(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;