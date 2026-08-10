import axios from "axios";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginError, setLoginError] = useState("");
  
  const home = useNavigate();

  return (
    <div className="h-screen bg-gray-800 mt-20">
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white dark:bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{ username: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (values.username.length < 3) {
                errors.username = "wrong username";
              } else if (
                values.password.length < 6 ||
                values.password.length > 16
              ) {
                errors.password = "wrong password";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                axios
                  .post("https://dummyjson.com/auth/login", values)
                  .then((response) => {
                    // console.log(response.data)
                    //2. save accessToken in sessionStorage
                    //3. Navigate to home page
                    

                    sessionStorage.setItem("accessToken", response.data.accessToken);
                    home("/home"); // home page pe bhene ke liye
                  })
                  .catch(() => {
                    // setLoginError(error.response.data.message)
                    setLoginError("Enter valid username and password");
                  });
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <p className="text-sm text-red-700">
                      {errors.username && touched.username && errors.username}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <p className="text-sm text-red-700">
                      {" "}
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                    disabled={isSubmitting}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            )}
          </Formik>
          {loginError && (
            <p className="text-[14px] font-bold text-center mt-5 text-red-800 ">
              {loginError}
            </p>
          )}

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
            Not a member?{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
