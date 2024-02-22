FROM node:lts-alpine as builder

WORKDIR /usr/src/tv-shows-catalog/server
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .
RUN npm run build

FROM node:lts-alpine

WORKDIR /usr/src/tv-shows-catalog/server
COPY --from=builder /usr/src/tv-shows-catalog/server/node_modules /usr/src/tv-shows-catalog/server/node_modules
COPY --from=builder /usr/src/tv-shows-catalog/server/dist /usr/src/tv-shows-catalog/server/dist

EXPOSE 3000

CMD [ "node", "dist/main.js"]
