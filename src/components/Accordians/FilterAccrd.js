import { ArrowDropDownRounded } from "@mui/icons-material";
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
import { CustomSlider } from "../CustomSlider";

const filterList = [
  {
    label: "Pot Size",
    list: [
      { id: 1, value: "Small" },
      { id: 2, value: "Medium" },
      { id: 3, value: "Large" },
      { id: 4, value: "XLarge" },
    ],
  },
  {
    label: "Availability",
    list: [
      { id: 1, value: "In stock" },
      { id: 2, value: "Out of stock" },
    ],
  },
  {
    label: "Pricing",
    isSlide: true,
  },
];

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
    <>
      {filterList.map((form, idx) => {
        return (
          <Accordion key={idx}>
            <AccordionSummary
              sx={{ textWrap: "nowrap" }}
              children={form.label}
              expandIcon={<ArrowDropDownRounded className="dual" />}
            />
            <AccordionDetails className="filter-div">
              {!form.isSlide ? (
                <List>
                  {form.list?.map((value) => {
                    const labelId = `${form.label}-${value.id}`;

                    return (
                      <ListItem key={value.id}>
                        <ListItemButton onClick={handleToggle(value.id)}>
                          <ListItemIcon>
                            <Checkbox
                              sx={{ padding: 0 }}
                              checked={checked.indexOf(value.id) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                              size="small"
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={value.value} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <CustomSlider />
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
