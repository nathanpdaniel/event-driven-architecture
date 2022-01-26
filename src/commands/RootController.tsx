import { MyEvent } from "../events/MyEvent";
import { IController } from "./IController";
import { MyEventCommand } from "./MyEventCommand";

export const rootController: IController = {
    [MyEvent.MY_CUSTOM_EVENT]: new MyEventCommand(),
};
