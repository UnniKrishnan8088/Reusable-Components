import { Box } from "@mui/material";
import "./App.css";
import FluidTypography from "./components/FluidTypography";

function App() {
  return (
    <Box>
      <FluidTypography fontWeight={600} variant="h1" fontSize={62}>
        Jelajahi kuliner khas
      </FluidTypography>
      <FluidTypography fontWeight={300} fontSize={16}>
        Jelajahi ragam kuliner khas yogyakarta dan temukan tempat makan terbaik
        untuk menikmatinya
      </FluidTypography>
    </Box>
  );
}

export default App;
