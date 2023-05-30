import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { newContext } from '../../App'

function Add() {
    const [data, setData, age, setAge, name, setName, place, setPlace] = useContext(newContext)
    const nav = useNavigate()
    const handleAdd = () => {
        setData([...data, { name, age, place }]);

        setName('');
        setAge('');
        setPlace('');
        nav(-1)
    };
    return (
        <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'500px'}}>
            
            <div style={{textAlign:'center',border:'1px solid black',width:'50%',height:'50%',backgroundColor:'rgb(186 207 239)',paddingTop:'15px'}}>
            <h3><u>Add Page</u></h3>
             
            <label style={{paddingTop:'10px'}}>Name: <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /></label><br></br>
           <label style={{paddingTop:'10px',paddingLeft:'15px'}}>Age:  <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            /></label> <br></br>
           <label style={{paddingTop:'10px',paddingLeft:'8px'}}>Place: <input
                type="text"
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
            /></label><br></br>
            <button style={{marginTop:'20px',backgroundColor: '#0d6efd',width:'80px',border:'1px solid black',borderRadius:'5px' }} onClick={handleAdd}>Add</button>
            
            </div>
        </div>
    )
}

export default Add
