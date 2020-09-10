import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Pruebas en el la app GifExpertApp', () => {
    
    test('Debe mostrarse correctamente la App', () => {
        
        const wrapper = shallow( <GifExpertApp /> )

        expect( wrapper ).toMatchSnapshot()
    })
    
})
