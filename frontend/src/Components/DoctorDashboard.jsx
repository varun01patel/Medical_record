import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Form,
  Button,
  Table,
  Navbar,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./DoctorDashboard.css";
import {
  useAddress,
  useContract,
  useMetamask,
} from "@thirdweb-dev/react";

function DoctorDashboard() {
  const connectWithMetamask = useMetamask();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("details");
  const [userDetails, setUserDetails] = useState(
    location.state?.userDetails || {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { contract, isLoading } = useContract(
    import.meta.env.VITE_CONTRACT_ADDRESS_MEDICALRECORD
  );
  const accountAddress = useAddress();
  const [patientAddress, setPatientAddress] = useState("");
  const [patientDataByAddress, setPatientDataByAddress] = useState([]);
  const [patientInfo, setPatientInfo] = useState(null);

  const handleInputChange = (e) => {
    setPatientAddress(e.target.value);
  };

  useEffect(() => {
    if (location.state?.userDetails) {
      setUserDetails(location.state.userDetails);
    }
  }, [location.state]);

  useEffect(() => {
    connectWithMetamask().then(async (res) => {});
  }, [isLoading, accountAddress]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      const patientData = await contract?.call("getDetailsByOwner", [
        patientAddress,
      ]);

      const storedPatientInfo = JSON.parse(localStorage.getItem(patientAddress));

      if (storedPatientInfo) {
        setPatientInfo(storedPatientInfo);
      } else {
        setPatientInfo(null);
      }

      setPatientDataByAddress(patientData);
      setPatientAddress("");
      console.log("submitted successfully");
    } catch (error) {
      console.error(
        "Failed to fetch data, try again after some time:",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Exclude the last three records from the formatted data
  const formattedRecords = patientDataByAddress
    ?.slice(3)
    ?.map((record) => ({
      owner: record.owner,
      doctorName: record.doctorName,
      hospitalName: record.hospitalName,
      reasonForVisit: record.reasonForVisit,
      description: record.description,
      fileUrl: record.fileUrl,
      creationTime: new Date(record.creationTime * 1000).toLocaleString(),
      updateTime:
        record.updateTime !== "0"
          ? new Date(record.updateTime * 1000).toLocaleString()
          : "N/A",
      deletionTime:
        record.deletionTime !== "0"
          ? new Date(record.deletionTime * 1000).toLocaleString()
          : "N/A",
    }));

  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <Card className="p-4 shadow-sm mb-4">
            <Card.Title className="text-primary">Your Details</Card.Title>
            <Card.Body>
              <Row className="details-row">
                <Col md={3}>
                  <p>
                    <strong>Name:</strong>
                  </p>
                </Col>
                <Col md={9}>
                  <p>{userDetails.name}</p>
                </Col>
              </Row>
              <Row className="details-row">
                <Col md={3}>
                  <p>
                    <strong>License Number:</strong>
                  </p>
                </Col>
                <Col md={9}>
                  <p>{userDetails.licenseId}</p>
                </Col>
              </Row>
              <Row className="details-row">
                <Col md={3}>
                  <p>
                    <strong>Hospital Name:</strong>
                  </p>
                </Col>
                <Col md={9}>
                  <p>{userDetails.hospitalName}</p>
                </Col>
              </Row>
              <Row className="details-row">
                <Col md={3}>
                  <p>
                    <strong>Contact:</strong>
                  </p>
                </Col>
                <Col md={9}>
                  <p>{userDetails.phone}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      case "access-records":
        return (
          <Card className="p-4 shadow-sm mb-4">
            <Card.Title className="text-primary">Access Records</Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formPatientAddress">
                  <Form.Label>Enter the address of Patient:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Patient Account Address"
                    onChange={handleInputChange}
                    value={patientAddress}
                  />
                </Form.Group>
                {!isSubmitting && (
                  <Button variant="primary" type="submit" className="mb-3">
                    GET RECORD
                  </Button>
                )}
              </Form>
              <hr />
              <h5 className="text-secondary">Patient Information:</h5>
              {patientInfo ? (
                <>
                  <p>
                    <strong>Account Address:</strong> {patientInfo.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {patientInfo.name}
                  </p>
                  <p>
                    <strong>Phone:</strong> {patientInfo.phone}
                  </p>
                  <p>
                    <strong>DoB:</strong> {patientInfo.dateOfBirth}
                  </p>
                  <p>
                    <strong>Gender:</strong> {patientInfo.gender}
                  </p>
                  <p>
                    <strong>Blood Group:</strong> {patientInfo.bloodGroup}
                  </p>
                </>
              ) : (
                <p className="text-danger"></p>
              )}
              <Table striped bordered hover className="mt-4">
                <thead>
                  <tr>
                    <th>Doctor Name</th>
                    <th>Hospital Name</th>
                    <th>Reason</th>
                    <th>Report</th>
                  </tr>
                </thead>
                <tbody>
                  {formattedRecords?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.doctorName ?? ""}</td>
                      <td>{item.hospitalName}</td>
                      <td>{item.reasonForVisit ?? ""}</td>
                      <td>
                        {item.fileUrl ? (
                          <a
                            href={item.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Report
                          </a>
                        ) : (
                          "No Report"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        );
      case "add-records":
        return (
          <Card className="p-4 shadow-sm mb-4">
            <Card.Title className="text-primary">Add Records</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group controlId="formPatientAddress">
                  <Form.Label>Patient Account Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter patient account address"
                  />
                </Form.Group>
                <Form.Group controlId="formDoctorName">
                  <Form.Label>Doctor Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter doctor's name" />
                </Form.Group>
                <Form.Group controlId="formReason">
                  <Form.Label>Reason for Visit</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter reason for visit"
                  />
                </Form.Group>
                <Form.Group controlId="formVisitedDate">
                  <Form.Label>Visited Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="formReport">
                  <Form.Label>Report</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                  ADD RECORD
                </Button>
              </Form>
            </Card.Body>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <Container fluid className="mt-4">
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Text className="text-white">Doctor Dashboard</Navbar.Text>
      </Navbar>
      <Row>
        <Col md={2} className="side-nav bg-light py-3">
          <Nav variant="pills" className="flex-column">
            <Nav.Link
              active={activeTab === "details"}
              onClick={() => setActiveTab("details")}
            >
              My Details
            </Nav.Link>
            <Nav.Link
              active={activeTab === "access-records"}
              onClick={() => setActiveTab("access-records")}
            >
              Access Records
            </Nav.Link>
            <Nav.Link
              active={activeTab === "add-records"}
              onClick={() => setActiveTab("add-records")}
            >
              Add Records
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={10}>{renderContent()}</Col>
      </Row>
    </Container>
  );
}

export default DoctorDashboard;
