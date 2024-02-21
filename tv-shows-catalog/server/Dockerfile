FROM node:lts-alpine as builder

WORKDIR /usr/src/tv-shows-catalog/server
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main.js"]
