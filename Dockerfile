FROM node:0.10-slim

WORKDIR /app
ADD package.json /app/
RUN npm i --production
# RUN npm cache clean
ADD process.yml /app/
ADD build /app/build/
EXPOSE 3000
CMD ["node", "build/server"]