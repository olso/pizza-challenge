FROM node:16-alpine as build-deps
WORKDIR /app
COPY package.json yarn.lock patches ./
RUN yarn --frozen-lockfile

# FROM node:16-alpine as builder
FROM node:16-alpine as main
WORKDIR /app
COPY . ./
COPY --from=build-deps /app/node_modules /app/node_modules
# RUN yarn build
CMD ["yarn", "start:docker"]

# FROM nginx:1.21-alpine as main
COPY etc/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]
