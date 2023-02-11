import React, { useState, useEffect } from 'react'
import styles from '../Formulario/formulario.module.css';
import { useNavigate, useParams } from 'react-router-dom';


const Formulario = () => {
    const params = useParams();

    const navigate = useNavigate();

    const [editando, setEditando] = useState(false)
    const [leads, setLeads] = useState(
        {
            name:'',
            age:'',
            email:''
         }
    )


    useEffect(() => {
        if(params.id) 
            setEditando(true)
            cargaElLead(params.id)
            //console.log(leads)

    },[])


    const handleInputChange = (e) => {
        e.preventDefault();
        setLeads({
            ...leads,
            [e.target.name]:e.target.value
        })

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(leads)

        if(editando) {
            await fetch(`http://localhost:9000/api/users/${params.id}`, {
                method:'PUT',
                body: JSON.stringify(leads),
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                })
    
                navigate('/')
           

        }else{
            await fetch('http://localhost:9000/api/users', {
                method:'POST',
                body: JSON.stringify(leads),
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            })

            navigate('/')
        }
     
    
    }


    //Carga una solo lead, (la busca por el id)
    const cargaElLead = async (id) => {
        const res = await fetch(`http://localhost:9000/api/users/${id}`)
        const data = await res.json()

        setLeads({
            name:data.name,
            age:data.age,
            email:data.email
        })

    }

    return ( 
       <div className={styles.contenedor}> 
           <form onSubmit={handleSubmit}>
               <div>
                  <label>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={leads.name}
                        onChange={handleInputChange} 
                    />
               </div>

               <div>
                  <label>Age:</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={leads.age}
                        onChange={handleInputChange} 
                    />
               </div>

               <div>
                  <label>Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={leads.email}
                        onChange={handleInputChange} 
                    />
               </div>
               <button type='submit'>{editando ? 'Edit' : 'Submit'}</button>
           </form>
       </div>
)}
 
export default Formulario;