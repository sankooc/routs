exports.success = req => {
  console.log("pass filter");
};

exports.fail = req => {
  console.error("fail filter");
  throw new Error("someting happened");
};

const proc = () =>
  new Promise(resolve => {
    resolve({ name: "akb49" });
  });

exports.asyncFilter = function* _asyncFilter(req) {
  const ret = yield proc();
};
