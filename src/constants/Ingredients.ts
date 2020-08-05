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
  { ingredients: 'CMS', burgerName: 'Standard' },
  { ingredients: 'SCMCM', burgerName: 'Double cheese burger' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
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
