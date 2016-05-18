const justPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world');
    }, 1000);
  });
};

const testAsync = async () => {
  console.log('Waiting...');
  const t = await justPromise();
  console.log(t);
};

testAsync();
