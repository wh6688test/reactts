import React from 'react';
import { Container, Nav, NavItem, Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import './Body.css';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

import 'bootstrap/dist/css/bootstrap.min.css';

function Body(/*props*/) {
    return (
       <div style={{ width: 'auto', height: 'auto' }}>
          <ResponsiveEmbed aspectRatio="16by9">
             <embed type="image/svg+xml" src="/logo.svg" />
          </ResponsiveEmbed>
       </div>
    );
}

export default Body;