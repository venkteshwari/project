import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const teachers = [
  {
    name: 'Shubham Dubey',
    subject: 'Professional Accounting Trainer',
    description: 'Expert in Financial Accounting, Taxation, and Auditing with 5+ years of experience.',
    image: 'images/sir.jpg',
    social: {
      facebook: 'https://www.facebook.com/people/Shubham-Dubey/pfbid025Ws3T38wxgmz15GrGkstDK4cbPVpCbnctYhd2BrDwnmDtcQSa43ubCEuoEqLLu71l/?mibextid=kFxxJD',
      instagram: 'https://www.instagram.com/nameisshubham17?igsh=MXA0Y214YWJzM2kybA%3D%3D',
      linkedin: 'https://www.linkedin.com/in/shubham-dubey-5b8839268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '
    }
  },
  {
    name: 'Saurabh Vishwakarma',
    subject: 'Digital Marketing Trainer',
    description: 'SEO & Social Media Marketing specialist with 2+ years of experience.',
    image: 'images/sir2.jpg',
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Isha Ambalakaran',
    subject: 'Full Stack Development Trainer',
    description: 'Expert in MERN & MEAN Stack with  3+ years of experience.',
    image: 'images/profile1.jpg',
    social: {
      facebook: 'https://www.facebook.com/profile.php?id=61557502006576&mibextid=qi2Omg&rdid=FZLdOCfHEHYQJvEd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FWQ8RN6po%2F%3Fmibextid%3Dqi2Omg#',
      instagram: 'https://www.instagram.com/imeshuu_01?igsh=aGt0d2FncWRlNDZv',
      linkedin: 'https://www.linkedin.com/in/venkteshwari-ambalakaran-b99060286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  }
];

export default function TeacherProfile() {
  return (
    <div className="container my-5" id='profile'>
      <h2 className="text-center mb-4" style={{ color: '#007BFF', fontWeight: 'bold' }}> Our Experienced Teachers</h2>
      <div className="row justify-content-center">
        {teachers.map((teacher, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow-lg border-0 text-center h-100">
              <img src={teacher.image} className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '200px', height: '200px', objectFit: 'cover' }} alt={teacher.name} />
              <div className="card-body">
                <h4 className="card-title text-primary">{teacher.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{teacher.subject}</h6>
                <p className="card-text">{teacher.description}</p>
                <div>
                  <a href={teacher.social.facebook} className="btn btn-outline-primary mx-2" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href={teacher.social.instagram} className="btn btn-outline-danger mx-2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href={teacher.social.linkedin} className="btn btn-outline-info mx-2" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
