import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en el componente GifGridItem', () => {
    
    const title = 'Titulo'
    const url = 'https://url.com'

    let wrapper = shallow( <GifGridItem 
        title={ title }
        url={ url }
    />)

    test('Debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe mostrar correctamente el titulo', () => {
        
        const p = wrapper.find('p').text().trim()

        expect( p ).toBe( title )

    })

    test('Debe mostrar correctamente la imagen', () => {
        
        const img = wrapper.find('img').props()

        expect( img.src ).toBe( url )
        expect( img.alt ).toBe( title )
        

    })

    test('La clase debe tener correctamente la animacion fadeIn', () => {
        
        const div = wrapper.find('div').props()

        expect( div.className ).toContain('animate__fadeIn')
    })
    
})
