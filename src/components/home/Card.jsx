import userImage from '../../assets/user.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { BsHandThumbsUpFill, BsHandThumbsUp, BsIndent } from 'react-icons/bs'

export default function Card(props) {
  const { odontologo, esFavorito, manejarFavoritos } = props

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/Dentis/${odontologo.id}`)
  }

  return (
    <li className='card' onClick={handleClick}>
      <img src={userImage} alt='Imagen de usuario' />
      <p>
        <span className='titulo'>Nombre:</span> {odontologo.name}
      </p>
      <hr></hr>
      <p>
        <span className='titulo'>User:</span> {odontologo.username}
      </p>
      <hr></hr>
      <Link to={`/Dentis/${odontologo.id}`}>
        <BsIndent className='info' />
      </Link>
      {esFavorito ? (
        <BsHandThumbsUpFill
          className='favorito'
          onClick={e => {
            e.stopPropagation() 
            manejarFavoritos(odontologo)
          }}
        />
      ) : (
        <BsHandThumbsUp
          className=''
          onClick={e => {
            e.stopPropagation() 
            manejarFavoritos(odontologo)
          }}
        />
      )}
    </li>
  )
}
