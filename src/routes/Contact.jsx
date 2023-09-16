import FormularioContacto from '../components/contact/FormularioContacto'
export default function Contact() {
  return (
    <section classname='transicion'>
      <h1 className='titulo-form'>
        FORMATO DE CONTACTO {' '}
      </h1>
      <div className='contenedor-contact'>
        <FormularioContacto />
      </div>
    </section>
  )
}
