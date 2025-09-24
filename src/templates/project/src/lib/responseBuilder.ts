interface ResponseAPI {
  error: Boolean;
  message: string;
  data: Object;
}

export class ResponseObj {
  private error: Boolean;
  private message: string;
  private data: Object;

  constructor(error: boolean, message: string, data: object) {
    this.error = error;
    this.message = message;
    this.data = data;
  }

  static doResponse(
    error: Boolean,
    message: string,
    data: Object,
  ): ResponseAPI {
    const res: ResponseAPI = {
      error: error,
      message: message,
      data: data,
    };
    return res;
  }
}
