import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

import { useSelector, useDispatch } from "react-redux";
import { updateUser, userInfo } from "../../actions/";
import { profilePicture } from "../../components/Header/consPicture";
import "./style.css";
import { signout } from "../../actions";
const Account = () => {
  const [country, setCountry] = useState("");
  const [userInformation, setUserInfo] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [sexe, setSexe] = useState("");
  const [statut, setStatut] = useState("");
  const auth = useSelector((state) => state.auth);
  const userduPDATE = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      setUserInfo(await dispatch(userInfo(auth.user._id)));
    };
    getUser();
  }, [userInformation]);

  const userUpdate = () => {
    const user = {
      sexe,
      contactNumber,
      country,
      statut,
    };
    if (sexe === "" || country === "" || contactNumber === 0 || statut === "") {
      alert("Please complete and submit your information");
      return;
    }

    dispatch(updateUser(auth.user._id, user)).then(() => {
      setSexe("");
      setContactNumber("");
      setCountry("");
      setStatut("");
    });
  };

  return (
    <Layout>
      <>
        <section className="gray-bg pt-4" style={{ marginTop: "100px" }}>
          <div className="container-fluid">
            <div
              className=" m-0 d-flex "
              style={{ border: "0px solid red", maWidth: "1300px" }}
            >
              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                <div className="dashboard-navbar overlio-top">
                  <div className="d-user-avater">
                    <img
                      src={profilePicture}
                      className="img-fluid rounded"
                      alt=""
                    />
                    <h4>{auth.user.fullName}</h4>
                  </div>

                  <div className="d-navigation">
                    <ul id="metismenu">
                      <li className="active">
                        <a href="/profil">
                          <i className="ti-user"></i>My Profile
                        </a>
                      </li>

                      <li onClick={() => dispatch(signout())}>
                        <a href="/">
                          <i></i>Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                <div className="">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="bredcrumb_wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="/">Home</a>
                          </li>

                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            My Profile
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="_dashboard_content">
                      <div className="_dashboard_content_header">
                        <div className="_dashboard__header_flex">
                          <h4>
                            <i className="fa fa-user mr-1"></i>My Account
                          </h4>
                        </div>
                      </div>

                      <div className="_dashboard_content_body">
                        <div className="d-flex">
                          <div className="col-auto">
                            <div className="custom-file avater_uploads">
                              <label
                                className="custom-file-label"
                                for="customFile"
                              >
                                <i className="fa fa-user"></i>
                              </label>
                            </div>
                          </div>

                          <div className="col">
                            <div className="">
                              <div className="col-xl-6 col-lg-6">
                                <div className="form-group">
                                  <label>First Name:</label>
                                  <label>{auth.user.firstName}</label>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                <div className="form-group">
                                  <label>Last Name:</label>
                                  <label>{auth.user.lastName}</label>
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6">
                                <div className="form-group">
                                  <label>Email:</label>
                                  <label>{auth.user.email}</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_dashboard_content">
                      <div className="_dashboard_content_header">
                        <div className="_dashboard__header_flex">
                          <h4>
                            <i className="ti-lock-open mr-1"></i>Set profitional
                            information
                          </h4>
                        </div>
                      </div>

                      <div className="_dashboard_content_body">
                        <div className="d-flex">
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label>contact Number</label>
                              <input
                                type="number"
                                label="contactNumber"
                                value={contactNumber}
                                onChange={(e) =>
                                  setContactNumber(e.target.value)
                                }
                                className="form-control with-light"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label>country</label>
                              <input
                                type="text"
                                label="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="form-control with-light"
                              />
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12">
                            <div className="form-group">
                              <input
                                id="sec"
                                className="checkbox-custom"
                                name="Security"
                                type="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-save"
                      onClick={userUpdate}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Account;
