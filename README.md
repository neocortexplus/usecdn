# 🚀 React CDN Examples

<div align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Ready" />
  <img src="https://img.shields.io/badge/Nginx-Powered-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx Powered" />
  <br/>
  <em>Simple, ready-to-run React examples using CDN links - no build step required!</em>
</div>

<hr />

## 📚 Examples Included

### 1. 💻 Simple React Demo (`temp.html`)
<details>
  <summary><b>Features & Learning Goals</b></summary>
  
  - ✅ Demonstrates component mounting/unmounting
  - ✅ Shows state management and effect lifecycles
  - ✅ Includes console logging to visualize React lifecycle events
</details>

### 2. 🔄 Component Communication (`component-communication/`)
<details>
  <summary><b>Features & Learning Goals</b></summary>
  
  - ⬇️ Shows parent-to-child data passing (props)
  - ⬆️ Implements child-to-parent communication (callback functions)
  - 🧩 Contains both interactive and display-only child components
</details>

### 3. ⏱️ React Lifecycle Demo (`lifecycle-demo/`)
<details>
  <summary><b>Features & Learning Goals</b></summary>
  
  - 🔄 Interactive UI to mount/unmount components
  - 📝 Console logging of component lifecycle events
  - 🎨 Color-coded components to distinguish different parts of the application
</details>

## 🐳 Running with Docker

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
      </td>
      <td>
        These examples are configured to run in a Docker container using Nginx.
      </td>
    </tr>
  </table>
</div>

### 📋 Prerequisites

- 🐳 Docker and Docker Compose installed on your system
- 🔓 Port 8081 allowed in your firewall (if applicable)

### ▶️ Starting with Docker Compose

```bash
# From the usecdn directory
docker-compose up -d
```

### 🌐 Accessing the Examples

After starting the container, the examples will be available at:

| Example | URL |
|---------|-----|
| 🏠 **Main Index** | http://localhost:8081/ |
| 💻 **Simple React Demo** | http://localhost:8081/temp.html |
| 🔄 **Component Communication** | http://localhost:8081/component-communication/index.html |
| ⏱️ **React Lifecycle Demo** | http://localhost:8081/lifecycle-demo/index.html |

You can also access them using your server's IP address or domain:
- 🌐 http://your-server-ip:8081/
- 🔗 http://your-domain:8081/ (if configured)

### ⏹️ Stopping the Container

```bash
# From the usecdn directory
docker-compose down
```

## 🐋 Running with Docker Only (Without Docker Compose)

<div align="center">
  <img width="500" src="https://raw.githubusercontent.com/docker/docker.github.io/master/images/docker-containerized-appliction-blue.png" alt="Docker Container" />
</div>

### 🏗️ Building the Docker Image

```bash
# From the usecdn directory
docker build -t react-cdn-examples .
```

### ▶️ Running the Container

```bash
# From the usecdn directory
docker run -d --name react-cdn-examples -p 8081:80 react-cdn-examples
```

### ⏹️ Stopping and Removing the Container

```bash
# Stop the container
docker stop react-cdn-examples

# Remove the container
docker rm react-cdn-examples
```

### 🔄 Rebuilding After Changes

```bash
# Stop and remove the old container
docker stop react-cdn-examples
docker rm react-cdn-examples

# Rebuild the image
docker build -t react-cdn-examples .

# Start a new container
docker run -d --name react-cdn-examples -p 8081:80 react-cdn-examples
```

## 🔧 Technical Details

<div align="center">
  <table>
    <tr>
      <th>Component</th>
      <th>Details</th>
    </tr>
    <tr>
      <td>Web Server</td>
      <td>Nginx</td>
    </tr>
    <tr>
      <td>Port Mapping</td>
      <td>8081 (host) → 80 (container)</td>
    </tr>
    <tr>
      <td>Configuration</td>
      <td>nginx.conf, Dockerfile, docker-compose.yml</td>
    </tr>
  </table>
</div>

### 🛠️ Technologies Used

<div align="center">
  <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
  <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
  <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" />
  <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt="Babel" />
</div>

- **React 18** (loaded via CDN)
- **ReactDOM 18** (loaded via CDN)
- **Babel** (for JSX support, loaded via CDN)
- **Docker & Nginx** for deployment

## 💻 Development

To modify the examples:

1. Edit the HTML and JS files directly
2. Restart the container to see your changes:

```bash
docker-compose down
docker-compose up -d
```

## 🎯 Learning Objectives

<div align="center">
  <table>
    <tr>
      <th>Example</th>
      <th>Focus Areas</th>
    </tr>
    <tr>
      <td><b>temp.html</b></td>
      <td>React hooks basics, component lifecycle</td>
    </tr>
    <tr>
      <td><b>component-communication/</b></td>
      <td>State management and component relationships</td>
    </tr>
    <tr>
      <td><b>lifecycle-demo/</b></td>
      <td>Component mounting/unmounting patterns</td>
    </tr>
  </table>
</div>

## ❓ Troubleshooting

<details>
  <summary><b>📋 Troubleshooting Checklist</b></summary>
  
  1. 🔍 Make sure Docker is running with `docker ps`
  2. 🧱 Check if port 8081 is allowed in your firewall
  3. 📋 Verify the container is running with `docker logs react-cdn-examples`
  4. 🌐 If accessing via IP address doesn't work but localhost does, check the Nginx configuration
</details>

## 🌐 Browser Support

<div align="center">
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" alt="Chrome" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" alt="Firefox" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original.svg" alt="Safari" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/edge/edge-original.svg" alt="Edge" />
</div>

These examples work best in modern browsers that support ES6 features.