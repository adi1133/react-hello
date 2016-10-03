FROM keymetrics/pm2-docker-alpine
ADD package.json /app/
RUN npm i --production
# RUN npm cache clean
ADD process.yml /app/
ADD build /app/build/

