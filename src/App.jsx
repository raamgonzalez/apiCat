import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // Para recuperar la imagen cada vez que tenemos una cita nueva.

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main className='font-serif x bg-slate-100 p-10 w-full h-max'>
      <h1 className=' text-4xl mt-5 mb-10'>App Gatitos</h1>
      <button className='bg-orange-200 px-2 py-1 text-lg rounded-md mb-10 shadow-sm shadow-gray-300' onClick={handleClick}>Get new fact </button>
      {fact && <p className='mb-10 max-w-lg text-lg'>{fact}</p>}
      <img
        className='rounded-md shadow-lg shadow-gray-400'
        src={imageUrl}
        alt={`Imagen extraida de Api que contiene las tres primeras palabras de ${fact}`}
      />
    </main>
  )
}
