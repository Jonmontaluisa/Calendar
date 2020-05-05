const utils = require('./utils')
//TODO check babel to see if the code has been tranpiled
test('Expect textShorterThan to be true ', () => {
    text= 'Qwertyuiop'
    expect(utils.textShorterThan(text, 20)).toBe(True);
});
