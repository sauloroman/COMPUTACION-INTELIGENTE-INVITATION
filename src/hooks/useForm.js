import { useEffect, useMemo, useState } from "react"

export const useForm = ( initialState = {}, formValidations = {} ) => {

  const [formState, setFormState] = useState( initialState );
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators();
  }, [ formState ])

  const onInputChange = ({ target: { name, value }}) => {
    setFormState({
      ...formState,
      [ name ]: value,
    })
  }

  const onResetForm = () => setFormState( initialState );

  const createValidators = () => {

    const formChecked = {};

    for( const formField of Object.keys( formValidations ) ) {
      const [ fn, errorMessage ] = formValidations[ formField ];
      formChecked[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage;
    }

    setFormValidation( formChecked );
  }

  const isFormValid = useMemo(() => {
    for( const formValue of Object.keys(formValidation) ) {
      if ( formValidation[formValue] !== null ) return false;
    }

    return true;
  }, [ formValidation ])

  return {
    formState,
    ...formState,
    ...formValidation,
    isFormValid,

    onInputChange,
    onResetForm,
  }

}