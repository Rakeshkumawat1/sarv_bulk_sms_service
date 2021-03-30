
FROM node:10.19.0-alpine

WORKDIR /source/sarv_bulk_sms_service

COPY package.json /source/sarv_bulk_sms_service

RUN cd /source/sarv_bulk_sms_service && npm i --only=production

COPY . .

EXPOSE 3000
CMD ["sh", "-c", "node app.js"]