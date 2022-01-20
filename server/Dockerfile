FROM node:16-alpine as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

FROM node:16-alpine as main
WORKDIR /app
COPY . ./
COPY --from=build-deps /app/node_modules /app/node_modules
CMD ["yarn", "start"]
