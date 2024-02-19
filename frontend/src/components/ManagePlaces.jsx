import{enqueueSnackbar} from "notistack";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const ManagePlaces = () => {

    const [userList, setuserList] = useState([]);

    const fetchPlacesData = async( )=>{
        const res =await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setuserList(data)
    }

    useEffect(() => {
      fetchPlacesData();
    }, [])

    const deletePlaces =async(id) =>{
      console.log(id);

      const res = await fetch ('http://localhost:5000/user/delete/'+id ,{ method :'DELETE'});
      console.log(res.status);
      if(res.status === 200){
        enqueueSnackbar ('Place Deleted Successfully', { variant:'success'});
        fetchPlacesData();
      }
    }

    const displayPlacesData=()=>{
      return <table className='table table-dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                userList.map( ( user ) =>{
                  return <tr>
                    <td> {user.name} </td>
                    <td> {user.address} </td>
                    <td> {user.location} </td>
                    <td> {user.description} </td>
                    <td>
                      <Link to={'/updateuser/'+user._id} className='btn btn-primary'>Edit</Link>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={ () => {deletePlaces(user._id) }}>Delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
      </table>
    }
  return ( 
    <div>
      <div className='container'>
        {displayPlacesData()}
      </div>
    </div>
  )
}

export default ManagePlaces;