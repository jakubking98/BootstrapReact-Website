import decoration from "../images/vertical-decoration-left.svg";
import decoration1 from "../images/vertical-decoration-right.svg";
import details from "../images/details-1.jpg";
import details1 from "../images/details-2.jpg";

export const Details = () => {
  return (
    <>
      <section id="details" className="details my-5 position-relative">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6">
              <h2 className="fw-bold">Evaluation & Deployment</h2>
              <hr className="hr-heading" />
              <p>
                We provide end-to-end evaluation and deployment services to
                ensure a seamless and successful implementation of our video
                production solutions.
              </p>
              <ul className="list-unstyled lh-lg">
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Customized solutions: </strong>We customize our
                    video services to meet your specific business objectives.
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Effortless Integration: </strong> Our team ensures
                    smooth integration of video content into your marketing and
                    communication strategies, minimizing disruptions and
                    maximizing impact.
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img src={details} alt="" className="img-fluid rounded-2" />
            </div>
          </div>
        </div>
        <img
          src={decoration}
          alt=""
          className="vertical-decoration position-absolute d-none d-md-block"
        />
      </section>
      <section className="details-2 my-5 position-relative">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6">
              <img src={details1} alt="" className="img-fluid rounded-2" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">Maintenance & Support</h2>
              <hr className="hr-heading" />
              <p>
                We offer reliable maintenance and support services to keep your
                video production tools running smoothly and without
                interruption. <br />
                <a href="#">Learn more about our support services.</a>
              </p>
              <ul className="list-unstyled lh-lg">
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Proactive Maintenance:</strong> We actively monitor
                    and maintain your video production systems to prevent issues
                    and enhance performance.
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-check text-primary mx-3"></i>
                  <div>
                    <strong>Timely Updates:</strong> We ensure your video tools
                    are updated with the latest features, improvements, and
                    security patches for optimal functionality.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src={decoration1}
          alt=""
          className="vertical-decoration position-absolute d-none d-md-block "
        />
      </section>
    </>
  );
};
