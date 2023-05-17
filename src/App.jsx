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
    <main className='font-serif p-10 w-full h-max'>
      <section className='flex justify-center'>
        <h1 className='text-6xl mt-5 mb-10 flex'>CatFac<span className='block text-7xl rotate-12'>t</span></h1>
        <img className='w-7' src='cat_fact.svg' />
      </section>
      <button className='bg-red-200 px-3 py-2 text-xl rounded-md mb-10 mt-5 shadow-md shadow-gray-200 hover:bg-orange-100 hover:animate-pulse sm:hover:animate-none md:hover:animate-none' onClick={handleClick}>Get new fact </button>
      <section className='flex gap-10 mx-auto my-14 sm:flex-col sm:justify-center sm:place-items-center mb:flex-col mb:justify-center mb:mx-2 mb:w-72 mb:text-2xl'>
        {fact && <p className='mb-10 max-w-lg text-4xl max-w-lg md:text-3xl'>{fact}</p>}
        <img
          className='rounded-md shadow-lg shadow-gray-400 max-w-[400px] max-h-[600px] md:w-96'
          src={imageUrl}
          alt={`Imagen extraida de Api que contiene las tres primeras palabras de ${fact}`}
        />
      </section>
    </main>
  )
}
