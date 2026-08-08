import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

export default function AddData() {

    // const emt=()=>{
    //    let inp=document.querySelectorAll('input')
    //    console.log(inp);
       
    //     for(let i of inp){
    //         console.log(i.value);
            
    //         i.value=""
    //     }
    // }

  // add the validation from yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Product name must be at least 3 characters")
      .required("Product name is required"),

    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),

    image: Yup.string()
      .url("Please enter a valid image URL")
      .required("Image URL is required"),

    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be greater than 0")
      .required("Price is required"),
  });
  return (
    <div className="h-screen bg-gray-900">
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
            Add Product here
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{ name: "", description: "", image: "", price: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm,setSubmitting }) => {
              setTimeout(() => {
                axios.post("https://6a74210e15e0453fe1b4664a.mockapi.io/Car",values)
                
                setSubmitting(false);
              }, 400);
              resetForm()
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
            }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    Name of product
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <p className="text-sm text-red-800">
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Description
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="description"
                      name="description"
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    <p className="text-sm text-red-800">
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Image
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="image"
                      name="image"
                      type="url"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                    />
                    <p className="text-sm text-red-800">
                      {errors.image && touched.image && errors.image}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Price
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="price"
                      name="price"
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    <p className="text-sm text-red-800">
                      {errors.price && touched.price && errors.price}
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                    disabled={isSubmitting}
                  >
                    Send data
                  </button>
                </div>
              </form>
            )}
          </Formik>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
            Not a member?{" "}
            
          </p>
        </div>
      </div>
    </div>
  );
}
