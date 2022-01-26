import { ICommand } from "./ICommand";

export interface IController {
    [key: string]: ICommand;
}