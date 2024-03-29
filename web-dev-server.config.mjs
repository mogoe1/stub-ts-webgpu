export default {
    watch: true,
    nodeResolve: true,
    rootDir: "dist",
    middleware: [
        async function enableCrossOriginIsolation(context, next) {
            await next();
            context.set("Cross-Origin-Embedder-Policy", "require-corp");
            context.set("Cross-Origin-Opener-Policy", "same-origin");
        }
    ]
};
