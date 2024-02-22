FROM node:lts-alpine as builder

WORKDIR /usr/src/tv-shows-catalog/client
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .
RUN npm run build

FROM node:lts-alpine

WORKDIR /usr/src/tv-shows-catalog/client
COPY --from=builder /usr/src/tv-shows-catalog/client/package.json ./package.json
COPY --from=builder /usr/src/tv-shows-catalog/client/.svelte-kit ./.svelte-kit
COPY --from=builder /usr/src/tv-shows-catalog/client/node_modules ./node_modules
COPY --from=builder /usr/src/tv-shows-catalog/client/build ./build

EXPOSE 3000

CMD [ "node", "build/index.js" ]