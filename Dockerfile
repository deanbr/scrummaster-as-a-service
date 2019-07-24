FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build <-- all the stuff to be copied over to RUN phase

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
# default command of nginx image will start nginx for us