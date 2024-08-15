import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Nav, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imagedb } from "./Config"; // Make sure this is the correct path to your Firebase config
import "./PatientDashboard.css"; // Assuming you have some CSS to style the dashboard
import logo from "../Assets/download.png"; // Adjust the path according to your file structure
import { useAddress, useContractWrite, useContract, useMetamask } from "@thirdweb-dev/react";

function PatientDashboard() {
  const connectWithMetamask = useMetamask();
  const location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(
    location.state?.userDetails ||
      JSON.parse(localStorage.getItem(location.state?.userDetails?.username)) ||
      {}
  );
  const [activeTab, setActiveTab] = useState("details");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(""); // State for submission status
  const { contract, isLoading } = useContract(import.meta.env.VITE_CONTRACT_ADDRESS_MEDICALRECORD);
  const { mutateAsync: createPatient } = useContractWrite(
    contract,
    "createRecord"
  );

  // State for form inputs
  const [form, setForm] = useState({
    file: null,
    doctorName: "",
    reason: "",
    hospitalName: "",
    description: "",
  });
  
  const createCampaignFunc = async (form) => {
    const res = await createPatient({
      args: [
        form.doctorName,
        form.hospitalName,
        form.reason,
        form.description,
        form.file,
      ],
    });
    return res;
  };

  const accountAddress = useAddress();

  useEffect(() => {
    if (location.state?.userDetails) {
      localStorage.setItem(
        location.state.userDetails.username,
        JSON.stringify(location.state.userDetails)
      );
    }
  }, [location.state]);

  useEffect(() => {
    connectWithMetamask().then(async (res) => {
      // Additional logic if needed
    });
  }, [isLoading, accountAddress]);

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (form.file) {
      try {
        setIsSubmitting(true);
        setSubmissionStatus("Submitting data..."); // Update status to submitting
        const storageRef = ref(imagedb, `uploads/${form.file.name}`);
        await uploadBytes(storageRef, form.file);

        const downloadURL = await getDownloadURL(storageRef);

        // Add further handling for the download URL if needed, such as saving it to your database
        const updatedData = {
          ...form,
          file: downloadURL,
        };
        await createCampaignFunc(updatedData);

        // Reset the form after successful upload
        setForm({
          file: null,
          doctorName: "",
          reason: "",
          hospitalName: "",
          description: "",
        });
        console.log("submitted successfully");
        setSubmissionStatus("Your documents are uploaded successfully!"); // Update status to success
      } catch (error) {
        console.error(
          "Failed to insert data, try again after some time:",
          error
        );
        setSubmissionStatus("Failed to submit data. Please try again."); // Update status to error
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    navigate("/");
  };

  const renderContent = () => {
    if (activeTab === "details") {
      return (
        <div className="details mt-4">
          <h3>Your Details</h3>
          <Row className="details-row">
            <Col md={2}>
              <p>
                <strong>Name:</strong>
              </p>
            </Col>
            <Col md={10}>
              <p>{userDetails.name}</p>
            </Col>
          </Row>
          <Row className="details-row">
            <Col md={2}>
              <p>
                <strong>Phone:</strong>
              </p>
            </Col>
            <Col md={10}>
              <p>{userDetails.phone}</p>
            </Col>
          </Row>
          <Row className="details-row">
            <Col md={2}>
              <p>
                <strong>Gender:</strong>
              </p>
            </Col>
            <Col md={10}>
              <p>{userDetails.gender}</p>
            </Col>
          </Row>
          <Row className="details-row">
            <Col md={2}>
              <p>
                <strong>Age:</strong>
              </p>
            </Col>
            <Col md={10}>
              <p>{userDetails.age}</p>
            </Col>
          </Row>
          <Row className="details-row">
            <Col md={2}>
              <p>
                <strong>Blood Group:</strong>
              </p>
            </Col>
            <Col md={10}>
              <p>{userDetails.bloodGroup}</p>
            </Col>
          </Row>
          <Row className="details-row">
            <Col md={2}>
              <p>
                <strong>Account Address:</strong>
              </p>
            </Col>
            <Col md={10}>
              <p>{accountAddress}</p>
            </Col>
          </Row>
        </div>
      );
    } else if (activeTab === "uploadrecord") {
      return (
        <div className="upload-record mt-4">
          <h3>Upload Record</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile">
              <Form.Label>Upload your report to IPFS</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={handleInputChange}
              />
            </Form.Group>
            <h3 className="mt-4">Upload your record to blockchain</h3>
            <Form.Group controlId="formDoctorName">
              <Form.Label>Name of the doctor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the doctor"
                name="doctorName"
                value={form.doctorName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formReason">
              <Form.Label>Reason to visit hospital</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reason to visit hospital"
                name="reason"
                value={form.reason}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formHospitalName">
              <Form.Label>Hospital Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the hospital"
                name="hospitalName"
                value={form.hospitalName}
                onChange={handleInputChange}
              />
            </Form.Group>
            {!isSubmitting && (
              <Button variant="primary" type="submit" className="mt-2">
                Submit
              </Button>
            )}
            {isSubmitting && (
              <p className="mt-2 text-info">{submissionStatus}</p>
            )}
            {!isSubmitting && submissionStatus && (
              <p className="mt-2 text-success">{submissionStatus}</p>
            )}
          </Form>
        </div>
      );
    }
  };

  return (
    <Container fluid className="p-0">
      <Row noGutters>
        <Col md={2} className="sidebar bg-light">
          <div className="sidebar-content p-3">
            <img src={logo} alt="Logo" className="logo mb-3 img-fluid" />
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="#"
                onClick={() => setActiveTab("details")}
                className={activeTab === "details" ? "active" : ""}
              >
                Details
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="#"
                onClick={() => setActiveTab("uploadrecord")}
                className={activeTab === "uploadrecord" ? "active" : ""}
              >
                Upload Record
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        <Col md={10} className="content-area">
          <div className="topbar d-flex justify-content-between align-items-center p-3 shadow-sm bg-white">
            <h1 className="text-primary">Welcome to MediTro</h1>
            <div>
              <span className="username font-weight-bold">
                {userDetails.name}
              </span>
              <Button
                variant="outline-primary"
                className="ml-2"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </div>
          </div>
          <div className="content p-4">
            <h2 className="text-secondary">
              Medical Records are important for you and we care about them and
              store them securely! Get your records anywhere with just a touch!
            </h2>
            {renderContent()}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PatientDashboard;
