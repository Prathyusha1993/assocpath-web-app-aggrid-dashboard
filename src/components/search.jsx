import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

function validate(MRN) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (MRN.length === 0) {
    errors.push("atleast one field entry is required");
  }
  return errors;
}

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}

export default Search;