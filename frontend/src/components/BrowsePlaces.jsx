import React, { useEffect, useState } from 'react'
import Place from './AddPlace'
import { useParams } from 'react-router-dom';

const BrowsePlaces = () => {

    const [placeVisit, setplaceVisit] = useState([]);

    const { location } = useParams();

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

    const displayPlaces = () => {
        return placeVisit.map((obj, index) => {
            return <div className='col-md-4 mt-5'>

                <div className='card shadow'>
                    <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src={'http://localhost:5000/' + obj.image} alt="loading" />
                    <div className="card-body">
                        <h2 className="">{obj.name}</h2>
                        <p className="">{obj.address}</p>
                        <p className="">{obj.description}</p>
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

export default BrowsePlaces