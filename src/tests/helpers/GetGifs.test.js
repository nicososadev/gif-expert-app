import { GetGifs } from "../../helpers/GetGifs"

describe('Pruebas para el helper GetGifs', () => {
    
    test('Debe traer 10 elementos', async() => {
        
        const gifs = await GetGifs('Coding')

        expect( gifs.length ).toBe(10)
    })
    
    test('Debe no debe traer ningun elemento', async() => {
        
        const gifs = await GetGifs('')

        expect( gifs.length ).toBe(0)
    })
    
})
