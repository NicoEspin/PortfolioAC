import React from "react";
import { GrLinkedin, GrInstagram } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/antt.design/?igshid=NzZlODBkYWE4Ng%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram className="h-8 w-12" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anttonella-catalano-872439258/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedin className="h-8 w-12" />
      </a>
    </div>
  );
};

export default SocialMedia;
