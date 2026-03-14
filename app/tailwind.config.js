/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#326891",
          foreground: "#ffffff",
          hover: "#234d62",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "#ff6f00",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#80241e",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#333333",
        },
        // SoundThesis Brand Colors
        navy: "#326891",
        "navy-hover": "#234d62",
        maroon: "#80241e",
        "near-black": "#111111",
        "dark-gray": "#333333",
        "medium-gray": "#666666",
        "light-gray": "#999999",
        "border-gray": "#e6e6e6",
        "bg-light": "#f5f5f5",
        orange: "#ff6f00",
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-tablet': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-mobile': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['42px', { lineHeight: '1.3', fontWeight: '600' }],
        'h2-tablet': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h2-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-tablet': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-mobile': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-tablet': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-mobile': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'section': '80px',
        'section-tablet': '60px',
        'section-mobile': '40px',
        'container': '40px',
        'container-tablet': '24px',
        'container-mobile': '16px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        'brand': '4px',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)',
        'button-hover': '0 2px 8px rgba(0,0,0,0.12)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
