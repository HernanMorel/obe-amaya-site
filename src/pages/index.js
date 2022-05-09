import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import logo from '../assets/images/logo-blanco.png';
import demoImage from '../assets/images/demo-image.png';
import demoImage1 from '../assets/images/demo-image 02.jpg';
import bgProfile from '../assets/images/bg-profile-photo.jpg';
import obeHeading from '../assets/images/ObeHeading.png';
{/*take note of the separation of concerns with the compoment imports*/}
const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <img className="img-fluid " src={obeHeading} alt="Obe Logo" />
          <h3 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h3>
          <Scroll type="id" element="about">
            <a href="#about" id="about-button" className="btn btn-light">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="links" className="about-section text-center">
      <div className="container">
        <img src={logo} className="img-fluid" alt="" />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="text-white mb-4 pb-3 font-italic">
              do más, máta miedo
            </h3>
            <div className="mt-0 d-flex justify-content-center" id="social">
              {config.socialLinks.map((social) => {
                const { icon, url } = social;
                return (
                  <a key={url} href={url} target="_blank" rel="noreferrer" className={`mx-2`}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about"  className="projects-section bg-light">
      <div className="container" id="about">
        <div className="row align-items-center no-gutters mb-lg-5" id="obe-info">
          <div className="col-xl-7 col-lg-6">
            <img className="img-fluid mb-3 mb-lg-0" src={bgProfile} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5" >
            <div className="featured-text text-center text-lg-left">
              <p className="text-black-50 mb-0">
                Elvis Obeth Serpas, better known by his stage name Obē Amaya is an
                MC hailing from Aspen hill Maryland, a suburb outside of Washington
                D.C. <br /> <br />
                Obē is a first-generation Latino of Salvadorian descent who was
                heavily influenced by the 90s era of hip hop. Combining English
                and Spanish, Obē delivers a unique sound through his own
                distinctive flow, rhythm and cadence. <br /> <br /> His ultimate
                goal is to convey his creativity, intelligence and emotions
                through his passion for music.
                <br /> <br />
              </p>
            </div>
          </div>
        </div>
        <div id="work">
        <div className="row justify-content-center no-gutters pt-5 mb-5 mb-lg-0">
          <div className="col-lg-6" id="work-section">
            <a
              href="https://www.youtube.com/watch?v=g56Pu2YTVLQ"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-fluid" id="overlay" src={demoImage} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <a
                    href="https://www.youtube.com/watch?v=g56Pu2YTVLQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-white">Mine - Music Video</h4>
                  </a>
                  <p className="mb-0 text-white-50">
                    First single off his highly anticipated sophomore project
                    First Generation.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <a
              href="https://www.youtube.com/watch?v=uY5Lu_RBfQw"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img-fluid" id="overlay" src={demoImage1} alt="" />
            </a>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <a
                    href="https://www.youtube.com/watch?v=uY5Lu_RBfQw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="text-white">Who Shot Ya? - Music Video</h4>
                  </a>
                  <p className="mb-0 text-white-50">
                    Freestyle over the notorious B.I.G - Who Shot Ya?
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
