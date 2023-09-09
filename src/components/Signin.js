import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate, useLocation } from "react-router";
import { useState, useContext } from "react";
import useAuth from "./hooks/useAuth";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/linkpage";
  const { auth, setAuth } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API = axios.create({
    baseURL: "http://localhost:5000",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/Login-marketer", {
        name,
        password,
      }).then((res) => {
        if (res?.data.name) {
          const role = res?.data.role;
          setAuth({ role: `${role}`, name: `${name}` });
          setName("");
          setPassword("");
          navigate(from, { replace: true });
        } else {
          console.log("incorrect submission");
          setError(res.message);
        }
      });
    } catch (err) {
      if (!err?.response) {
        setError("no server response");
      } else {
        setError("registeration failed");
      }
    }
  };
  const {
    register,
    watch,
    formState: { errors },
    control,
  } = useForm();

  return (
    <div className="signIn">
      <form onSubmit={handleSubmit}>
        <label className="labelForm" htmlFor="userName">
          User Name
        </label>
        <input
          className="labelText"
          type="text"
          id="username"
          name="username"
          {...register("username")}
        />
        <br />
        <label className="labelForm" htmlFor="userName">
          email
        </label>
        <input
          className="labelText"
          type="email"
          id="email"
          name="email"
          {...register("email")}
        />
        <br />

        <label className="labelForm" htmlFor="userName">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="labelText"
          {...register("password")}
        />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Signin;
