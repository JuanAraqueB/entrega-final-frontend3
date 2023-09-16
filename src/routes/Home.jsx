import { useContext, useState } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'
import ListadoOdontologos from '../components/home/ListadoOdontologos'


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  const { odontologos } = useContext(ElementosGlobales)

  return (
    <>
      <section className='home transicion'>
        {console.log(odontologos)}
        <h1>
          ESTOS SON LOS ODONTOLOGOS DE NUESTRA ORGANIZACION{' '}
        </h1>
        {loading ? <p>Cargando...</p> : <p>{title}</p>}
        <ListadoOdontologos />
      </section>
    </>
  )
}
