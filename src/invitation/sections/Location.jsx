import locationImage from '../../assets/images/location.jpg';

export const Location = () => {
  return (
    <section className="layout-grid layout-grid--2">
      <div className="layout-grid__content">
        <h2 className="heading-section text-gradient gradient-1">Evento</h2>
        <h3 className='layout-grid__school'>Lago del Marqués</h3>
        <p className='layout-grid__location'>Hacienda Nueva, San Ignacio, 20313 Aguascalientes, Ags.</p>
        <p className='layout-grid__date'>Viernes 26 de Julio del 2024</p>
        <p className='layout-grid__hour'>08:30 PM</p>
        <a className='btn btn--silver gradient-2' href="https://www.google.com/maps/place/Lago+del+Marqu%C3%A9s/@21.8967827,-102.3560847,16.5z/data=!4m6!3m5!1s0x8429e91a7cb08e6b:0xbc87e841133aa4ba!8m2!3d21.8969102!4d-102.3571159!16s%2Fg%2F11gv0sz_yx?hl=es&entry=ttu" target='_blank'>Ver ubicación</a>
      </div>
      <figure className="layout-grid__image">
        <img src={ locationImage } alt="UAA institution" />
        <div className="layout-grid__image-layout"></div>
      </figure>
    </section>
  )
}
