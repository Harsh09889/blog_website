import { Box,styled } from "@mui/material";
import Login from "./Login";

const AppContainer = styled(Box)`
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
`

function App() {
  return (
    <AppContainer>
      <Login />
    </AppContainer>
  );
}

export default App;
