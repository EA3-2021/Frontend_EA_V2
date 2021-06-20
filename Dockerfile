#FROM node:13-alpine as build
#WORKDIR /app
#COPY package*.json /app/
#RUN npm install -g capacitor ionic
#RUN npm install -g @angular/cli@10.1.4
#RUN npm install @ionic/angular@4.0.0-beta.15 
#RUN npm install
#COPY ./ /app/
#RUN npm run-script build
FROM nginx:alpine
#RUN rm -rf /usr/share/nginx/html/*
COPY ./www/ /usr/share/nginx/html/