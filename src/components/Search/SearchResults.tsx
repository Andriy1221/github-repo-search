import type { FunctionComponent } from "react";
import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";
import { RepositoryCardGrid } from "@/components/RepositoryCard/RepositoryCardGrid";
import type { RepositorySearchResponse } from "@/types/repositorySearchResponse";
import { skeletonArrayFactory } from "@/utils";
import { RepositoryCardSkeleton } from "@/components/RepositoryCard/RepositoryCardSkeleton";
import { RepositoryCard } from "@/components/RepositoryCard/RepositoryCard";

const skeletonArray = skeletonArrayFactory(9);

type SearchResultsProps = {
  searchResult: RepositorySearchResponse | undefined;
  isFetching: boolean;
  isError: boolean;
  onRetrySearch: () => void;
};

export const SearchResults: FunctionComponent<SearchResultsProps> = ({
  searchResult,
  isFetching,
  isError,
  onRetrySearch,
}) => {
  if (isFetching) {
    return (
      <RepositoryCardGrid aria-label="Loading search results">
        {skeletonArray.map((skeleton) => (
          <RepositoryCardSkeleton key={skeleton} />
        ))}
      </RepositoryCardGrid>
    );
  }

  if (isError) {
    return (
      <Alert
        severity="error"
        sx={{ mt: { xs: 4, md: 8 }, width: { xs: 1, md: 500 } }}
        action={
          <Button color="inherit" size="small" onClick={onRetrySearch}>
            Retry search
          </Button>
        }
      >
        <AlertTitle>Something went wrong</AlertTitle>
        <Typography variant="body2">
          An error occured while searching
        </Typography>
      </Alert>
    );
  }

  if (searchResult?.total_count === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 4, md: 8 },
        }}
      >
        <Typography variant="h5" textAlign="center">
          No results
        </Typography>
        <Typography
          color="seondary"
          textAlign="center"
          sx={{ color: "text.secondary" }}
        >
          Couldn't find any repositories for your search term, please try again
        </Typography>
      </Box>
    );
  }

  return (
    <RepositoryCardGrid>
      {searchResult?.items.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </RepositoryCardGrid>
  );
};
