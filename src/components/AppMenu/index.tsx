import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { List } from "@mui/material";
import AppMenuItem from "./components/AppMenuItem";

type AppMenuProps = {
  isDrawerOpen: boolean;
};

export type MenuItem = {
  id: number;
  title: string;
  path: string;
  icon?: React.ReactNode;
  submenu?: MenuItem[];
  parent?: boolean;
};

const ListItems: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    parent: true,
    icon: <DashboardIcon fontSize="small" />,
    submenu: [
      {
        id: 2,
        title: "Sub Home 1",
        path: "/subhome1",
      },
      {
        id: 4,
        title: "Sub Home 2",
        path: "/subhome2",
      },
    ],
  },
  {
    id: 5,
    title: "About",
    path: "/about",
    parent: true,
    icon: <LibraryBooksIcon fontSize="small" />,
  },
];

export default function AppMenu({ isDrawerOpen }: AppMenuProps) {
  const [openMenuIds, setOpenMenuIds] = React.useState<number[]>([]);
  const [activeParentId, setActiveParentId] = React.useState<number | null>(
    null
  );

  const handleToggle = (id: number) => {
    setOpenMenuIds((prev) =>
      prev.includes(id) ? prev.filter((menuId) => menuId !== id) : [...prev, id]
    );
  };

  return (
    <List
      sx={{
        padding: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      {ListItems?.map((item) => (
        <AppMenuItem
          key={item.id}
          item={item}
          openMenuIds={openMenuIds}
          handleToggle={handleToggle}
          activeParentId={activeParentId} // Pass activeParentId
          setActiveParentId={setActiveParentId} // Pass setActiveParentId
          isDrawerOpen={isDrawerOpen}
        />
      ))}
    </List>
  );
}
