# Build stage
FROM node:lts-alpine AS builder

WORKDIR /app

# Enable corepack for modern package managers if needed
RUN corepack enable

# Copy only package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies utilizing npm cache
RUN npm ci --prefer-offline --no-audit --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Run as non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

# Expose port exactly as internal routing
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
