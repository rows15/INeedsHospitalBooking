import format from 'date-fns/format'

const AdminBookingDataHandler = ({ bookingData }) => {
    var convertedDate = format(new Date(bookingData.initialDate),"dd/MM/yyyy HH:mm")
    return (
      <div className='patient-mediclist-container'>
        {console.log(bookingData)}
        <p>Data Inicial: {String(convertedDate)}</p>
        <p>Patient Id and Name: {bookingData.patient_id.id} , {bookingData.patient_id.name}</p>
        <p>Medic Id and Name: {bookingData.medic_id.id} , {bookingData.medic_id.name}</p>
        <p>Specialty: {bookingData.medic_id.specialty}</p>
        
        
      </div>
    );
  };
  
  export default AdminBookingDataHandler;