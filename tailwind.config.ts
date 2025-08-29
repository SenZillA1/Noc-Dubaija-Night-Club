import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Luxury nightclub colors
				neon: {
					turquoise: 'hsl(var(--neon-turquoise))',
					purple: 'hsl(var(--neon-purple))',
					pink: 'hsl(var(--neon-pink))'
				},
				glass: 'hsl(var(--glass))'
			},
			backgroundImage: {
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-dark': 'var(--gradient-dark)',
				'gradient-glass': 'var(--gradient-glass)'
			},
			boxShadow: {
				'gold': 'var(--shadow-gold)',
				'neon': 'var(--shadow-neon)',
				'turquoise': 'var(--shadow-turquoise)',
				'elegant': 'var(--shadow-elegant)'
			},
			fontFamily: {
				'luxury': ['Playfair Display', 'serif'],
				'modern': ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(45 100% 70% / 0.3), 0 0 40px hsl(45 100% 70% / 0.1)' 
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(45 100% 70% / 0.6), 0 0 60px hsl(45 100% 70% / 0.3)' 
					}
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1' },
					'2%': { opacity: '0.8' },
					'4%': { opacity: '1' },
					'6%': { opacity: '0.9' },
					'8%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 2s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
