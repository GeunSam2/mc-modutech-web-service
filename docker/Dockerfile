# Build Stage
FROM node:17.8.0-alpine
WORKDIR /src
COPY . ./
RUN npm run build

# Main Stage
FROM node:17.8.0-alpine
WORKDIR /src
COPY --from=0 /src/build ./
RUN npm install -g serve
CMD ["serve", "-l", "3000"]