# stage 1

FROM node:alpine AS tyne-app-build

ENV PORT=$PORT

WORKDIR /app
COPY . .
RUN npm ci && npm run build --prod

# stage 2

FROM nginx:alpine
EXPOSE $PORT
COPY --from=tyne-app-build /app/dist/Frontend /usr/share/nginx/html

COPY ./nginx.config /etc/nginx/nginx.template
COPY ./nginx.config /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'


