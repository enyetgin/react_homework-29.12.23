import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [IsAuthenticated, setIsAuthenticated] = useState(true)
  const  navigate = useNavigate()
  function handleSignOut() {
    setIsAuthenticated(false)
    navigate("/")
  }

  function handleSignIn(){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu size="huge"inverted fixed="top">
        <Container>
          <Menu.Item name="Ana sayfa" />

          <Menu.Menu position="right">
          {cartItems.length>0 && <CartSummary/>}
          {IsAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
