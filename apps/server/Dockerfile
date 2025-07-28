# Base image
FROM node:22-alpine

WORKDIR /app

# Copy only server files
COPY apps/server ./apps/server
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN cd apps/server && npm install

# Build the NestJS app
RUN cd apps/server && npm run build

# Run the built file
CMD ["node", "dist/main.js"]