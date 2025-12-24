import { Box, Skeleton, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

type SearchResultCountProps = {
  resultCount: number | undefined;
  isFetching: boolean;
};

export const SearchResultCount: FunctionComponent<SearchResultCountProps> = ({
  resultCount,
  isFetching,
}) => {
  return (
    <Box height={40} aria-live="polite">
      {isFetching ? (
        <Skeleton variant="text" width={140} />
      ) : (
        resultCount !== undefined && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Typography
              component="span"
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              {resultCount.toLocaleString()}
            </Typography>{" "}
            repos found
          </Typography>
        )
      )}
    </Box>
  );
};
