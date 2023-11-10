# Use Node.js version 12.22.12
FROM node:12.22.12

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# React uses port 3000 by default
EXPOSE 3000

# Start the development server using react-scripts
CMD ["npm", "start"]
