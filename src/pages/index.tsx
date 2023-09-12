import { ArticleIndexPrimary, ArticleIndexSecundary, ArticleIndexTerciary, ArticleShop } from "@/components/Article";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
      spacing={0}
    >
      <Navbar></Navbar>
      <ArticleIndexPrimary></ArticleIndexPrimary>
      <ArticleIndexSecundary></ArticleIndexSecundary>
      <ArticleIndexTerciary></ArticleIndexTerciary>
      <ArticleShop title={"Nossas Bolsas"} color={"purple"} src1={"/bolsa1.png"} alt1={""} width1={120} height1={125} titleItem1={"Bolsa Redonda"} price1={"R$109,90"} src2={"/bolsa1.png"} alt2={""} width2={120} height2={125} titleItem2={"Bolsa Sun"} price2={"R$129,90"} src3={"/bolsa1.png"} alt3={""} width3={120} height3={125} titleItem3={"Bolsa Pink"} price3={"R$99,90"} colorCard={"lilac"}></ArticleShop>
      <ArticleShop title={"Nossas Bolsas"} color={"lilac"} src1={"/bolsa1.png"} alt1={""} width1={120} height1={125} titleItem1={"Bolsa Redonda"} price1={"R$109,90"} src2={"/bolsa1.png"} alt2={""} width2={120} height2={125} titleItem2={"Bolsa Sun"} price2={"R$129,90"} src3={"/bolsa1.png"} alt3={""} width3={120} height3={125} titleItem3={"Bolsa Pink"} price3={"R$99,90"} colorCard={"purple"}></ArticleShop>
      <ArticleShop title={"Nossas Bolsas"} color={"purple"} src1={"/bolsa1.png"} alt1={""} width1={120} height1={125} titleItem1={"Bolsa Redonda"} price1={"R$109,90"} src2={"/bolsa1.png"} alt2={""} width2={120} height2={125} titleItem2={"Bolsa Sun"} price2={"R$129,90"} src3={"/bolsa1.png"} alt3={""} width3={120} height3={125} titleItem3={"Bolsa Pink"} price3={"R$99,90"} colorCard={"lilac"}></ArticleShop>
    </Stack>
  )
}