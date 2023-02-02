import "./Login.css";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Rtk";
import { State } from "../../Types/types";
import { setInputField, loginUser } from "../../Rtk/userSlice";

export default function Login() {
  const { userInfo, success } = useAppSelector((state: State) => state.user);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (success) {
      history.push("/home");
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
    dispatch(loginUser(userInfo));
  };

  return (
    <div className="login__div">
      <h2>Login</h2>
      <form className="login__form">
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

        <button className="login__form-submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
