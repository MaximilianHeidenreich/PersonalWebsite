# Node image to compile tailwind.css
FROM node:12 AS builder
WORKDIR /build
COPY style .
COPY tailwind.config.js .
RUN npx tailwindcss-cli@latest build -c ./tailwind.config.js -o ./style/vendor/tailwind.css

# Main image
FROM hayd/alpine-deno:1.5.2

# Install velociraptor.
RUN deno install -qA -n vr https://deno.land/x/velociraptor@1.0.0-beta.16/cli.ts

EXPOSE 8081
WORKDIR /app

# Copy project to image.
COPY . .
COPY --from=builder /build/style /app/style
# Compile the site.
RUN vr buildAleph

CMD ["vr", "start"]