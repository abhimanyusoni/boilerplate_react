import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { setAuth } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { registerUser } from "../../pages/register/redux/registerSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "../Common/FormFields/Input";

const RegisterForm = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  interface MyFormValues {
    username: string;
    password: string;
    confpassword: string;
    phone: any;
  }

  const initialValues: MyFormValues = {
    username: "",
    password: "",
    confpassword: "",
    phone: "",
  };

  const signupSchema = Yup.object().shape({
    username: Yup.string().email().required(),
    password: Yup.string().required(),
    confpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={(values, actions) => {
          if (
            values.username !== "" &&
            values.password !== "" &&
            values.confpassword !== ""
          ) {
            dispatch(registerUser(values));
            toast.success("Registration Successfull.", {
              duration: 1500,
              position: "top-center",
            });
            setTimeout(() => {
              navigate("/");
            }, 2500);
          } else {
            toast.error("Please fill the required fields", {
              duration: 1500,
              position: "top-center",
            });
          }
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%" }}>
            <h2>Sign Up </h2>
            <div className="mt-3">
              <Field
                id="username"
                name="username"
                placeholder="Enter Username"
                style={{ width: "100%" }}
                component={Input}
              />
              {errors.username && touched.username ? (
                <div className="text-danger">{errors.username}</div>
              ) : null}
            </div>
            <div className="mt-3">
              <Field
                id="phone"
                name="phone"
                placeholder="Enter Phone"
                style={{ width: "100%" }}
                component={Input}
              />
            </div>
            <div className="mt-3">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                style={{ width: "100%" }}
                component={Input}
              />
              {errors.password && touched.password ? (
                <div className="text-danger">{errors.password}</div>
              ) : null}
            </div>
            <div className="mt-3 mb-3">
              <Field
                type="password"
                id="confpassword"
                name="confpassword"
                placeholder="Enter Confirm Password"
                style={{ width: "100%" }}
                component={Input}
              />
              {errors.confpassword && touched.confpassword ? (
                <div className="text-danger">{errors.confpassword}</div>
              ) : null}
            </div>
            Already have account? <Link to="/">Login</Link>
            <div className="mt-3">
              <button className="btn btn-danger" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
