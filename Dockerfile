# stage 1

FROM node:alpine AS tyne-app-build

ENV PORT=$PORT

WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=tyne-app-build /app/dist/Frontend /usr/share/nginx/html
EXPOSE $PORT
