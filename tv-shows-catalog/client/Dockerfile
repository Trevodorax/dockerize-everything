FROM node:lts-alpine as builder

WORKDIR /usr/src/tv-shows-catalog/client
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-alpine

WORKDIR /usr/src/tv-shows-catalog/client
COPY --from=builder /usr/src/tv-shows-catalog/client/package.json /usr/src/tv-shows-catalog/client/package.json
COPY --from=builder /usr/src/tv-shows-catalog/client/.svelte-kit /usr/src/tv-shows-catalog/client/.svelte-kit
COPY --from=builder /usr/src/tv-shows-catalog/client/node_modules /usr/src/tv-shows-catalog/client/node_modules
COPY --from=builder /usr/src/tv-shows-catalog/client/build /usr/src/tv-shows-catalog/client/build

EXPOSE 3000

CMD [ "node", "build/index.js" ]