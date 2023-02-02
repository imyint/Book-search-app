import "./Register.css";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Rtk";
import { setInputField } from "../../Rtk/authSlice";
import { sendUserRegistration } from "../../Rtk/authSlice";
import { State } from "../../Types/types";
import { useEffect } from "react";

export default function Register() {
  const { userInfo, success } = useAppSelector((state: State) => state.auth);

  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (success) {
      history.push("/login");
    }
  }, [success]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldType: string
  ): void => {
    const eventInput = e.target.value;
    dispatch(setInputField([fieldType, eventInput]));
  };

  const handleSubmit = (
    e: React.FormEvent<EventTarget | HTMLFormElement>
  ): void => {
    e.preventDefault();
    dispatch(sendUserRegistration(userInfo));
  };

  return (
    <div className="register__div">
      <h2>Sign Up</h2>
      <form className="register__form">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          onChange={(e) => handleChange(e, "username")}
          value={userInfo.username}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e, "password")}
          value={userInfo.password}
        />

        <button className="register__form-submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
