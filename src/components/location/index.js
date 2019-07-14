import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.135667572041!2d121.49091431514269!3d31.189251481480436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27a61ba976799%3A0x41f8d4caa8c45bac!2sMercedes-Benz+Arena%2C+Pudong+Xinqu%2C+Shanghai+Shi%2C+China!5e0!3m2!1sro!2sro!4v1563105540857!5m2!1sro!2sro"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullscreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
