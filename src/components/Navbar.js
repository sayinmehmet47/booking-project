import { Link } from "react-router-dom";
import {
  List,
  Image,
  Nav,
  NavLogo,
  ListItem,
  Button,
  NavGroup,
  Header,
  Paragraph,
} from "./Navbar.style";

export default function Navbar() {
  return (
    <Nav>
      <NavGroup>
        <NavLogo>
          <Image src="/logo2.svg" alt="logo" />
        </NavLogo>
        <List>
          <ListItem>CHF</ListItem>
          <Image
            src="/usa.png"
            height="20px"
            borderRadius="50%"
            width="60px"
            alt="line"
          />
          <Button>List your Property</Button>
          <Button backgroundColor="white" color="black">
            Register
          </Button>
          <Button backgroundColor="white" color="black">
            Sign In
          </Button>
        </List>
      </NavGroup>

      <List width="80%">
        <ListItem>Stays</ListItem>
        <ListItem>Flights</ListItem>
        <ListItem>Flights+Hotels</ListItem>
        <ListItem>Car Rentals</ListItem>
        <ListItem>Attractions</ListItem>
        <ListItem>Airport taxis</ListItem>
      </List>
      <Header>A lifetime of discounts? It's Genius.</Header>
      <Paragraph>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Booking.com account
      </Paragraph>
      <div>
        <Button>Sign In/Register</Button>
      </div>
    </Nav>
  );
}
