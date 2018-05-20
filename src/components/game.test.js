import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';


describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />)
    })
    it('Renders initial feedback', () => {
        const wrapper = mount(<Game />)
        wrapper.setState({
            correctAnswer: '10'
        })
        expect(wrapper.state('correctAnswer')).toEqual('10')
    })
    
    it('Can make guesses', () => {
        const wrapper = mount(<Game />);
        wrapper.setState({
            correctAnswer: 100
        })
        wrapper.instance().makeGuess(25)
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
    })

    it('Can add to guess list', () => {
        const wrapper = mount(<Game />)
        wrapper.setState({
            correctAnswer: 100
        })
        wrapper.instance().makeGuess(25)
        wrapper.instance().makeGuess(23)
        wrapper.instance().makeGuess(11)
        expect(wrapper.state('guesses')).toEqual([25, 23, 11])
    })
    
})