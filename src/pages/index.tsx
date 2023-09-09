import { ArticleIndexPrimary, ArticleIndexSecundary } from "@/components/Article";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
      spacing={0}
    >
      <Navbar></Navbar>
      <ArticleIndexPrimary></ArticleIndexPrimary>
      <ArticleIndexSecundary></ArticleIndexSecundary>
    </Stack>
  )
}