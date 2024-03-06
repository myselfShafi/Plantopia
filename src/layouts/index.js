import { Box } from "@mui/material";
import { Footer } from "./Footer";
import { Appbar } from "./components/Appbar";
import { Menubar } from "./components/Menubar";

const Index = ({ children }) => {
  return (
    <Box>
      <Appbar />
      <Menubar />
      {children}
      <Footer />
    </Box>
  );
};

export default Index;
