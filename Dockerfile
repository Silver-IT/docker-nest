FROM node:12.16
WORKDIR /usr/src/server
COPY package.json package-lock.json ./
COPY . ./
RUN npm install
RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "run", "start:prod"]
