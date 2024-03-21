import { Grass } from "@mui/icons-material";
import { Chip, Divider, Paper, Stack, Typography } from "@mui/material";

export const CommentPanel = ({ data }) => {
  return (
    <Paper sx={{ p: "1rem", mb: "1rem" }} elevation={0}>
      <Stack flexDirection={"row"} gap={2} alignItems={"center"} mb={".8rem"}>
        <Chip
          className="rating"
          variant="filled"
          label={data.rating}
          size="small"
          icon={<Grass fontSize="small" color="background" />}
        />
        <Typography variant="h5">{data.subject}</Typography>
      </Stack>
      <Typography variant="body1" gutterBottom>
        {data.comment}
      </Typography>
      <Stack
        flexDirection={"row"}
        gap={2}
        alignItems={"center"}
        color={"text.secondary"}
      >
        <Typography variant="subtitle1" fontWeight={800}>
          {data.user}
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ height: "1.2rem" }} />
        <Typography variant="subtitle1">{data.comment_date}</Typography>
      </Stack>
    </Paper>
  );
};
