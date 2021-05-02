import {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import {Head} from "next/document";
import {NotoSansKr} from "../styles/font-face";

const MyApp = ({Component, pageProps}) => {
    return <ThemeProvider theme={theme}>
        <style dangerouslySetInnerHTML={{__html: NotoSansKr}}/>
        <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp