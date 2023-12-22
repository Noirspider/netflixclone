import React from "react";
import "../style.css";

const MyFooter = () => {
  return (
    <footer style={{ backgroundColor: "black", color: "white" }} className="mt-5  text-center">
      <div className="social-media-icons mb-2 text-white">
        <i className="bi bi-facebook icon-spacing"></i>
        <i className="bi bi-instagram icon-spacing"></i>
        <i className="bi bi-twitter-x icon-spacing"></i>
        <i className="bi bi-youtube icon-spacing"></i>
      </div>

      <div className="footer-content row justify-content-center">
        <div className="col-12 col-sm-6 col-md-3 footer-links text-center">
          <ul>
            <li>
              <a href="#">Audio and Subtitles</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3 footer-links text-center">
          <ul>
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3 footer-links text-center ">
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3 footer-links text-center">
          <ul>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">© 1997-2023 Netflix, Inc.</div>
    </footer>
  );
};

export default MyFooter;
