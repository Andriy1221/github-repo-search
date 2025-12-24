import { Skeleton } from "@mui/material";

export const RepositoryCardSkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      sx={{ height: 232, width: 1, borderRadius: "20px" }}
    />
  );
};
