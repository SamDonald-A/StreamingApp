# FROM node:18-alpine AS base

# WORKDIR /app/streamingService

# COPY streamingService/package*.json ./
# RUN npm install --production

# COPY streamingService/. ./
# COPY common ../common

# ENV NODE_ENV=production
# EXPOSE 3002

# CMD ["npm", "run", "start"]

# FROM node:18-alpine

# WORKDIR /app

# COPY streamingService/package*.json ./
# RUN npm install --production

# COPY streamingService/ ./
# COPY common/ ./common

# ENV NODE_ENV=production
# EXPOSE 3002

# CMD ["npm", "run", "start"]

FROM node:18-alpine

WORKDIR /app

COPY backend/streamingService/package*.json ./
RUN npm install --production

COPY backend/streamingService ./streamingService
COPY backend/common ./common

WORKDIR /app/streamingService

EXPOSE 3002
CMD ["node", "index.js"]


