/* import Home from '../../component/Home';
import './style.css'; */
import api from '../../services/api.js';
import React, { useState, useEffect, createContext } from 'react';
import AdminMedicDataHandler from '../../assets/AdminMedicDataHandler/index.js';
import "./styles.css"
import AdminBookingDataHandler from '../../assets/AdminBookingHandler/index.js';
import { useNavigate } from 'react-router';

const Admin = () => {
  const [medics, setMedics] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showMenu, setShowMenu] = useState(false)
  const [responseLog, setResponseLog] = useState()
  useEffect(() => {

    estaLogado()


  }, []);
  const navigate = useNavigate();


  function estaLogado() {
    try {
      let user = JSON.parse(localStorage.getItem('signed'));
      if (!user) { navigate('/') }

    } catch (error) {

    }
  }

  async function callApiListAllMedics() {
    try {
      const URL = `/medic/search`;
      const response = await api.get(URL);
      setMedics(response.data);


    } catch (error) { }
  }

  async function callApiListMedicsBySpecialty(specialty) {
    try {
      const URL = `/medic/search/${specialty}`;
      const response = await api.get(URL);
      setMedics(response.data);


    } catch (error) { }
  }
  async function callApiListAllBookings() {
    try {
      const URL = `/book`;
      const response = await api.get(URL);
      setBookings(response.data);
      console.log(response.data)


    } catch (error) { }
  }
  async function callApiListBookingsByPacientId(id) {
    try {
      const URL = `/book/patient/${id}`;
      const response = await api.get(URL);
      setBookings(response.data);



    } catch (error) { }
  }

  async function callApiListBookingsByMedicId(id) {
    try {
      const URL = `/book/medic/${id}`;
      const response = await api.get(URL);
      setBookings(response.data);



    } catch (error) { }
  }

  async function callApiListBookingsByDate(date) {
    try {
      console.log(date)
      const URL = `/book/date/${date}`;
      const response = await api.get(URL);
      setBookings(response.data);
      console.log(response.data)



    } catch (error) { }
  }


    const handleCreate = async () => {
      try {
        const role = document.getElementById('create-user-role').value
        switch (role) {
          case "medic":
            const email = document.getElementById('create-user-email').value
            const tel = document.getElementById('create-user-tel').value
            const name = document.getElementById('create-user-name').value
            const password = document.getElementById('create-user-password').value
            const crm = document.getElementById('create-user-crm').value
            const specialty = document.getElementById('create-user-specialty').value
            if (role && email && tel && name && password && crm && specialty){
              const URL = `/admin/create`;
        
              const response = await api.post(URL,{
                role:role,
                email:email,
                tel:tel,
                name:name,
                password:password,
                crm:crm,
                specialty:specialty
              });
              
              setResponseLog(response.data)
            }


            default:
              
            }
            
          } catch (error) {
            
          }
    }



    

  return (
    <div className='admin-container'>
      <title>Admin Page</title>

      <p>Admin page</p>
      <div>Create User</div>
      <button onClick={() => setShowMenu(true)}>Show menu</button><button onClick={() => setShowMenu(false)}>Hide menu</button>
      {showMenu && (<div className="patient-mediclist-container">
      
        <p>Role
        <select id="create-user-role">
                          <option value="medic">Medic</option>
        </select></p>
      <p>Email:<input type='text' id="create-user-email"></input></p>
      <p>Tel:<input type='text' id="create-user-tel"></input></p>
      <p>Name:<input type='text' id="create-user-name"></input></p>
      <p>Password:<input type='text' id="create-user-password"></input></p>
      <p>CRM:<input type='text' id="create-user-crm"></input></p>
      <p>Specialty:<input type='text' id="create-user-specialty"></input></p>
      <button onClick={() => handleCreate()}>Create</button>
      

        
      
      </div>)}
      



      <div>List Medics</div>
      <button onClick={() => callApiListAllMedics()} value="1">All medics</button>
      <br/>
      <button onClick={() => callApiListMedicsBySpecialty(document.getElementById('admin-input-medic-specialty').value)} value="2">Search by specialty</button>
      <input type='text' id="admin-input-medic-specialty"></input>
      <br/>
      <button onClick={() => setMedics([])} value="3">Hide List</button>
      <div>{medics.map((item) => <AdminMedicDataHandler medicData={item} />)}</div>






      <div>List Reservations</div>
      <button onClick={() => callApiListAllBookings()} value="1">All Bookings</button>
      <br/>
      <button onClick={() => callApiListBookingsByPacientId(document.getElementById('admin-input-patient-id').value)} value="2">Search by Patient Id</button>
      <input type='text' id="admin-input-patient-id"></input>
      <br/>
      <button onClick={() => callApiListBookingsByMedicId(document.getElementById('admin-input-medic-id').value)} value="2">Search by Medic Id</button>
      <input type='text' id="admin-input-medic-id"></input>
      <br/>
      <button onClick={() => callApiListBookingsByDate(document.getElementById('admin-input-booking-date').value)} value="2">Search by Date</button>
      <input type='text' placeholder='yyyy-mm-dd' id="admin-input-booking-date"></input>
      <br/>
      <button onClick={() => setBookings([])} value="3">Hide List</button>
      <div>{bookings.map((item) => <AdminBookingDataHandler bookingData={item} />)}</div>

    </div>
  );
};

export default Admin;