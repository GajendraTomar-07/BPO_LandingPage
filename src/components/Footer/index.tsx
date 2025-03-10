import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import { FooterSection, Title, Para, Paras, Parass, Para1 } from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <FooterSection>
      <Container>
        <Row justify="space-between"  gutter={[16, 0]}>
          {/* "Let's Go Rack..." Text with Extra Space on the Right */}
          <Col
            lg={5}
            md={5}
            sm={12}
            xs={24}
            style={{ display: "flex", justifyContent: "center", marginRight: "40px" }} // Increased margin
          >
            <Para
              style={{
                color: "var(--black-3)",
                fontSize: "24px",
                fontWeight: "bold",
                padding: "5px",
                letterSpacing: "2px",
              }}
            >
              Let's Rackup with success...
            </Para>
          </Col>

         
          <Col lg={7} md={7} sm={12} xs={24}>
            <Title style={{ color: "var(--black-3)", padding: "5px" }}>{t("Information")}</Title>
            {/* <Para style={{ color: "var(--black-3)", padding: "5px", fontSize:"18px" }} >{t("About Company")}</Para> */}
          
            <Paras
  onClick={() => {
    const element = document.getElementById("about-company-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  {t("About")}
</Paras>
<Paras
  onClick={() => {
    const element = document.getElementById("vision");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  {t("Vision")}
</Paras>
<Paras
  onClick={() => {
    const element = document.getElementById("mission");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  {t("Mission")}
</Paras>
<Paras
  onClick={() => {
    const element = document.getElementById("our-services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  {t("Services")}
</Paras>
 

            <Parass  
             onClick={() => { 
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
             }}
            >{t("Contact")}</Parass>
            {/* <Para style={{ color: "var(--black-3)", padding: "5px",fontSize:"18px" }}>{t("Careers")}</Para> */}
          </Col>

          {/* Contact Section */}
          <Col lg={7} md={7} sm={12} xs={24}>
            <Title style={{ color: "var(--black-3)", padding: "5px" }}>{t("Contact Us")}</Title>
            <Para style={{ color: "var(--black-3)", padding: "5px",fontSize:"18px" }}>
              716, Shekhar Central, Palasia Square, Indore (M.P.)
            </Para>
            <Para style={{ color: "var(--black-3)", padding: "5px",fontSize:"18px" }}>+91-9993624205</Para>
            <Para style={{ color: "var(--black-3)", padding: "5px",fontSize:"18px" }}>partner@gorack.in</Para>
          </Col>
        </Row>

        <Row  >
          <Col xs={24}>
            <Para1 style={{ color: "var(--black-3)", fontSize: "20px", fontWeight: "bold"}}>
              © 2025 | All rights reserved by SriGoRack
            </Para1>
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
