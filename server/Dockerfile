# Use Node.js image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node modules
RUN npm install

# Copy all other files
COPY . .

# Set the environment variable for the port (optional)
ENV PORT=3000

# Run the app
CMD ["npm", "start"]
