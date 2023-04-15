import css from "../LoginPage/LoginPage.module.css";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import { LoginSchema } from "../../Components/Schema";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [visible, setVisible] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    alert(JSON.stringify(values));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  // console.log(errors);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.form}>
          <div className={css.head}>
            <p>
              Welcome to <span>Renty</span>
            </p>

            <p>
              No Account? <br /> <Link>Sign Up</Link>
            </p>
          </div>

          <div className={css.intro}>Sign in</div>

          <form className={css.inputs} onSubmit={handleSubmit}>
            <div className={css.email}>
              <label htmlFor="email">Enter your email address</label>
              <input
                type="email"
                name="email"
                placeholder="email address"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  errors.email && touched.email ? css.input_error : null
                }
              />
              {errors.email && touched.email && (
                <p className={css.error}>{errors.email}</p>
              )}
            </div>

            <div className={css.password}>
              <label htmlFor="password">Enter your Password</label>
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  errors.password && touched.email ? css.input_error : null
                }
              />

              <div
                onClick={() => setVisible(!visible)}
                className={css.view_password}
              >
                {visible ? <FaEye /> : <FaEyeSlash />}
              </div>
              {errors.password && touched.password && (
                <p className={css.error}>{errors.password}</p>
              )}
              <Link>Forgot password</Link>
            </div>

            <button disabled={isSubmitting} type="submit">
              Sign in with Email
            </button>

            <div className={css.break_line}>
              <div></div>
              or <div></div>
            </div>

            <div className={css.google_fb}>
              <div>
                <img src={Google} width={15} alt="" />
                Sign in with Google
              </div>
              <div>
                <img src={Facebook} width={20} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
