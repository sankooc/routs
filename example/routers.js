
exports.hello = () => ({result: 1});


exports.print = (context) => {
  const { params, body, query } = context;
  console.log('-- params --');
  console.dir(params);
  console.log('-- body --');
  console.dir(body);
  console.log('-- query --');
  console.dir(query);
  return { name: 'abc', age: 32, gender: 'famale' };
};


const proc = () => {
  return new Promise((resolve) => {
    resolve({name: 'akb49'});
  });
};

exports.async = function* _async(context) {
  return yield proc();
}