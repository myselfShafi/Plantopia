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
        <option value={10}> Most Recent</option>
        <option value={20}> Most Relevent</option>
        <option value={30}> Highest to lowest Rating</option>
        <option value={40}> Lowest to highest Rating</option>
      </Select>
    </FormControl>
  );
};
