import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
<link rel="stylesheet" href="index.css" />
const BrowseLocations = () => {

    return (
        <div>
            <header className=' text-white d-flex' style={{ height: '100vh', position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.7)' }} >
                <div className="container py-5 my-auto">
                    <h1 className="text-center display-2 fw-bold  title">Tourista Hub</h1>
                    <p className=" fs-4 text-center text-4xl sub-title">Book an exclusive</p>
                    <p className="fs-4 text-center sub-title">home for your personal travel</p>
                    <p className="fs-4 text-center sub-title">Each property is hand-picked, personally visited and cannot be found elsewhere.</p>
                    <div className="input-group col-md-10 mx-auto my-5" style={{width:'50%'}}>
                        <input type="text" className="form-control" />
                        <button className="btn btn-warning ">Search</button>
                    </div>
                </div>
                    <video muted loop src="./waterfall2.mp4" style={{ position: 'absolute', top: 0, zIndex: -1, objectFit: 'cover',width:'100%', height:'100vh' }} autoPlay ></video>
            </header>

            <section>

                <div className="row ">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://static.toiimg.com/thumb/msid-102383896,width-748,height-499,resizemode=4,imgsize-238460/.jpg" alt="" />
                                <h3>Shimla</h3>
                                <Link className='btn btn-primary' to="/browseplace/shimla">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://www.rishita.in/uploads/blog/5%20best%20posh%20localities%20in%20lucknow" alt="" />
                                <h3>Lucknow</h3>
                                <Link className='btn btn-primary' to="/browseplace/lucknow">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://cdn-ijojh.nitrocdn.com/wYlENIZbBEepXffmuWvajJfNyYNuqlHx/assets/images/optimized/wp-content/uploads/2023/02/88b025cb3e019dd48c4fe17b716960b5.manali-1024x536.jpg" alt="" />
                                <h3>Manali</h3>
                                <Link className='btn btn-primary' to="/browseplace/manali">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://www.travelandleisure.com/thmb/0CP3JWdU_EFnS4c5v8VtLekXb-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hawa-mahal-TODOJAIPUR1023-034e1287d12d453fab6d236e8cf7e982.jpg" alt="" />
                                <h3>Jaipur</h3>
                                <Link className='btn btn-primary' to="/browseplace/jaipur">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://www.livemint.com/lm-img/img/2024/01/22/600x338/Ayodhya_ram_mandir_jpg_1705897752176_1705901616166.jpg" alt="" />
                                <h3>Ayodhya</h3>
                                <Link className='btn btn-primary' to="/browseplace/ayodhya">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://media.licdn.com/dms/image/D5612AQHYtOBHGCcDPA/article-cover_image-shrink_600_2000/0/1704606295718?e=2147483647&v=beta&t=OKJvfuwjbeJQdL9UzFhPvzHf1kl5RlyNv_qaylhU6Kc" alt="" />
                                <h3>Lakshadweep</h3>
                                <Link className='btn btn-primary' to="/browseplace/lakshdweep">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BeachFun.jpg" alt="" />
                                <h3>Goa</h3>
                                <Link className='btn btn-primary' to="/browseplace/goa">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg" alt="" />
                                <h3>Paris</h3>
                                <Link className='btn btn-primary' to="/browseplace/paris">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://www.vacationsbyrail.com/media/40665284/zurich-switzerland.jpg" alt="" />
                                <h3>Switzerland</h3>
                                <Link className='btn btn-primary' to="/browseplace/switzerland">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg" alt="" />
                                <h3>Dubai</h3>
                                <Link className='btn btn-primary' to="/browseplace/dubai">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg" alt="" />
                                <h3>Bangkok</h3>
                                <Link className='btn btn-primary' to="/browseplace/bangkok">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://static.toiimg.com/thumb/msid-79111848,width-748,height-499,resizemode=4,imgsize-188887/.jpg" alt="" />
                                <h3>Egypt</h3>
                                <Link className='btn btn-primary' to="/browseplace/egypt">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://img.veenaworld.com/wp-content/uploads/2018/09/Singapore-feature-image.jpg?imwidth=640" alt="" />
                                <h3>Singapore</h3>
                                <Link className='btn btn-primary' to="/browseplace/singpore">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://assets.wwf.org.au/image/upload/c_fill,g_auto,w_1400/f_auto/q_auto/img-penguins-in-Antarctica-1000px?q=75" alt="" />
                                <h3>Antarctica</h3>
                                <Link className='btn btn-primary' to="/browseplace/antarcita">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg" alt="" />
                                <h3>New Zealand</h3>
                                <Link className='btn btn-primary' to="/browseplace/newzealand">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img className='card-img-top' style={{ height: "200px", objectFit: 'cover' }} src="https://cdn.kimkim.com/files/a/images/883e09af9f01e59a34ad3af6e13203450b8d7095/original-465a6f2de6f9b6a9cea4522162f26de1.jpg" alt="" />
                                <h3>Italy</h3>
                                <Link className='btn btn-primary' to="/browseplace/italy">View Places to Visit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BrowseLocations