FROM node:lts as builder

WORKDIR /usr/src/tv-shows-catalog/client
COPY . .
RUN npm install
RUN npm run build

CMD [ "node", "build/index.js" ]