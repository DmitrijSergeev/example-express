import {CustomError} from "../errors/custom-errors";

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(message: string) {
        super(message);
        this.message = message;

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serializedError(){
        return {message: this.message};
    }
}