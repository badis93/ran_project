import React from "react";

const index = () => {
  return (
    <div className="d-flex flex-row flex-column-fluid align-items-stretch">
      <div className="content flex-row-fluid" id="kt_content">
        <div className="card ">
          <div className="card-body p-lg-17">
            <div className="row g-5 mb-5 ">
              <div className="col-sm-6">
                <div className="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-100">
                  <h1 className="text-dark fw-bold my-5">Mobile</h1>
                  <div className="text-gray-700 fw-semibold fs-2">
                    +216 92535174
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-100">
                  <h1 className="text-dark fw-bold my-5">Email</h1>
                  <div className="text-gray-700 fw-semibold fs-2">
                    raniaboumessouer@gmail.com
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-100">
                  <span className="svg-icon svg-icon-3tx svg-icon-primary">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <h1 className="text-dark fw-bold my-5">Adresse</h1>
                  <div className="text-gray-700 fs-3 fw-semibold">
                    Rue Sidi Bouakkazine, Houmet Souk Djerba, Medenine, Tunisia,
                    4180
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
