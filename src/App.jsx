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

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([ingredient, ...stack]);
  };

  const removeFromBurger = (index) => {
    const newStack = stack.filter((item, i) => i !== index);
    setStack(newStack);
  };

  return (
    <main>
      <div className="container">
        <img src="/images/build_kind_burger_logo.png" alt="KIND Burger Logo" className="logo" />

        <p className="slogan">Build it Your Way. Leave the Animals Out of It.</p>

        <h1 className="main-title">The KIND Burger-Builder</h1>

        <p className="instructions">
          Welcome to the KIND Burger-Builder! Create your perfect plant-based burger by clicking the <span className="highlight-symbol">+</span> button next to any ingredient you'd like. <strong>Please add all of your preferences between the top and bottom bun so your sandwich can be built properly.</strong> Your burger stacks from bottom to top, just like building the real thing. Changed your mind? Click the <span className="highlight-symbol">-</span> button to remove ingredients before ordering. Let's get stacking!
        </p>

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

        <p className="disclaimer">
          All food is prepared in a 100% vegan kitchen. Nothing has come in contact with animal products.
        </p>
      </div>
    </main>
  );
};

export default App;