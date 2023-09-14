import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionAdmin } from "@/components/Section";
import { Stack } from "@chakra-ui/react";

export default function Membros() {
    return (
      <Stack
        spacing={0}
      >
        <Navbar login={"Gerenciamento"} href={"/admin"}></Navbar>
        <SectionAdmin></SectionAdmin>
        <Footer></Footer>
      </Stack>
    )
}