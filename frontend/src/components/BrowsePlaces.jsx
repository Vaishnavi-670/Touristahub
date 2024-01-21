import React, { useEffect, useState } from 'react'
import Place from './AddPlace'
import { useParams } from 'react-router-dom';

const BrowsePlaces = () => {

    const [placeVisit, setplaceVisit] = useState([]);

    const {location} = useParams();

    const fetchPlaceData = async( )=>{
        const res =await fetch('http://localhost:5000/place/getbylocation/'+location);
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setplaceVisit(data)
    }

    useEffect(() => {
      fetchPlaceData();
    }, [])

    const displayPlaces=() => {
        return placeVisit.map((obj,index)=>{
            return <div className='col-md-4 mt-5'>
                <div className='card-shadow'>
                    <h2 className="">{obj.name}</h2>
                    <h3 className="">{obj.location}</h3>
                    <h3 className="">{obj.address}</h3>
                    <h3 className="">{obj.descriptions}</h3>

                    <img style={{height:"100px",width:"100px"}} src={'http://localhost:5000/'+obj.image} alt="loading" />
                </div>
            </div>
        })
    }

  return (
    <>
        <div className='container'>
            {displayPlaces()}
        </div>
    </>
  )
}

export default BrowsePlaces