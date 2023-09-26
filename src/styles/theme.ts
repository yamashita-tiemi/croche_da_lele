import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        offWhite: "#FEFFF5",
        turquesa: "#007786",
        purple: "#634C71",
        lilac: "#A187B0"
    },
    styles: {
        global: {
            body: {
                bg: "#A187B0"
            }
        }
    },
    breakpoints: {
        // "2xl": "2560px",
        // "xl": "1440px",
        // "lg": "1024px",
        // "md": "768px",
        // "sm": "425px",
        // "xs": "375px",
        // "xxs": "320px",
        // "xxxs": "200px",
        base: "0em", // 0px
        fold: "17em", //280px
        xs: "20em", //320px
        sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
        md: "48em", // ~768px
        lg: "62em", // ~992px
        xl: "80em", // ~1280px
    }
})