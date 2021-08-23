import { defineConfig } from "rollup";
import {default as rollupTS2} from "rollup-plugin-typescript2"

export default defineConfig({
  input: "main/index.ts",
  plugins: [rollupTS2({
    include: ["main/**/*.ts"]
  })],
  output: {
    dir: "dist_main",
    format: "cjs"
  }
})
