import { IDataFetcher, IResponder } from "./IResponder";

export class MyEventResponder implements IDataFetcher {
    responder: IResponder;

    constructor(responder: IResponder) {
        this.responder = responder;
    }

    async fetchData() {
        try {
            const a = await fetch('http://www.yahoo.com/');
            const results = await a.json();
            this.responder.success({ results });
        } catch (e) {
            this.responder.failure({ errCode: 1, error: 'Unable to fetch' });
        }
    }
}