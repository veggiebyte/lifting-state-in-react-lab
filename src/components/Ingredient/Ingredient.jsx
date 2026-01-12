// src/components/Ingredient/Ingredient.jsx

const Ingredient = (props) => {
  return (
    <li style={{ 
      backgroundColor: props.color,
      color: props.textColor || '#FFFFFF'
    }}>
      <button className="add-remove-btn" onClick={props.handleClick}>{props.buttonText}</button>
      <span className="ingredient-name">{props.name}</span>
      <span className="emoji-box">{props.emoji}</span>
    </li>
  );
};

export default Ingredient;