import { useMediaQueries } from "@/hooks/useMediaQueries";
import { Box, Button, Divider, Skeleton, Stack } from "@mui/material";

export const ProductDetailSkeleton = () => {
  const { tabmobView } = useMediaQueries();
  return (
    <Box mx={tabmobView ? "1rem" : "5rem"} my={tabmobView && "2.5rem"}>
      <Skeleton variant="text" sx={{ fontSize: "2.1rem" }} width={"50%"} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"30%"} />
      <Skeleton
        variant="rectangular"
        width={"40%"}
        height={"1.5rem"}
        sx={{ my: "1rem" }}
      />
      <Skeleton variant="rectangular" height={"1.75rem"} sx={{ mb: "1rem" }} />
      <Stack flexDirection={"row"} justifyContent={"space-between"} px={"1rem"}>
        {[1, 2].map((e, id) => {
          return (
            <Skeleton
              key={id}
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={"30%"}
            />
          );
        })}
      </Stack>
      <Divider sx={{ my: "2rem", opacity: 0.3 }} />
      <Skeleton variant="rectangular" height={"2.5rem"} width={"40%"} />
      <Stack flexDirection={"row"} gap={2} my={"2rem"}>
        <Button variant="contained" fullWidth disabled>
          <Skeleton width={"100%"} />
        </Button>
        <Button variant="outlined" disabled>
          <Skeleton width={"100%"} />
        </Button>
      </Stack>
      <Button variant="outlined" fullWidth disabled>
        <Skeleton width={"100%"} />
      </Button>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        gap={2}
        mt={"2rem"}
      >
        {[1, 2, 3].map((e, id) => {
          return (
            <Stack
              key={id}
              alignItems={"center"}
              textAlign={"center"}
              width={"30%"}
              gap={".5rem"}
            >
              <Skeleton variant="circular" width={"5rem"} height={"5rem"} />
              {[1, 2].map((e, id) => {
                return (
                  <Skeleton
                    key={id}
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"100%"}
                  />
                );
              })}
            </Stack>
          );
        })}
      </Stack>
      <Divider sx={{ my: "2rem", opacity: 0.3 }} />
    </Box>
  );
};
