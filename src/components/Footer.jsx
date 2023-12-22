import React from "react";
import "../style.css";

const MyFooter = () => {
  return (
    <footer style={{ backgroundColor: "black" }} className="mt-5 text-center">
      <div className="social-media-icons mb-2">
        <i className="fa fa-facebook footer-icon text-white"></i>
        <i className="fa fa-instagram footer-icon"></i>
        <i className="fa fa-twitter footer-icon"></i>
        <i className="fa fa-youtube footer-icon"></i>
      </div>

      <div className="footer-content row justify-content-center">
        <div className="col-12 col-sm-6 col-md-3 footer-links">
          <p>
            <button>Audio and Subtitles</button>
          </p>
          <p>
            <button>Media Center</button>
          </p>
          <p>
            <button>Privacy</button>
          </p>
          <p>
            <button>Contact us</button>
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 footer-links">
          <p>
            <button>Audio Description</button>
          </p>
          <p>
            <button>Investor Relations</button>
          </p>
          <p>
            <button>Legal Notices</button>
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 footer-links">
          <p>
            <button>Help Center</button>
          </p>
          <p>
            <button>Jobs</button>
          </p>
          <p>
            <button>Cookie Preferences</button>
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 footer-links">
          <p>
            <button>Gift Cards</button>
          </p>
          <p>
            <button>Terms of Use</button>
          </p>
          <p>
            <button>Corporate Information</button>
          </p>
        </div>
      </div>

      <div className="copyright">© 1997-2023 Netflix, Inc.</div>
    </footer>
  );
};

export default MyFooter;
