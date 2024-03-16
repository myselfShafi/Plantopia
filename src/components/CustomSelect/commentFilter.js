import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { FormControl, Select } from "@mui/material";
import { useState } from "react";

export const CommentFilter = () => {
  const [value, setValue] = useState(10);
  return (
    <FormControl
      sx={{
        alignSelf: "flex-end",
        maxWidth: "17rem",
        width: "100%",
      }}
    >
      <Select
        open={true}
        IconComponent={KeyboardArrowDownRounded}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        native
      >
        <option value={10} children={"Most Recent"} />
        <option value={20} children={"Most Relevent"} />
        <option value={30} children={"Highest to lowest Rating"} />
        <option value={40} children={"Lowest to highest Rating"} />
      </Select>
    </FormControl>
  );
};
