import { Flex, HStack, Stack } from "@chakra-ui/react";
import { TextIndex, TextIndexPrimary } from "../Text";
import { TitleSection } from "../Title";
import { CardSection, CardShop } from "../Card";
import { SectionIndexTerciaryLeft, SectionIndexTerciaryRight } from "../Section";
import { Image } from "../Image";

interface ArticleIndexPrimaryProps {
    text1: string
    text2: string
    text3: string
}

export function ArticleIndexPrimary({ text1, text2, text3 }:ArticleIndexPrimaryProps) {
    return(
        <Stack
        // bg={"blue"}
            as="article"
            justifyContent={"space-around"}
            alignItems={[
                "center",
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start",
                "flex-start"
            ]}
            height={"70%"}
            paddingTop={20}
            spacing={10}
            paddingBottom={5}
            paddingLeft={[0,0,0,0,10,10,10]}
        >
            <TextIndexPrimary text={text1} size={"24px"}/>
            <TextIndexPrimary text={text2} size={"40px"}/>
            <TextIndexPrimary text={text3} size={"32px"}/>
        </Stack>
    )
}

export function ArticleIndexSecundary() {
    return(
        <Stack
            as="article"
            width={"100%"}
            minHeight={"710px"}
            align={"center"}
            paddingTop={20}
            spacing={32}
            textAlign={"center"}
        >
            <TitleSection title={"Nossos Produtos"} size={"48px"} />
            <Flex
                width={"100%"}
                justifyContent={"space-around"}
                gap={10}
                alignItems={"center"}
                flexDirection={[
                    "column",
                    "column",
                    "column",
                    "column",
                    "row",
                    "row",
                    "row",
                ]}
            >
                <CardSection src={"/bolsas.png"} alt={""} title={"Bolsas"} width={120} height={125} id={"Bolsas"}/>
                <CardSection src={"/croppeds.png"} alt={""} title={"Croppeds"} width={120} height={125} id={"Croppeds"}/>
                <CardSection src={"/vestidos.png"} alt={""} title={"Vestidos"} width={120} height={125} id={"Vestidos"} />
            </Flex>
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
            paddingTop={20}
            paddingBottom={32}
            spacing={16}
            textAlign={"center"}
        >
            <TitleSection title={"Crie laços, entrelaçe paixão"} size={"48px"} />
            <Flex
                width={"95%"}
                justifyContent={"space-between"}
                flexDirection={[
                    "column",
                    "column",
                    "column",
                    "column",
                    "row",
                    "row",
                    "row",
                ]}
                alignItems={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "default",
                    "default",
                    "default"
                ]}
            >
                <SectionIndexTerciaryLeft></SectionIndexTerciaryLeft>
                <Stack width={[
                    "80%",
                    "80%",
                    "80%",
                    "60%",
                    "40%",
                    "30%",
                    "30%"
                ]}>
                    <Image src={"/index_3.png"} alt={""} width={378} height={474} py="5"/>
                </Stack>
                <SectionIndexTerciaryRight></SectionIndexTerciaryRight>
            </Flex>
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
    id: string
}

export function ArticleShop({ title, color, colorCard, src1, alt1, titleItem1, price1, width1, height1, w1, src2, alt2, titleItem2, price2, width2, height2, w2, src3, alt3, titleItem3, price3, width3, height3, w3, id }:ArticleShopProps) {
    return(
        <Stack
            bg={color}
            as="article"
            width={"100%"}
            minHeight={"810px"}
            align={"center"}
            justifyContent={"center"}
            paddingTop={20}
            paddingBottom={32}
            spacing={20}
            id={id}
            textAlign={"center"}
        >
            <TitleSection title={title} size={"48px"} />

            <Flex
                width={"90%"}
                justifyContent={"space-between"}
                gap={5}
                flexDirection={[
                    "column",
                    "column",
                    "column",
                    "column",
                    "row",
                    "row",
                    "row",
                ]}
                alignItems={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "default",
                    "default",
                    "default"
                ]}
            >
                <CardShop src={src1} alt={alt1} width={width1} height={height1} title={titleItem1} text={price1} color={colorCard} w={w1}></CardShop>
                <CardShop src={src2} alt={alt2} width={width2} height={height2} title={titleItem2} text={price2} color={colorCard} w={w2}></CardShop>
                <CardShop src={src3} alt={alt3} width={width3} height={height3} title={titleItem3} text={price3} color={colorCard} w={w3}></CardShop>
            </Flex>
            
        </Stack>
    )
}

interface ArticleContatoPrimaryProps {
    text1: string
    text2: string
    text3: string
}

export function ArticleContatoPrimary({ text1, text2, text3 }:ArticleContatoPrimaryProps) {
    return(
        <Stack
            as="article"
            justifyContent={"space-around"}
            alignItems={"center"}
            height={"70%"}
            paddingTop={20}
            spacing={10}
            paddingBottom={5}
        >
            <TextIndex text={text1} size={"24px"} color={"offWhite"}/>
            <TextIndex text={text2} size={"40px"} color={"offWhite"}/>
            <TextIndex text={text3} size={"32px"} color={"offWhite"}/>
        </Stack>
    )
}