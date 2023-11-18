import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import i18n from "../i18n/i18n";
import { I18nextProvider } from "react-i18next";

const Layout = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <NavBar />
        <Box padding={5}>
          <Outlet />
        </Box>
      </I18nextProvider>
    </>
  );
};

export default Layout;
