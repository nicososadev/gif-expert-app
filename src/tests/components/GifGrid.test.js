import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente GifGrid', () => {
    
    test('Debe mostrar correctamente el Componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        })
        
        const wrapper = shallow( <GifGrid category={ '' }/> )

        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe mostar items cuando se cargan imagenes en useFetchGif', () => {
        
        const images = [
            {
                id: 'abc',
                title: 'titulo',
                url: 'https://url.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: images,
            loading: false,
        })

        const wrapper = shallow( <GifGrid category={ '' }/> )

        const p = wrapper.find('p').exists()

        const componente = wrapper.find('GifGridItem').length

        expect( p ).toBe( false )

        expect( componente ).toBe( images.length )
    })
    
})
