import {CustomError} from "../errors/custom-errors";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor (message: string) {
        super(message)
        this.message = message;

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
    serializedError () {
        return {message: this.message};
    }
}