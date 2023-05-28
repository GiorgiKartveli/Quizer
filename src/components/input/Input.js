import React from "react";
// import { useState } from "react";
import styles from "./Input.module.css";
import useInput from "../../hooks/useInput";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";

const Input = () => {
  // custom hook for email input
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  // custom hook for password input

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(
    (value) =>
      value.trim().length >= 6 && /[A-Z]/.test(value) && /[0-9]/.test(value)
  );
  const navigate = useNavigate();

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // console.log(enteredEmail);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        enteredEmail,
        enteredPassword
      );

      console.log(userCredential);
      localStorage.setItem("AlexanderTheGreat", userCredential.user.uid);
      // setIsLoggedIn(true);
      navigate("/topicList");
    } catch (error) {
      console.log(error);
    }

    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.loginText}>
            <h2>Login to Your Account</h2>
          </div>
          <form onSubmit={formSubmissionHandler}>
            <div className={styles.inputs}>
              <div>
                <label htmlFor="email" />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={styles.emailInput}
                  onChange={emailChangeHandler}
                  onBlur={nameBlurHandler}
                  value={enteredEmail}
                />
                {emailInputHasError && <p>Write correct Email, please.</p>}
              </div>
              <div>
                <label htmlFor="password" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className={styles.passwordInput}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  value={enteredPassword}
                />
                {passwordInputHasError && <p>Incorrect password</p>}
              </div>
            </div>
            <div className={styles.button}>
              <button type="submit" id="button" className={styles.buttonInput}>
                submit
              </button>
            </div>
          </form>
        </div>
        <div className={styles.right}>
          <h1 className={styles.rightText}>New Here?</h1>
          <p>Sign in and discover a great amount of opportunities</p>
        </div>
      </div>
    </>
  );
};

export default Input;
