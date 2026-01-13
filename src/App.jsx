// src/App.jsx

import './App.css';
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {
  const availableIngredients = [
    // Breads
    { name: 'Kaiser Bun - Top', color: '#D2B48C', image: '/images/kaiser_roll_top.png', category: 'Breads', textColor: '#000000' },
    { name: 'Kaiser Bun - Bottom', color: '#D2B48C', image: '/images/sesame_bun_bot.png', category: 'Breads', textColor: '#000000' },
    { name: 'Sesame Bun - Top', color: '#D2B48C', image: '/images/sesame_bun_top.png', category: 'Breads', textColor: '#000000' },
    { name: 'Sesame Bun - Bottom', color: '#D2B48C', image: '/images/sesame_bun_bot.png', category: 'Breads', textColor: '#000000' },
    { name: 'Gluten-Free Bun - Top', color: '#D2B48C', image: '/images/gf_bun_top.png', category: 'Breads', textColor: '#000000' },
    { name: 'Gluten-Free Bun - Bottom', color: '#D2B48C', image: '/images/gf_bun_bot.png', category: 'Breads', textColor: '#000000' },

    // Patties
    { name: 'Quinoa Patty (GF)', color: '#6B4423', image: '/images/quinoa.png', category: 'Patties' },
    { name: 'Black Bean Patty (GF)', color: '#6B4423', emoji: '🫘', category: 'Patties' },
    { name: 'Cauliflower Patty (GF)', color: '#6B4423', image: '/images/cauliflower.png', category: 'Patties' },

    // Greens
    { name: 'Lettuce', color: '#7CB342', emoji: '🥬', category: 'Greens' },
    { name: 'Arugula', color: '#7CB342', emoji: '🌿', category: 'Greens' },
    { name: 'Spinach', color: '#7CB342', emoji: '🍃', category: 'Greens' },
    { name: 'Alfalfa Sprouts', color: '#7CB342', emoji: '🌱', category: 'Greens' },

    // Vegetables
    { name: 'Cherry Tomato Slices', color: '#E53935', emoji: '🍅', category: 'Vegetables' },
    { name: 'Onion Slices', color: '#8B4789', emoji: '🧅', category: 'Vegetables' },
    { name: 'Pickle Slices', color: '#558B2F', image: '/images/pickles.png', category: 'Vegetables' },
    { name: 'Cucumber Slices', color: '#558B2F', emoji: '🥒', category: 'Vegetables' },
    { name: 'Avocado Slice', color: '#558B2F', emoji: '🥑', category: 'Vegetables' },
    { name: 'Sautéed Mushrooms', color: '#A1887F', image: '/images/mushrooms.png', category: 'Vegetables' },
    { name: 'Portobella Mushroom Slice', color: '#A1887F', image: '/images/portobella.png', category: 'Vegetables' },

    // Sauces & Spreads
    { name: 'Olive Relish', color: '#C9A227', emoji: '🫒', category: 'Sauces', textColor: '#000000' },
    { name: 'Signature Relish', color: '#C9A227', emoji: '✨', category: 'Sauces', textColor: '#000000' },
    { name: 'Hummus', color: '#C9A227', image: '/images/hummus.png', category: 'Sauces', textColor: '#000000' },
  ];

  // STATE: This tracks the burger ingredients the user has added
  const [stack, setStack] = useState([]);
  
  // STATE: This tracks if the order has been submitted
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  
  // STATE: This stores the random order number
  const [orderNumber, setOrderNumber] = useState(null);
  
  // STATE: This stores error messages (like "you need both buns!")
  const [errorMessage, setErrorMessage] = useState('');

  // FUNCTION: Adds an ingredient to the burger
  const addToBurger = (ingredient) => {
    setStack([ingredient, ...stack]); // Adds new ingredient to the START of array (top of burger)
    setErrorMessage(''); // Clear any error messages
  };

  // FUNCTION: Removes an ingredient from the burger by index
  const removeFromBurger = (index) => {
    const newStack = stack.filter((item, i) => i !== index); // Filter out the item at that index
    setStack(newStack);
  };

  // FUNCTION: Handles the submit order button click
  const handleSubmitOrder = () => {
    // Check if user has at least one "Top" bun
    const hasTopBun = stack.some(item => item.name.includes('Top'));
    // Check if user has at least one "Bottom" bun
    const hasBottomBun = stack.some(item => item.name.includes('Bottom'));

    // If missing either bun, show error and don't submit
    if (!hasTopBun || !hasBottomBun) {
      setErrorMessage('You must have both a top and bottom bun to submit your order!');
      setTimeout(() => setErrorMessage(''), 4000); // Clear error after 4 seconds
      return; // Stop here, don't submit
    }

    // Generate a random 3-digit order number (100-999)
    const randomOrderNumber = Math.floor(Math.random() * 900) + 100;
    setOrderNumber(randomOrderNumber);
    setOrderSubmitted(true); // This will trigger the confirmation page to show
  };

  // FUNCTION: Resets everything to start a new order
  const handleNewOrder = () => {
    setOrderSubmitted(false);
    setOrderNumber(null);
    setStack([]);
    setErrorMessage('');
  };

  // CONDITIONAL RENDERING: If order is submitted, show confirmation page instead
  if (orderSubmitted) {
    return (
      <main>
        <div className="container">
          <img src="/images/build_kind_burger_logo.png" alt="KIND Burger Logo" className="logo" />
          <div className="confirmation">
            <h1 className="main-title">Order Confirmed!</h1>
            <p className="order-number">Your Order Number is: <strong>#{orderNumber}</strong></p>
            <p className="confirmation-message">
              Thank you for choosing KIND Burger! We'll let you know when your delicious plant-based burger is ready.
            </p>
            <button className="new-order-btn" onClick={handleNewOrder}>Build Another Burger</button>
          </div>
        </div>
      </main>
    );
  }

  // DEFAULT: Show the burger builder
  return (
    <main>
      <div className="container">
        <img src="/images/build_kind_burger_logo.png" alt="KIND Burger Logo" className="logo" />

        <p className="slogan">Build it Your Way. Leave the Animals Out of It.</p>

        <h1 className="main-title">The KIND Burger-Builder</h1>

        <p className="instructions">
          Welcome to the KIND Burger-Builder! Create your perfect plant-based burger by clicking the <span className="highlight-symbol">+</span> button next to any ingredient you'd like. <strong>Please add all of your preferences between the top and bottom bun so your sandwich can be built properly.</strong> Your burger stacks from bottom to top, just like building the real thing. Changed your mind? Click the <span className="highlight-symbol">-</span> button to remove ingredients before ordering. Let's get stacking!
        </p>

        {/* Show error message if it exists */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <section className="builder-section">
          <IngredientList
            ingredients={availableIngredients}
            addToBurger={addToBurger}
          />
          <BurgerStack
            ingredients={stack}
            removeFromBurger={removeFromBurger}
          />
        </section>

        {/* Submit button section */}
        <div className="submit-section">
          <button className="submit-btn" onClick={handleSubmitOrder}>
            Submit Order
          </button>
        </div>

        <p className="disclaimer">
          All food is prepared in a 100% vegan kitchen. Nothing has come in contact with animal products.
        </p>
      </div>
    </main>
  );
};

export default App;