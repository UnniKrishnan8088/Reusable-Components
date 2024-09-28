import React from "react";
import { MenuItem } from "../..";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type AppMenuItemProps = {
  item: MenuItem;
  openMenuIds: number[];
  handleToggle: (id: number) => void;
  activeParentId: number | null; // Add activeParentId prop
  setActiveParentId: (id: number) => void; // Add setActiveParentId prop
  isDrawerOpen: boolean;
};

export default function AppMenuItem({
  activeParentId,
  handleToggle,
  isDrawerOpen,
  item,
  openMenuIds,
  setActiveParentId,
}: AppMenuItemProps) {
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const isParent = item?.parent;
  const isOpen = openMenuIds?.includes(item.id);

  const handleItemClick = () => {
    if (hasSubmenu) {
      handleToggle(item.id);
    } else {
      setActiveParentId(item.id); // Set the active parent ID on submenu item click
    }
  };

  return (
    <React.Fragment key={item.id}>
      <ListItem
        sx={{
          background: item?.parent ? "#E5D9F2" : "",
          borderRadius: "8px",
        }}
        disablePadding
      >
        <ListItemButton
          sx={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            // justifyContent: isDrawerOpen ? "initial" : "space-between",
            gap: 1,
            // backgroundColor:
            //   isParent && activeParentId === item.id
            //     ? "lightblue"
            //     : "transparent", // Highlight active item
          }}
          onClick={handleItemClick}
        >
          {isParent && (
            <ListItemIcon sx={{ minWidth: 0 }}>{item.icon}</ListItemIcon>
          )}
          <Box sx={{ flex: 1 }}>
            <ListItemText
              sx={[
                {
                  "& .MuiListItemText-primary": {
                    fontSize: "13px",
                  },
                },
                isDrawerOpen
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    },
              ]}
              primary={item.title}
            />
          </Box>
          {hasSubmenu && (
            <ListItemIcon sx={{ minWidth: 0 }}>
              {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </ListItemIcon>
          )}
        </ListItemButton>
      </ListItem>
      {isDrawerOpen && hasSubmenu && (
        <Collapse in={openMenuIds.includes(item.id)}>
          <List disablePadding>
            {item?.submenu?.map((submenu) => (
              <AppMenuItem
                key={submenu.id}
                item={submenu}
                openMenuIds={openMenuIds}
                handleToggle={handleToggle}
                activeParentId={activeParentId} // Pass activeParentId
                setActiveParentId={setActiveParentId} // Pass setActiveParentId
                isDrawerOpen={isDrawerOpen}
              />
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );
}
