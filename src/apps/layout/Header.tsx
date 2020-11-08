//note : mdb does not support typescript types : should have picked other UI libraries working with typescripts
//workaround : "noImplicitAny": false in tsconfig.json

import React from 'react';
import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../../assets/styles/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(/*props*/) {
    return (
      <Navbar expand="md" bg="dark" className="justify-content-between">
  <Form inline>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  </Form>
  <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>
</Navbar>
    );
}

export default Header;