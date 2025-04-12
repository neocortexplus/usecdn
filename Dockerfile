FROM nginx:alpine

# Copy the custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all our React projects to the nginx html directory
COPY . /usr/share/nginx/html/

# Remove the config files from the html directory to avoid exposing them
RUN rm -f /usr/share/nginx/html/nginx.conf
RUN rm -f /usr/share/nginx/html/Dockerfile
RUN rm -f /usr/share/nginx/html/docker-compose.yml

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]