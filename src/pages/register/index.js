import Head from "next/head";
import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import FormikStepper, { FormikStep } from "@/components/FormikStepper";
import * as Yup from "yup";
import { useContext, useRef, useState } from "react";
import { ProgressContext } from "@/context/progress";
import InputField from "@/components/InputField";
import { FieldArray } from "formik";
import Link from "next/link";
import Image from "next/image";
import SelectField from "@/components/SelectField";
import PaymentMethod from "@/components/PaymentMethod";
import {
  ElderlyHomeVisit,
  HMO,
  OnDemandService,
  TeleConsultation,
} from "@/components/ChoosePlan";

const Register = () => {
  const { progress } = useContext(ProgressContext);
  const [formikState, setFormikState] = useState();
  const [service, setService] = useState();

  const serviceRef = useRef();

  const getFormikState = (values) => {
    setFormikState(values);
  };

  const handleServiceChange = (e) => {
    setService(serviceRef.current.value);
    console.log(serviceRef.current.value);
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    beneficiaryDetails: [
      {
        firstname: "",
        lastname: "",
        dateOfBirth: "",
        gender: "",
        phone: "",
        state: "",
        lga: "",
        address: "",
      },
    ],
    choosePlan: {
      plan: "",
      paymentMethod: "",
    },
  };

  const onSubmit = async (values, { resetForm }, onSubmitProps) => {
    console.log(values);
  };

  const genderOptions = [
    { value: "Select Gender" },
    { value: "Male" },
    { value: "Female" },
    { value: "Others" },
  ];

  const choosePlanOptions = [
    { value: "Select" },
    { value: "Phone Consultation" },
    { value: "Elderly Home Visits" },
    { value: "On Demand Service" },
    { value: "HMO" },
  ];

  const options = [
    {
      id: "paystack",
      paymentMethod: (
        <Image
          src={require("@/assets/img/paystack-2.png").default}
          alt="Paystack Logo"
        />
      ),
    },
    {
      id: "paypal",
      paymentMethod: (
        <Image
          src={require("@/assets/img/paypal-2.png").default}
          alt="PayPal Logo"
        />
      ),
    },
    {
      id: "stripe",
      paymentMethod: (
        <Image
          src={require("@/assets/img/stripe.png").default}
          alt="Stripe Logo"
        />
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>GeroCare - Register</title>
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

      <nav className="register__nav">
        <div className="row">
          <Logo />

          <div className="register__progress">
            <ProgressBar value={progress} />
          </div>

          <div className="register__empty">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </nav>

      <FormikStepper initialValues={initialValues} onSubmit={onSubmit}>
        <FormikStep
          // validationSchema={Yup.object().shape({
          //   firstname: Yup.string().required(),
          //   lastname: Yup.string().required(),
          //   email: Yup.string().email().required(),
          //   password: Yup.string().required(),
          //   confirmPassword: Yup.string().required(),
          // })}
          getFormikState={getFormikState}
        >
          <div className="register__form">
            <div className="register__header">
              <h2 className="heading heading--2">Create an account for free</h2>

              <p>
                It just takes a few minutes to sign up and get fast, easy access
                to care, 24/7. No need for your insurance card yet.
              </p>
            </div>

            <div className="form__flex">
              <InputField
                type={"text"}
                id={"firstname"}
                name={"firstname"}
                label={"First name"}
                placeholder={"First name"}
              />

              <InputField
                type={"text"}
                id={"lastname"}
                name={"lastname"}
                label={"Last name"}
                placeholder={"Last name"}
              />
            </div>

            <InputField
              type={"email"}
              id={"email"}
              name={"email"}
              label={"Email Address"}
              placeholder={"same@gmail.com"}
            />

            <InputField
              type={"password"}
              id={"password"}
              name={"password"}
              label={"Create Password"}
              placeholder={"**************"}
            />

            <InputField
              type={"password"}
              id={"confirmPassword"}
              name={"confirmPassword"}
              label={"Confirm Password"}
              placeholder={"**************"}
            />
          </div>
        </FormikStep>
        <FormikStep getFormikState={getFormikState}>
          <div className="register__form">
            <div className="register__header">
              <h2 className="heading heading--2">Add Beneficiaries</h2>

              <p>
                It just takes a few minutes to sign up and get fast, easy access
                to care, 24/7. No need for your insurance card yet.
              </p>
            </div>

            <FieldArray
              name="beneficiaryDetails"
              render={({ push }) => (
                <>
                  {formikState?.values.beneficiaryDetails &&
                  formikState?.values.beneficiaryDetails.length > 0 ? (
                    <>
                      {formikState?.values.beneficiaryDetails.length > 0 &&
                        formikState?.values.beneficiaryDetails.map(
                          (_, index) => (
                            <>
                              <div key={index}>
                                <div className="form__flex">
                                  <InputField
                                    type={"text"}
                                    id={"beneficiaryFirstname"}
                                    name={`beneficiaryDetails.${index}.firstname`}
                                    label={"Beneficiary's Firstname"}
                                    placeholder={"First name"}
                                  />

                                  <InputField
                                    type={"text"}
                                    id={"beneficiaryLastname"}
                                    name={`beneficiaryDetails.${index}.lastname`}
                                    label={"Beneficiary's Lastname"}
                                    placeholder={"Last name"}
                                  />
                                </div>

                                <div className="form__flex">
                                  <InputField
                                    type={"date"}
                                    id={"beneficiaryDateOfBirth"}
                                    name={`beneficiaryDetails.${index}.dateOfBirth`}
                                    label={"Beneficiary's Date of Birth"}
                                    placeholder={"First name"}
                                  />

                                  <SelectField
                                    options={genderOptions}
                                    id={"beneficiaryGender"}
                                    name={`beneficiaryDetails.${index}.gender`}
                                    label={"Beneficiary's Gender"}
                                  />
                                </div>

                                <InputField
                                  type={"number"}
                                  id={"beneficiaryPhone"}
                                  name={`beneficiaryDetails.${index}.phone`}
                                  label={"Beneficiary's Phone"}
                                  placeholder={"+234"}
                                />

                                <div className="form__flex">
                                  <InputField
                                    type={"text"}
                                    id={"beneficiaryState"}
                                    name={`beneficiaryDetails.${index}.state`}
                                    label={"Beneficiary State"}
                                    placeholder={"State"}
                                  />

                                  <InputField
                                    type={"text"}
                                    id={"beneficiaryLga"}
                                    name={`beneficiaryDetails.${index}.lga`}
                                    label={"Beneficiary LGA"}
                                    placeholder={"LGA"}
                                  />
                                </div>

                                <InputField
                                  type={"text"}
                                  id={"beneficiaryAddress"}
                                  name={`beneficiaryDetails.${index}.address`}
                                  label={"Beneficiary Address"}
                                  placeholder={"Address"}
                                />
                              </div>
                            </>
                          )
                        )}
                      <button
                        onClick={() =>
                          push({
                            firstname: "",
                            lastname: "",
                            dateOfBirth: "",
                            gender: "",
                            phone: "",
                            state: "",
                            lga: "",
                            address: "",
                          })
                        }
                        type="button"
                        className="btn register__text-link"
                      >
                        <Image
                          src={require("@/assets/img/plus_icon.svg")}
                          alt="plus icon"
                        />
                        <span>Add Beneficiary</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() =>
                        push({
                          firstname: "",
                          lastname: "",
                          dateOfBirth: "",
                          gender: "",
                          phone: "",
                          state: "",
                          lga: "",
                          address: "",
                        })
                      }
                      type="button"
                      className="register__text-link"
                    >
                      <Image
                        src={require("@/assets/img/plus_icon.svg")}
                        alt="plus icon"
                      />
                      <span>Add Beneficiary</span>
                    </button>
                  )}
                </>
              )}
            />
          </div>
        </FormikStep>
        <FormikStep getFormikState={getFormikState}>
          <div className="register__form">
            <div className="register__header">
              <h2 className="heading heading--2">Choose a Plan</h2>

              <p>
                It just takes a few minutes to sign up and get fast, easy access
                to care, 24/7. No need for your insurance card yet.
              </p>
            </div>

            <SelectField
              ref={serviceRef}
              options={choosePlanOptions}
              id={"choosePlan"}
              name={`choosePlan`}
              label={"Choose a Service"}
              onChange={handleServiceChange}
            />

            {service === "Phone Consultation" && (
              <div className="register__plan-options">
                {<TeleConsultation />}
              </div>
            )}

            {service === "Elderly Home Visits" && (
              <div className="register__plan-options">
                <ElderlyHomeVisit />
              </div>
            )}

            {service === "On Demand Service" && (
              <div className="register__plan-options">
                <OnDemandService />
              </div>
            )}

            {service === "HMO" && (
              <div className="register__plan-options">
                <HMO />
              </div>
            )}

            <PaymentMethod
              options={options}
              label={"Select Payment Method"}
              name={"paymentMethod"}
            />
          </div>
        </FormikStep>
      </FormikStepper>
    </>
  );
};

export default Register;
