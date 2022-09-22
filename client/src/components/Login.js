import React, { useState } from "react";
import { Box, TextField, Typography, styled, Button } from "@mui/material";

const Container = styled(Box)`
  max-width: 40vw;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 2px 2px 10px rgb(0 0 0 / 0.5);
  // background:red;
`;

const LoginInput = styled(TextField)`
  margin-bottom: 2rem;
`;

const LoginButton = styled(Button)`
  margin-bottom: 1rem;
  text-transform: none;
  background-color: #9ed5cb;
  &:hover {
    background-color: #445045;
  }
`;

const SignupButton = styled(Button)`
  margin-bottom: 1rem;
  text-transform: none;
  background-color: #fff;
`;

const Image = styled("img")({
  width: "90%",
  // border:'1px solid red',
  objectFit:'cover',
  display: "block",
  margin: "auto",
});

export default function Login() {
  const picture = require(`../assets/${"blogLogo"}.png`);
  const [isLogin, setIsLogin] = useState(false);

  const inputChangeHandler = (e) => {
    console.log(e.target.value)
  }

  {
    return (
      <Box>
        <Container>
          <Image src={picture} alt="" />
          {isLogin ? (
            <>
              <LoginInput label="Enter Username" variant="standard" />
              <LoginInput label="Enter Password" variant="standard" />
              <LoginButton variant="contained">Login</LoginButton>
              <SignupButton onClick={() => setIsLogin((value) => !value)}>
                Create new Account
              </SignupButton>
            </> 
          ) : (
            <>
              <LoginInput label="Create Username"  onChange={(e) => inputChangeHandler(e)} variant="standard" />
              <LoginInput label="Create Password"  onChange={(e) => inputChangeHandler(e)} variant="standard" />
              <LoginInput label="Confirm Password" onChange={(e) => inputChangeHandler(e)}  variant="standard" />
              <LoginButton variant="contained">Signup</LoginButton>
              <SignupButton onClick={() => setIsLogin((value) => !value)}>
                Already have an Account
              </SignupButton>
            </>
          )}
        </Container>
      </Box>
    );
  }
}
