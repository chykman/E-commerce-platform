FROM node:18-alpine

WORKDIR /app

# Copy package.json from the root context
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the server folder contents
COPY server/ ./server/

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "server/server.js"]