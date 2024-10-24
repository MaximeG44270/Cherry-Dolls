import React from "react";
import "./home-gallery.css";

const HomeGallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container-gallery px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="texte-h1-home-gallery">
            Gallery photo CHEERY !!
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={`https://dummyimage.com/60${index}x36${index}`}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="texte-h1-home-gallery-category">
                    {index === 1
                      ? "Shooting Stars"
                      : index === 2
                      ? "The Catalyzer"
                      : index === 3
                      ? "The 400 Blows"
                      : index === 4
                      ? "Neptune"
                      : index === 5
                      ? "Holden Caulfield"
                      : "Alper Kamu"}
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
