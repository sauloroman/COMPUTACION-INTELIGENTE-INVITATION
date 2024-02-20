import { useDispatch, useSelector } from "react-redux"
import { resetError, resetModal, setError, setIsLoading, setModal } from "../store/ui/ui.slice"

export const useUI = () => {
  
  const { error, isLoading, modal } = useSelector( store => store.ui )
  const dispatch = useDispatch();

  const loading = () => {
    dispatch(setIsLoading( true ));
  }

  const noLoading = () => {
    dispatch(setIsLoading( false ));
  } 

  const createError = ( errorMessage = '' ) => {
    dispatch( setError( { hasError: true, errorMessage } ) );
  }

  const clearError = () => {
    dispatch(resetError());
  }

  const showModal = ( contentModal = '', titleModal = '' ) => {
    dispatch( setModal({ isOpen: true, content: contentModal, titleModal }) )
  }

  const closeModal = () => {
    dispatch( resetModal() )
  }

  return {
    error,
    isLoading,
    modal,

    loading,
    noLoading,
    createError,
    clearError,
    showModal,
    closeModal
  }

}