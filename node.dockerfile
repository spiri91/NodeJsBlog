# first use docker-compose build
# after use docker-compose up

FROM node:latest

LABEL author="spiri91"

ENV NODE_ENV=production 
ENV PORT=3000

COPY      . /dist
WORKDIR   /dist

RUN       npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]