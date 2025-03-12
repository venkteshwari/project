import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const courses = [
  {
    name: 'Full Stack Development',
    description: 'Master front-end & back-end technologies.',
    image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg',
    topics: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js']
  },
  {
    name: 'Digital Marketing',
    description: 'Learn SEO, Google Ads & Social Media Marketing.',
    image: 'https://cdn.pixabay.com/photo/2019/05/26/06/05/digital-marketing-4229637_1280.jpg',
    topics: ['SEO', 'Google Ads', 'Social Media Marketing', 'Content Marketing', 'Email Marketing']
  },
  {
    name: 'Web Designing',
    description: 'Design beautiful websites with HTML, CSS & JavaScript.',
    image: 'https://cdn.pixabay.com/photo/2018/02/22/18/21/laptop-3173613_1280.png',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design', 'UI/UX Design']
  },
  {
    name: 'Programming Languages',
    description: 'Master C, C++, Java, Python & more.',
    image: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg',
    topics: ['C', 'C++', 'Java', 'Python', 'Data Structures', 'Algorithms']
  },
  {
    name: 'Tally with GST',
    description: 'Learn Tally ERP9 with GST integration.',
    image: 'https://h4b2.c13.e2-5.dev/cloudlcc/2024/08/tally-erp-cloud.jpg',
    topics: ['Tally ERP9', 'GST Calculation', 'Inventory Management', 'Payroll Management', 'Taxation']
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

export default function Slider(props) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // ✅ Open Modal Function
  const handleShowCourse = (course) => {
    setSelectedCourse(course);
  }

  // ✅ Close Modal Function
  const handleCloseModal = () => {
    setSelectedCourse(null);
  }

  return (
    <div className="container my-5 p-5 d-flex justify-content-center" id="slider">
      <div style={{ maxWidth: '1500px', margin: 'auto', width: '100%' }} className="mx-auto">
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {courses.map((course, index) => (
            <div key={index} className="card shadow-lg border-0 rounded-3 m-3" style={{ overflow: 'hidden', height: '400px' }}>
              <img src={course.image} className="card-img-top" alt={course.name} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title text-primary">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => handleShowCourse(course)}  // ✅ Open Modal
                >
                  View Course
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* ✅ Modal Section */}
      {selectedCourse && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCourse.name}</h5>
                <button className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Description:</strong> {selectedCourse.description}</p>
                <p><strong>Topics Covered:</strong></p>
                <ul>
                  {selectedCourse.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
