import React, { useState } from "react";
import Tapestry from "media/17-Tapestry.png";
import Peinture from "media/18-Peinture.png";
import PeintureAcrylique from "media/19-PeintureAcrylique.png";
import A323531048_2515732998626167_7042400387093873670_n from "media/323531048_2515732998626167_7042400387093873670_n.png";
import A323574502_712380770520752_2803790892395997295_n from "media/323574502_712380770520752_2803790892395997295_n.png";
import A323969317_654885732986892_5399553969902732815_n from "media/323969317_654885732986892_5399553969902732815_n.png";
import A324043516_2224400624424764_5574057287167405070_n from "media/324043516_2224400624424764_5574057287167405070_n.png";
import A324329427_741408757610935_6399287520350564611_n from "media/324329427_741408757610935_6399287520350564611_n.png";
import A324437324_3455276918131743_7867535437646456653_n from "media/324437324_3455276918131743_7867535437646456653_n.png";
import A324522849_2120450338139986_2875034870210054129_n from "media/324522849_2120450338139986_2875034870210054129_n.png";
import A324592296_560784249268364_1212556063751063595_n from "media/324592296_560784249268364_1212556063751063595_n.png";
import A324991721_3380250478876888_835835657459092799_n from "media/324991721_3380250478876888_835835657459092799_n.png";
import A325037118_540908708099297_7552989961776227042_n from "media/325037118_540908708099297_7552989961776227042_n.png";
import A325554422_556239966539466_6542770988639311778_n from "media/325554422_556239966539466_6542770988639311778_n.png";
import A326090682_1371397063691771_4491830469983843674_n from "media/326090682_1371397063691771_4491830469983843674_n.png";
import { BsEye } from "react-icons/bs";
import ModalView from "./components/ModalView";
const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(Tapestry);
  const handleClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const image_list = [
    A323531048_2515732998626167_7042400387093873670_n,
    A323574502_712380770520752_2803790892395997295_n,
    A323969317_654885732986892_5399553969902732815_n,
    A324043516_2224400624424764_5574057287167405070_n,
    A324329427_741408757610935_6399287520350564611_n,
    A324437324_3455276918131743_7867535437646456653_n,
    A324522849_2120450338139986_2875034870210054129_n,
    A324592296_560784249268364_1212556063751063595_n,
    A324991721_3380250478876888_835835657459092799_n,
    A325037118_540908708099297_7552989961776227042_n,
    A325554422_556239966539466_6542770988639311778_n,
    A326090682_1371397063691771_4491830469983843674_n,
  ];
  return (
    <div className="d-flex flex-row flex-column-fluid align-items-stretch">
      {/*begin::Content*/}
      <div className="content flex-row-fluid" id="kt_content">
        {/*begin::About card*/}
        <div className="card">
          {/*begin::Body*/}
          <div className="card-body p-lg-17">
            <div className="row g-10">
              <div className="col-md-4">
                {/*begin::Hot sales post*/}
                <div className="card-xl-stretch me-md-6">
                  {/*begin::Overlay*/}
                  <a
                    className="d-block overlay cursor-pointer "
                    data-fslightbox="lightbox-hot-sales"
                    onClick={() => handleClick(Tapestry)}
                  >
                    {/*begin::Image*/}
                    <div
                      className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                      style={{
                        backgroundImage: `url(${Tapestry})`,
                      }}
                    ></div>
                    {/*end::Image*/}
                    {/*begin::Action*/}
                    <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                      <i className="bi bi-eye-fill fs-2x text-white" />
                      <span className="fs-2x text-white">
                        <BsEye />
                      </span>
                    </div>
                    {/*end::Action*/}
                  </a>
                  {/*end::Overlay*/}
                  {/*begin::Body*/}
                </div>
              </div>
              <div className="col-md-4">
                {/*begin::Hot sales post*/}
                <div className="card-xl-stretch me-md-6">
                  {/*begin::Overlay*/}
                  <a
                    className="d-block overlay cursor-pointer "
                    data-fslightbox="lightbox-hot-sales"
                    onClick={() => handleClick(Peinture)}
                  >
                    {/*begin::Image*/}
                    <div
                      className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                      style={{
                        backgroundImage: `url(${Peinture})`,
                      }}
                    ></div>
                    {/*end::Image*/}
                    {/*begin::Action*/}
                    <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                      <i className="bi bi-eye-fill fs-2x text-white" />
                      <span className="fs-2x text-white">
                        <BsEye />
                      </span>
                    </div>
                    {/*end::Action*/}
                  </a>
                  {/*end::Overlay*/}
                  {/*begin::Body*/}
                </div>
              </div>
              <div className="col-md-4">
                {/*begin::Hot sales post*/}
                <div className="card-xl-stretch me-md-6">
                  {/*begin::Overlay*/}
                  <a
                    className="d-block overlay cursor-pointer "
                    data-fslightbox="lightbox-hot-sales"
                    onClick={() => handleClick(PeintureAcrylique)}
                  >
                    {/*begin::Image*/}
                    <div
                      className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                      style={{
                        backgroundImage: `url(${PeintureAcrylique})`,
                      }}
                    ></div>
                    {/*end::Image*/}
                    {/*begin::Action*/}
                    <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                      <i className="bi bi-eye-fill fs-2x text-white" />
                      <span className="fs-2x text-white">
                        <BsEye />
                      </span>
                    </div>
                    {/*end::Action*/}
                  </a>
                  {/*end::Overlay*/}
                  {/*begin::Body*/}
                </div>
              </div>
              {image_list.map((item) => {
                return (
                  <div className="col-md-4">
                    {/*begin::Hot sales post*/}
                    <div className="card-xl-stretch me-md-6">
                      {/*begin::Overlay*/}
                      <a
                        className="d-block overlay cursor-pointer "
                        data-fslightbox="lightbox-hot-sales"
                        onClick={() => handleClick(item)}
                      >
                        {/*begin::Image*/}
                        <div
                          className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                          style={{
                            backgroundImage: `url(${item})`,
                          }}
                        ></div>
                        {/*end::Image*/}
                        {/*begin::Action*/}
                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-2x text-white" />
                          <span className="fs-2x text-white">
                            <BsEye />
                          </span>
                        </div>
                        {/*end::Action*/}
                      </a>
                      {/*end::Overlay*/}
                      {/*begin::Body*/}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ModalView
            show={showModal}
            onHide={() => setShowModal(false)}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
