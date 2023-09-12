import { Stack } from "@chakra-ui/react";
import { TextIndex } from "../Text";
import { TitleSection } from "../Title";

export function SectionIndexTerciaryLeft() {
    return(
        <Stack
            as="section"
            width={"30%"}
            spacing={14}
        >
            <TextIndex text={"Do conforto à moda"} size={"32px"} color={"offWhite"} />

            <Stack
                spacing={5}
            >
                {/* <ul> */}
                <TextIndex text={"Extraordinário"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Exclusivos"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Elegância"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Arte"} size={"32px"} color={"offWhite"} />
                {/* </ul> */}
            </Stack>
        </Stack>
    )
}

export function SectionIndexTerciaryRight() {
    return(
        <Stack
            as="section"
            width={"30%"}
            spacing={14}
            textAlign={"end"}
            align={"flex-end"}
        >
            <TextIndex text={"Aconchego artesanal"} size={"32px"} color={"offWhite"} />
            <TextIndex text={"Do conforto à moda, nossos crochês dão vida a cada ponto, transformando o comum em extraordinário."} size={"32px"} color={"offWhite"} w="80%"/>

        </Stack>
    )
}