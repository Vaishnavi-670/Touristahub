import React, { useEffect, useState } from 'react'
import Place from './AddPlace'
import { useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const BrowsePlaces = () => {

    const [placeVisit, setplaceVisit] = useState([]);
    const { location } = useParams();
    // const {id} = useParams();

    const fetchPlaceData = async () => {
        const res = await fetch('http://localhost:5000/place/getbylocation/' + location);
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setplaceVisit(data)
    }
    useEffect(() => {
        fetchPlaceData();
    }, [])
    const deleteitems = async (id) => {
        console.log(id);
        const res = await fetch ('http://localhost:5000/place/delete/'+id ,{ method :'Delete'});
        console.log(res.status);
        if(res.status === 200){
          enqueueSnackbar ('Place Deleted Successfully', { variant:'success'});
        //   fetchPlacesData();
        } 
    }

    const displayPlaces = () => {
        return placeVisit.map((obj, index) => {
            return <div className='col-md-4 mt-5'>
                <div className='card shadow h-100'>
                    <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src={'http://localhost:5000/' + obj.image} alt="loading" />
                    <div className="card-body">
                        <h2 className="">{obj.name}</h2>
                        <p className="">{obj.address}</p>
                        <p className="">{obj.description}</p>
                        <div>

                            <button className='btn btn-danger' onClick={() => deleteitems(obj._id)}>Delete</button>
                        </div>
                        
                    </div>

                </div>
            </div>
        })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {displayPlaces()}
                </div>
            </div>
        </>
    )
}
export default BrowsePlaces;