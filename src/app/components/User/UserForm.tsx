import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "../Common/FormFields/Input";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AfterLogin from "../../layouts/Private/AfterLogin";
import SelectMenu from "../Common/FormFields/SelectMenu";
import DatePicker from "../Common/FormFields/DatePicker";
import Checkbox from "../Common/FormFields/Checkbox";
import RadioButton from "../Common/FormFields/RadioButton";
import TextArea from "../Common/FormFields/TextArea";
import UploadFiles from "../Common/FormFields/UploadFiles";

interface File {
  name: string;
  size: string;
  type: string;
  previewUrl: string;
}

interface MyFormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  dob: string;
  hobbies: string[];
  gender: string;
  message: string;
  files: File[];
}

const UserForm = () => {
  const location = useLocation();
  const values: any = location.state;
  const initialValues: MyFormValues = {
    firstname: values ? values.first_name : "",
    lastname: values ? values.last_name : "",
    email: values ? values.email : "",
    phone: "",
    country: "",
    state: "",
    city: "",
    dob: "",
    hobbies: [],
    gender: "",
    message: "",
    files: [{ name: "", size: "", type: "", previewUrl: "" }],
  };

  const [fileVal, setFileVal] = useState(initialValues.files);

  const userSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.number().required(),
    country: Yup.string().required(),
    dob: Yup.string().required(),
    gender: Yup.string().required(),
  });

  const hobbies = ["Cricket", "Football", "Reading", "Painting", "Writing"];

  const genders = ["Male", "Female", "Others"];

  const handleFileUpload = (val: any) => {
    console.log(val.target.files[0], "uploadvals");
    setFileVal([
      {
        name: val.target.files[0].name,
        type: val.target.files[0].type,
        size: val.target.files[0].size,
        previewUrl: URL.createObjectURL(val.target.files[0]),
      },
    ]);
  };

  useEffect(() => {
    console.log(fileVal, "fileVal");
  }, [fileVal]);

  return (
    <>
      <div className="container mt-2">
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(values, actions) => {
            if (values.firstname !== "" && values.email !== "") {
              console.log(values, "values");
              alert(JSON.stringify(values, null, 2));
            }
          }}
        >
          {({ errors, touched, handleChange, setFieldValue }) => (
            <Form style={{ width: "100%" }}>
              <h2>{values ? "Update" : "Create"} User </h2>
              <div className="row">
                <div className="mt-3 col-md-6">
                  <Field
                    id="firstname"
                    name="firstname"
                    placeholder="Enter Firstname"
                    style={{ width: "100%" }}
                    component={Input}
                    label="Enter First Name"
                    onChange={handleChange}
                  />
                  {errors.firstname && touched.firstname ? (
                    <div className="text-danger">{errors.firstname}</div>
                  ) : null}
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    id="lastname"
                    name="lastname"
                    placeholder="Enter Lastname"
                    style={{ width: "100%" }}
                    component={Input}
                    label="Enter Last Name"
                    onChange={handleChange}
                  />
                  {errors.lastname && touched.lastname ? (
                    <div className="text-danger">{errors.lastname}</div>
                  ) : null}
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    id="email"
                    name="email"
                    placeholder="Enter Email ID"
                    style={{ width: "100%" }}
                    component={Input}
                    label="Enter Email ID"
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-danger">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    style={{ width: "100%" }}
                    component={Input}
                    label="Enter Phone Number"
                    type="number"
                    onChange={handleChange}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="text-danger">{errors.phone}</div>
                  ) : null}
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    name="country"
                    options={["Select", "two", "three"]}
                    component={SelectMenu}
                    label="Select Your Country"
                    onChange={handleChange}
                  />
                  {errors.country && touched.country ? (
                    <div className="text-danger">{errors.country}</div>
                  ) : null}
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    name="state"
                    options={["Select", "two", "three"]}
                    component={SelectMenu}
                    label="Select Your State"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    name="city"
                    options={["Select", "two", "three"]}
                    component={SelectMenu}
                    label="Select Your City"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    name="dob"
                    dateFormat="dd/MM/yyyy"
                    component={DatePicker}
                    placeholderText="Select Date"
                    label="Date of Birth"
                    onChange={(date: any) => setFieldValue("dob", date)}
                  />
                  {errors.dob && touched.dob ? (
                    <div className="text-danger">{errors.dob}</div>
                  ) : null}
                </div>
                <div className="mt-3 col-md-6">
                  <p className="mb-2 form_label">Selct Your Hobbies</p>
                  <div role="group" aria-labelledby="checkbox-group">
                    <div className="d-flex align-items-center flex-wrap">
                      {hobbies.map((one) => {
                        return (
                          <div className="me-4 my-1">
                            <Field
                              name="hobbies"
                              id={one}
                              component={Checkbox}
                              label={one}
                              value={one}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="mt-3 col-md-6">
                  <p className="mb-2 form_label">Selct Your Gender</p>
                  <div role="group" aria-labelledby="radio-group">
                    <div className="d-flex align-items-center flex-wrap">
                      {genders.map((one) => {
                        return (
                          <div className="me-4 my-1">
                            <Field
                              name="gender"
                              id={one}
                              component={RadioButton}
                              label={one}
                              value={one}
                            />
                          </div>
                        );
                      })}
                    </div>
                    {errors.gender && touched.gender ? (
                      <div className="text-danger">{errors.gender}</div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    name="message"
                    component={TextArea}
                    placeholder="Type here.."
                    label="Message me"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3 col-md-6">
                  <Field
                    name="files[0].name"
                    component={UploadFiles}
                    onChange={(e: any) => {
                      handleFileUpload(e);
                      setFieldValue("files", e.target.files[0]);
                    }}
                    accept="image/*"
                    showUrl={fileVal[0].previewUrl}
                    label="Select Files"
                    removeImage={() =>
                      setFileVal([
                        { name: "", size: "", type: "", previewUrl: "" },
                      ])
                    }
                  />
                </div>
                <div className="mt-3 col-md-6">
                  <button className="btn btn-danger" type="submit">
                    {values ? "Update" : "Create"} User
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UserForm;
