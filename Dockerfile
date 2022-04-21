# stage 1

FROM node:17-alpine AS tyne-app-build

ENV PORT=$PORT
ARG ENV

WORKDIR /app
COPY . .
RUN npm ci && npm run build -- --configuration=${ENV}

# stage 2

FROM nginx:1.21.6-alpine
EXPOSE $PORT
COPY --from=tyne-app-build /app/dist/Frontend /usr/share/nginx/html

COPY ./nginx.config /etc/nginx/nginx.template
COPY ./nginx.config /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'