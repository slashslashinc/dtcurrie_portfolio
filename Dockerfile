# Use an official Python runtime as a parent image
FROM node:8.6

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# NPM install
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Run app.py when the container launches
CMD ["node", "server/server.js"]