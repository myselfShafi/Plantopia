import { Box } from "@mui/material";
import { Appbar } from "./components/Appbar";
import { Menubar } from "./components/Menubar";

const Index = ({ children }) => {
  return (
    <Box>
      <Appbar />
      <Menubar />
      {children}
    </Box>
  );
};

export default Index;
