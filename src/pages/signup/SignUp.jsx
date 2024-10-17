import React, { useState } from "react"
import { Form, Input, Button, notification } from "antd"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"
import { useNavigate } from "react-router-dom"

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDecPg22b9ASa42C0Y1yVBbKbRJRiTRlAE",
  authDomain: "instagram-clone-f68ab.firebaseapp.com",
  projectId: "instagram-clone-f68ab",
  storageBucket: "instagram-clone-f68ab.appspot.com",
  messagingSenderId: "251935243484",
  appId: "1:251935243484:web:703b0de2c881e75230c819"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onFinish = async (values) => {
    const { email, password, name, phoneNumber } = values

    try {
      setLoading(true)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      await set(ref(database, "users/" + user.uid), {
        username: name,
        email: email,
        phoneNumber: phoneNumber
      })
      notification.success({ message: "Sign-up successful! User data saved." })
      navigate("/")
    } catch (error) {
      console.error("Error signing up:", error)
      notification.error({
        message: error.message || "Error signing up. Please try again."
      })
    } finally {
      setLoading(false)
    }
  }

  const SignInLink = () => (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.5rem",
        color: "#4096ff",
        margin: "20px 0"
      }}
    >
      <Button type="link" size="large" onClick={() => navigate("/")}>
        Sign In?
      </Button>
    </div>
  )

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Sign Up</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please enter your phone number!" }
          ]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <SignInLink />
    </div>
  )
}

export default SignUp
