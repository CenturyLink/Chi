import _ from 'lodash';

export function isCurrentCollection(collection, path) {
  return _.includes(_.map(collection, 'path'), path);
}

export function hasSections(collection) {
  let result = false;

  if (_.size(collection) > 0) {
      if (_.size(collection) === 1) {
          if (_.size(collection) === 1 && _.size(collection[0].headings) > 0) {
              result = true;
          }
      } else {
          result = true;
      }
  }

  return result;
}

export function getFirstClickableSection(collection) {
  return _.first(_.reject(collection, x => x.disabled));
}

export function hasActiveSections(collection) {
  return !_.isEmpty(_.reject(collection, x => x.disabled));
}
