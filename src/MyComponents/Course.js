import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAppRegistration } from 'react-icons/md';

export default function Course() {
  const [images, setImages] = useState([]);

  // ✅ Memoize the keywords array
  const keywords = useMemo(() => [
    'Office Computer',
    'Coding',
    'Business Education',
    'Web Development',
    'Digital Marketing',
    'Website Design'
  ], []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageRequests = keywords.map(async (keyword) => {
          const response = await axios.get(`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`, {
            headers: {
              Authorization: 'qqOpPlZpYqM0XwWlnVCdZImqKB0SYUxLJq8DGPBhQGoYP52bupAdSBYH' // Pexels API Key
            }
          });
          return response.data.photos[0]?.src?.landscape || '';
        });

        const fetchedImages = await Promise.all(imageRequests);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [keywords]);

  // ✅ Course details with different fees and durations
  const courses = [
    {
      name: 'Company Accountant',
      fees: '15,000/-',
      oldFees: '20,000/-',
      duration: '6 Months'
    },
    {
      name: 'Programming Language',
      fees: '25,000/-',
      oldFees: '30,000/-',
      duration: '9 Months'
    },
    {
      name: 'Professional Course',
      fees: '18,000/-',
      oldFees: '22,000/-',
      duration: '5 Months'
    },
    {
      name: 'Full Stack Development',
      fees: '40,000/-',
      oldFees: '50,000/-',
      duration: '1 Year'
    },
    {
      name: 'Digital Marketing',
      fees: '20,000/-',
      oldFees: '25,000/-',
      duration: '4 Months'
    },
    {
      name: 'Advance Diploma In Web Design And Development',
      fees: '30,000/-',
      oldFees: '35,000/-',
      duration: '10 Months'
    }
  ];

  return (
    <div>
      <section className='course' id='course'>
        <div className='text-center my-5'>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300', color: '#007BFF' }}>
            POPULAR COURSES
          </h2>
          <p className='lead'>We're Providing Best Courses To Our Students</p>
        </div>

        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
            {courses.map((course, index) => (
              <div className='col' key={index}>
                <div className='card h-100 shadow-lg rounded-3 overflow-hidden'>
                  {images[index] && (
                    <img
                      src={images[index]}
                      className='card-img-top img-fluid'
                      alt={course.name}
                      style={{ objectFit: 'cover', height: '250px' }}
                    />
                  )}
                  <div className='card-body'>
                    <h5 className='card-title'>{course.name}</h5>
                    <table className='table'>
                      <tbody>
                        <tr>
                          <th>Fees:</th>
                          <td>
                            <del style={{ color: 'red' }}>{course.oldFees}</del> {course.fees}
                          </td>
                        </tr>
                        <tr>
                          <th>Course Duration:</th>
                          <td>{course.duration}</td>
                        </tr>
                        <tr>
                          <td>
                            <a className='btn btn-primary me-2' href="tel:+918412837876">
                              <FaPhoneAlt /> Call Now
                            </a>
                          </td>
                          <td>
                            <button className='btn btn-success'>
                              <MdOutlineAppRegistration /> Apply Now
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
               
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
