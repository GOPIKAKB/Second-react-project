import React, { useContext } from 'react'
import { newContext } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';



function View() {
    const [data, setData] = useContext(newContext)
    const nav = useNavigate()
    const { parameter } = useParams()
    const arrowClick = () => {
        nav(-1)
    }
    return (
        <div style={{textAlign:'center',width:'100%',display:'flex',justifyContent:'center',height:'500px',alignItems:'center'}}>
        <div style={{border:'1px solid black',width:'50%',height:'50%',backgroundColor:'rgb(186 207 239)',paddingTop:'30px'}}>                                       
            <h3><u>View Page</u></h3>
            <div style={{paddingTop:'10px'}}>
            <h5>Name:{data[parameter].name}</h5>
            <h5>Age:{data[parameter].age}</h5>
            <h5>Place:{data[parameter].place}</h5>
            </div>
            <button style={{marginTop:'20px',backgroundColor: 'rgb(94 94 195)',width:'80px',border:'1px solid black',borderRadius:'5px' }} onClick={arrowClick}>Back</button>
        </div></div>
    )
}

export default View
