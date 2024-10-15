export const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter py-6 bg-secondary">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-8 offset-md-2 d-flex flex-column align-items-center text-center">
            <h2 className="fw-bold text-primary">Subscribe And Follow</h2>
            <p>
              Stay updated with our latest news! Subscribe to our newsletter for
              valuable insights and follow us on social media for exciting
              updates. Don`t miss out!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
              />
              <button
                className="btn btn-primary text-white rounded-0"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
