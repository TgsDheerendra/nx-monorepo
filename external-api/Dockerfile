# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install only necessary deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy Nx workspace and project sources
COPY . .

# Build using Nx
RUN npx nx run external-api:build

# Stage 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

# Copy built output
COPY --from=builder /app/dist/external-api ./dist

# Install only production deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Set env vars
ENV NODE_ENV=production

# Start
CMD ["node", "dist/main.js"]
