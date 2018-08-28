import { SyntheticEvent } from 'react';

export class SyntheticEventTestFactory {
    public static create(value=null): SyntheticEvent<EventTarget> {
        const event = {
            preventDefault: () => null,
            target:         {} as EventTarget
        } as SyntheticEvent<EventTarget>;

        event.target['value'] = value;

        return event;
    }
}