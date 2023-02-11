import React from 'react';
import styles from '../Leads/Leads.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Leads = () => {
   const navigate = useNavigate();
   const params = useParams();

   const [edit, setEdit] = useState(false)
   const [leads, setLeads] = useState([]);

    const loadLeads = async () => {
       const response = await fetch('http://localhost:9000/api/users/')
       const data = await response.json()
       setLeads(data)
    }

    useEffect(() => {
      loadLeads()
  },[]);


  const handleDelete = async (id) => {

      try {
         const res = await fetch(`http://localhost:9000/api/users/${id}`, {
              method: "DELETE",
         })

         console.log(res)
         setLeads(leads.filter( e =>  e._id !== id))

      }catch (err) {
         console.log(err)
      }

  }


    return ( 
        <>
          <div className={styles.box}>
                  <div className={styles.bb}>
                        {leads.map((lead) => (
                              <>
                              <ul>
                                 <li><p>{lead.name}</p></li>
                                 <li><p>{lead.email}</p></li>
                              </ul>
                              
                                 <div className={styles.contenedorBtn}>
                                    <div className={styles.btn} onClick={() => navigate(`/formulario/${lead._id}/edit`)}>Editar</div>
                                    <div className={styles.btn} onClick={() => handleDelete(lead._id)}>Eliminar</div>
                                 </div>
                                 
                              </>
                        ))}
                  </div>
             </div>
        </>
     );
}
 
export default Leads;