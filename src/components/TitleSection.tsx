import { GitHub } from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material/styles";

const ICON_SIZE_DESKTOP = 60;
const ICON_SIZE_MOBILE = 40;

export const TitleSection = () => {
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const iconSize = isMobileScreen ? ICON_SIZE_MOBILE : ICON_SIZE_DESKTOP;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      <GitHub sx={{ height: iconSize, width: iconSize }} />
      <Typography variant={isMobileScreen ? "h4" : "h3"}>
        Repo Search
      </Typography>
    </Box>
  );
};
