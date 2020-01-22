FROM node:10

WORKDIR /app

COPY . /app

RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm i @types/node
RUN npm install -g typeorm
RUN npm install


EXPOSE 3001

CMD ["npm", "run", "dev"]

