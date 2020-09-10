
import React from 'react'
import { AddCategory } from "../../components/AddCategory"
import { shallow } from "enzyme"


describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> )

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
    })
    
    test('El componente debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe cambiar el input de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'Texto'

        input.simulate('change', { target: { value } })

        const inputValue = wrapper.find('input').props().value

        expect( inputValue ).toBe( value )

    })

    test('No debe cargar informacion con el evento submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} })

        expect( setCategories ).not.toHaveBeenCalled()
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'Texto'

        input.simulate('change', { target: { value } })

        wrapper.find('form').simulate('submit', { preventDefault: () => {} })

        const inputValue = wrapper.find('input').props().value

        expect( setCategories ).toHaveBeenCalled()

        expect( inputValue ).toBe( '' )

    })
    
    
})
