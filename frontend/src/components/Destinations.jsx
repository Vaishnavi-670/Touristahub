import React from 'react'
import { Link } from 'react-router-dom'

const Destinations = () => {
  return (
    <div className='overflow-y-hidden'>
      <header className='d-flex 'style={{width: '95%' }} >
        <div className="mx-auto mt-5 container mb-4 text-center" style={{ maxWidth: '900px' }}>
          <h1 className=" display-2 text-dark fw-bold animated-text">
            Let's Explore 
              <span className='display-2 text-dark fw-normal animated-text'> your Dream Destination here!</span>
          </h1>
          <p className="mt-3 fs-5 text-dark fw-normal sub-title animated-text">
            Your Gateway to Adventure: Explore Unseen Destinations and Create Lasting Memories!
          </p>
        </div>
      </header>


      <div className="row px-4">
        <div className="col-md-4 mb-4" >
          <div className="card"style={{ height: '500px', overflow: 'hidden' }} >
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://static.toiimg.com/thumb/msid-102383896,width-748,height-499,resizemode=4,imgsize-238460/.jpg" alt="" />
              <h3>Shimla</h3>
              <p className=' fs-6 text-dark '>Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills</p>
              <Link className='btn btn-primary' to="/browseplace/shimla">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://cdn-ijojh.nitrocdn.com/wYlENIZbBEepXffmuWvajJfNyYNuqlHx/assets/images/optimized/wp-content/uploads/2023/02/88b025cb3e019dd48c4fe17b716960b5.manali-1024x536.jpg" alt="" />
              <h3>Manali</h3>
              <p>Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state.  </p>
              <Link className='btn btn-primary' to="/browseplace/manali">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://www.travelandleisure.com/thmb/0CP3JWdU_EFnS4c5v8VtLekXb-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hawa-mahal-TODOJAIPUR1023-034e1287d12d453fab6d236e8cf7e982.jpg" alt="" />
              <h3>Jaipur</h3>
              <p>Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region </p>
              <Link className='btn btn-primary' to="/browseplace/jaipur">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://www.livemint.com/lm-img/img/2024/01/22/600x338/Ayodhya_ram_mandir_jpg_1705897752176_1705901616166.jpg" alt="" />
              <h3>Ayodhya</h3>
              <p>Ayodhya is a city situated on the banks of the Sarayu river in the Indian state of Uttar Pradesh</p>
              <Link className='btn btn-primary' to="/browseplace/ayodhya">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://media.licdn.com/dms/image/D5612AQHYtOBHGCcDPA/article-cover_image-shrink_600_2000/0/1704606295718?e=2147483647&v=beta&t=OKJvfuwjbeJQdL9UzFhPvzHf1kl5RlyNv_qaylhU6Kc" alt="" />
              <h3>Lakshadweep</h3>
              <p>Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India</p>
              <Link className='btn btn-primary' to="/browseplace/lakshdweep">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BeachFun.jpg" alt="" />
              <h3>Goa</h3>
              <p>Goa is a state in western India with coastlines stretching along the Arabian Sea Goa is also known for its beaches</p>
              <Link className='btn btn-primary' to="/browseplace/goa">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg" alt="" />
              <h3>Paris</h3>
              <p>Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture</p>
              <Link className='btn btn-primary' to="/browseplace/paris">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://www.vacationsbyrail.com/media/40665284/zurich-switzerland.jpg" alt="" />
              <h3>Switzerland</h3>
              <p>Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps</p>
              <Link className='btn btn-primary' to="/browseplace/switzerland">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg" alt="" />
              <h3>Dubai</h3>
              <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.</p>
              <Link className='btn btn-primary' to="/browseplace/dubai">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg" alt="" />
              <h3>Bangkok</h3>
              <p>Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life</p>
              <Link className='btn btn-primary' to="/browseplace/bangkok">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://static.toiimg.com/thumb/msid-79111848,width-748,height-499,resizemode=4,imgsize-188887/.jpg" alt="" />
              <h3>Egypt</h3>
              <p>Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs.</p>
              <Link className='btn btn-primary' to="/browseplace/egypt">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://img.veenaworld.com/wp-content/uploads/2018/09/Singapore-feature-image.jpg?imwidth=640" alt="" />
              <h3>Singapore</h3>
              <p>Singapore, officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia</p>
              <Link className='btn btn-primary' to="/browseplace/singpore">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://assets.wwf.org.au/image/upload/c_fill,g_auto,w_1400/f_auto/q_auto/img-penguins-in-Antarctica-1000px?q=75" alt="" />
              <h3>Antarctica</h3>
              <p>The Antarctic is a polar region around Earth's South Pole, opposite the Arctic region around the North Pole.</p>
              <Link className='btn btn-primary' to="/browseplace/antarcita">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card"style={{ height: '500px', overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg" alt="" />
              <h3>New Zealand</h3>
              <p>New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses</p>
              <Link className='btn btn-primary' to="/browseplace/newzealand">View Places to Visit</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card"style={{ height: '500px',  overflow: 'hidden' }}>
            <div className="card-body">
              <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://cdn.kimkim.com/files/a/images/883e09af9f01e59a34ad3af6e13203450b8d7095/original-465a6f2de6f9b6a9cea4522162f26de1.jpg" alt="" />
              <h3>Italy</h3>
              <p>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine</p>
              <Link className='btn btn-primary' to="/browseplace/italy">View Places to Visit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Destinations