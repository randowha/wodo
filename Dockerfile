FROM node:18.17.1-alpine AS build-env

# # RUN apk add --no-cache ca-certificates git libc6-compat

# WORKDIR /usr/src/app-build

# COPY ./frontend frontend
# COPY ./backend backend
# # COPY ./package*.json ./
# # COPY ./turbo.json ./

# RUN npm i postgres

# RUN npm ci

# FROM node:18.17.1-alpine

# WORKDIR /usr/src/app

# COPY ./backend backend
# COPY ./package*.json ./

# VOLUME /usr/src/app/files

# COPY --from=build-env /usr/src/app-build/backend/dist /usr/src/app/backend/dist
# COPY --from=build-env /usr/src/app-build/frontend/dist/ /usr/src/app/backend/frontend

# WORKDIR /usr/src/app/backend

# CMD ["npm", "run", "start"]