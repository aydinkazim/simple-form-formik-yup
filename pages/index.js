import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function HomePage() {
  return (
    <div>
      <div className="container">
        <div className="brand-box">
          <h1>Magic Form</h1>
          <p>Build forms in React without tears 😊</p>
        </div>
        <div className="magic-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              agree: "false",
              favoriteColor: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("İsim boş bırakılamaz!"),
              email: Yup.string()
                .email("geçerli bir email hesabı girilmeli")
                .required("Email boş bırakılamaz"),
              agree: Yup.boolean().required("Koşullar kabul edilmeli"),
              favoriteColor: Yup.string()
                .required("Renk belirtilmeli")
                .oneOf(["red", "blue", "green"]),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                resetForm();
                setSubmitting = false;
              }, 2000);
            }}
          >
            {({
              values,
              errors,
              handleSubmit,
              handleReset,
              handleChange,
              dirty,
              touched,
              isSubmitting,
            }) => (
              <form className="form" onSubmit={handleSubmit}>
                <h3>kaydol</h3>
                <label htmlFor="name">İsim</label>
                <input
                  id="name"
                  type="text"
                  placeholder="name placeholder"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}

                <label htmlFor="email" className="topMargin">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="email placeholder"
                  className="input"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <div className="color-section">
                  <label htmlFor="favoriteColor" className="topMargin">
                    Favori Renk
                  </label>
                  <select
                    name="favoriteColor"
                    id="favoriteColor"
                    value={values.favoriteColor}
                    onChange={handleChange}
                    style={{
                      marginTop: "10px",
                      width: "150px",
                      padding: "10px 15px",
                    }}
                  >
                    <option value="" label="Renk" />
                    <option value="red" label="Kırmızı" />
                    <option value="blue" label="Mavi" />
                    <option value="green" label="Yeşil" />
                  </select>
                </div>

                {errors.favoriteColor && touched.favoriteColor && (
                  <div className="input-feedback">{errors.favoriteColor}</div>
                )}

                <div className="checkbox topMargin">
                  <input
                    id="agree"
                    type="checkbox"
                    value={values.agree}
                    onChange={handleChange}
                  />
                  <label htmlFor="agree" className="checkbox-label">
                    Sözleşme cart curt
                  </label>
                </div>
                {errors.agree && touched.agree && (
                  <div className="input-feedback">{errors.agree}</div>
                )}
                <button type="submit" disabled={!dirty || isSubmitting}>
                  Gönder
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
