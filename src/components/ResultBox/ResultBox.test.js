import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {   

      const testCases = [
        { amount: '100', from: 'PLN', to: 'USD' },
        { amount: '20', from: 'PLN', to: 'USD' },
        { amount: '200', from: 'PLN', to: 'USD' },
        { amount: '345', from: 'PLN', to: 'USD' },
  ];
    for(const testObj of testCases) {

      render(<ResultBox from={ testObj.from } to={ testObj.to } amount={Number(testObj.amount)} />)

      const countedValue = testObj.amount / 3.5;

      const mainDiv = screen.getByTestId('div');

      expect(mainDiv).toHaveTextContent(`${testObj.from} ${testObj.amount}.00 = $${countedValue.toFixed(2)}`);

      cleanup()
    };   
    });
    it('should render proper info about conversion when USD -> PLN', () => {   

      const testCases = [
        { amount: '23', from: 'USD', to: 'PLN' },
        { amount: '17', from: 'USD', to: 'PLN' },
        { amount: '255', from: 'USD', to: 'PLN' },
        { amount: '156', from: 'USD', to: 'PLN' },
  ];
    for(const testObj of testCases) {

      render(<ResultBox from={ testObj.from } to={ testObj.to } amount={Number(testObj.amount)} />)

      const countedValue = testObj.amount * 3.5;

      const mainDiv = screen.getByTestId('div');

      expect(mainDiv).toHaveTextContent(`$${testObj.amount}.00 = ${testObj.to} ${countedValue.toFixed(2)}`);
      
      cleanup()
    };   
    });
    it('should render proper info about conversion when PLN -> PLN', () => {   

      const testCases = [
        { amount: '23', from: 'PLN', to: 'PLN' },
        { amount: '17', from: 'PLN', to: 'PLN' },
        { amount: '255', from: 'PLN', to: 'PLN' },
        { amount: '156', from: 'PLN', to: 'PLN' },
  ];
    for(const testObj of testCases) {

      render(<ResultBox from={ testObj.from } to={ testObj.to } amount={Number(testObj.amount)} />)

      const countedValue = testObj.amount;

      const mainDiv = screen.getByTestId('div');

      expect(mainDiv).toHaveTextContent(`${testObj.from} ${testObj.amount}.00 = ${testObj.to} ${countedValue}`);
      
      cleanup()
    };   
    })
    it('should render "Wrong value" if negative number is in input', () => {   

      const testCases = [
        { amount: '-23', from: 'USD', to: 'PLN' },
        { amount: '-17', from: 'PLN', to: 'USD' },
        { amount: '-255', from: 'PLN', to: 'PLN' },
        { amount: '-156', from: 'USD', to: 'USD' },
  ];
    for(const testObj of testCases) {

      render(<ResultBox from={ testObj.from } to={ testObj.to } amount={Number(testObj.amount)} />)

      const mainDiv = screen.getByTestId('wrongValue');

      expect(mainDiv).toHaveTextContent(`Wrong value...`);
      
      cleanup()
    };   
    })
});