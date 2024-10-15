import project1 from "../images/project-1.jpg";
import project2 from "../images/project-2.jpg";
import project3 from "../images/project-3.jpg";
import project4 from "../images/project-4.jpg";
import project5 from "../images/project-5.jpg";
import project6 from "../images/project-6.jpg";

export const Projects = () => {
  return (
    <>
      <section id="projects" className="projects my-6">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <h5>
                <span className="badge bg-primary rounded-0 text-uppercase">
                  Projects
                </span>
              </h5>
              <h2 className="fw-bold">Projects We Are Proud Of</h2>
              <p>
                We take pride in our successful projects and the value they
                bring to our clients. With our expertise and dedication, we have
                delivered exceptional results. Here are some highlights
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary border-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal1">
                  <img src={project1} alt="" className="card-img-top " />
                  <div className="card-body">
                    <p>
                      <strong>Orkla Foods</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary border-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal2">
                  <img src={project2} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>First Bank</strong> - Donec bibeum mollis liga sit
                      amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary border-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal3">
                  <img src={project3} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>All Sweets</strong> - Donec bibeum mollis liga sit
                      amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary border-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal4">
                  <img src={project4} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Fast Courier</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary border-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal5">
                  <img src={project5} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Lyra Market</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra noris
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary border-primary">
                <a data-bs-toggle="modal" data-bs-target="#modal6">
                  <img src={project6} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p>
                      <strong>Monday Stores</strong> - Donec bibeum mollis liga
                      sit amet pulvinar sed viverra
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="project-modals">
        <div id="modal1" className="modal fade">
          <div className="modal-dialog modal-lg mt-7">
            <div className="modal-content bg-secondary p-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={project1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>Orkla Foods</h3>
                  <p>
                    Aliquam at accumsan nibh. Praesent pretium ut tortor ac
                    commodo. Integer semper quam at rutrum interdum. Mauris eu
                    diam ac urna laoreet mollis et
                  </p>
                  <p>
                    Praesent lacus tortor, facilisis non enim eu, luctus semper
                    velit. Curabitur faucibus diam in lectus.
                  </p>
                  <a href="#" className="btn btn-primary text-white">
                    Details
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="modal2" className="modal fade">
          <div className="modal-dialog modal-lg mt-7">
            <div className="modal-content bg-secondary p-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={project2} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>First Bank</h3>
                  <p>
                    Aliquam at accumsan nibh. Praesent pretium ut tortor ac
                    commodo. Integer semper quam at rutrum interdum. Mauris eu
                    diam ac urna laoreet mollis et
                  </p>
                  <p>
                    Praesent lacus tortor, facilisis non enim eu, luctus semper
                    velit. Curabitur faucibus diam in lectus.
                  </p>
                  <a href="#" className="btn btn-primary text-white">
                    Details
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="modal3" className="modal fade">
          <div className="modal-dialog modal-lg mt-7">
            <div className="modal-content bg-secondary p-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={project3} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>All Sweets</h3>
                  <p>
                    Aliquam at accumsan nibh. Praesent pretium ut tortor ac
                    commodo. Integer semper quam at rutrum interdum. Mauris eu
                    diam ac urna laoreet mollis et
                  </p>
                  <p>
                    Praesent lacus tortor, facilisis non enim eu, luctus semper
                    velit. Curabitur faucibus diam in lectus.
                  </p>
                  <a href="#" className="btn btn-primary text-white">
                    Details
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="modal4" className="modal fade">
          <div className="modal-dialog modal-lg mt-7">
            <div className="modal-content bg-secondary p-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={project4} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>Fast Courier</h3>
                  <p>
                    Aliquam at accumsan nibh. Praesent pretium ut tortor ac
                    commodo. Integer semper quam at rutrum interdum. Mauris eu
                    diam ac urna laoreet mollis et
                  </p>
                  <p>
                    Praesent lacus tortor, facilisis non enim eu, luctus semper
                    velit. Curabitur faucibus diam in lectus.
                  </p>
                  <a href="#" className="btn btn-primary text-white">
                    Details
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="modal5" className="modal fade">
          <div className="modal-dialog modal-lg mt-7">
            <div className="modal-content bg-secondary p-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={project5} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>Lyra Market</h3>
                  <p>
                    Aliquam at accumsan nibh. Praesent pretium ut tortor ac
                    commodo. Integer semper quam at rutrum interdum. Mauris eu
                    diam ac urna laoreet mollis et
                  </p>
                  <p>
                    Praesent lacus tortor, facilisis non enim eu, luctus semper
                    velit. Curabitur faucibus diam in lectus.
                  </p>
                  <a href="#" className="btn btn-primary text-white">
                    Details
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="modal6" className="modal fade">
          <div className="modal-dialog modal-lg mt-7">
            <div className="modal-content bg-secondary p-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={project6} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>Monday Stores</h3>
                  <p>
                    Aliquam at accumsan nibh. Praesent pretium ut tortor ac
                    commodo. Integer semper quam at rutrum interdum. Mauris eu
                    diam ac urna laoreet mollis et
                  </p>
                  <p>
                    Praesent lacus tortor, facilisis non enim eu, luctus semper
                    velit. Curabitur faucibus diam in lectus.
                  </p>
                  <a href="#" className="btn btn-primary text-white">
                    Details
                  </a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
