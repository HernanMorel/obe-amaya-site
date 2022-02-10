import React from 'react';

export default function Subscribe() {
  return (
    <section id="contact" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Subscribe to receive updates</h2>

            <form
              className="form-inline d-flex"
              action="https://formsubmit.co/obemusic301@gmail.com"
              method="POST"
            >
              <input
                type="email"
                name="email"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                placeholder="Enter email address..."
                name="referrer" 
                content="origin"
                required
              />
              <button type="submit" className="btn btn-primary mx-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
