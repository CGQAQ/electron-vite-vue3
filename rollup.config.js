import { defineConfig } from "rollup";
import { default as rollupTS2 } from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "main/index.ts",
  plugins: [
    rollupTS2({
      include: ["main/**/*.ts"],
    }),
    commonjs(),
  ],
  output: {
    dir: "dist_main",
    format: "cjs",
  },
});
