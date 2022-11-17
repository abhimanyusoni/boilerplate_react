import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/store";
import toast from "react-hot-toast";
import { fetchUsers } from "../../store/slices/authSlice";
import { handleLoginAuth } from "../../pages/login/redux/loginSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "../Common/FormFields/Input";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userlist = useAppSelector((state) => state.beforeLogin.users);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log(userlist, "userlist");
  }, []);

  interface MyFormValues {
    username: string;
    password: string;
  }

  const initialValues: MyFormValues = { username: "", password: "" };

  const loginSchema = Yup.object().shape({
    username: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <>
      {/* <DemoForm /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          if (values.username !== "" && values.password !== "") {
            dispatch(fetchUsers());
            const findUser = userlist.filter(
              (one: any) => one.username === values.username
            );
            if (
              findUser.length > 0 &&
              findUser[0].password === values.password
            ) {
              console.log(findUser, "findUser");
              toast.success("Login Successfull.", {
                duration: 1500,
                position: "top-center",
              });
              setTimeout(() => {
                dispatch(handleLoginAuth(true));
                navigate("/dashboard");
              }, 2500);
            } else {
              toast.error("Credentials doesn't match.", {
                duration: 1500,
                position: "top-center",
              });
            }
          } else {
            toast.error("Please fill the required fields", {
              duration: 1500,
              position: "top-center",
            });
          }
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form style={{ width: "100%" }}>
            <h2>Login </h2>
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
            <div className="mt-3 mb-3">
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
            Didn't have account? <Link to="/register">Sign up</Link>
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

export default LoginForm;
