import { Box } from "@mui/material";
import type { FunctionComponent, ReactNode } from "react";

type RepositoryCardGridProps = {
  children: ReactNode;
};

export const RepositoryCardGrid: FunctionComponent<RepositoryCardGridProps> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        width: 1,
        display: "grid",
        gridTemplateColumns: {
          xxs: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        },
        gap: { xs: 2, md: 4 },
      }}
    >
      {children}
    </Box>
  );
};
