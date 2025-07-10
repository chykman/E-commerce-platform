FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "server/server.js"]
EXPOSE 3000

# Use the following command to build the Docker image
# docker build -t e-commerce-platform . 