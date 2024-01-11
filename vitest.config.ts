import { defineConfig } from "vitest/dist/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins:[vue()],
    test: {
        globals: true,
        environment: "happy-dom"
    }
})