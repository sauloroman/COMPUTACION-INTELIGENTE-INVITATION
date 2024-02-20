import UAAImage from '../../assets/images/uaa-image.jpg';

export const Gratitude = () => {
  return (
    <section className="layout-grid">
      <figure className="layout-grid__image">
        <img src={ UAAImage } alt="UAA institution" />
        <div className="layout-grid__image-layout"></div>
      </figure>
      <div className="layout-grid__content">
        <h2 className="heading-section"><span className='text-gradient gradient-1'>Universidad Autónoma de Aguascalientes</span></h2>
        <h3 className='layout-grid__school'>Ingeniería en Computación Inteligente</h3>
        <p className="layout-grid__text">"Asume tus riesgos ahora. A medida que envejeces, te vuelves más temeroso y menos flexible... Intenta mantener la mente abierta a las posibilidades y la boca cerrada en asuntos que desconozcas. Limita tus ‘siempre’ y tus ‘nunca’. Sigue compartiendo tu corazón con la gente aunque se haya roto."</p>
        <cite className='layout-grid__author'>&mdash; Amy Poehler</cite>
      </div>
    </section>
  )
}
