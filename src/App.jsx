// src/App.jsx

import './App.css';
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {
const availableIngredients = [
  // Breads
  { name: 'Kaiser Bun - Top', color: '#D2B48C', emoji: '🍞', category: 'Breads', textColor: '#000000' },
  { name: 'Kaiser Bun - Bottom', color: '#D2B48C', emoji: '🍞', category: 'Breads', textColor: '#000000' },
  { name: 'Sesame Bun - Top', color: '#D2B48C', emoji: '🥖', category: 'Breads', textColor: '#000000' },
  { name: 'Sesame Bun - Bottom', color: '#D2B48C', emoji: '🥖', category: 'Breads', textColor: '#000000' },
  { name: 'Gluten-Free Bun - Top', color: '#D2B48C', emoji: '🥯', category: 'Breads', textColor: '#000000' },
  { name: 'Gluten-Free Bun - Bottom', color: '#D2B48C', emoji: '🥯', category: 'Breads', textColor: '#000000' },
  
  // Patties
  { name: 'Quinoa Patty (GF)', color: '#6B4423', emoji: '🌾', category: 'Patties' },
  { name: 'Black Bean Patty (GF)', color: '#6B4423', emoji: '🫘', category: 'Patties' },
  { name: 'Cauliflower Patty (GF)', color: '#6B4423', emoji: '🥦', category: 'Patties' },
  
  // Greens
  { name: 'Lettuce', color: '#7CB342', emoji: '🥬', category: 'Greens' },
  { name: 'Arugula', color: '#7CB342', emoji: '🌿', category: 'Greens' },
  { name: 'Spinach', color: '#7CB342', emoji: '🍃', category: 'Greens' },
  { name: 'Alfalfa Sprouts', color: '#7CB342', emoji: '🌱', category: 'Greens' },
  
  // Vegetables
  { name: 'Cherry Tomato Slices', color: '#E53935', emoji: '🍅', category: 'Vegetables' },
  { name: 'Onion', color: '#8B4789', emoji: '🧅', category: 'Vegetables' },
  { name: 'Pickle Slices', color: '#558B2F', emoji: '🥒', category: 'Vegetables' },
  { name: 'Cucumber Slices', color: '#558B2F', emoji: '🥒', category: 'Vegetables' },
  { name: 'Avocado Slice', color: '#558B2F', emoji: '🥑', category: 'Vegetables' },
  { name: 'Sautéed Mushrooms', color: '#A1887F', emoji: '🍄', category: 'Vegetables' },
  { name: 'Portobella Mushroom Slice', color: '#A1887F', emoji: '🍄', category: 'Vegetables' },
  
  // Sauces & Spreads
  { name: 'Olive Relish', color: '#C9A227', emoji: '🫒', category: 'Sauces', textColor: '#000000' },
  { name: 'Signature Relish', color: '#C9A227', emoji: '✨', category: 'Sauces', textColor: '#000000' },
  { name: 'Hummus', color: '#C9A227', emoji: '🧈', category: 'Sauces', textColor: '#000000' },
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
    <h1>Burger Stacker</h1>
    <section>
      <IngredientList 
        ingredients={availableIngredients}
        addToBurger={addToBurger}
      />
      <BurgerStack 
        ingredients={stack}
        removeFromBurger={removeFromBurger}
      />
    </section>
  </main>
);
};

export default App;