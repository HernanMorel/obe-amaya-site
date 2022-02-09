import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="row ">
          <div className="col-md-3 mb-md-0 mx-auto">
            <div className="card py-3 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Contact</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
