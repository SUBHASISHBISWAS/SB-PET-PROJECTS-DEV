FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=admin

RUN mkdir -p /home/ExpenseTracker

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/ExpenseTracker

COPY package*.json ./

# will execute npm install in /home/app because of WORKDIR
RUN npm install

COPY . .

EXPOSE 3000


# no need for /home/app/server.js because of WORKDIR
CMD ["npm", "startServer"]
