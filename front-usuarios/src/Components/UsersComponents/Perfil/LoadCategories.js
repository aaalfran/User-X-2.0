import { useEffect, useState } from 'react'
import data from '../../../enviroment'
export default function UseCategories() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch(`${data.url}/categorias`)
      .then(response => response.json())
      .then(data => {
        setCategorias(data)
      })
      .catch(error => console.log('Hubo un error ' + error))
  }, [])

  return categorias
}
