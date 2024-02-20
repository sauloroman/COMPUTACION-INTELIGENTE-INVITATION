export const Error = ( { message = '' } ) => {
  return (
    <div className="error">
      <i className='error__icon bx bxs-error-circle'></i>
      <p className="error__text">{ message }</p>
    </div>
  )
}
