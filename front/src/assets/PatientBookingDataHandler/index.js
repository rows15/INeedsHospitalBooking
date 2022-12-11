import format from 'date-fns/format'

const PatientBookingDataHandler = ({ medicData }) => {
    var convertedDate = format(new Date(medicData.initialDate),"dd/MM/yyyy HH:mm")
    return (
      <>
        
        <p>Data Inicial: {String(convertedDate)}</p>
        <p>Medic Name: {medicData.medic_id.name}</p>
        <p>Specialty: {medicData.medic_id.specialty}</p>
        
        
      </>
    );
  };
  
  export default PatientBookingDataHandler;