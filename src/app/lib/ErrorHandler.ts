class CustomAPIError extends Error {
  statusCode!: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomAPIError.prototype);
  }
}

export class BadRequestError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export class NotFoundError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class UnauthenticatedError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = 401;
    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
  }
}

export class UnauthorizedError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = 403;
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
