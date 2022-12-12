import format from 'date-fns/format'
import api from '../../services/api.js';
import { useNavigate } from 'react-router';
const PatientBookingDataHandler = ({ medicData }) => {
  const navigate = useNavigate();
    var convertedDate = format(new Date(medicData.initialDate),"dd/MM/yyyy HH:mm")

    const handleCancel = (id) =>{
      try {
        const URL = `/book/${id}`;
        api.delete(URL);
        
        
        
        
      } catch (error) {}
  }
    


    return (
      <>
        
        <p>Data Inicial: {String(convertedDate)}</p>
        <p>Medic Name: {medicData.medic_id.name}</p>
        <p>Specialty: {medicData.medic_id.specialty}</p>
        <div className='inline-div'><button onClick={() => handleCancel(medicData.id)}>Cancel Reservation</button></div>
        
        
      </>
    );
  };
  
  export default PatientBookingDataHandler;