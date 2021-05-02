function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    myVarName: 'someValue',
   	petStoreUrl: 'https://petstore.swagger.io/v2/pet'

  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
    petStoreUrl: 'https://petstore.swagger.io/v2/pet'

  } else if (env == 'e2e') {
    // customize
    petStoreUrl: 'https://petstore.swagger.io/v2/pet'

  }
  return config;
}