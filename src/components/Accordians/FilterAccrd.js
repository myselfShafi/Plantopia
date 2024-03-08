import { Add } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export const FilterAccrd = () => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Accordion elevation={0}>
      <AccordionSummary
        children={"Size"}
        expandIcon={<Add className="dual" fontSize="small" />}
      />
      <AccordionDetails
        children={"afshdnfgbsdfagrdtf"}
        sx={{ background: "rgba(34, 34, 34,1)" }}
      >
        <List>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={value} disablePadding>
                <ListItemButton onClick={handleToggle(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      sx={{ padding: 0 }}
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                      size="small"
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                    sx={{ fontSize: ".5rem" }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
