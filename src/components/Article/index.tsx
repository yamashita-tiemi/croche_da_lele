import { HStack, Stack } from "@chakra-ui/react";
import { TextIndex } from "../Text";
import { TitleSection } from "../Title";
import { CardSection } from "../Card";
import { SectionIndexTerciaryLeft, SectionIndexTerciaryRight } from "../Section";
import { Image } from "../Image";

export function ArticleIndexPrimary() {
    return(
        <Stack
            as="article"
            backgroundImage={"/img_index.png"}
            width={"100%"}
            height={"710px"}
            bgRepeat={"no-repeat"}
            paddingX={12}
            paddingTop={40}
            justifyContent={"space-around"}
        >
            <TextIndex text={"Entre na trama da elegância com nossos crochês feitos à mão, onde cada ponto conta uma história única."} size={"24px"} color={"offWhite"} w="25%" />
            <TextIndex text={"Estilo que é costurado com fios de carinho: explore nossa coleção"} size={"40px"} color={"offWhite"} w="30%" />
            <TextIndex text={"Conheça nossa loja"} size={"32px"} color={"offWhite"} />
        </Stack>
    )
}


export function ArticleIndexSecundary() {
    return(
        <Stack
            as="article"
            width={"100%"}
            height={"710px"}
            align={"center"}
            paddingTop={32}
            spacing={32}
        >
            <TitleSection title={"Nossos Produtos"} />
            <HStack
                width={"100%"}
                justifyContent={"space-around"}
            >
                <CardSection src={"/bolsa1.png"} alt={""} title={"Bolsas"} width={120} height={125} w="40%"/>
                <CardSection src={"/bolsa2.jpeg"} alt={""} title={"Croppeds"} width={559} height={672} w="40%"/>
                <CardSection src={"/bolsa1.png"} alt={""} title={"Vestidos"} width={120} height={125} />
            </HStack>
        </Stack>
    )
}

export function ArticleIndexTerciary() {
    return(
        <Stack
            as="article"
            width={"100%"}
            // height={"710px"}
            align={"center"}
            paddingTop={32}
            paddingBottom={32}
            spacing={16}
        >
            <TitleSection title={"Crie laços, entrelaçe paixão"} />
            <HStack
                width={"95%"}
                justifyContent={"space-between"}
            >
                <SectionIndexTerciaryLeft></SectionIndexTerciaryLeft>
                <Image src={"/index_3.png"} alt={""} width={378} height={474} w="30%"/>
                <SectionIndexTerciaryRight></SectionIndexTerciaryRight>
            </HStack>
        </Stack>
    )
}