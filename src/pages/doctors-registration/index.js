import React, { useState } from "react";
import Head from "next/head";
import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import FormikStepper, { FormikStep } from "@/components/FormikStepper";
import * as Yup from "yup";
import { useContext } from "react";
import { ProgressContext } from "@/context/progress";
import { ModalContext } from "@/context/modal";
import { StatesContext } from "@/context/states";
import InputField from "@/components/InputField";
import Link from "next/link";
import SelectField from "@/components/SelectField";

import banks from "../../../banks.json";
import Checkbox from "@/components/Checkbox";
import Modal from "@/components/Modal";
import Image from "next/image";

const DoctorRegistration = () => {
  const { progress } = useContext(ProgressContext);
  const { open, handleOpen, handleClose } = useContext(ModalContext);

  const {
    nationalityOptions: countryOptions,
    stateOptions,
    lgasOptions,
    setCurrentState,
  } = useContext(StatesContext);

  const [confidentiality, setConfidentiality] = useState(false);
  const [role, setRole] = useState(false);

  const handleConfidentialityOpen = () => {
    setConfidentiality(true);
  };

  const handleConfidentialityClose = () => {
    setConfidentiality(false);
  };

  const handleRoleOpen = () => {
    setRole(true);
  };

  const handleRoleClose = () => {
    setRole(false);
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async (values, { resetForm }, onSubmitProps) => {
    console.log(values);
  };

  const generateYear = () => {
    const years = [{ value: "Select Year" }];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= currentYear - 70; i--) {
      years.push({ value: i });
    }

    return years;
  };

  const bankNames = banks.map((bank) => {
    return { value: bank.name };
  });

  const genderOptions = [
    { value: "Select Gender" },
    { value: "Male" },
    { value: "Female" },
    { value: "Others" },
  ];

  const maritalOptions = [
    { value: "Select status" },
    { value: "Single" },
    { value: "Married" },
    { value: "Others" },
  ];

  const religionOptions = [
    { value: "Select Religion" },
    { value: "Muslim" },
    { value: "Christian" },
    { value: "Others" },
  ];

  const accountTypeOptions = [
    { value: "Select Account Type" },
    { value: "Savings" },
    { value: "Current" },
    { value: "Default" },
  ];

  const yearGraduatedOptions = generateYear();

  const bankOptions = [{ value: "Select Bank" }, ...bankNames];

  return (
    <>
      <Head>
        <title>GeroCare - Doctor's Registration</title>
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
        <FormikStep>
          <div className="register__form">
            <div className="register__header">
              <h2 className="heading heading--2">Register as a Doctor</h2>

              <p className="text-sm">
                If you are a qualified doctor or nurse, or a certified
                healthcare provider looking for an opportunity to help deliver
                quality medical services for the elderly, we welcome you to join
                our growing family of committed medical professionals.
              </p>
            </div>

            <div className="register__terms">
              <p>
                Read and agree with these{" "}
                <Link href={"#"}>terms and conditions</Link> before registering:{" "}
              </p>

              <p>
                <Link
                  href={"#"}
                  onClick={() => {
                    handleConfidentialityOpen();
                    handleOpen();
                  }}
                >
                  1. Confidentiality Agreement
                </Link>
              </p>

              <p>
                <Link
                  href={"#"}
                  onClick={() => {
                    handleRoleOpen();
                    handleOpen();
                  }}
                >
                  2. Role as a Doctor
                </Link>
              </p>
            </div>

            <h5 className="heading heading--5">
              Gerocare Doctor Application Form
            </h5>

            <h6 className="heading heading--6">Bio Data</h6>

            <div className="form__flex">
              <InputField
                type={"text"}
                id={"firstname"}
                name={"firstname"}
                label={"Full name"}
                placeholder={"First name"}
              />

              <InputField
                type={"text"}
                id={"lastname"}
                name={"lastname"}
                label={""}
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
              type={"number"}
              id={"phone"}
              name={"phone"}
              label={"Phone number"}
              placeholder={"081**********"}
            />

            <div className="form__flex">
              <SelectField
                name={"maritalStatus"}
                id="marital-status"
                label="Marital Status"
                options={maritalOptions}
              />

              <SelectField
                name={"gender"}
                id="gender"
                label="Gender"
                options={genderOptions}
              />
            </div>
          </div>
        </FormikStep>
        <FormikStep>
          <div className="register__form">
            <div className="register__header">
              <h2 className="heading heading--2">Register as a Doctor</h2>

              <p className="text-sm">
                If you are a qualified doctor or nurse, or a certified
                healthcare provider looking for an opportunity to help deliver
                quality medical services for the elderly, we welcome you to join
                our growing family of committed medical professionals.
              </p>
            </div>

            <h6 className="heading heading--6">Other Informations</h6>

            <div className="form__flex">
              <SelectField
                name={"religion"}
                id="religion"
                label="Religion"
                options={religionOptions}
              />

              <SelectField
                name={"yearGraduated"}
                id="yearGraduated"
                label="Year Graduated"
                options={yearGraduatedOptions}
              />
            </div>

            <div className="form__flex">
              <InputField
                type={"text"}
                id={"medical-school"}
                name={"medicalSchool"}
                label={"Medical School"}
                placeholder={"Medical School"}
              />

              <InputField
                type={"number"}
                id={"mdcn-number"}
                name={"mdcnNumber"}
                label={"MDCN Number"}
                placeholder={"MDCN Number"}
              />
            </div>

            <div className="form__flex">
              <SelectField
                name={"accountType"}
                id="account-type"
                label="Account Type"
                options={accountTypeOptions}
              />

              <SelectField
                name={"bank"}
                id="bank"
                label="Bank"
                options={bankOptions}
              />
            </div>

            <InputField
              type={"number"}
              id={"account-number"}
              name={"acountNumber"}
              label={"Account Number"}
              placeholder={"Account Number"}
            />

            <div className="form__flex">
              <SelectField
                name={"country"}
                id="country"
                label="Country"
                options={countryOptions}
              />

              <SelectField
                name={"state"}
                id="state"
                label="State"
                options={stateOptions}
                onChange={(e) => {
                  setCurrentState(e.target.value);
                }}
              />
            </div>

            <div className="form__flex">
              <InputField
                type={"text"}
                id={"city"}
                name={"city"}
                label={"City"}
                placeholder={"Enter your city"}
              />

              <SelectField
                name={"lga"}
                id="lga"
                label="L.G.A"
                options={lgasOptions}
              />
            </div>
          </div>
        </FormikStep>
        <FormikStep>
          <div className="register__form">
            <div className="register__header">
              <h2 className="heading heading--2">Register as a Doctor</h2>

              <p className="text-sm">
                If you are a qualified doctor or nurse, or a certified
                healthcare provider looking for an opportunity to help deliver
                quality medical services for the elderly, we welcome you to join
                our growing family of committed medical professionals.
              </p>
            </div>

            <h6 className="heading heading--6">Guarantor Details</h6>

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
              label={"Email"}
              placeholder={"same@gmail.com"}
            />

            <InputField
              type={"number"}
              id={"phone"}
              name={"phone"}
              label={"Phone"}
              placeholder={"081************"}
            />

            <InputField
              type={"text"}
              id={"address"}
              name={"address"}
              label={"Address"}
              placeholder={"Address"}
            />

            <h6 className="heading heading--6">Credentials upload</h6>

            <div className="form__flex">
              <InputField
                type={"file"}
                id={"profile-picture"}
                name={"profilePicture"}
                label={"Profile Picture"}
                placeholder={"Profile Picture"}
              />

              <InputField
                type={"file"}
                id={"nysc-cert"}
                name={"nyscCert"}
                label={"NYSC Certificate"}
                placeholder={"NYSC Certificate"}
              />
            </div>

            <div className="form__flex">
              <InputField
                type={"file"}
                id={"medical-cert"}
                name={"medicalCert"}
                label={"Medical Certificate "}
                placeholder={"Medical Certificate"}
              />

              <InputField
                type={"file"}
                id={"mdcn-current-license"}
                name={"mdcnCurrentLicense"}
                label={"MDCN Current License"}
                placeholder={"MDCN Current License"}
              />
            </div>

            <div className="form__flex">
              <InputField
                type={"file"}
                id={"cv"}
                name={"cv"}
                label={"CV"}
                placeholder={"CV"}
              />

              <InputField
                type={"file"}
                id={"other-relevant-document"}
                name={"otherRelevantDocument"}
                label={"Other Relevant Document"}
                placeholder={"Other Relevant Document"}
              />
            </div>

            <div className="form__term text-center">
              <div className="terms">
                <Checkbox
                  id={"terms"}
                  name={"terms"}
                  label={"Terms and Conditions"}
                  // onChange={handleChange}
                />

                <p>
                  I have read and agree to the following Terms and Conditions
                </p>
              </div>
            </div>
          </div>
        </FormikStep>
      </FormikStepper>

      {open && confidentiality && (
        <Modal>
          {/* <Link
            href={"#"}
            onClick={() => {
              handleConfidentialityClose();
              handleClose();
            }}
          >
            Close Modal
          </Link> */}

          <div className="modal__header">
            <Logo />

            <h5 className="heading heading--5">CONFIDENTIALITY AGREEMENT</h5>

            <Image
              src={require("@/assets/img/modal-close.svg")}
              alt="Modal close icon"
              onClick={() => {
                handleConfidentialityClose();
                handleClose();
              }}
            />
          </div>

          <div className="modal__body">
            <p>
              It is the responsibility of all GeroCare workforce members, as
              defined above, including GeroCare doctors, employees, medical
              staff and house staff, to preserve and protect confidential
              patient, employee and business information.
            </p>

            <p>
              Confidential Patient Care Information includes: Any individually
              identifiable information in possession or derived from a provider
              of health care regarding a patient’s medical history, mental, or
              physical condition or treatment, as well as the patient’s and/or
              their family members records, test results, conversations,
              research records and financial information. Examples include, but
              are not limited to:
            </p>

            <ul>
              <li>
                Physical medical and psychiatric records including electronic,
                paper, photo, video, diagnostic and therapeutic reports,
                laboratory and pathology samples;
              </li>
              <li>Patient insurance and billing records;</li>
              <li>
                Mainframe and department based computerized patient data and
                alphanumeric radio pager messages;
              </li>
              <li>
                Visual observation of patients receiving medical care or
                accessing services; and
              </li>
              <li>Verbal information provided by or about a patient.</li>
            </ul>

            <p>
              Confidential Employee and Business Information include, but are
              not limited to, the following:
            </p>

            <ul>
              <li>Employee home telephone number and address;</li>
              <li>Spouse or other relative names;</li>
              <li>Information related to evaluation of performance;</li>
              <li>
                Disclosure of confidential business information that would cause
                harm to GeroCare
              </li>
            </ul>

            <p>I understand and acknowledge that:</p>

            <ul>
              <li>
                I shall respect and maintain the confidentiality of all
                discussions, deliberations, patient care records and any other
                information generated in connection with individual patient
                care, risk management and/or peer review activities.
              </li>
              <li>
                It is my legal and ethical responsibility to protect the
                privacy, confidentiality and security of all medical records,
                proprietary information and other confidential information
                relating to GeroCare and its affiliates, including business,
                employment and medical information relating to our patients,
                members, employees and health care providers.
              </li>
              <li>
                I shall only access or disseminate patient care information in
                the performance of my assigned duties and where required by or
                permitted to by law, and in a manner which is consistent with
                officially adopted policies of GeroCare, or where no officially
                adopted policy exists, only with the express approval of my
                supervisor or designee. I shall make no voluntary disclosure of
                any discussion, deliberations, patient care records or any other
                patient care, peer review or risk management information, except
                to persons authorized to receive it in the conduct of GeroCare
                affairs.
              </li>
              <li>
                GEROCARE performs audits and reviews patient records in order to
                identify inappropriate access.
              </li>
              <li>
                My user ID is recorded when I access electronic records and that
                I am the only one authorized to use my user ID. Use of my user
                ID is my responsibility whether by me or anyone else. I will
                only access the minimum necessary information to satisfy my job
                role or the need of the request.
              </li>
              <li>
                I agree to discuss confidential information only in the work
                place and only for job related purposes and to not discuss such
                information outside of the work place or within hearing of other
                people who do not have a need to know about the information.
              </li>
              <li>
                I understand that any and all references to HIV testing, such as
                any clinical test or laboratory test used to identify HIV, a
                component of HIV, or antibodies or antigens to HIV, are
                specifically protected under law and unauthorized release of
                confidential information may make me subject to legal and/or
                disciplinary action.
              </li>
              <li>
                I understand that the law specifically protects psychiatric and
                drug abuse records, and that unauthorized release of such
                information may make me subject to legal and/or disciplinary
                action.
              </li>
              <li>
                My obligation to safeguard patient confidentiality continues
                after I am no longer a GEROCARE workforce member.
              </li>
            </ul>
          </div>
        </Modal>
      )}

      {open && role && (
        <Modal>
          <div className="modal__header">
            <Logo />

            <h5 className="heading heading--5">ROLE OF A GEROCARE DOCTOR</h5>

            <Image
              src={require("@/assets/img/modal-close.svg")}
              alt="Modal close icon"
              onClick={() => {
                handleRoleClose();
                handleClose();
              }}
            />
          </div>

          <div className="modal__body">
            <p>REPORTS TO - Medical Services Team Lead</p>

            <p>
              JOB PURPOSE:A GeroCare doctors primary purpose is review
              clients/patients assigned to them at least once a month in their
              homes as a form of preventive care to help them maintain a healthy
              state or prevent deteriorations in their health conditions if any.
            </p>

            <p>Duties and responsibilities:</p>

            <ul>
              <li>
                Make use of the GeroCare Mobile Application while seeing
                clients/patients
              </li>
              <li>
                To submit patient reports within 6 hours of conclusion of the
                visit.
              </li>
              <li>
                To spend a minimum of 30 minutes with each client/patient on
                each visit
              </li>
              <li>
                Visit clients/patients assigned to them at least once a month
                depending on the patient subscription
              </li>
              <li>
                To make requests for drugs, tests and any other needs of the
                patient via the GeroCare doctor app
              </li>
              <li>
                Be available for telephone or whatsapp consultations for
                assigned patients in between regular visits
              </li>
              <li>
                To adhere to suggestions provided by the quality assurance team
              </li>
              <li>
                To participate in update courses and quality assurance
                activities
              </li>
            </ul>

            <p>Qualifications:</p>

            <ul>
              <li> Degree in Medicine and Surgery</li>
              <li>Post NYSC</li>
              <li>GeroCare Certification</li>
            </ul>

            <p>Working conditions</p>

            <ul>
              <li>
                Scheduled home visits that are convenient for both Client and
                Doctor
              </li>
              <li>Number of visits dependent on patient subscription</li>
              <li>Minimum of one visit per month</li>
              <li>
                Responsible for getting yourself to and from the home of the
                client/patient
              </li>
              <li>
                Doctors would be paid ₦5,000 per visit to a single patient in
                one house or ₦8,000 to a couple in one house
              </li>
              <li>
                Doctor would be paid 10,000 for urgent visits requested to be
                done within 24 hours.
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DoctorRegistration;
