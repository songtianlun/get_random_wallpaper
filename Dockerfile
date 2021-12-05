FROM node:12.13-alpine As development

WORKDIR /app

COPY package*.json .

RUN npm install --only=development

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

COPY --from=development /app/build /app/build

EXPOSE 3010

CMD ["node", "./app.js"]
