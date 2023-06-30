import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsletterSection = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      toast.success("You have subscribed to our newsletter!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      resetForm();
      setSubmitting(false);
    }, 500);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <section className="newsletter-section bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest news and receive exclusive offers!
          </p>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col sm:flex-row justify-center items-center">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="w-full sm:w-auto p-2 border border-gray-300 rounded mb-2 sm:mr-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full sm:ml-2"
              >
                Subscribe
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default NewsletterSection;
