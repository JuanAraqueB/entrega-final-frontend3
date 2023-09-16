import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function DentistId() {
  const navigate = useNavigate()
  const params = useParams()
  const [dentista, setDentista] = useState()
  const [loading, setLoading] = useState(true)

  const volverALosDentistas = () => {
    navigate(-1)
  }

  async function getdentista() {
    setLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    )
    const data = await response.json()
    setDentista(data)
    setLoading(false)
  }
  useEffect(() => {
    getdentista()
  }, [])

  return (
    <section className='dentista-especifico'>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>Odontologo # {dentista.id} </h1>
          <article>
            <h2>{dentista.name}</h2>
            <p>nombre de usuario: {dentista.username}</p>
            <p>Correo electronico: {dentista.email}</p>
            <p>Celular: {dentista.phone}</p>
            <p>Sitio web: {dentista.website}</p>
          </article>
        </>
      )}
      <button onClick={volverALosDentistas}>
        Volver a inicio
      </button>
    </section>
  )
}
