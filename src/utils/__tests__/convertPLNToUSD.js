import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => { //describe czego tyczy sie test
  it('should return proper value when good input', () => { //it opisuje co konkretnie sprawdzamy
    expect(convertPLNToUSD(1)).toBe('$0.29'); //spodziewaj się że uruchomienie funkcji z 1 zwróci $0.29
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN if string is in input', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('-542')).toBeNaN();
    expect(convertPLNToUSD('#25')).toBeNaN();
  });
  it('should return NaN if input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return "error" if argument is not a text or number', () => {
    expect(convertPLNToUSD({})).toBe('error');
    expect(convertPLNToUSD([])).toBe('error');
    expect(convertPLNToUSD(null)).toBe('error');
    expect(convertPLNToUSD(function() {})).toBe('error');
  });
  it('should return zero if vaule is negative', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-24)).toBe('$0.00');
    expect(convertPLNToUSD(-1245)).toBe('$0.00');
  });
});