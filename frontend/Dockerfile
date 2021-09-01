FROM registry.access.redhat.com/ubi8/nodejs-12:1-77.1618436962

WORKDIR /opt/app-root/src

COPY --chown=default:root package*.json ./
COPY public public
COPY src src
RUN npm ci && npm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000
EXPOSE 3000/tcp

## Uncomment the below line to update image security content if any
# USER root
# RUN dnf -y update-minimal --security --sec-severity=Important --sec-severity=Critical && dnf clean all 
# USER default
CMD ["npm", "start"]