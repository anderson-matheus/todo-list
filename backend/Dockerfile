FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
WORKDIR /usr/src/app/src
RUN npx prisma generate
EXPOSE 4000
CMD ["npm", "start"]
