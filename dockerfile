### Stage 1 : Build ###

FROM node:12.7-alpine AS build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

## Stage 2 : Run ###

FROM nginx:1.17.1-alpine AS prod-stage

COPY --from=build-step  /app/dist/frontend /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]



