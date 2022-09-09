// /static/images/cards/paella.jpg

import { render, screen } from '@testing-library/react';
import CardSummary from './CardSummary';

test('renders a sample meal card and tests for price, title, and image loading', () => {
  render(
  <CardSummary 
   image="/static/images/cards/paella.jpg"
   price={12.50}
   title='Paella'
   inBasket={false}
   modalData={{dietary: ['gluten-free', 'nut-free'], ingredients: ['rice', 'prawns', 'tomatoes']}} />
  );
  
  const linkElement = screen.getByText("Paella");
  expect(linkElement).toBeInTheDocument();
});

