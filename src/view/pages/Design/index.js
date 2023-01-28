import React from "react";

const index = () => {
  return (
    <div className="d-flex flex-row flex-column-fluid align-items-stretch">
      {/*begin::Content*/}
      <div className="content flex-row-fluid" id="kt_content">
        {/*begin::Card*/}
        <div className="card">
          {/*begin::Card body*/}
          <div className="card-body">
            {/*begin::Heading*/}
            <div className="card-px text-center pt-15 pb-15">
              {/*begin::Title*/}
              <h2 className="fs-2x fw-bold mb-0">En cours ...</h2>
              {/*end::Title*/}
              {/*begin::Description*/}
              {/*end::Description*/}
              {/*begin::Action*/}
              {/*end::Action*/}
            </div>
            {/*end::Heading*/}
            {/*begin::Illustration*/}
            <div className="text-center pb-15 px-5">
              <img
                alt=""
                className="mw-100 h-200px h-sm-325px"
              />
            </div>
            {/*end::Illustration*/}
          </div>
          {/*end::Card body*/}
        </div>
        {/*end::Card*/}{" "}
      </div>
      {/*end::Content*/}
    </div>
  );
};

export default index;
