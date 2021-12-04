FROM node:12.13-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production && npm install -g server

COPY . .

COPY --from=development /usr/src/app/build ./dist

CMD ["server ", "-s", "./build"]
