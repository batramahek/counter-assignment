// import necessary react testing library helpers here
import { render, screen, fireEvent} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter'

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  const msg = screen.getByText(/counter/i);
  expect(msg).toBeInTheDocument();


});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  
  //check if intial count is 0
  const cnt = screen.getByTestId('count');
  expect(cnt).toHaveTextContent('0');

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  //find and press + button
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  //check if new count is 1
  const cntInc = screen.getByTestId('count');
  expect(cntInc).toHaveTextContent('1');

  fireEvent.click(incrementButton);

  //check if new count is 1
  const cntInc2 = screen.getByTestId('count');
  expect(cntInc2).toHaveTextContent('2');


});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  //find and press + button
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  //check if new count is 1
  const cntDec = screen.getByTestId('count');
  expect(cntDec).toHaveTextContent('-1');

  fireEvent.click(decrementButton);

  //check if new count is 1
  const cntDec2 = screen.getByTestId('count');
  expect(cntDec2).toHaveTextContent('-2');

});
