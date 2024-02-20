import { useDispatch, useSelector } from "react-redux"
import { FirebaseDB } from "../firebase/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { resetError, setError, setIsLoading } from "../store/ui/ui.slice";
import { resetInvitation, setStudentData, setStudentId } from "../store/invitation/invitation.slice";
import { setStudentsStore } from "../store/students/students.slice";

export const useGuest = () => {

  const { studentId, studentGuests, studentName } = useSelector( store => store.invitation );
  const { studentsName } = useSelector( store => store.students );
  const dispatch = useDispatch();

  const invitationOf = async ( studentId = '' ) => {
    if ( !studentId ) throw new Error('Clave necesaria');
    dispatch( setIsLoading( true ) );
  
    try {
      const studentRef = doc( FirebaseDB, `/students/${studentId}`);
      const student = await getDoc( studentRef );
      const { nombre: studentName, invitados: studentGuests } = student.data();

      dispatch( setStudentId( studentId ) );
      dispatch( setStudentData({ studentGuests, studentName }));
      localStorage.setItem('student', JSON.stringify( studentId ) );
      dispatch( resetError() );
      
    } catch (error) {
      dispatch( setError({ hasError: true, errorMessage: 'Clave no encontrada'}) )
    }
    
    dispatch( setIsLoading( false ) );
  }
  
  const getStudents = async () => {
    dispatch( setIsLoading( true ) );    
    
    try {
      const studentsCollectionRef = collection( FirebaseDB, 'students');
      const studentsArr = await getDocs( studentsCollectionRef );
      
      let studentsName = [];
      studentsArr.forEach( student => studentsName.push(student.data().nombre) );

      dispatch(setStudentsStore( studentsName ));
      dispatch( resetError() );
    } catch (error) {
      dispatch( setError({ hasError: true, errorMessage: 'No se pudieron obtener los estudiantes'}) )
    }

    dispatch( setIsLoading( false ) );
  }

  const reloadStudent = async () => {
    const studentId = JSON.parse(localStorage.getItem('student'));
    await invitationOf( studentId );
  }

  const invitationOut = () => {
    localStorage.clear();
    dispatch( resetInvitation() );
  }

  return {
    studentId,
    studentGuests,
    studentName,
    invitationOf,
    getStudents,
    studentsName,
    reloadStudent,
    invitationOut
  }

}