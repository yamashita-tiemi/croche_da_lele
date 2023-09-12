import { Navbar } from "@/components/Navbar";
import { SectionContatoPrimary, SectionContatoSecondary } from "@/components/Section";

import { Stack } from "@chakra-ui/react";

export default function Contato() {
    return (
      <Stack
        spacing={0}
      >
        <Navbar></Navbar>
        <SectionContatoPrimary></SectionContatoPrimary>
        <SectionContatoSecondary></SectionContatoSecondary>
      </Stack>
    )
  }