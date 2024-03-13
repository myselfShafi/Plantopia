import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { Button, OutlinedInput, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const QuantitySelect = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    let add = parseInt(quantity);
    if (quantity < 20) {
      setQuantity(add + 1);
    }
    if (quantity === "" || quantity === null) {
      setQuantity(1);
    }
  };
  const decrement = () => {
    let remove = parseInt(quantity);
    if (quantity > 1) {
      setQuantity(remove - 1);
    }
    if (quantity === "" || quantity === null) {
      setQuantity(1);
    }
  };

  return (
    <Stack flexDirection={"row"} alignItems={"center"}>
      <Button
        children={<RemoveRounded />}
        variant="outlined"
        onClick={decrement}
      />

      <OutlinedInput
        value={quantity}
        onChange={(e) => {
          e.preventDefault();
          setQuantity(e.target.value);
        }}
        className="quantity-input"
        type="number"
        error={quantity > 20 || quantity < 1}
      />
      <Button
        children={<AddRounded />}
        variant="outlined"
        onClick={increment}
      />

      {(quantity > 20 || quantity < 1) && (
        <Typography
          children={`${quantity > 20 ? "Max" : "Min"}. order quantity is ${
            quantity > 20 ? "20" : "1"
          }`}
          ml={"2rem"}
          color={"error"}
        />
      )}
    </Stack>
  );
};
