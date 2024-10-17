# Use an official Node runtime as the base image
FROM node:20.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Install a simple http server for serving static content
RUN yarn global add serve

# The application's default port
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "3000"]