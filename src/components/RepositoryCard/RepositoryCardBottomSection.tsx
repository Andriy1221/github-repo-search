import { RepositoryCardBottomSectionItem } from "@/components/RepositoryCard/RepositoryCardbottomSectionItem";
import { CalendarMonthRounded, ForkRight, Star } from "@mui/icons-material";
import { Box } from "@mui/material";
import { format } from "date-fns";
import type { FunctionComponent } from "react";

const ICON_SIZE = 20;
const ICON_STYLE = { height: ICON_SIZE, width: ICON_SIZE };

type RepositoryCardBottomSectionProps = {
  starCount: number;
  forkCount: number;
  createdDate: string;
};

export const RepositoryCardBottomSection: FunctionComponent<
  RepositoryCardBottomSectionProps
> = ({ starCount, forkCount, createdDate }) => {
  const formattedCreatedDate = format(createdDate, "MMM yyyy");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <RepositoryCardBottomSectionItem
          title="Stars"
          value={starCount.toLocaleString()}
          icon={<Star sx={ICON_STYLE} />}
        />
        <RepositoryCardBottomSectionItem
          title="Forks"
          value={forkCount.toLocaleString()}
          icon={<ForkRight sx={ICON_STYLE} />}
        />
      </Box>
      <RepositoryCardBottomSectionItem
        title="Creation date"
        value={formattedCreatedDate}
        icon={<CalendarMonthRounded sx={ICON_STYLE} />}
      />
    </Box>
  );
};
