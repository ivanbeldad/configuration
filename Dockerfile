FROM "node:8.9"

LABEL maintainer="Ivan de la Beldad Fernandez <ivandelabeldad@gmail.com"

ADD . /app

WORKDIR /app

RUN npm install --production

ENV DB_URI=${DB_URI}
ENV DB_NAME=${DB_NAME}
ENV PORT=${PORT}

EXPOSE ${PORT}

CMD [ "npm", "start" ]
