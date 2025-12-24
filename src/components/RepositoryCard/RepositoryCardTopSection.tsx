import { OpenInNewRounded } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import type { FunctionComponent } from "react";

const AVATAR_SIZE = 40;

type RepositoryCardTopSectionProps = {
  ownerAvatarUrl: string | undefined;
  repositoryName: string;
  isHover: boolean;
};

export const RepositoryCardTopSection: FunctionComponent<
  RepositoryCardTopSectionProps
> = ({ ownerAvatarUrl, repositoryName, isHover }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        height: 52,
      }}
    >
      <Avatar
        alt="Repository owner avatar"
        src={ownerAvatarUrl}
        sx={{ height: AVATAR_SIZE, width: AVATAR_SIZE }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: isHover ? blue[600] : grey[800],
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
            wordBreak: "break-word",
            maxWidth: 1,
          }}
        >
          {repositoryName}
        </Typography>
        <OpenInNewRounded
          sx={{
            height: 20,
            width: 20,
            ml: 2,
            color: blue[600],
            opacity: isHover ? 1 : 0,
          }}
        />
      </Box>
    </Box>
  );
};
