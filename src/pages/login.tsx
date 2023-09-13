import { SectionLogin } from "@/components/Section";
import { Stack } from "@chakra-ui/react";

export default function Login() {
    return (
      <Stack
        spacing={0}
        align={"center"}
      >
        <SectionLogin></SectionLogin>
      </Stack>
    )
  }