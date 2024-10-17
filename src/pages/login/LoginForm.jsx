import { Button, Form, Input, notification } from "antd"
import InputPassword from "../../custom-components/InputPassword"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import React from "react"

const firebaseConfig = {
  apiKey: "AIzaSyDecPg22b9ASa42C0Y1yVBbKbRJRiTRlAE",
  authDomain: "instagram-clone-f68ab.firebaseapp.com",
  projectId: "instagram-clone-f68ab",
  storageBucket: "instagram-clone-f68ab.appspot.com",
  messagingSenderId: "251935243484",
  appId: "1:251935243484:web:703b0de2c881e75230c819"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app) // Initialize Auth

const LoginForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { email, password } = values
    try {
      await signInWithEmailAndPassword(auth, email, password)
      notification.success({ message: "Successfully signed in!" })
      navigate("/post")
    } catch (error) {
      notification.error({ message: error.message })
      console.log(error.message)
    }
  }

  const emailValidator = (_, value) => {
    if (!value) return Promise.reject("Please enter email ID")
    if (!isValidEmail(value))
      return Promise.reject("Please enter a valid email ID")
    return Promise.resolve()
  }

  const SignUpLink = () => (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.5rem",
        color: "#4096ff",
        margin: "20px 0"
      }}
    >
      <Button type="link" size="large" onClick={() => navigate("sign-up")}>
        Sign Up?
      </Button>
    </div>
  )

  return (
    <>
      <h2
        className="text-slate-700 login-title text-center mt-4 font-medium"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Sign In
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        name="user"
        size="large"
      >
        <Form.Item
          validateTrigger={["onSubmit"]}
          rules={[{ required: true, type: "email", validator: emailValidator }]}
          name="email"
        >
          <Input autoFocus placeholder="Email" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please enter your password" }]}
          name="password"
        >
          <InputPassword placeholder="Password" />
        </Form.Item>
        <Button
          id="login-sign-in"
          htmlType="submit"
          type="primary"
          block
          className="mt-3"
        >
          Sign in
        </Button>
      </Form>
      <SignUpLink />
    </>
  )
}

export default LoginForm

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
