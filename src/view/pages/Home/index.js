import React from "react";
import HomeImage from "media/home.jpg";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-row flex-column-fluid align-items-stretch">
      {/*begin::Content*/}
      <div className="content flex-row-fluid" id="kt_content">
        {/*begin::About card*/}
        <div className="card">
          {/*begin::Body*/}
          <div className="card-body p-lg-17">
            {/*begin::About*/}
            <div className="mb-18">
              {/*begin::Wrapper*/}
              <div className="mb-10">
                {/*begin::Top*/}
                <div className="text-center mb-15">
                  {/*begin::Title*/}
                  <h3 className="fs-2hx text-dark mb-5">À propos de nous</h3>
                  {/*end::Title*/}
                  {/*begin::Text*/}
                  <div className="fs-5 text-muted fw-semibold">
                   Art design B-M-R est une société de design ouvert le 1 janvier 2023 compris trois spécialité ( Architecture d'intérieur, Design graphique, Centre de formation professionnel ) avec une équipe professionnelle dabs le domaine.
                  </div>
                  {/*end::Text*/}
                </div>
                {/*end::Top*/}
                {/*begin::Overlay*/}
                <div className="overlay">
                  {/*begin::Image*/}
                  <img className="w-100 card-rounded" src={HomeImage} alt="" />
                  {/*end::Image*/}
                  {/*begin::Links*/}
                  <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                    <a
                      onClick={() => navigate("/contact")}
                      className="btn btn-light-primary ms-3"
                    >
                      Contacter nous
                    </a>
                  </div>
                  {/*end::Links*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Wrapper*/}
              {/*begin::Description*/}:
           
              {/*end::Description*/}
            </div>
          </div>
          {/*end::Body*/}
        </div>
        {/*end::About card*/}
      </div>
      {/*end::Content*/}
    </div>
  );
};

export default Index;
