import { useState } from "react";
import { CONSTANTS } from "../config/Constants";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [image, setImage] = useState({});
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const render = new FileReader();
      render.onloadend = () => {
        const base64Images = render.result.split(",")[1];
        const base64ext = file.type.split("image/")[1];
        setImage({ Images: base64Images, ext: `.${base64ext}` });
      };
      render.readAsDataURL(file);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, password);
    const URL_PATH = CONSTANTS.API_URL + "signup";
    let body = {
      profile: image,
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
    };
    console.log(body);
    // return
    return axios({
      url: URL_PATH,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
      },
      data: body,
    }).then(
      (response) => {
        console.log(response);
        console.log(response.data);
        window.location.href = "/";
      },
      (error) => {
        console.log(error);
        // if (error.response.data.error == undefined) {
        //     alert(error.response.data.errors[0].message)
        // } else {

        //     alert(error.response.data.error)
        // }
      }
    );
  };

  return (
    <>
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={submit} className="signup-form">
          <div className="form-group">
            <label htmlFor="profile">Profile Picture:</label>
            <input
              type="file"
              id="profile"
              onChange={(e) => {
                handleImageChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              minLength={3}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              minLength={3}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to={"/"} className="login-link">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
