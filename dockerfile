FROM node:13-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm","run","dev"]