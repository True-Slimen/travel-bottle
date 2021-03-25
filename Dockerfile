FROM node:latest

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . ./

EXPOSE 8000
CMD [ "npm", "start" ]

HEALTHCHECK --timeout=2s --start-period=3s --retries=3 --interval=2s \
	CMD node ./bin/healthcheck.js || exit 1
