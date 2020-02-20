import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"
// const typography = new Typography(fairyGateTheme)
// export const { scale, rhythm, options } = typography


const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Georgia', 'serif'],
    // See below for the full list of options.
})

export default typography