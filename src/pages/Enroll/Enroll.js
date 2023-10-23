import React from "react";
import { Header, Footer } from "../../components";

const Enroll = () => {
  return (
    <>
      <div className="container max-w-3xl mx-auto mt-16 text-slate-700">
        <Header />
        <div className=" flex justify-center">
          <iframe
            title="reg-form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfQY_3FN3XqA8A4PdjieL7fP19jSVcVwFrhWgSBiODr1fECPA/viewform?embedded=true"
            width="640"
            height="2800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Enroll;
