# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the container
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the entire source code into the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 8080

# Command to run the application when the container starts
CMD ["npm", "start"]
