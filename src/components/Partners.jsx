import partnerLogo1 from "../images/partner-logo-1.png";
import partnerLogo2 from "../images/partner-logo-2.png";
import partnerLogo3 from "../images/partner-logo-3.png";
import partnerLogo4 from "../images/partner-logo-4.png";
import partnerLogo5 from "../images/partner-logo-5.png";

export const Partners = () => {
  return (
    <section className="partners py-4 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h4 className="text-center mb-4 text-uppercase text-primary ">
              <b>Our Partners</b>
            </h4>
            <div className="d-flex justify-content-center align-items-center text-center">
              <div>
                <img src={partnerLogo1} alt="" className="mx-4" />
              </div>
              <div className="d-none d-sm-block">
                <img src={partnerLogo2} alt="" className="mx-4" />
              </div>
              <div className="d-none d-md-block">
                <img src={partnerLogo3} alt="" className="mx-4" />
              </div>
              <div className="d-none d-lg-block">
                <img src={partnerLogo4} alt="" className="mx-4" />
              </div>
              <div className="d-none d-lg-block"></div>
              <img src={partnerLogo5} alt="" className="mx-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
