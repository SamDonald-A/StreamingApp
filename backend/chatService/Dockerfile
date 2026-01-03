# FROM node:18-alpine AS base

# WORKDIR /app/chatService

# COPY chatService/package*.json ./
# RUN npm install --production

# COPY chatService/. ./
# COPY common ../common

# ENV NODE_ENV=production
# EXPOSE 3004

# CMD ["npm", "run", "start"]

# FROM node:18-alpine

# WORKDIR /app

# COPY chatService/package*.json ./
# RUN npm install --production

# COPY chatService/ ./
# COPY common/ ./common

# ENV NODE_ENV=production
# EXPOSE 3004

# CMD ["npm", "run", "start"]

FROM node:18-alpine

WORKDIR /app

COPY backend/chatService/package*.json ./
RUN npm install --production

COPY backend/chatService ./chatService
COPY backend/common ./common

WORKDIR /app/chatService

EXPOSE 3004
CMD ["node", "index.js"]



