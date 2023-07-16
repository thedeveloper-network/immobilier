FROM node:alpine
# Create app directory
WORKDIR /usr/src/app

<<<<<<< HEAD
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
# COPY ./dist .
EXPOSE 8080
CMD [ "node", "dist/index.js" ]
=======
COPY ./dist/packages/backend .
RUN npm install
EXPOSE 8080
CMD [ "node", "main.js" ]
>>>>>>> rebuild
