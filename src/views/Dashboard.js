import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
} from "reactstrap";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="6" sm="6">
            <Link to="/admin/students">
              Estudantes
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
