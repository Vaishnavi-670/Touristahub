import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="px-3 mt-5 mx-auto">
      <div className="text-left mx-auto w-100 text-md-center">
        <h1 className="mb-4 display-2 fw-bold text-dark">
          <span>About </span>
          <span
            className="py-2"
            style={{
              background: 'linear-gradient(to right, #68D391, #9F7AEA)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Tourishta Hub
          </span>
        </h1>
        <p className="px-5 mb-2 fs-5 text-muted">
          Welcome to Tourishta Hub, your ultimate travel companion! Discover exclusive destinations, hand-picked travel experiences, and personalized itineraries all in one place. Whether you're an adventure seeker or a culture enthusiast, we're here to guide you to your dream vacation.
        </p>
        <div className="container  py-2 ">
          <div className="row mt-5 justify-content-between ">

            {/* End Col */}
            <div className=" col-md-3 d-flex mb-4 flex-column  align-items-center p- bg-light rounded shadow hover--effect">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/8atour/credit-guarantee.png" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
              <h2 className='mt-3 text-center'>Our Mission </h2>
              <p className="text-center">At TourishtaHub, we believe in making travel planning simple and accessible. Our mission is to empower every traveler by providing them with accurate, real-time information and recommendations on the best destinations, activities, and experiences. We are committed to offering hand-picked, quality destinations that cater to all interests, from exploring the hidden gems to famous tourist attractions worldwide.

              </p>
            </div>
            <div className=" col-md-3 d-flex mb-4  flex-column  align-items-center p-4 bg-light rounded hover--effect shadow">
              <img src="https://icons.veryicon.com/png/128/miscellaneous/8atour/apphome-visa.png" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
              <h2 className='mt-3 text-center'>What we offer</h2>
              <p className="text-center">
        Curated travel destinations from around the world
        In-depth information about each location including attractions, culture, and best times to visit
        User reviews and recommendations for authentic travel experiences
        Interactive maps and itinerary creation (coming soon)
        Personalized travel suggestions based on your preferences
          
              </p>
            </div>
            <div className=" col-md-3 d-flex mb-4 flex-column  align-items-center p-4 bg-light rounded hover--effect shadow">
              <img src="https://icons.veryicon.com/png/128/miscellaneous/8atour/precise-matching.png" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
              <h2 className='mt-3 text-center'>Our Vision</h2>
              <p className="text-center">Our vision is to become the leading travel platform, connecting travelers with the most authentic and unforgettable travel experiences. We aim to create a community of passionate explorers who can share insights and help each other discover new and exciting destinations.

              </p>
            </div>
          </div>

        </div>

       

        <div className="text-center mb-5">
          <Link href="/" className="btn btn-success btn-lg rounded-pill">
            Explore Destinations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi mx-1 bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
