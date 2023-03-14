import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import { UserRoute } from "./routes/userRoute/UserRoute";
import { AdminRoute } from "./routes/adminRoute/AdminRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container id="rootDiv">
          <UserRoute />
          <AdminRoute />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
