import React from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Section from "components/Section";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link href="/">
              <a>
                <img src={props.logo} alt="Logo" />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
