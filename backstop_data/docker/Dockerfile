FROM backstopjs/backstopjs:latest

WORKDIR /backstopjs

RUN apt-get update -y && apt-get install -y zip
RUN npx playwright install  

ENTRYPOINT ["npm", "run", "tests:visual:run"]
