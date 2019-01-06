import {
    MAKE_GUESS,
    makeGuess
} from './actions'

describe('makeGuess', () => {
    it('Should return makeguess', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS)
    }) 
})