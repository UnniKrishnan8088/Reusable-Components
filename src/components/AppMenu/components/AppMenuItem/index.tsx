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
  const location = useLocation();
  const navigate = useNavigate();
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const isParent = item?.parent;
  const isOpen = openMenuIds?.includes(item.id);

  // Function to check if any submenu or the current item is active
  const isActive = (menuItem: MenuItem): boolean => {
    if (location.pathname === menuItem.path) {
      return true;
    }
    if (menuItem.submenu) {
      return menuItem.submenu.some(isActive); // Check if any submenu is active
    }
    return false;
  };

  const active = isActive(item);
  const parentActive = activeParentId === item.id || active;

  const handleItemClick = () => {
    if (hasSubmenu) {
      handleToggle(item.id);
    } else {
      navigate(item?.path as string);
      setActiveParentId(item.id); // Set the active parent ID on submenu item click
    }
  };

  return (
    <React.Fragment key={item.id}>
      <ListItem
        sx={{
          background: parentActive && item?.parent ? "#ED2B2A" : "",
          borderRadius: "8px",
        }}
        disablePadding
      >
        <ListItemButton
          sx={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
          onClick={handleItemClick}
        >
          {isParent && (
            <ListItemIcon
              sx={{
                minWidth: 0,
                color: parentActive && item?.parent ? "white" : "black",
              }}
            >
              {item.icon}
            </ListItemIcon>
          )}
          <ListItemText
            sx={[
              {
                "& .MuiListItemText-primary": {
                  fontSize: "13px",
                },
                color:
                  location.pathname === item.path && item?.submenu
                    ? "#ED2B2A"
                    : location.pathname === item.path &&
                      parentActive &&
                      item?.parent
                    ? "white"
                    : "black",

                flex: 1,
                display: isDrawerOpen ? "block" : "none",
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
          {hasSubmenu && (
            <ListItemIcon
              sx={{
                minWidth: 0,
                ...(!isDrawerOpen && { display: "none" }),
                color: parentActive && item?.parent ? "white" : "black",
                opacity: isDrawerOpen ? 1 : 0,
              }}
            >
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
