/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'header': 'var(--header)',
        'sidebar': 'var(--sidebar)',
        'editor': 'var(--editor)',
        'tab-bar': 'var(--tab-bar)',
        'tab-inactive': 'var(--tab-inactive)',
        'tab-active': 'var(--tab-active)',
        'tab-text': 'var(--tab-text)',
        'tab-active-text': 'var(--tab-active-text)',
        'footer': 'var(--footer)',
        'footer-text': 'var(--footer-text)',
        'border-color': 'var(--border-color)',
      },
    },
  },
  plugins: [],
}

