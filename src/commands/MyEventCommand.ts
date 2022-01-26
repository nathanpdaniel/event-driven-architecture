import { BaseEvent } from "../events/BaseEvent";
import { MyEvent } from "../events/MyEvent";
import { IDataFetcher, IError, IResponder, IResponse } from "../responders/IResponder";
import { MyEventResponder } from "../responders/MyEventResponder";
import { ICommand } from "./ICommand";

export class MyEventCommand implements ICommand, IResponder {
    execute(event: BaseEvent): void {
        const evt = event as MyEvent;

        const responder: IDataFetcher = new MyEventResponder(this);
        responder.fetchData();
    }

    success(data: IResponse) {
        console.log(data);
    }

    failure(error: IError) {

    }
}