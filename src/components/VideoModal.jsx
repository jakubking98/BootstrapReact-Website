import { useState, useEffect, useRef } from "react";
import videoPreview from "../images/video-preview.jpg";

export const VideoModal = () => {
  const [videoSrc, setVideoSrc] = useState(""); // State to hold video URL
  const videoRef = useRef(null); // Ref for the iframe element

  // Handle modal opening and set video source with autoplay
  useEffect(() => {
    const videoModal = document.getElementById("videoModal");

    const handleModalShow = () => {
      const finalSrc = `${videoSrc}?autoplay=1&modestbranding=1&rel=0`;
      if (videoRef.current) {
        videoRef.current.setAttribute("src", finalSrc);
        console.log("Modal shown. Video src set to:", finalSrc);
      }
    };

    const handleModalHide = () => {
      if (videoRef.current) {
        videoRef.current.setAttribute("src", "");
        console.log("Modal hidden. Video src reset.");
      }
    };

    // Listen for Bootstrap modal events
    videoModal.addEventListener("shown.bs.modal", handleModalShow);
    videoModal.addEventListener("hide.bs.modal", handleModalHide);

    return () => {
      // Cleanup event listeners
      videoModal.removeEventListener("shown.bs.modal", handleModalShow);
      videoModal.removeEventListener("hide.bs.modal", handleModalHide);
    };
  }, [videoSrc]); // Run effect when videoSrc changes

  // Handle video button click to set video URL
  const handleVideoClick = (e) => {
    const videoUrl = e.currentTarget.getAttribute("data-bs-src");
    setVideoSrc(videoUrl);
    console.log("Video button clicked. Video URL set to:", videoUrl);
  };

  return (
    <section className="video my-6">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="position-relative">
              <img
                src={videoPreview}
                alt="Podgląd wideo"
                className="img-fluid"
              />
              <a
                className="video-btn"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                data-bs-src="https://www.youtube.com/embed/b8I-7Wk_Vbc?si=3kTAJuzAheRvq6yt"
                onClick={handleVideoClick}
              >
                <span className="video-play-button">
                  <span></span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="videoModal"
          tabIndex="-1"
          aria-labelledby="videoModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Video Points */}
        <div className="row video-points px-6 mt-5">
          <div className="col-lg-4">
            <h4 className="fw-bold">10 Years Of Experience</h4>
            <p>
              With over a decade of experience, we have gained valuable insights
              and expertise to create high-quality video production solutions.
            </p>
          </div>
          <div className="col-lg-4">
            <h4 className="fw-bold">Enduring Partnerships</h4>
            <p>
              We focus on building lasting partnerships with our clients,
              establishing long-term relationships founded on trust and
              collaboration.
            </p>
          </div>
          <div className="col-lg-4">
            <h4 className="fw-bold">Skilled Capable Team</h4>
            <p>
              Our team comprises skilled and dedicated professionals who are
              passionate about delivering exceptional video content and ensuring
              client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
