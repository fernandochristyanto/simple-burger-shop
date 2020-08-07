import tomato from '../assets/images/tomato.svg';
import salad from '../assets/images/salad.svg';
import cheese from '../assets/images/cheese.svg';
import meat from '../assets/images/meat.svg';

export const ingredients = [
  'T',
  'S',
  'C',
  'M',
];

export const burgerRecommendations = [
  { ingredients: 'CMS', burgerName: 'Standard', price: 4.50 },
  { ingredients: 'SCMCM', burgerName: 'Double cheese burger', price: 5.70 },
  { ingredients: 'TSCM', burgerName: 'Complete', price: 4.80 },
  { ingredients: 'TSCM', burgerName: 'Complete', price: 4.80 },
  { ingredients: 'TSCM', burgerName: 'Complete', price: 4.80 },
  { ingredients: 'TSCM', burgerName: 'Complete', price: 4.80 },
];

export const ingreidentDictionary: { [key: string]: string } = {
  'C': 'Cheese',
  'S': 'Salad',
  'M': 'Meat',
  'T': 'Tomato',
};

export const ingredientImages: { [key: string]: string } = {
  'T': tomato,
  'S': salad,
  'C': cheese,
  'M': meat,
}

export const ingredientPrices: { [key: string]: number } = {
  'T': 0.3,
  'S': 0.3,
  'C': 0.5,
  'M': 0.7,
}

export const DEFAULT_PRICE = 3.0;
