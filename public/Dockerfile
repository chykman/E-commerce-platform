# Front-end Dockerfile for E-commerce platform
# Use official Nginx image as base
FROM nginx:alpine

# Copy static files to Nginx html directory
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]