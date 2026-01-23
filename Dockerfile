FROM node:25-slim AS node

RUN npm install -g @angular/cli

WORKDIR /app
#COPY package.json package-lock.json ./
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/market-angular/browser /usr/share/nginx/html

EXPOSE 80

