import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionMembros } from "@/components/Section";
import { Stack } from "@chakra-ui/react";

export default function Membros() {
    return (
      <Stack
        spacing={0}
      >
        <Navbar login={"Login"} href={"/login"}></Navbar>
        <SectionMembros></SectionMembros>
        <Footer></Footer>
      </Stack>
    )
}