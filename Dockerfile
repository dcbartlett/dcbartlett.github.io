FROM node:20

# Install basic tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Install global npm packages
RUN npm install -g npm@latest

# Expose Vite dev server port
EXPOSE 5173

CMD ["bash"]
