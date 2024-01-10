
export function newDate(): Date {
  return new Date();
}
export const port: number = 3000;
export const config: object = {
  port: port,
  host: 'localhost',
  timestamp: newDate()
}









































// export const server = {
//   start: () => {
//     console.log('server started');
//   },
//   stop: () => {
//     console.log('server stopped');
//   }
// }

// export const database = {
//   connect: () => {
//     console.log('database connected');
//   },
//   disconnect: () => {
//     console.log('database disconnected');
//   }
// }

// export const logger = {
//   log: (message) => {
//     console.log(message);
//   }
// }

// export const app = {
//   start: () => {
//     server.start();
//     database.connect();
//     logger.log('app started');
//   },
//   stop: () => {
//     server.stop();
//     database.disconnect();
//     logger.log('app stopped');
//   }
// }