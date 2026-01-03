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

# Copy ONLY adminService package files
COPY backend/adminService/package*.json ./

RUN npm install --production

# Copy admin service source
COPY backend/adminService ./adminService

# Copy shared common folder
COPY backend/common ./common

WORKDIR /app/adminService

EXPOSE 3003
CMD ["node", "index.js"]


