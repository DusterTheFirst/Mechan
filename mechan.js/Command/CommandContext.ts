﻿import {
    User,
    Message,
    TextChannel,
    DMChannel,
    GroupDMChannel
} from 'discord.js';
import {
    Command,
    CommandHandler
} from '../';

export class CommandContext {
    /**
     * User that called the command
     */
    public user: User;
    /**
     * Message that called the command
     */
    public message: Message;
    /**
     * Channel that the command was run in
     */
    public channel: TextChannel | DMChannel | GroupDMChannel;
    /**
     * Comamnd that was called
     */
    public command: Command;
    /**
     * Command handler that handled the command
     */
    public handler: CommandHandler;
    /**
     * Command's perameters
     */
    public args: string[];

    /**
     * Create a command context
     * @param message - Message that called the command
     * @param command - Comamnd that was called
     * @param args - parameters for the command
     * @param handler - Command handler that handled the command
     */
    constructor(message: Message, command: Command, args: string[], handler: CommandHandler) {
        this.user = message.author;
        this.channel = message.channel;
        this.message = message;
        this.command = command;
        this.handler = handler;
        this.args = args;
    }
}