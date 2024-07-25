import { useDispatch, useSelector } from "react-redux"
import { setError, setIsLoading, setMenu, setModal } from "../store/ui/ui.slice"

export const useUI = () => {
  
  const { error, isLoading, modal, menu } = useSelector( store => store.ui )
  const dispatch = useDispatch();

  const loading = () => {
    dispatch(setIsLoading( true ));
  }

  const noLoading = () => {
    dispatch(setIsLoading( false ));
  } 

  const createError = ( errorMessage = '' ) => {
    dispatch( setError( { isOpen: true, errorMessage } ) );
  }

  const deleteError = () => {
    dispatch( setError({ isOpen: false, errorMessage: '' }) )
  }

  const showModal = () => {
    dispatch( setModal( true ) )
  }

  const closeModal = () => {
    dispatch( setModal( false ) )
  }

  const openMenu = () => {
    dispatch( setMenu( true ) )
  }

  const closeMenu = () => {
    dispatch( setMenu( false ) )
  }

  return {
    error,
    isLoading,
    modal,
    menu,

    loading,
    noLoading,
    createError,
    deleteError,
    showModal,
    closeModal,
    openMenu,
    closeMenu,
  }

}