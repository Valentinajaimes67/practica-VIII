FROM node:latest

WORKDIR /usr/src/app

COPY app.js .

RUN npm init -y && npm install express prom-client

EXPOSE 3000

CMD ["node", "app.js"]
