import React from 'react'
import { Link } from 'react-router-dom'

const BrowseLocations = () => {
  return (
    <div>
        <header></header>

        <section>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h3>Shimla</h3>
                            <Link className='btn btn-primary' to="/browseplace/shimla">View Places to Visit</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h3>Lucknow</h3>
                            <Link className='btn btn-primary' to="/browseplace/lucknow">View Places to Visit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BrowseLocations