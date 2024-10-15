import solution1 from "../images/solution-1.jpg";
import solution2 from "../images/solution-2.jpg";
import solution3 from "../images/solution-3.jpg";
import solution4 from "../images/solution-4.jpg";

export const Solutions = () => {
  return (
    <section id="solutions" className="solutions my-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h5>
              <span className="badge bg-primary rounded-0 text-uppercase">
                Solutions
              </span>
            </h5>
            <h2 className="fw-bold">
              Video Production Solutions for Accelerating Business Growth
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-secondary">
              <img src={solution1} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Video Production Solutions
                </h5>
                <p className="card-text">
                  Our video production services streamline your marketing
                  efforts and enhance brand visibility. With expertise in
                  corporate, promotional, and training videos, we help you
                  create impactful content that drives.
                </p>
                <div className="badge bg-primary p-2 text-uppercase">
                  Management
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-secondary">
              <img src={solution2} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Video Marketing Solutions
                </h5>
                <p className="card-text">
                  Our video marketing services help you build stronger audience
                  connections and boost engagement. Create targeted video
                  content, track viewer interactions to maximize brand loyalty
                  and customer retention.
                </p>
                <div className="badge bg-dark p-2 text-uppercase">
                  Marketing
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-secondary">
              <img src={solution3} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Sales Video Solutions</h5>
                <p className="card-text">
                  Our sales video solutions equip your team with compelling
                  content to boost revenue growth. Streamline the sales process,
                  track viewer engagement to close deals more effectively.
                </p>
                <div className="badge bg-primary p-2 text-uppercase">
                  Management
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-secondary">
              <img src={solution4} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Warehouse Video Solutions
                </h5>
                <p className="card-text">
                  Our warehouse video solutions optimize your operations by
                  providing clear training and instructional content. Enhance
                  team efficiency, automate processes, and reduce errors to
                  cost-effective logistics.
                </p>
                <div className="badge bg-dark p-2 text-uppercase">
                  Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
