# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.15.0
FROM node:${NODE_VERSION}-slim as builder

# API URL is baked in at build time
ARG API_URL=https://api.mavii.com
ENV API_URL=${API_URL}

# NodeJS app lives here
WORKDIR /app

# Install packages needed to build node modules
RUN apt-get update -qq && apt-get install -y python-is-python3 pkg-config build-essential 

# Install node modules
COPY --link package.json package-lock.json ./
RUN npm install

# Copy application code
COPY --link . .

# Build application
RUN npm run build

# Final stage for app image
FROM pierrezemb/gostatic

# Copy built application
COPY --from=builder /app/dist/ /srv/http/

CMD [ "-fallback", "/index.html" ]