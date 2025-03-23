import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
	extend: {
		colors: {
			"opc-color": "#00FCDA",
			"opc-secondary": "#3C968A"
		}
	}
  }
} satisfies Config;
