import React from "react";
import { atom, useRecoilState } from "recoil";
import LoginForm from "./components/LoginForm";

const adminUser = {
  email: "admin@admin.com",
  password: "admin123",
};

const userState = atom({
  key: "userState",
  default: {
    name: "",
    email: "",
  },
});

const errorState = atom({
  key: "errorState",
  default: "",
});

function App() {
  const [user, setUser] = useRecoilState(userState);
  const [error, setError] = useRecoilState(errorState);

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
