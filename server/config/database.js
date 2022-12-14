import config from './mainConfig.js'

const CONNECTION_URL = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`;
const PORT = config.nodePort;

export { CONNECTION_URL, PORT }