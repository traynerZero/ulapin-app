# Base image
FROM node:18-alpine

WORKDIR /app

# Copy only server files
COPY apps/server ./apps/server
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies for server
RUN cd apps/server && npm install

# Build the NestJS app
RUN cd apps/server && npm run build

# Run the app
CMD ["node", "apps/server/dist/main"]