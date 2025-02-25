import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for routing

const Contact: React.FC = () => {
  return (
    <div>
      <Container className="mt-5 py-5 bg-light rounded shadow-sm">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
            <p className="text-center mb-5">
              Have questions? Reach out to us and we'll get back to you as soon
              as possible!
            </p>

            {/* Contact Form */}
            <Form>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label className="fw-semibold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message"
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="btn-lg px-4">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Customer Testimonials Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4 fw-bold">Customer Testimonials</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "TravelGo made booking my trip so easy! I found the best deals
                  on flights and hotels."
                </Card.Text>
                <Card.Footer className="text-end">- Sarah L.</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "A seamless travel experience! The booking platform was so
                  user-friendly and efficient."
                </Card.Text>
                <Card.Footer className="text-end">- John D.</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "Great service! I saved a lot of money on my trip to Paris.
                  Highly recommend!"
                </Card.Text>
                <Card.Footer className="text-end">- Emma R.</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Latest Blog Posts Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4 fw-bold">Latest Travel Tips</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>5 Tips for Traveling on a Budget</Card.Title>
                <Card.Text>
                  Learn how to make the most of your travel budget with these
                  essential tips!
                </Card.Text>
                <Link to="/blog/5-tips-for-traveling-on-a-budget">
                  <Button variant="link" className="p-0">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Top 10 Destinations in 2025</Card.Title>
                <Card.Text>
                  Discover the hottest destinations for the upcoming year and
                  start planning your dream trip.
                </Card.Text>
                <Link to="/blog/top-10-destinations-2025">
                  <Button variant="link" className="p-0">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>The Ultimate Guide to Packing Light</Card.Title>
                <Card.Text>
                  Packing doesn't have to be stressful. Here’s your go-to guide
                  for packing efficiently!
                </Card.Text>
                <Link to="/blog/packing-light-guide">
                  <Button variant="link" className="p-0">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Partners or Affiliates Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4 fw-bold">Our Trusted Partners</h2>
        <Row className="justify-content-center">
          <Col md={2} className="mb-3">
            <img
              src="https://th.bing.com/th/id/OIF.gqOCUvm57aVEzSCAN4lOPQ?rs=1&pid=ImgDetMain"
              alt="Partner 1"
              className="img-fluid"
            />
          </Col>
          <Col md={2} className="mb-3">
            <img
              src="https://th.bing.com/th/id/OIP.sttFTW_zSURPXXbfzAh_vwHaHa?rs=1&pid=ImgDetMain"
              alt="Partner 2"
              className="img-fluid"
            />
          </Col>
          <Col md={2} className="mb-3">
            <img
              src="https://th.bing.com/th/id/R.72c85c8bcdd5d1a5958154d378cd9ead?rik=Lmqn9XAs33LtiA&pid=ImgRaw&r=0"
              alt="Partner 3"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
