const { longWait, longerWait } = require('../modules/delay');

beforeEach(() => jest.useFakeTimers());

test('mocking the time in longWait', () => {
    longWait();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
});


test('mocking the time in longerWait', () => {
    longerWait();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
})