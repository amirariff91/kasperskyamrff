/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A88F',
          light: '#00C4A7',
          dark: '#008F7A',
          50: '#E6F7F4',
          100: '#CCEFE9',
          200: '#99DFD3',
          300: '#66CFBD',
          400: '#33BFA7',
          500: '#00A88F',
          600: '#008F7A',
          700: '#007664',
          800: '#005C4F',
          900: '#004339'
        },
        secondary: {
          DEFAULT: '#2C3E50',
          light: '#34495E',
          dark: '#2C3E50'
        },
        tremor: {
          brand: {
            faint: "#E6F7F4",
            muted: "#99DFD3",
            subtle: "#33BFA7",
            DEFAULT: "#00A88F",
            emphasis: "#008F7A",
            inverted: "#FFFFFF"
          },
          background: {
            muted: "#F9FAFB",
            subtle: "#F3F4F6",
            DEFAULT: "#FFFFFF",
            emphasis: "#374151"
          },
          border: {
            DEFAULT: "#E5E7EB"
          },
          ring: {
            DEFAULT: "#E5E7EB"
          },
          content: {
            subtle: "#9CA3AF",
            DEFAULT: "#374151",
            emphasis: "#111827",
            strong: "#111827",
            inverted: "#FFFFFF"
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        // Light shadows
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // Dark shadows
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px'
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }]
      }
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-|text-|border-|ring-|stroke-|fill-)(primary|secondary|tremor-)/,
      variants: ['hover', 'dark', 'dark:hover', 'dark:group-hover']
    }
  ],
  plugins: [],
}; 