import { BaseEvent } from "../events/BaseEvent";

export interface ICommand {
    execute: (event: BaseEvent) => void;
}