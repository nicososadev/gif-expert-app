import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs"

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect( () => {
        GetGifs( category )
            .then( images =>{
                setState({
                    data: images,
                    loading: false,
                })
            })
    }, [ category ])
    
    return state
}