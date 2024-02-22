FROM node:lts-alpine as builder

WORKDIR /usr/src/tv-shows-catalog/server
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-alpine

WORKDIR /usr/src/tv-shows-catalog/server
COPY --from=builder /usr/src/tv-shows-catalog/server/node_modules /usr/src/tv-shows-catalog/server/node_modules
COPY --from=builder /usr/src/tv-shows-catalog/server/dist /usr/src/tv-shows-catalog/server/dist

EXPOSE 3000

CMD [ "node", "dist/main.js"]
