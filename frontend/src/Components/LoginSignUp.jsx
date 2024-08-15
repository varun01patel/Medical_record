import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  ToggleButtonGroup,
  ToggleButton,
  Dropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LoginSignUp.css"; // Custom CSS
import { useAddress, useMetamask } from "@thirdweb-dev/react";

function LoginSignUp() {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("patient");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleToggle = (value) => {
    setIsLogin(value === "login");
    setErrors({});
    setFormData({});
  };

  const handleUserTypeChange = (eventKey) => {
    setUserType(eventKey);
    setErrors({});
    setFormData({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Sign Up Logic
    if (!isLogin) {
      // Validate that passwords match
      if (formData.password !== formData.confirmPassword) {
        setErrors({ confirmPassword: "Passwords do not match" });
        return;
      }

      // Check if the username already exists
      if (localStorage.getItem(formData.username)) {
        setErrors({ username: "Username already exists" });
        return;
      }

      // Store user details in local storage
      const userData = { ...formData, type: userType, id: address ?? null };
      localStorage.setItem(formData.username, JSON.stringify(userData));

      // Navigate to the appropriate dashboard
      navigate(
        userType === "patient" ? "/patient-dashboard" : "/doctor-dashboard",
        { state: { userDetails: userData } }
      );
    } else {
      // Login logic
      const storedData = JSON.parse(localStorage.getItem(formData.username));

      if (storedData && storedData.password === formData.password && address === storedData.id  ) {
        // Check user type and navigate accordingly
        if (storedData.type === "patient") {
          navigate("/patient-dashboard", { state: { userDetails: storedData } });
        } else if (storedData.type === "doctor") {
          navigate("/doctor-dashboard", { state: { userDetails: storedData } });
        }
      } else {
        setErrors({ login: "Invalid username or password or address" });
      }
    }
  };

  useEffect(()=>{
    connectWithMetamask()
  },[])

  console.log(address)
  return (
    <div className="background">
      <Container
        className="form-container shadow-lg rounded p-4"
        style={{ maxWidth: "500px", margin: "40px auto" }}
      >
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        <ToggleButtonGroup
          type="radio"
          name="options"
          defaultValue="login"
          onChange={handleToggle}
          className="mb-3 d-flex justify-content-center"
        >
          <ToggleButton
            id="tbg-btn-1"
            value="login"
            variant="outline-primary"
            style={{ marginRight: "10px", width: "120px" }}
          >
            Login
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            value="signup"
            variant="outline-primary"
            style={{ width: "120px" }}
          >
            Sign Up
          </ToggleButton>
        </ToggleButtonGroup>

        {!isLogin && (
          <Dropdown
            onSelect={handleUserTypeChange}
            className="mb-3 d-flex justify-content-center"
          >
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Sign up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="patient">Patient</Dropdown.Item>
              <Dropdown.Item eventKey="doctor">Doctor</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}

        <Form onSubmit={handleSubmit}>
          {!isLogin ? (
            <>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  onChange={handleChange}
                  required
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              {userType === "patient" ? (
                <>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Enter name"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formAge" className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      name="age"
                      type="number"
                      placeholder="Enter age"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBloodGroup" className="mb-3">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                      name="bloodGroup"
                      type="text"
                      placeholder="Enter blood group"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formContactNumber" className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      name="phone"
                      type="text"
                      placeholder="Enter contact number"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGender" className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      name="gender"
                      type="text"
                      placeholder="Enter gender"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDateOfBirth" className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      name="dateOfBirth"
                      type="date"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              ) : (
                <>
                  <Form.Group controlId="formDoctorName" className="mb-3">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Enter doctor name"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formAge" className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      name="age"
                      type="number"
                      placeholder="Enter age"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formHospitalName" className="mb-3">
                    <Form.Label>Hospital Name</Form.Label>
                    <Form.Control
                      name="hospitalName"
                      type="text"
                      placeholder="Enter hospital name"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formLicenseId" className="mb-3">
                    <Form.Label>License ID</Form.Label>
                    <Form.Control
                      name="licenseId"
                      type="text"
                      placeholder="Enter license ID"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formContactNumber" className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      name="phone"
                      type="text"
                      placeholder="Enter contact number"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Create password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
                {errors.login && <p className="text-danger">{errors.login}</p>}
              </Form.Group>
            </>
          )}
          <Button
            variant="primary"
            type="submit"
            className="mt-3"
            style={{ width: "100%" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default LoginSignUp;
