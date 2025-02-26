import fs from 'fs';

const icons = fs.readdirSync('./icons');

icons.forEach((icon) =>
  import(`./icons/${icon}`).then((data) => {
    const iconData = data.default;

    const iconstr = JSON.stringify(iconData, null, 2);

    fs.writeFileSync(`./icons/${icon}on`, iconstr, { encoding: 'utf8'})
  })
);
