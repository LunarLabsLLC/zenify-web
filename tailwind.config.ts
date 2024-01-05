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
        body: "var(--font-rubik)",
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
          "primary": "#5635db",
          "secondary": "#DE217A",
          "accent": "#BDB119",
          "neutral": "#040109",
          "base-100": "#040109",
          "info": "#0F83BD",
          "success": "#06BD09",
          "warning": "#e68a17",
          "error": "#bd0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
export default config
