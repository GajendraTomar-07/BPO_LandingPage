import React from "react";
import { Row, Col, Card } from "antd";

const services = [
  {
    title: "Customer Support Services",
    description: [
      "Inbound and Outbound Call Center Services",
      "Technical Support",
      "Email and Chat Support",
      "Social Media Management",
      "Help Desk Support",
    ],
  },
  {
    title: "Human Resources (HR) Services",
    description: [
      "Recruitment and Staffing Solutions",
      "Employee Onboarding and Training",
      "Employee Benefits Management",
      "HR Administration and Compliance",
    ],
  },
  {
    title: "Back-Office Support",
    description: [
      "Order Processing and Management",
      "Inventory Management",
      "Procurement Support",
      "Billing and Invoicing",
    ],
  },
  {
    title: "IT and Technical Services",
    description: [
      "IT Support and Infrastructure Management",
      "Software Development and Maintenance",
      "Network Management and Cybersecurity",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div id="our-services" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px",marginTop:"30px" }}>
        Our Services
      </h2>
      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={12} xl={12}>
            <Card hoverable style={{ height: "100%", fontSize: "17px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  // textAlign: "center",
                  marginBottom: "10px",
                  paddingLeft: "30px", 
                }}
              >
                {service.title}
              </h3>
              <ul style={{ paddingLeft: "50px", color: "black" ,justifyContent:'center'}}>
                {service.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
