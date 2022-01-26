export interface IDataFetcher {
    responder: IResponder;
    fetchData: () => void;
}

export interface IResponse {
    results: any;
}

export interface IError {
    error: string;
    errCode: string | number;
}

export interface IResponder {
    success: (data: IResponse) => void;
    failure: (error: IError) => void;
}