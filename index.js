const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world');
    }, 1000);
  });
};

const test = async () => {
  console.log('Waiting...');
  const t = await p();
  console.log(t);
};

test();
