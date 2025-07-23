# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx nx run public-api:build

# Stage 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist/public-api ./dist

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]
