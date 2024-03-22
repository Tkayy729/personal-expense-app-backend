FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

# Copy .env file into the container
COPY .env ./

EXPOSE 4000

# Load environment variables from .env file and start the application
CMD ["sh", "-c", "node -r dotenv/config node_modules/.bin/nest start"]