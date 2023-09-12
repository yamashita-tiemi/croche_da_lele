import { HStack, Stack } from "@chakra-ui/react";
import { TextIndex } from "../Text";
import { TitleSection } from "../Title";
import { CardSection, CardShop } from "../Card";
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
            <TitleSection title={"Nossos Produtos"} size={"48px"} />
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
            <TitleSection title={"Crie laços, entrelaçe paixão"} size={"48px"} />
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

interface ArticleShopProps {
    title: string
    color: string
    colorCard: string
    src1: string
    alt1: string
    width1: number
    height1: number
    titleItem1: string
    price1: string
    w1?: string
    src2: string
    alt2: string
    width2: number
    height2: number
    titleItem2: string
    price2: string
    w2?: string
    src3: string
    alt3: string
    width3: number
    height3: number
    titleItem3: string
    price3: string
    w3?: string
}

export function ArticleShop({ title, color, colorCard, src1, alt1, titleItem1, price1, width1, height1, w1, src2, alt2, titleItem2, price2, width2, height2, w2, src3, alt3, titleItem3, price3, width3, height3, w3 }:ArticleShopProps) {
    return(
        <Stack
            bg={color}
            as="article"
            width={"100%"}
            height={"710px"}
            align={"center"}
            paddingTop={20}
            paddingBottom={32}
            spacing={16}
        >
            <TitleSection title={title} size={"48px"} />

            <HStack
                width={"90%"}
                justifyContent={"space-between"}
            >
                <CardShop src={src1} alt={alt1} width={width1} height={height1} title={titleItem1} text={price1} color={colorCard} w={w1}></CardShop>
                <CardShop src={src2} alt={alt2} width={width2} height={height2} title={titleItem2} text={price2} color={colorCard} w={w2}></CardShop>
                <CardShop src={src3} alt={alt3} width={width3} height={height3} title={titleItem3} text={price3} color={colorCard} w={w3}></CardShop>
            </HStack>
            
        </Stack>
    )
}