import { Box, Divider, Link, Typography } from "@mui/material";
import { useState, type FunctionComponent } from "react";
import { blue, grey } from "@mui/material/colors";
import type { RepositoryDetails } from "@/types/repositorySearchResponse";
import { RepositoryCardBottomSection } from "@/components/RepositoryCard/RepositoryCardBottomSection";
import { RepositoryCardTopSection } from "@/components/RepositoryCard/RepositoryCardTopSection";

const DESCRIPTION_FALLBACK = "No description available";

type RepositoryCardProps = {
  repository: RepositoryDetails;
};

export const RepositoryCard: FunctionComponent<RepositoryCardProps> = ({
  repository,
}) => {
  const [isHover, setisHover] = useState(false);

  return (
    <Link
      href={repository.html_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${repository.name} - Open repository in new tab`}
      sx={{ textDecoration: "none", display: "block" }}
    >
      <Box
        sx={{
          height: 230,
          borderRadius: "20px",
          border: "1px solid",
          borderColor: isHover ? blue[600] : grey[100],
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
          overflow: "hidden",
        }}
        onMouseOver={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
      >
        <Box sx={{ m: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <RepositoryCardTopSection
            ownerAvatarUrl={repository.owner?.avatar_url}
            repositoryName={repository.name}
            isHover={isHover}
          />
          <Box sx={{ height: 72 }}>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                wordBreak: "break-word",
                textOverflow: "ellipsis",
              }}
            >
              {repository.description ?? DESCRIPTION_FALLBACK}
            </Typography>
          </Box>
          <Divider sx={{ borderColor: grey[100] }} />
          <RepositoryCardBottomSection
            starCount={repository.stargazers_count}
            forkCount={repository.forks_count}
            createdDate={repository.created_at}
          />
        </Box>
      </Box>
    </Link>
  );
};
