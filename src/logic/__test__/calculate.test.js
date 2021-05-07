import calculate from '../calculate';

describe('All button works fine', () => {
  it('should display the value of the button clicked', () => {
    const calcData = { total: '', next: null, operate: null };
    expect(calculate(calcData, '3').total).toBe('3');
    expect(calculate(calcData, '5').total).not.toBe('3');
    expect(calculate(calcData, '2').operate).toBe(null);
    expect(calculate(calcData, '2').operate).not.toBe('+');
    expect(calculate(calcData, '2').next).toBe(null);
    expect(calculate(calcData, '2').next).not.toBe('4');
  });

  it('AC should reset the calculator to default value', () => {
    const calcData = { total: '5', next: '5', operate: '+' };
    expect(calculate(calcData, 'AC')).toEqual({ total: '0', next: null, operate: null });
    expect(calculate(calcData, 'AC')).not.toEqual({ total: 0, next: null, operate: null });
  });

  it("should change the sign when '+/-' is clicked", () => {
    const calcData = { total: '5', next: null, operate: '=' };
    expect(calculate(calcData, '+/-')).toEqual({ total: -5, next: null, operate: null });
    expect(calculate(calcData, '+/-')).not.toEqual({ total: 5, next: null, operate: null });
  });

  it("should evaluate the inputs when '=' is clicked", () => {
    const calcData = { total: '5', next: '5', operate: '+' };
    expect(calculate(calcData, '=')).toEqual({ total: '10', next: null, operate: null });
    expect(calculate(calcData, '=')).not.toEqual({ total: '5', next: null, operate: null });
  });

  it("should ignore '.' if it already displayed", () => {
    const calcData = { total: '0.5', next: null, operate: null };
    expect(calculate(calcData, '0.5.')).toEqual({ total: '0.5', next: null, operate: null });
    expect(calculate(calcData, '0.5.')).not.toEqual({ total: '0.5.', next: null, operate: null });
  });
});
