import { Footer } from "@/components/Footer";
import { IconShop } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { SectionContatoPrimary, SectionContatoSecondary } from "@/components/Section";

import { Stack } from "@chakra-ui/react";

export default function Contato() {
    return (
      <Stack
        spacing={0}
      >
        <Navbar login={"Login"} href={"/login"} children={<IconShop/>}></Navbar>
        <SectionContatoPrimary></SectionContatoPrimary>
        <SectionContatoSecondary></SectionContatoSecondary>
        <Footer></Footer>
      </Stack>
    )
  }