describe('Bad Test Examples', () => {
  it('will always pass', () => {
    expect(true).toBe(true)
  })

  it('contains bad mock and will always pass', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

