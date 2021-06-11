FROM node:13-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g capacitor ionic
RUN npm install -g @angular/cli@10.1.4
RUN npm install
COPY ./ /app/
RUN ng build --prod
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/frontend /usr/share/nginx/html/