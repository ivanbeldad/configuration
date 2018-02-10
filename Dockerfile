FROM "node:8.9"

LABEL maintainer="Ivan de la Beldad Fernandez <ivandelabeldad@gmail.com>"

ADD . /app

WORKDIR /app

RUN npm install --production

EXPOSE 3000

CMD [ "npm", "start" ]
