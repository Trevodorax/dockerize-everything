FROM node:lts as builder

WORKDIR /usr/src/tv-shows-catalog/client
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/tv-shows-catalog/client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]