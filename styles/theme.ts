import {css, CSSProp} from "styled-components";

interface IResponsiveSize {
    [device: string]: number | number[]
}

const responsiveSize: IResponsiveSize = {
    mobile: 440,
    tablet: [440, 1024],
    desktop: 1024,
}

interface IMedia {
    [device: string]: (...styles: string[]) => CSSProp | undefined
}

const media: IMedia = {
    mobile: (...styles: string[]) => css`@media only screen and (max-width: ${responsiveSize.mobile}) {
      ${styles}
    }`,
    tablet: (...styles: string[]) =>
        css`@media only screen and (min-width: ${responsiveSize.tablet[0]})
        and (max-width: ${responsiveSize.tablet[1]}) {
          ${styles}
        }`,
    desktop: (...styles: string[]) => css`@media only screen and (min-width: ${responsiveSize.desktop}) {
      ${styles}
    }`,
}

const colors = {
    main: '#c00d0e',

    subOne: '#d3d3d3',
    subTwo: '#ededed',
}

const theme = {
    colors,

    media
}

export default theme