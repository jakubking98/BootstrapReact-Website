export const Pricing = () => {
  return (
    <section id="pricing" className="pricing py-6 bg-secondary">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h5>
              <span className="badge bg-primary rounded-0 text-uppercase">
                Pricing
              </span>
            </h5>
            <h2 className="fw-bold">Flexible Pricing Options</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card bg-fun text-center rounded border-primary">
              <div className="card-body">
                <div className="xl-text fw-bold">$99</div>
                <h4 className="card-title text-primary text-uppercase fw-bold mb-5">
                  Standard
                </h4>
                <p>
                  Our standard pricing plan provides a comprehensive set of
                  features for your video production needs.
                </p>
                <ul className="list-unstyled lh-lg mt-5">
                  <li className="text-uppercase fs-5 fw-bold">
                    Subscriber List
                  </li>
                  <li className="text-uppercase fs-5 fw-bold">
                    User Admin Control
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-fun text-center rounded border-primary">
              <div className="card-body">
                <div className="xl-text fw-bold">$199</div>
                <h4 className="card-title text-primary text-uppercase fw-bold mb-5">
                  Advanced
                </h4>
                <p>
                  Unlock enhanced capabilities to elevate your future video
                  solutions and take your content to new heights.
                </p>
                <ul className="list-unstyled lh-lg mt-5">
                  <li className="text-uppercase fs-5 fw-bold">
                    Limited Storage Space
                  </li>
                  <li className="text-uppercase fs-5 fw-bold">
                    Free Cloud Storage
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-fun text-center rounded border-primary">
              <div className="card-body">
                <div className="xl-text fw-bold">$299</div>
                <h4 className="card-title text-primary text-uppercase fw-bold mb-5">
                  Complete
                </h4>
                <p>
                  Our complete pricing plan offers an all-inclusive package with
                  advanced features for maximum impact.
                </p>
                <ul className="list-unstyled lh-lg mt-5">
                  <li className="text-uppercase fs-5 fw-bold">
                    Deployment Protocol
                  </li>
                  <li className="text-uppercase fs-5 fw-bold">
                    Premium Support Pack
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
