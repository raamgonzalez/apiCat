import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'
import { useCatImage } from './hooks/useCatImage'

// const API_ENDPOINT_IMAGE_URL = `/cat/says/${firstWord}?size=:size&color=:color/c/s/:text?s=:size&c=:color&json=true`
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()

  const { imageUrl } = useCatImage({ fact })

  // Recuperar cita al cargar la pagina

  useEffect(async () => {
    getRandomFact().then(setFact)
  }, [])

  // Para recuperar la imagen cada vez que tenemos una cita nueva.

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App Gatitos</h1>
      <button onClick={handleClick}>Get new fact </button>

      {fact && <p>{fact}</p>}
      <img
        src={`${CAT_PREFIX_IMG_URL}${imageUrl}`}
        alt={`Imagen extraida de Api que contiene las tres primeras palabras de ${fact}`}
      />
    </main>
  )
}
