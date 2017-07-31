﻿import {
    CommandContext,
    Command,
    CommandHandler
} from '../';

export enum CommandErrorType {
    Exception,
    UnknownCommand,
    BadPermissions,
    BadArgCount,
    InvalidInput
}

export class CommandErrorContext extends CommandContext {

    /**
     * The error thrown
     */
    error: Error;
    /**
     * The type of error thrown
     */
    errorType: CommandErrorType;

    /**
     * Create a error context
     * @param error - The error thrown
     * @param errorType - The type of error thrown
     * @param context - The command context to inherit
     */
    constructor(error: Error, errorType: CommandErrorType, context: CommandContext) {
        super(context.message, context.command, context.parameters, context.handler);

        this.error = error;
        this.errorType = errorType;
    }
}