# FROM node:18-alpine AS base

# WORKDIR /app/adminService

# COPY adminService/package*.json ./
# RUN npm install --production

# COPY adminService/. ./
# COPY common ../common

# ENV NODE_ENV=production
# EXPOSE 3003

# CMD ["npm", "run", "start"]

# FROM node:18-alpine

# WORKDIR /app

# COPY adminService/package*.json ./
# RUN npm install --production

# COPY adminService/ ./
# COPY common/ ./common

# ENV NODE_ENV=production
# EXPOSE 3003

# CMD ["npm", "run", "start"]

FROM node:18-alpine

WORKDIR /app

COPY adminService/package*.json ./
RUN npm install --production

COPY adminService ./adminService
COPY common ./common

WORKDIR /app/adminService

EXPOSE 3003
CMD ["node", "index.js"]



