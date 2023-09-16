import { BsSun, BsSunFill } from 'react-icons/bs'
import { useContext, useEffect } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'

export default function BotonCambiarTema() {
  const { tema, cambiarTema } = useContext(ElementosGlobales)

  {
    console.log(tema)
  }

  return (
    <>
      <button onClick={cambiarTema}>
        {tema === 'claro' ? (
          <BsSun />
        ) : (
          <BsSunFill />
        )}
      </button>
    </>
  )
}
