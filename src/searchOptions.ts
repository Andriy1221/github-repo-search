export enum SortOption {
  STARS = "stars",
  FORKS = "forks",
}

export enum OrderOption {
  DESC = "desc",
  ASC = "asc",
}

export const sortOptions = [
  {
    value: SortOption.STARS,
    title: "Stars",
  },
  {
    value: SortOption.FORKS,
    title: "Forks",
  },
];

export const orderOptions = [
  {
    value: OrderOption.DESC,
    title: "Desc",
  },
  {
    value: OrderOption.ASC,
    title: "Asc",
  },
];
