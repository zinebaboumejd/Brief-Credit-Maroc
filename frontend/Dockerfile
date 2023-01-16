# Use an official Node.js runtime as the base image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files to the container
COPY . .

# Build the application
# RUN npm run build

# Expose the port on which the app runs
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
