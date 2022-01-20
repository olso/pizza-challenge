# Notes

- No env variables, they are hard coded, sorry
- Using my own quick boilerplate setup for interview tasks
- Who wants to handle PCI DSS? Not me. Stripe/Braintree/Adyen/etc...
- Squashed all my commits on purpose, this doesn't reflect my usage of git

# Docker

Just your usual

- `docker-compose up --force-recreate`
- `docker-compose up --build --force-recreate`
- `docker-compose up -d`

- I was not developing in docker, it was too slow, so no volumes binding
- Not optimized for production e.g. https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/

# Deps

- `create-react-app`
- `@mui` v5 with `styled-components`
- `react-use` (really didn't want to write basic hooks from scratch for test assignment)
- `formik` and `yup`
- `card-validator`
- `react-relay` as gql client
- `react-number-format` for card field inputs
- `react-router` for 2 routes, lol

# Tests

- Too lazy to mock test data, make sure to run gql server when running tests
- Would write tests with mocks, stubs, spies, snapshots, separation of concerns etc... the usual drills
