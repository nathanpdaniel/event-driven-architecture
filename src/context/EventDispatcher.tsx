import React from 'react';
import { IController } from '../commands/IController';
import { BaseEvent } from '../events/BaseEvent';

interface Props {
    controller: IController;
    children: React.ReactNode;
}

interface EDContext {
    dispatchEvent: (event: BaseEvent) => void;
}

const EventDispatcherContext = React.createContext<EDContext>(null!);

export const EventDispatcher = ({ children, controller }: Props) => {
    const dispatchEvent = (event: BaseEvent): void => {
        if (!controller[event.type]) {
            return;
        }
        controller[event.type].execute(event);
    }

    const value = { dispatchEvent };
    return <EventDispatcherContext.Provider value={value}>{children}</EventDispatcherContext.Provider>
}

export const useEventDispatcher = () => {
    return React.useContext(EventDispatcherContext);
}