FROM backstopjs/backstopjs:latest

WORKDIR /backstopjs

RUN apt-get update -y && apt-get install -y zip jq

ENTRYPOINT ["npm", "run", "tests:visual:run"]
