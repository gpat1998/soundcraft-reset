/**
 * Store for facade objects
 * This is used to cache channels and others so that they don't need to be recreated all the time.
 * This is just a wrapper around a "Map" object, but we like to keep it abstract.
 */
export declare class ChannelStore {
    private store;
    get<T>(id: string): T;
    set(id: string, value: unknown): void;
}
