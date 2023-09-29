import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#FF3162',
        secondary: '#FF7900',
        accent: '#FFC300',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '640px', // Mobile min breakpoint
        md: '768px', // Tablet min breakpoint
        lg: '1024px', // Desktop min breakpoint
        xl: '1280px', // Large desktop min breakpoint
        '2xl': '1536px', // Extra large desktop min breakpoint
        // Max breakpoints
        'max-sm': { max: '639px' }, // Mobile max breakpoint
        'max-md': { max: '767px' }, // Tablet max breakpoint
        'max-lg': { max: '1023px' }, // Desktop max breakpoint
        'max-xl': { max: '1279px' }, // Large desktop max breakpoint
        'max-2xl': { max: '1535px' }, // Extra large desktop max breakpoint
      },

    },
  },
  plugins: [],
}
export default config
