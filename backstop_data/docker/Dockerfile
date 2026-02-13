FROM backstopjs/backstopjs:6.3.25

WORKDIR /backstopjs

RUN apt-get update -y && apt-get install -y zip 

ENTRYPOINT ["npm", "run", "tests:visual:run"]
