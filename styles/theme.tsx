// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/poppins'
import '@fontsource/anek-telugu'

const colors = {
  custom: {
    100: "#F1FAEE",
    101: "#E5EDE2",
    102: "#D9E1D6",
    200: "#A8DADC",
    201: "#A0CFD1",
    202: "#97C4C6",
    300: "#457B9D",
    301: "#37627E",
    302: "#294A5E",
    400: "#1D3557",
    401: '#172A46',
    402: '#112034',
    500: "#E63946",
    501: "#CF333F",
    502: "#8A222A",
  },
  special: {
    150: "#DEF2E9",
    200: "#C5E6E4",
  }
}

const fonts = {
  heading: `Poppins, sans-serif`,
  body: `'Anek Telugu', sans-serif`, 
}

const fontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700,
}

const fontSize = {
  xs: "10px",
  sm: "12px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  '2xl': "24px",
}

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em'
}

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  colors,
  fonts,
  fontWeight,
  fontSize,
  breakpoints,
})

export default customTheme;