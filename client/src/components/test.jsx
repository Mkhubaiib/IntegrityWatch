import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const AppointmentScheduler = () => {
  // State to manage appointments
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    reminder: false,
  });

  // Function to handle form submission
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ date: '', time: '', reminder: false });
  };

  return (
    <Container className="mt-4 ml-20">
      <Row>
        <Col>
          <h2>Appointment Scheduler</h2>
          {/* Form to create and schedule appointments */}
          <Form onSubmit={handleAppointmentSubmit}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newAppointment.date}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, date: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={newAppointment.time}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, time: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formReminder">
              <Form.Check
                type="checkbox"
                label="Set Reminder"
                checked={newAppointment.reminder}
                onChange={(e) =>
                  setNewAppointment({
                    ...newAppointment,
                    reminder: e.target.checked,
                  })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Schedule Appointment
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {/* Display scheduled appointments */}
          <h4>Scheduled Appointments</h4>
          {appointments.length === 0 ? (
            <p>No appointments scheduled.</p>
          ) : (
            <Row>
              {appointments.map((appointment, index) => (
                <Col key={index} md={4} className="mb-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>{appointment.date}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {appointment.time}
                      </Card.Subtitle>
                      {appointment.reminder && (
                        <Card.Text>Reminder: Set</Card.Text>
                      )}
                      {/* Add more details or actions as needed */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentScheduler;