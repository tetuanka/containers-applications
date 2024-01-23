FROM node:16

ENV REACT_APP_BACKEND_URL=http://localhost:3000

COPY . .

RUN npm ci

RUN npm run test