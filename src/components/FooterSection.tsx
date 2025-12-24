import { Box, Link, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const PERSONAL_GITHUB_PROFILE_LINK = "https://github.com/Andriy1221";

export const FooterSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        alignItems: "center",
        mt: "auto",
      }}
    >
      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "center", color: "text.secondary" }}
      >
        This is a project created by{" "}
        <Link
          href={PERSONAL_GITHUB_PROFILE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            textDecoration: "none",
            "&:hover": { color: blue[600], textDecoration: "underline" },
          }}
        >
          Andriy1221
        </Link>
      </Typography>
      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "center", color: "text.secondary" }}
      >
        This project is using a public API with a rate limit of 10 requests per
        minute
      </Typography>
    </Box>
  );
};
