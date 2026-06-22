import { defineConfig } from "oxlint";

export default defineConfig({
	plugins: ["typescript", "unicorn", "oxc"],
	categories: { correctness: "error" },
	rules: {
		"no-unused-vars": [
			"warn", {
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
				fix: { imports: "off", variables: "off" },
			},
		],
	},
	env: { builtin: true },
});
