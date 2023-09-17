import { SectionAdmin } from "@/components/Admin";
import { Footer } from "@/components/Footer";
import { IconLogOut } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@chakra-ui/react";

export default function Membros() {
    return (
      <Stack
        spacing={0}
      >
        <Navbar login={"Gerenciamento"} href={"/admin"} children={<IconLogOut/>}></Navbar>
        <SectionAdmin></SectionAdmin>
        <Footer></Footer>
      </Stack>
    )
}