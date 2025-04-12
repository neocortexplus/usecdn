# React CDN Examples

This directory contains simple React examples that use React via CDN links without a build step. Perfect for learning React core concepts through practical examples.

## Examples Included

### 1. Simple React Demo (`temp.html`)
A basic React demo showcasing hooks (`useState`, `useEffect`) and effect cleanup.
- Demonstrates component mounting/unmounting
- Shows state management and effect lifecycles
- Includes console logging to visualize React lifecycle events

### 2. Component Communication (`component-communication/`)
Demonstrates data flow between parent and child components.
- Shows parent-to-child data passing (props)
- Implements child-to-parent communication (callback functions)
- Contains both interactive and display-only child components

### 3. React Lifecycle Demo (`lifecycle-demo/`)
Visual demonstration of component lifecycle with useEffect.
- Interactive UI to mount/unmount components
- Console logging of component lifecycle events
- Color-coded components to distinguish different parts of the application

## Running with Docker

These examples are configured to run in a Docker container using Nginx.

### Prerequisites

- Docker and Docker Compose installed on your system
- Port 8081 allowed in your firewall (if applicable)

### Starting the Container

```bash
# From the usecdn directory
docker-compose up -d
```

### Accessing the Examples

After starting the container, the examples will be available at:

- Main index: http://localhost:8081/
- Simple React Demo: http://localhost:8081/temp.html
- Component Communication: http://localhost:8081/component-communication/index.html
- React Lifecycle Demo: http://localhost:8081/lifecycle-demo/index.html

You can also access them using your server's IP address or domain:
- http://your-server-ip:8081/
- http://your-domain:8081/ (if configured)

### Stopping the Container

```bash
# From the usecdn directory
docker-compose down
```

## Running with Docker Only (Without Docker Compose)

If you prefer using Docker directly without Docker Compose, you can use these commands:

### Building the Docker Image

```bash
# From the usecdn directory
docker build -t react-cdn-examples .
```

### Running the Container

```bash
# From the usecdn directory
docker run -d --name react-cdn-examples -p 8081:80 react-cdn-examples
```

### Stopping and Removing the Container

```bash
# Stop the container
docker stop react-cdn-examples

# Remove the container
docker rm react-cdn-examples
```

### Rebuilding After Changes

```bash
# Stop and remove the old container
docker stop react-cdn-examples
docker rm react-cdn-examples

# Rebuild the image
docker build -t react-cdn-examples .

# Start a new container
docker run -d --name react-cdn-examples -p 8081:80 react-cdn-examples
```

## Technical Details

### Docker Configuration

- Uses Nginx to serve static HTML/JS files
- Port mapping: 8081 (host) → 80 (container)
- Nginx configuration in `nginx.conf`
- Docker configuration in `Dockerfile` and `docker-compose.yml`

### Technologies Used

- React 18 (loaded via CDN)
- ReactDOM 18 (loaded via CDN)
- Babel (for JSX support, loaded via CDN)
- Docker & Nginx for deployment

## Development

To modify the examples:

1. Edit the HTML and JS files directly
2. Restart the container to see your changes:

```bash
docker-compose down
docker-compose up -d
```

## Learning Objectives

Each example is designed to teach specific React concepts:

- **temp.html**: React hooks basics, component lifecycle
- **component-communication/**: State management and component relationships
- **lifecycle-demo/**: Component mounting/unmounting patterns

## Troubleshooting

If you can't access the examples:

1. Make sure Docker is running with `docker ps`
2. Check if port 8081 is allowed in your firewall
3. Verify the container is running with `docker logs react-cdn-examples`
4. If accessing via IP address doesn't work but localhost does, check the Nginx configuration

## Browser Support

These examples work best in modern browsers (Chrome, Firefox, Safari, Edge) that support ES6 features.