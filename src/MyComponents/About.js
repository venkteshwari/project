import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <div>
      <section className='about' id='about'>
        <div className='container mt-5'>
          <div className="row align-items-center">
            <div className="col-sm-6 text-center">
              <img src="images/certificate.jpg" className="img-fluid rounded shadow-lg" style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }} alt="Certificate" />
            </div>
            <div className="col-sm-6 mt-4">
              <p className="text-primary fw-bold">Get To Know Us</p>
              <hr style={{ width: '80px', border: '2px solid #007bff' }} />
              <h3 className='headline mb-4'>Welcome To S.N.INNOTECH COMPUTER INSTITUTE</h3>
              <p style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '1.8' }}>
                S.N.INNOTECH is a Mumbai-based fast-growing computer education institute committed to supplying cutting-edge technology and grooming students to become industry professionals by enriching their knowledge in specific domains along with soft skill training. Within a year, the student is ready to take up any challenges of their job.
              </p>
              <button type="button" className="btn btn-primary d-flex align-items-center">
                Register For Free Demo Lecture <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
