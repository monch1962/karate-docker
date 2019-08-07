function() {
  //var env = karate.env; // get java system property 'karate.env'
  var env = java.lang.System.getenv('ENV'); // set env to the value of the ENV environment variable
 
  karate.configure("ssl", true)
 
  if (!env) {
    env = 'dev'; //env can be anything: dev, qa, staging, etc.
  }
  karate.log('karate.env selected environment was:', env);
 
  var config = {
    env: env,
 
    AM_USERNAME: 'devuser',
    AM_PASSWORD: 'devpass',
    AM_HOST: 'https://am.'+env+'.example.net',
    AM_AUTHENTICATE_PATH: '/am/json/realms/root/authenticate',
 
    IDM_USERNAME: 'devuser',
    IDM_PASSWORD: 'devpass',
    IDM_HOST: 'https://idm.'+env+'.example.net',
    IDM_MANAGED_USER_PATH: '/idm/managed/user',
  };
 
  if(env == 'qa') {
    config.AM_USERNAME= 'myUserName',
    config.AM_PASSWORD= 'myPa55word'
  };
 
  if(env == 'live') {
     config.AM_USERNAME= 'admin',
     config.AM_PASSWORD= 'secret'
  };
 
  karate.log('OpenAM Host:', config.AM_HOST);
 
  karate.configure('connectTimeout', 60000);
  karate.configure('readTimeout', 60000);
 
  return config;
}
