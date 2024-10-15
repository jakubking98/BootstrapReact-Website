export const Contact = () => {
  return (
    <section id="contact" className="contact my-7 position-relative ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold">Get More Information</h2>
            <hr className="hr-heading" />
            <p className="lead">
              We offer cutting-edge video solutions that help businesses excel
              in the digital age.
            </p>
            <ul className="list-unstyled lh-lg">
              <li className="d-flex align-items-center">
                <i className="fas fa-check text-primary mx-3"></i>
                <div>
                  <strong>Tailored Video Services: </strong> Our video
                  productions are customized to align with your brand`s goals,
                  ensuring impactful and engaging content.
                </div>
              </li>
              <li className="d-flex align-items-center">
                <i className="fas fa-check text-primary mx-3"></i>
                <div>
                  <strong>Effortless Integration: </strong> We seamlessly
                  integrate our videos into your existing marketing strategies,
                  maximizing audience reach and enhancing engagement.
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control bg-secondary"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control bg-secondary"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control bg-secondary"
                  placeholder="Enter phone"
                />
              </div>
              <div className="mb-4">
                <select
                  name="interested"
                  id="interested"
                  className="form-control bg-secondary"
                >
                  <option>Interested In...</option>
                  <option value="erp">ERP Solution</option>
                  <option value="crm">CRM Solution</option>
                  <option value="cms">CMS Solution</option>
                  <option value="sfa">SFA Solution</option>
                </select>
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" id="agree-check" />
                <label htmlFor="agree-check" className="form-check-label">
                  I agree to the <a href="privacy.html">Privacy Policy</a>
                </label>
              </div>
              <div className="d-grid gap-2">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
