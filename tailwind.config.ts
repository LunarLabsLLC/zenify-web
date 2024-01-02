import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        important: "var(--font-roboto)",
        header: "var(--font-pattanakarn)",
        body: "var(--font-monaspace)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    darkTheme: "zenify", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    themes: [
      {
        zenify: {
          "primary": "#00bff5",
          "secondary": "#fc0000",
          "accent": "#0057ff",
          "neutral": "#2c2d15",
          "base-100": "#232c35",
          "info": "#00c7ff",
          "success": "#00b600",
          "warning": "#ffb300",
          "error": "#ff698a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
export default config
