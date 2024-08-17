import { Box } from "@mui/material";
import "./App.css";
import FluidTypography from "./components/FluidTypography";

function App() {
  return (
    <Box>
      <FluidTypography fontWeight={600} variant="h1" fontSize={42}>
        Jelajahi kuliner khas
        <Box color={"#fc3c04"} component={"span"}>
          Yogyakarta
        </Box>
        dengan mudah
      </FluidTypography>
      <FluidTypography fontWeight={300} fontSize={16}>
        Jelajahi ragam kuliner khas yogyakarta dan temukan tempat makan terbaik
        untuk menikmatinya
      </FluidTypography>
    </Box>
  );
}

export default App;
