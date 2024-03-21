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
      <Button variant="outlined" onClick={decrement}>
        <RemoveRounded />
      </Button>

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
      <Button variant="outlined" onClick={increment}>
        <AddRounded />
      </Button>

      {(quantity > 20 || quantity < 1) && (
        <Typography ml={"2rem"} color={"error"}>
          {quantity > 20 ? "Max" : "Min"}. order quantity is{" "}
          {quantity > 20 ? "20" : "1"}
        </Typography>
      )}
    </Stack>
  );
};
