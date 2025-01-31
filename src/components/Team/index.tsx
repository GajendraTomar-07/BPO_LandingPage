import React from "react";
import { Row, Col, Card } from "antd";
import team6 from "../../Assets/team6.jpg";
import abhishek from "../../Assets/abhishek.jpg";
import team7 from "../../Assets/team7.jpg";
import team5 from "../../Assets/team5.jpg";
import ashrut1 from "../../Assets/ashrut1.jpg";

const teamMembers = [
  {
    name: "Ashrut Panchal",
    role: "Founder & Chief Strategist",
    image: ashrut1,
  },
  {
    name: "Astha Jain",
    role: "Head of Operations & Service Delivery",
    image: team6,
  },
  {
    name: "Abhishek",
    role: "Head of Sales & Marketing",
    image: abhishek,
  },
  {
    name: "Rani Meena",
    role: "Head of Human Resource & Management",
    image: team7,
  },
];

const Team: React.FC = () => {
  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ textAlign: "center", margin: "25px" }}>Meet Our Team</h2>
      <p style={{ textAlign: "center",justifyContent:"center", fontSize: "18px", marginBottom: "33px" }}>
        Our team is a diverse group of talented professionals, each bringing unique skills and passion to drive success. 
        Together, we collaborate, innovate, and deliver exceptional results for our clients. 
        We’re committed to excellence and dedicated to helping you achieve your goals.
      </p>
      <Row gutter={[8, 8]}>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <Card hoverable>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "7px",
                }}
              />
              <h6 style={{ textAlign: "center", marginTop: "10px", fontSize: "25px", color: "black" }}>
                {member.name}
              </h6>
              <p style={{ textAlign: "center", fontSize: "18px", color: "black" }}>
                {member.role}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Team;
