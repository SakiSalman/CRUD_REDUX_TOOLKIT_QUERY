import { useEffect, useState } from 'react'
import './App.css'
import { useFetPokeManQuery, useGetSingelPokemonQuery } from './features/api/apiSlice'
function App() {
  const [count, setCount] = useState(0)

  const { data, error, isLoading } = useGetSingelPokemonQuery('charmeleon')

  return (
    <>
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ): data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>) : null 
        
      }
    </>
  )
}

export default App
