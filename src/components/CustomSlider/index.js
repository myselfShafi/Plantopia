import { Slider, Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";

export const CustomSlider = () => {
  const [price, setPrice] = useState([0, 100]);

  return (
    <Fragment>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography children={price[0] * 20} />
        <Typography children={price[1] * 20} />
      </Stack>
      <Slider
        value={price}
        size="small"
        onChange={(e, state) => setPrice(state)}
      />
    </Fragment>
  );
};
