# FROM node:18-alpine AS base

# WORKDIR /app

# COPY package*.json ./
# RUN npm install --production

# COPY . .

# ENV NODE_ENV=production
# EXPOSE 3001

# CMD ["npm", "run", "start"]

FROM node:18-alpine

WORKDIR /app

# Copy only package files first (better caching)
COPY authService/package*.json ./
RUN npm install --production

# Copy service source
COPY authService/ ./

# Copy shared common code
COPY common/ ./common

ENV NODE_ENV=production
EXPOSE 3001

CMD ["npm", "run", "start"]

