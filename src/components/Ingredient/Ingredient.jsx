const Ingredient = (props) => {
  return (
    <li style={{ 
      backgroundColor: props.color,
      color: props.textColor || '#FFFFFF'
    }}>
      <button className="add-remove-btn" onClick={props.handleClick}>{props.buttonText}</button>
      <span className="ingredient-name">{props.name}</span>
      <span className="emoji-box">
        {props.image ? (
          <img src={props.image} alt={props.name} className="ingredient-image" />
        ) : (
          props.emoji
        )}
      </span>
    </li>
  );
};

export default Ingredient;