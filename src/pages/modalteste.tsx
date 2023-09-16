import { ModalCRUD, ModalCreate } from "@/components/Modal";
import { Stack } from "@chakra-ui/react";

export default function ModalTeste() {
    return (
      <Stack
        spacing={0}
        align={"center"}
      >
        <ModalCRUD></ModalCRUD>
        <ModalCreate></ModalCreate>
      </Stack>
    )
  }