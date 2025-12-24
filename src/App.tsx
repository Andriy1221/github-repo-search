import { FooterSection } from "@/components/FooterSection";
import { SearchSection } from "@/components/Search/SearchSection";
import { TitleSection } from "@/components/TitleSection";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          pt: { xs: 4, md: 8 },
          pb: { xs: 6, md: 8 },
          minHeight: "90dvh",
        }}
      >
        <TitleSection />
        <SearchSection />
        <FooterSection />
      </Box>
    </Container>
  );
}

export default App;
