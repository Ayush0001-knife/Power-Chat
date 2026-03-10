import { Grid, Skeleton } from "@mui/material";

export const LayoutLoader = () => {
  return (
    <Grid container sx={{ height: "calc(100vh - 4rem)" }} spacing={"1rem"}>
      {/* Left Sidebar */}
      <Grid
        size={{ md: 3 }}
        sx={{
          display: { xs: "none", md: "block" },
          height: "100%",
        }}
      >
        <Stack spacing={"1rem"}>
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
          <Skeleton variant="rounded" height={"5rem"} />
        </Stack>
      </Grid>

      {/* Chat Area */}
      <Grid
        size={{ xs: 12, sm: 8, md: 6 }}
        sx={{
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>

      {/* Right Panel */}
      <Grid
        size={{ md: 3 }}
        sx={{
          display: { xs: "none", md: "block" },
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};
