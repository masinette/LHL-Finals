import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";

import "./styles.scss";

export default function ProfileImage(props) {
  const user_id = props.user_id;
  const picture1publicId = `users/${user_id}/u${user_id}_p1`
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image cloudName="Ds3bokefg" publicId={picture1publicId} >
              <Transformation width="200" crop="fill" radius="40" />
            </Image>
          </Col>
        </Row>
      </Container>
    </>
  )
}
