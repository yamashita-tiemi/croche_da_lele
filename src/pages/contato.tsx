import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionContatoPrimary, SectionContatoSecondary } from "@/components/Section";

import { Stack } from "@chakra-ui/react";

export default function Contato() {
    return (
      <Stack
        spacing={0}
      >
        <Navbar login={"Login"} href={"/login"}></Navbar>
        <SectionContatoPrimary></SectionContatoPrimary>
        <SectionContatoSecondary></SectionContatoSecondary>
        <Footer></Footer>
      </Stack>
    )
  }