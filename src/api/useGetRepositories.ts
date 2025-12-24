import { queryKeys } from "@/api/queryKeys";
import { API_BASE_URL, ITEMS_PER_PAGE_DEFAULT } from "@/constants";
import type { OrderOption, SortOption } from "@/searchOptions";
import type { RepositorySearchResponse } from "@/types/repositorySearchResponse";
import { useQuery } from "@tanstack/react-query";

type GetRepositoriesProps = {
  searchQuery: string;
  page: number;
  sort: SortOption;
  order: OrderOption;
};

export const useGetRepositories = ({
  searchQuery,
  page,
  sort,
  order,
}: GetRepositoriesProps) => {
  return useQuery<RepositorySearchResponse>({
    queryKey: [queryKeys.GET_REPOSITORIES, searchQuery, page, sort, order],
    queryFn: async () => {
      const url = new URL(`${API_BASE_URL}/repositories`);
      url.searchParams.append("q", searchQuery);
      url.searchParams.append("per_page", ITEMS_PER_PAGE_DEFAULT.toString());
      url.searchParams.append("page", page.toString());
      url.searchParams.append("sort", sort);
      url.searchParams.append("order", order);

      try {
        const res = await fetch(url.toString(), {
          method: "GET",
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        return await res.json();
      } catch (error) {
        throw new Error("useGetRepositories failed ", { cause: error });
      }
    },
    enabled: !!searchQuery,
    placeholderData: (previousData, previousQuery) => {
      // Only use placeholder data if the search query hasn't changed
      // This prevents old search results from showing when starting a new search
      if (previousQuery?.queryKey[1] === searchQuery) {
        return previousData;
      }
      return undefined;
    },
  });
};
