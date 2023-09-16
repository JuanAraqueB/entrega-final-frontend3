export default function ListaErrores(props) {
  const { errores } = props
  return (
    <div className='errores transicion'>
      <h2 className='transicion'>
        Los datos no son validos
      </h2>
      <ol>
        {errores.map(error => (
          <li className='transicion' key={error.id}>
            {error.nombreError}
          </li>
        ))}
      </ol>
    </div>
  )
}
