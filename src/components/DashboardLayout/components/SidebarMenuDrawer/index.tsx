import { Stack, IconButton, Divider } from "@mui/material";
import { Drawer, DrawerHeader } from "../../styles";
import { useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppMenu from "../../../AppMenu";

type SidebarMenuDrawerProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

export default function SidebarMenuDrawer({
  handleDrawerClose,
  open,
}: SidebarMenuDrawerProps) {
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <h2>Logo</h2>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />
      {/* <List
        sx={{
          paddingInline: 1,
        }}
      >
        {[
          "Dashboard",
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "Home",
          "About",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "block",
              border: "2px solid red",
              mb: 1,
              borderRadius: "6px",
            }}
          >
            <ListItemButton
              sx={[
                {
                  // minHeight: 48,
                  padding: "4px 10px",
                  display: "flex",
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                    background: "red",
                    color: "white",
                    padding: "4px",
                    borderRadius: "4px",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {index % 2 === 0 ? (
                  <InboxIcon fontSize="small" />
                ) : (
                  <MailIcon fontSize="small" />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <AppMenu isDrawerOpen={open} />
    </Drawer>
  );
}
