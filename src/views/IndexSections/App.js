import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export default function App() {
    return (
        <Col lg="5" sm="6">
            <FormGroup className="has-success">
            <Input
                className="form-control-success"
                defaultValue="Success"
                type="text"
                
            />
            </FormGroup>
        </Col>
    )
}



