FROM node:12.13-alpine As builder

WORKDIR /app

COPY package*.json .

RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./
COPY app.js ./

RUN ls /app

COPY . .

COPY --from=builder /app/build /app/build

EXPOSE 3000

CMD ["node", "./app.js"]
