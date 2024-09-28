import { AppBar } from "../../styles";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileDrawer from "../MobileDrawer";

type DrawerAppBarProps = {
  open: boolean;
  handleDrawerOpen: () => void;
  isMobileView: boolean;
};

export default function DrawerAppBar({
  handleDrawerOpen,
  isMobileView,
  open,
}: DrawerAppBarProps) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        {isMobileView ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <MobileDrawer />
        )}
        {/* <Typography variant="h6" noWrap component="div">
          Customised Drawer
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
}
