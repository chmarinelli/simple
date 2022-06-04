import { responseErrorHandler } from './error-handler';
export const responseInterceptor = {
    onFulfilled(response) {
        return response;
    },
    onRejected(error) {
      responseErrorHandler(error);
      return error;
    }
};