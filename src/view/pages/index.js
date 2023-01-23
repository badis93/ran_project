import React from "react";

const index = () => {
  return (
    <div
      className="toolbar d-flex flex-stack flex-wrap py-4 gap-2"
      id="kt_toolbar"
    >
      <div className="page-title d-flex flex-column align-items-start me-3 gap-1">
        <h1 className="d-flex text-dark fw-bold m-0 fs-3">
          Dashboard
          <span className="h-20px border-gray-400 border-start mx-3" />
          <small className="text-gray-500 fs-7 fw-semibold my-1">
            #XRS-45670{" "}
          </small>
        </h1>
      </div>
      <div className="d-flex align-items-center py-1">
        <a
          href="#"
          className="btn btn-sm btn-flex btn-light px-5 me-2"
        >
          <span className="me-2">
            <span
              className="text-gray-600 fw-semibold me-1"
              id="kt_dashboard_daterangepicker_title"
            >
              Today:
            </span>
            <span
              className="text-info fw-bold"
              id="kt_dashboard_daterangepicker_date"
            >
              Jan 14
            </span>
          </span>
          {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
          <span className="svg-icon svg-icon-4 m-0">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                fill="currentColor"
              />
            </svg>
          </span>
          {/*end::Svg Icon*/}{" "}
        </a>
        <div className="me-2">
          <a
            href="#"
            className="btn btn-sm btn-flex btn-light"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
          >
            <span className="svg-icon svg-icon-5 svg-icon-gray-400 me-1">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Filter
          </a>
          <div
            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
            data-kt-menu="true"
            id="kt_menu_63c31ded69f0c"
          >
            <div className="px-7 py-5">
              <div className="fs-5 text-dark fw-bold">Filter Options</div>
            </div>
            <div className="separator border-gray-200" />
            <div className="px-7 py-5">
              <div className="mb-10">
                <label className="form-label fw-semibold">Status:</label>
                <div>
                  <select
                    className="form-select form-select-solid select2-hidden-accessible"
                    data-kt-select2="true"
                    data-placeholder="Select option"
                    data-dropdown-parent="#kt_menu_63c31ded69f0c"
                    data-allow-clear="true"
                    data-select2-id="select2-data-7-xkp9"
                    tabIndex={-1}
                    aria-hidden="true"
                    data-kt-initialized={1}
                  >
                    <option data-select2-id="select2-data-9-bpqv" />
                    <option value={1}>Approved</option>
                    <option value={2}>Pending</option>
                    <option value={2}>In Process</option>
                    <option value={2}>Rejected</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--bootstrap5"
                    dir="ltr"
                    data-select2-id="select2-data-8-vsf8"
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single form-select form-select-solid"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-rdxo-container"
                        aria-controls="select2-rdxo-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-rdxo-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Select option"
                        >
                          <span className="select2-selection__placeholder">
                            Select option
                          </span>
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="mb-10">
                <label className="form-label fw-semibold">Member Type:</label>
                <div className="d-flex">
                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={1}
                    />
                    <span className="form-check-label">Author</span>
                  </label>
                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={2}
                      defaultChecked="checked"
                    />
                    <span className="form-check-label">Customer</span>
                  </label>
                </div>
              </div>
              <div className="mb-10">
                <label className="form-label fw-semibold">Notifications:</label>
                <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    name="notifications"
                    defaultChecked
                  />
                  <label className="form-check-label">Enabled</label>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="reset"
                  className="btn btn-sm btn-light btn-active-light-primary me-2"
                  data-kt-menu-dismiss="true"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-primary"
                  data-kt-menu-dismiss="true"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="btn btn-sm btn-info"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_app"
        >
          Create{" "}
        </a>
      </div>
    </div>
  );
};

export default index;
