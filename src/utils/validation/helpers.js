import {
  converge,
  concat,
  compose,
  toUpper,
  head,
  tail,
  join,
  map,
  split,
  toLower,
} from 'ramda';

const capitalize = converge(concat(), [compose(toUpper(), head()), tail]);

export const toTitleCase = compose(
  join(' '),
  map(capitalize),
  split(' '),
  toLower
);

export const FormatSearch = (subArray, key, data) => {
  const search = [];
  Object.keys(data).forEach((index) => {
    if (data[index]._id !== undefined) {
      const tempData = { label: data[index][key], id: data[index]?._id, index };
      search.push(tempData);
    }
  });
  return search;
};
