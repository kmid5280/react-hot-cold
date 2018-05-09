import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';


describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />)
    })
    it('Can make guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        })
        wrapper.instance().makeGuess(25)
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
    })
    
})