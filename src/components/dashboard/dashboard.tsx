import React, { useState } from "react";
import { Form, Button, Toast, ToastContainer, Spinner } from "react-bootstrap";
import {
  addMaintenance,
  clearMaintenanceHistory,
} from "../../apis/maintenance.api";
import { AddMaintenanceData } from "../../apis/api.types";
import { tConv24 } from "../../utils/utils";
import { useHistory } from "react-router-dom";
import "./dashboard.css";

export const Dashboard: React.FC = () => {
  let history = useHistory();
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClearMaintenanceLoading, setIsClearMaintenanceLoading] =
    useState<boolean>(false);

  const handleAddMaintenance = (event: any) => {
    event.preventDefault();
    const addMaintenanceData: AddMaintenanceData = {
      name: event?.target[0]?.value ?? "",
      start_date: event?.target[1]?.value ?? "",
      start_time: tConv24(event?.target[2]?.value ?? ""),
      end_date: event?.target[3]?.value ?? "",
      end_time: tConv24(event?.target[4]?.value ?? ""),
    };
    setIsLoading(true);
    addMaintenance(addMaintenanceData)
      .then((responseData) => {
        if (responseData.statusCode === 200) {
          setShowToast(true);
          event.target.reset();
        }
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 401") {
          history.push("/login");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClearAllMaintenanceData = () => {
    clearMaintenanceHistory()
      .then((response) => {
        if (response.statusCode === 200) {
          alert("All records deleted");
        }
      })
      .finally(() => {
        setIsClearMaintenanceLoading(false);
      });
  };

  return (
    <>
      <div className="dashboard-button-container">
        <Button variant="primary" onClick={handleClearAllMaintenanceData}>
          Clear Maintenance Data
        </Button>
        {isClearMaintenanceLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
      <div className="dashboard-form-container">
        <Form onSubmit={handleAddMaintenance}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Maintenance Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" placeholder="Start Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="startTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control type="time" placeholder="Start Time" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="End Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="endTime">
            <Form.Label>End Time</Form.Label>
            <Form.Control type="time" placeholder="End Time" />
          </Form.Group>
          <div className="dashboard-button-container">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </div>
        </Form>
      </div>
      <ToastContainer position="top-end">
        <Toast
          bg="success"
          show={showToast}
          animation
          autohide
          onClose={() => setShowToast(false)}
        >
          <Toast.Body>
            <p className="text-white">
              Maintenance Timeline Added Successfully
            </p>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
