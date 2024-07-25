export const HeadingSection = ({ 
  location = 'center', 
  srcIcon = '', 
  iconWidth = '8rem',
  srcMessage, 
  widthMessage = "20rem",
  title, 
  titleColor, 
  titleWeight 
}) => {
  return (
    <div className={`flex-column-${location}`}>
      <div className="flex">
        { srcIcon && <img className="heading-section__icon" style={{ width: `${iconWidth}`}} src={ srcIcon } alt="Hoja icono" /> }
      </div>
      <div className="flex">
        <h2 
          className="heading__section"
          style={{ 
            color: `${titleColor}`, 
            fontWeight: `${titleWeight}`,
          }}>
          { title }
        </h2>
      </div>
      <div className="flex">
        { srcMessage && <img style={{ width: `${widthMessage}`}} src={ srcMessage } className="heading-section__message" alt="You did it texto" /> }
      </div>
    </div>
  )
}
