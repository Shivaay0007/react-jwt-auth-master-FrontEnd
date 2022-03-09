import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  FaFacebook,
  FaGooglePlus,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaPrint,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const FooterPagePro = () => {
  return (
    <div className="footer">
      <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Kaushalam Digital
              </h6>
              <p>
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <FaHome /> New York, NY 10012, US
              </p>
              <p>
                <FaMailBulk /> info@gmail.com
              </p>
              <p>
                <FaPhone /> + 01 234 567 88
              </p>
              <p>
                <FaPrint /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="www.shrey.com"> Shrey Patel</a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.facebook.com/Kaushalamdigital/"
                    >
                      <i className="fab fa-facebook-f fa-5x" />
                      <FaFacebook color="blue" size={20} shadow="0px 6px 6px" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://twitter.com/kaushalam"
                    >
                      <i className="fab fa-twitter fa-10x" />
                      <FaTwitter color="skyblue" size={20} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="www.google.com"
                    >
                      <i className="fab fa-google-plus fa-5x" />
                      <FaGooglePlus color="red" size={20} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://in.linkedin.com/company/kaushalam"
                    >
                      <i className="fab fa-linkedin-in fa-5x" />
                      <FaLinkedin color="blue" size={20} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="www.whatsapp.com"
                    >
                      <i className="fab fa-Whats-app fa-5x" />
                      <FaWhatsapp color="green" size={20} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.youtube.com/user/KaushalamInc"
                    >
                      <i className="fab fa-Youtube fa-5x" />
                      <FaYoutube color="red" size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default FooterPagePro;
