import { BaseEvent } from "./BaseEvent";

export class MyEvent extends BaseEvent {
    static MY_CUSTOM_EVENT = 'my-custom-event';

    public type: string;
    public data: any;

    constructor(type: string, data: any) {
        super(type);

        this.type = type;
        this.data = data;
    }
}
