import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

function validate(MRN) {
  const errors = [];

  if (MRN.length === 0) {
    errors.push("atleast one field entry is required");
  }
  return errors;
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MRN: "",
      errors: [],
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { MRN } = this.state;
    const errors = validate(MRN);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  };

  render() {
    const { errors } = this.state;
    const mystyle = {
      position: "relative",
      top: "40%",
    };
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <Form onSubmit={this.handleSearch}>
            {errors.map((error) => (
              <p style={{ color: "red" }} key={error}>
                Error: {error}
              </p>
            ))}
            <Form.Row>
              <Form.Group
                as={Col}
                xs="auto"
                controlId="formGridInvoiceNum"
                className="col col-lg-2"
              >
                <Form.Label className="font-weight-bold">
                  InvoiceNum{" "}
                </Form.Label>
                <Form.Control type="number" placeholder="num" />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridFirstName">
                <Form.Label className="font-weight-bold">FirstName </Form.Label>
                <Form.Control type="text" placeholder="name" />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridLastName">
                <Form.Label className="font-weight-bold">LastName </Form.Label>
                <Form.Control type="text" placeholder="name" />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridMRN">
                <Form.Label className="font-weight-bold">MRN </Form.Label>
                <Form.Control type="text" placeholder="MRN" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="auto" controlId="formGridDOS">
                <Form.Label className="font-weight-bold">
                  DateOfService{" "}
                </Form.Label>
                <Form.Control
                  type="date"
                  min="1900-01-01"
                  max="2999-12-31"
                  placeholder="dos"
                />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridDOB">
                <Form.Label className="font-weight-bold">
                  DateOfBirth{" "}
                </Form.Label>
                <Form.Control
                  type="date"
                  min="1900-01-01"
                  max="2999-12-31"
                  placeholder="dob"
                />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridName">
                <Form.Label className="font-weight-bold">
                  Guarantor_Name{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="name" />
              </Form.Group>

              <Form.Group as={Col} xs="auto" controlId="formGridName">
                <Form.Label> </Form.Label>
                <button
                  style={mystyle}
                  type="submit"
                  className="btn btn-outline-success my-2 my-sm-0"
                >
                  Search
                </button>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default Search;
