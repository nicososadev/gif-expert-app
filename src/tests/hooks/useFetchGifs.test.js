import React from 'react'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Coding') )

        const { data, loading } = result.current

        await waitForNextUpdate()

        expect( data ).toEqual( [] )
        expect( loading ).toEqual( true )

    })

    test('Debe retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Coding') )

        await waitForNextUpdate()

        const { data, loading } = result.current

        expect( data.length ).toBe( 10 )
        expect( loading ).toEqual( false )
    })
    
    
})
