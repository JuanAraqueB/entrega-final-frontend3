import { Link } from 'react-router-dom'
import BotonCambiarTema from './BotonCambiarTema'

export default function Header() {
  return (
    <header>
      <h1>
        Clinica odontologica
      </h1>
      <nav>
        <Link to='/'>INICIO </Link>
        <Link to='/Contact'>CONTACTO </Link>
        <Link to='/Favs'>FAVORITOS </Link>
        <BotonCambiarTema />
      </nav>
    </header>
  )
}
