import nextConfig from "eslint-config-next";

const eslintConfig = [
  {
    ignores: ["dist/", ".next/", "node_modules/"],
  },
  ...nextConfig,
];

export default eslintConfig;
