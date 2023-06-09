import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SplitScreen from "@/Layout/SplitScreen";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "@/Layout/Section";
import InputField from "@/components/InputField";
import TextArea from "@/components/TextArea";

export default function Contact() {
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required(),
  });

  const onSubmit = async (values, { resetForm }, onSubmitProps) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>GeroCare - Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navigation />

      <Header className={"contact"}>
        <h1 className="heading heading--1">Get in touch with us</h1>
        <p>Our office is open from 9am - 5pm week days</p>
      </Header>

      <main>
        <Section sectionName={"contact"}>
          <SplitScreen>
            <div className="contact__details">
              <h5 className="heading heading--5">Contact Information</h5>

              <p>Address: 7a Milverton Road, Ikoyi, Lagos</p>

              <p>
                Email:{" "}
                <a href="mailto:gerocare@gerocare.org">gerocare@gerocare.org</a>
              </p>

              <p>
                Call or WhatsApp: <a href="tel:07014448844">07014448844</a>
              </p>

              <p>
                Give us a call, we endeavour to answer all enquires with 1 hour
                on business days
              </p>
            </div>

            <div className="contact__form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  dirty,
                  errors,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <h6 className="heading heading--6">Send a message</h6>

                    <InputField
                      type={"email"}
                      label={"Full Name:"}
                      name={"fullname"}
                      id={"fullname"}
                      placeholder={"Full name"}
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email}
                    />

                    <InputField
                      type={"email"}
                      label={"Email:"}
                      name={"email"}
                      id={"email"}
                      placeholder={"same@gmail.com"}
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email}
                    />

                    <TextArea
                      id={"message"}
                      name={"message"}
                      label={"Message"}
                    />

                    <button className="btn btn--main btn--full" type="submit">
                      Send Message
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </SplitScreen>
        </Section>
      </main>

      <Footer />
    </>
  );
}
