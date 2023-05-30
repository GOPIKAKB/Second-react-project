import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { newContext } from '../../App';
import { Table } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit, AiOutlineFolderView } from "react-icons/ai";


function Crud1() {

  const [data, setData, age, setAge, name, setName, place, setPlace] = useContext(newContext)
  const [viewData, setViewData] = useState('')
  const [index, setIndex] = useState('')
  const [input,setInput]=useState('')

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleUpdate = (item) => {
    setName(item.name);
    setAge(item.age);
    setPlace(item.place);
  }

const filter=(e)=>{
const event=e.target.value
console.log(event.toString());
setInput(event)
const filterData=data.filter(item=> item.name=== event.toString()
)
setData(filterData)
} 
 return (
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
    {console.log(input)}

    <div style={{ textAlign: 'center', width: '50%' }}>
      <h1>Table</h1>
   <label>serch</label>   <input type='text' value={input} onChange={filter} ></input>
      <Table responsive='sm' style={{ border: '1px solid #dee2e6' ,marginTop:'20px'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.place}</td>
              <td>
                <AiFillDelete onClick={() => handleDelete(index)} />
              </td>
              <td>
                <Link to={`/view/${index}`} ><AiOutlineFolderView /></Link>
              </td>
              <td>
                <Link to={`/edit/${index}`}><AiFillEdit onClick={() => handleUpdate(item)} /></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button style={{backgroundColor: '#0d6efd',width:'80px',border:'1px solid black',borderRadius:'5px'}}><Link to='add' style={{textDecoration:'none',color:'black'}}>Add</Link></button>
    </div>
    </div>
  )
}

export default Crud1
