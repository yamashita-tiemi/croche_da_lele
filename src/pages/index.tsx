import { ArticleIndexPrimary } from "@/components/Article";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack>
      <Navbar></Navbar>
      <ArticleIndexPrimary></ArticleIndexPrimary>
    </Stack>
  )
}