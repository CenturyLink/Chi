FROM backstopjs/backstopjs:latest

WORKDIR /backstopjs

ARG GH_TOKEN
ENV GH_TOKEN=${GH_TOKEN}

COPY . .

ENTRYPOINT ["npm", "run", "tests:visual:run"]