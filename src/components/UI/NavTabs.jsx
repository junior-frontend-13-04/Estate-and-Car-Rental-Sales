import * as React from "react";

import { Tab, Tabs as MuiTabs } from "@mui/material";
import styled from "@emotion/styled";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs({ label, link }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <LinkTab label={label} href={link} />
    </Tabs>
  );
}

const Tabs = styled(MuiTabs)(() => ({
  "& .MuiTab-root": {
    border: "1.5px solid rgba(255, 251, 251, 0.35)",
    borderRadius: "8px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "14px",
    ":hover": {
      border: "1.5px solid #FF9505",
    },
  },
  "& .MuiTabs-flexContainer": {
    gap: "100px",
  },
  "& .css-1aquho2-MuiTabs-indicator": {
    background: "none",
  },
  "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "white",
    ":hover": {
      color: "#FF9505",
    },
  },
}));
