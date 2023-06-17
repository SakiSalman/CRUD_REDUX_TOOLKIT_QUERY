
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://pokeapi.co/api/v2'
    }),
    endpoints : (builder) => ({
        fetPokeMan : builder.query({
            query : () => '/pokemon'
        }),
        getSingelPokemon : builder.query({
           query :(name) => `/pokemon/${name}`
        })
    })
})





export const {useFetPokeManQuery, useGetSingelPokemonQuery} = apiSlice