import { Link } from "react-router-dom"
import bookKeep from "../../assets/imaged-removebg-preview.png"
import "../../scss/login.css"
import InstaImage from "../../assets/Instagram.svg"
import LoginForm from "./LoginForm"
import React from "react"

const Login = () => {
  return (
    <div id="login" className="login">
      <div className="left-wrapper">
        <InstagramImg />
        <h3 className="text-slate-700" style={{ fontSize: "50px" }}>
          INSTAGRAM
        </h3>
        <img src={bookKeep} alt="book-keep-img" className="login-image" />
      </div>
      <div className="right-wrapper">
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login

export const InstagramImg = () => (
  <Link to="/" onClick={(e) => e.preventDefault()}>
    <img
      src={InstaImage}
      alt="Instagram Logo"
      style={{ marginLeft: "-10px", width: "200px", height: "60px" }}
      className="login-branding"
    />
  </Link>
)
