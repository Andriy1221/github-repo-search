import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import { ArrowDownward, ArrowUpward, Search } from "@mui/icons-material";
import { OrderOption, sortOptions, type SortOption } from "@/searchOptions";

type SearchInputProps = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  order: OrderOption;
  onOrderChange: () => void;
};

export const SearchInput: FunctionComponent<SearchInputProps> = ({
  searchInput,
  setSearchInput,
  sort,
  onSortChange,
  order,
  onOrderChange,
}) => {
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value as SortOption);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 2,
        width: 1,
      }}
    >
      <TextField
        placeholder="Type a repo name"
        aria-label="Search for GitHub repositories"
        value={searchInput}
        fullWidth
        slotProps={{ input: { startAdornment: <Search /> } }}
        onChange={handleSearchInputChange}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          width: { xs: 1, md: "auto" },
        }}
      >
        <FormControl sx={{ width: { xs: 1, md: "auto" } }}>
          <InputLabel id="sort-select">Sort by</InputLabel>
          <Select
            labelId="sort-select"
            label="Sort by"
            value={sort}
            sx={{ width: { xs: 1, md: "auto" } }}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton
          aria-label={
            order === OrderOption.DESC ? "Sort descending" : "Sort ascending"
          }
          sx={{
            height: 58,
            width: 58,
            borderRadius: "4px",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            "&:hover": { borderColor: "black" },
          }}
          disableRipple
          onClick={onOrderChange}
        >
          {order === OrderOption.DESC ? (
            <ArrowDownward
              aria-label="Arrow down icon"
              fontSize="small"
              sx={{ color: "black" }}
            />
          ) : (
            <ArrowUpward
              aria-label="Arrow up icon"
              fontSize="small"
              sx={{ color: "black" }}
            />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};
