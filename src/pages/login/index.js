import Head from "next/head";
import Logo from "@/components/Logo";
import InputField from "@/components/InputField";
import { Formik } from "formik";
import * as Yup from "Yup";
import Link from "next/link";
import Image from "next/image";
import Checkbox from "@/components/Checkbox";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const onSubmit = (values, { reform }, onSubmitProps) => {};

  return (
    <>
      <Head>
        <title>GeroCare - Login</title>
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

      <div className="auth__container">
        <div className="auth__left"></div>
        <div className="auth__right">
          <Logo />

          <header className="auth__header">
            <h4 className="heading heading--4">Log In</h4>
            <p>Login to start your session</p>
          </header>

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
              <form className="form" onSubmit={handleSubmit}>
                <InputField
                  type={"email"}
                  label={"Email:"}
                  name={"email"}
                  id={"email"}
                  placeholder={"Enter Email Address"}
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <InputField
                  type={"password"}
                  label={"Password:"}
                  name={"password"}
                  id={"password"}
                  placeholder={"*******"}
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />

                <button type="submit" className="btn btn--main btn--full">
                  Sign In
                </button>

                <div className="inputfield__grp">
                  <Checkbox
                    id={"remember"}
                    name={"remember"}
                    label={"Remember Me"}
                    onChange={handleChange}
                  />

                  <Link className="form__link" href={"/password/forgot"}>
                    Forgot Password
                  </Link>
                </div>

                <div className="divider uti-mt-xxl uti-mb-xxl"></div>

                <div className="inputfield__grp inputfield--center inputfield--dir-column">
                  <p className="uti-mb-sm">
                    Don't have an account?{" "}
                    <Link className="form__link" href={"/register"}>
                      Sign Up
                    </Link>{" "}
                  </p>

                  <button className="btn btn--outline btn--full uti-mb-sm">
                    <Image
                      src={require("@/assets/img/linkedIn.svg")}
                      alt="LinkedIn Icon"
                    />
                    Sign Up with LinkedIn
                  </button>

                  <button className="btn btn--outline btn--full">
                    <Image
                      src={require("@/assets/img/google-svg.svg")}
                      alt="LinkedIn Icon"
                    />
                    Sign Up with Google
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
