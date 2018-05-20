import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form'

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<GuessForm />)
        //expect(wrapper.hasClass('text')).toEqual(true)
    })
    it('Has a form with text input and button', () => {
        const wrapper = shallow(<GuessForm />)
        expect(wrapper.find('input').hasClass('text')).toEqual(true)
        expect(wrapper.find('button').hasClass('button')).toEqual(true)
    })
    
    it('Should reset input when form is submitted', () => {
        const wrapper = mount(<GuessForm />)
        const input = wrapper.find('input[type="number"]')
        input.instance().value = 10;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('')
    })

   
})