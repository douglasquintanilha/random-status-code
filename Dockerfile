FROM node:alpine

ENV NODE_HOME=/home/node \
    PORT=8888

COPY . $NODE_HOME

WORKDIR $NODE_HOME

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm"]

CMD ["start"]