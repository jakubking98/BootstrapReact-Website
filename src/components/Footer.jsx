export const Footer = () => {
  return (
    <footer className="footer bg-fun py-6">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <h6>About King</h6>
            <p>
              King is a dedicated software solutions company focused on
              providing exceptional services to our clients. We are committed to
              delivering innovative, customized solutions tailored to meet your
              unique business needs.
            </p>
          </div>
          <div className="col-md-4 my-3">
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>
                Important: <br /> <a href="#">Terms & Conditions</a> ,
                <a href="privacy.html">Privacy Policy</a>
              </li>
              <li>
                Useful: <br /> <a href="index.html#expertise">Expertise</a> ,
                <a href="index.html#pricing">Pricing</a> ,
                <a href="index.html#newsletter">Newsletter</a>
              </li>
              <li>
                Menu: <br /> <a href="index.html">Home</a> ,
                <a href="index.html#details">Details</a> ,
                <a href="index.html#solutions">Solutions</a> ,
                <a href="index.html#projects">Projects</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 my-3 text-center">
            <div className="mb-4">
              <a href="#" className="text-decoration-none">
                <i className="fab fa-facebook fa-3x text-primary mx-2"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-twitter fa-3x text-primary mx-2"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-instagram fa-3x text-primary mx-2"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="fab fa-pinterest fa-3x text-primary mx-2"></i>
              </a>
            </div>
            <p className="text-center">
              We would love to hear from you
              <a href="mailto:contact@site.com">
                <br />
                <strong>contact@site.com</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
