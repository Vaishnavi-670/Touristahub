import{enqueueSnackbar} from "notistack";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Place from "./AddPlace";

const ManagePlaces = () => {

    const [placeList, setplaceList] = useState([]);

    const fetchPlacesData = async( )=>{
        const res =await fetch('http://localhost:5000/place/getall');
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setplaceList(data)
    }

    useEffect(() => {
      fetchPlacesData();
    }, [])

    const deletePlaces =async(id) =>{
      console.log(id);

      const res = await fetch ('http://localhost:5000/place/delete/'+id ,{ method :'DELETE'});
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
                placeList.map( ( place ) =>{
                  return <tr>
                    <td> {place.name} </td>
                    <td> {place.address} </td>
                    <td> {place.location} </td>
                    <td> {place.description} </td>
                    <td>
                      <Link to={'/updateplace/'+place._id} className='btn btn-primary'>Edit</Link>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={ () => {deletePlaces(place._id) }}>Delete</button>
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