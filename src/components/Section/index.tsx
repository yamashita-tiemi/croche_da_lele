import { Stack } from "@chakra-ui/react";
import { TextIndex } from "../Text";
import { ArticleIndexPrimary } from "../Article";

export function SectionIndexPrimary() {
    return(
        <Stack
            as="section"
            backgroundImage={"/img_index.png"}
            width={"100%"}
            height={"710px"}
            bgRepeat={"no-repeat"}
            justifyContent={"flex-end"}
            paddingBottom={10}
        >
            <ArticleIndexPrimary
                text1={"Entre na trama da elegância com nossos crochês feitos à mão, onde cada ponto conta uma história única."}
                text2={"Estilo que é costurado com fios de carinho: explore nossa coleção"}
                text3={"Conheça nossa loja"}
            ></ArticleIndexPrimary>
        </Stack>
    )
}

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

export function SectionContatoPrimary() {
    return(
        <Stack
            as="section"
            bg={"purple"}
            width={"100%"}
            height={"710px"}
            paddingX={12}
            paddingTop={40}
            justifyContent={"space-around"}
        >
            <ArticleIndexPrimary
                text1={"Feito com fios, amor e inspiração: vista a originalidade dos crochês que cativam olhares."}
                text2={"Cada ponto é uma expressão, cada peça é uma história."}
                text3={"Crochês feitos à mão..."}
            ></ArticleIndexPrimary>
        </Stack>
    )
}