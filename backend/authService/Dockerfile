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

# Copy package.json first for caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy service code
COPY . .

# Copy common folder
COPY ../common ./common

ENV NODE_ENV=production
EXPOSE 3001

CMD ["npm", "run", "start"]

