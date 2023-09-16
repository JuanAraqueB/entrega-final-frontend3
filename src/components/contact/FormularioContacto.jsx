import { useState } from 'react'
import ListaErrores from './ListaErrores'
import generarId from './Autoid.js'

export default function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [mail, setMail] = useState('')
  const [error, setError] = useState([])
  const [exito, setExito] = useState(false)

  const agregarError = errorNuevo => {
    setError(prevErrors => [
      ...prevErrors,
      { nombreError: errorNuevo, id: generarId() }
    ])
  }
  function esCorreoElectronico(cadena) {
    // ojo con esta expresion se valida correo
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // lo testeamos
    return patron.test(cadena)
  }

  const validarFormulario = () => {
    let resultado = true
    setError([])

    if (nombre.trim().length < 3) {
      agregarError('El nombre debe tener al menos 3 caracteres')
      resultado = false
    }
    if (!esCorreoElectronico(mail)) {
      agregarError('El correo no es valido')
      resultado = false
    }
    setExito(resultado)
    return resultado
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validarFormulario()) {
      setExito(true)
      setMail('')
      setNombre('')
    }
  }

  const changeNombre = e => {
    setNombre(e.target.value)
  }

  const changeMail = e => {
    setMail(e.target.value)
  }

  return (
    <section className='section-form transicion'>
      
      <form onSubmit={handleSubmit}>
        {' '}
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' value={nombre} onChange={changeNombre} />
        <label htmlFor='mail'>Mail</label>
        <input type='text' id='mail' value={mail} onChange={changeMail} />
        <button type='submit'>Enviar</button>
        {exito && (
          <p className='exito transition-element'>
            Datos de contacto recibidos
          </p>
        )}
        {error.length === 0 ? undefined : <ListaErrores errores={error} />}
      </form>
    </section>
  )
}
