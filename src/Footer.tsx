import React from 'react';
import { Container, Nav, NavItem, Navbar } from 'react-bootstrap';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(/*props*/) {
  const handleSelect= (hrefl:string) => window.open(hrefl, "_blank");

  return (
      <footer id="footer">
       <Navbar expand="lg"  className="bg-light Foot">
  
        <Nav className="Foot" activeKey="home">
          <NavItem>
            <Nav.Link href="/privacy" title="privacy">
               Privacy Policies
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/terms" title="terms">
               Terms & Conditions
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#link" onClick={ ( ) => handleSelect("https://www.pubnub.com/integrations/initial-state-visualize-iot-data/") } title="links">
            Reference links
            </Nav.Link>
          </NavItem>
          <NavItem className="text-right item-right small copyright Footer-link Footer-position">© WHSU 2020</NavItem>
        </Nav>
       </Navbar>
      </footer>
  );
}

export default Footer;