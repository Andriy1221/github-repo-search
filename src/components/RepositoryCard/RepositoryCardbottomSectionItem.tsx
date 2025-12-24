import { Box, Tooltip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import type { FunctionComponent, ReactNode } from "react";

const COLOR_DEFAULT = grey[500];
const COLOR_HOVER = grey[800];

type RepositoryCardBottomSectionItemProps = {
  value: string;
  title: string;
  icon: ReactNode;
};

export const RepositoryCardBottomSectionItem: FunctionComponent<
  RepositoryCardBottomSectionItemProps
> = ({ value, title, icon }) => {
  return (
    <Tooltip title={title} placement="top">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 0.5,
          color: COLOR_DEFAULT,
          "&:hover": {
            color: COLOR_HOVER,
            "& > svg": {
              color: COLOR_HOVER,
            },
          },
        }}
      >
        {icon}
        <Typography variant="body2">{value}</Typography>
      </Box>
    </Tooltip>
  );
};
