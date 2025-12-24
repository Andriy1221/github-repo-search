import { useGetRepositories } from "@/api/useGetRepositories";
import { SearchInput } from "@/components/Search/SearchInput";
import { SearchResultCount } from "@/components/Search/SearchResultCount";
import { SearchResults } from "@/components/Search/SearchResults";
import { API_RESULTS_LIMIT, ITEMS_PER_PAGE_DEFAULT } from "@/constants";
import { OrderOption, SortOption } from "@/searchOptions";
import { Box, Pagination, useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";

const TOTAL_PAGES_LIMIT = Math.floor(
  API_RESULTS_LIMIT / ITEMS_PER_PAGE_DEFAULT
);

export const SearchSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(SortOption.STARS);
  const [order, setOrder] = useState(OrderOption.DESC);
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const {
    data: searchResult,
    isFetching,
    isError,
    refetch,
  } = useGetRepositories({
    searchQuery,
    page,
    sort,
    order,
  });

  const resultCount = searchResult?.total_count;

  const totalPages = useMemo(() => {
    if (!resultCount) return 0;
    if (resultCount < ITEMS_PER_PAGE_DEFAULT) return 1;
    const totalPagesActual = Math.floor(resultCount / ITEMS_PER_PAGE_DEFAULT);
    return Math.min(totalPagesActual, TOTAL_PAGES_LIMIT);
  }, [resultCount]);

  const showPagination =
    searchInput && searchQuery && !isError && totalPages > 0;

  useEffect(() => {
    // Debounce search input by 1s
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setPage(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  const handleSortChange = (value: SortOption) => {
    setSort(value);
    setPage(1);
  };

  const handleOrderChange = () => {
    setOrder(order === OrderOption.DESC ? OrderOption.ASC : OrderOption.DESC);
    setPage(1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: 1,
      }}
    >
      <SearchInput
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        sort={sort}
        onSortChange={handleSortChange}
        order={order}
        onOrderChange={handleOrderChange}
      />

      {searchInput && (
        <SearchResultCount resultCount={resultCount} isFetching={isFetching} />
      )}
      {searchInput && (
        <SearchResults
          searchResult={searchResult}
          isFetching={isFetching}
          isError={isError}
          onRetrySearch={refetch}
        />
      )}
      {showPagination && (
        <Pagination
          page={page}
          count={totalPages}
          boundaryCount={isMobileScreen ? 0 : 1}
          shape="rounded"
          aria-label="Search results pagination"
          sx={{ mt: 4 }}
          onChange={handlePageChange}
        />
      )}
    </Box>
  );
};
