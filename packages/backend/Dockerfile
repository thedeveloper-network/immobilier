FROM node:alpine
# Create app directory
WORKDIR /usr/src/app

COPY ./dist/packages/backend .
RUN npm install
EXPOSE 8080
CMD [ "node", "main.js" ]