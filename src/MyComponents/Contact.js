import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="container-fluid p-5 mt-3 bg-dark text-light"
      style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}
      id="contact"
    >
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
        {/* About Section */}
        <div className="col">
          <h4 className="text-primary">About</h4>
          <hr className="bg-primary w-25 mx-auto" />
          <p>
            We are committed to providing the best professional education to our
            students and turning them into knowledgeable and successful
            individuals.
          </p>
        </div>

        {/* Location Section */}
        <div className="col">
          <h4 className="text-primary">Location</h4>
          <hr className="bg-primary w-25 mx-auto" />
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.16615616064297!2d72.84109112444523!3d19.427155828180727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a96c5a5c4509%3A0x9fb8d63037474c3e!2sS.N.%20Innotech%20computer%20institute!5e0!3m2!1sen!2sin!4v1709209080574!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="S.N. Innotech Computer Institute Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col">
          <h4 className="text-primary">Contact</h4>
          <hr className="bg-primary w-25 mx-auto" />
          <h4>Nallasopara Center</h4>
          <p>
            Sharda Apartment Building No.2, Shop No.03, Near Balaji Hospital,
            Gaurai Pada, Nallasopara (E) 401209
          </p>
          <p>
            <FaPhoneAlt className="me-2 text-success" />
            <a
              href="tel:+918412837876"
              className="text-light text-decoration-none"
            >
              +91 8412837876
            </a>{" "}
            |
            <a
              href="tel:+918104978045"
              className="text-light text-decoration-none"
            >
              +91 9529089892
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a
              href="https://www.instagram.com/s.n.innotechcomputer"
              className="icon-link"
            >
              <FaInstagram size={20} className="text-light instagram-icon" />
            </a>
            <a
              href="https://www.facebook.com/people/SN-innotech-computer-institute/61553142772640/?mibextid=kFxxJD"
              className="icon-link"
            >
              <FaFacebookF size={20} className="text-light facebook-icon" />
            </a>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fdubey_shub30297"
              className="icon-link"
            >
              <FaTwitter size={20} className="text-light twitter-icon" />
            </a>
          </div>
        </div>
      </div>

      <hr className="bg-light" />
      <p className="text-center mb-0">
        © 2025 S.N.INNOTECH COMPUTER INSTITUTE | All Rights Reserved
      </p>
    </div>
  );
}
