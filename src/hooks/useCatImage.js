import { useEffect, useState } from 'react'

const CAT_PREFIX_IMG_URL = 'https://cataas.com'

// Custom Hooks
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=:size&color=:color/c/s/:text?s=:size&c=:color&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}