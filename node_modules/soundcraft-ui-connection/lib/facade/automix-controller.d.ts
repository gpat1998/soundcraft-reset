import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
export type AutomixGroupId = 'a' | 'b';
export declare class AutomixGroup {
    private conn;
    private store;
    private group;
    /** Active state of this automix group (`0` or `1`) */
    state$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore, group: AutomixGroupId);
    private setState;
    /** Enable this automix group */
    enable(): void;
    /** Disable this automix group */
    disable(): void;
    /** Toggle the state of this automix group */
    toggle(): void;
}
/**
 * Controller for Automix settings
 */
export declare class AutomixController {
    private conn;
    private store;
    /** Global response time (linear, between `0` and `1`) */
    responseTime$: import("rxjs").Observable<number>;
    /** Global response time in milliseconds (between `20` and `4000` ms) */
    responseTimeMs$: import("rxjs").Observable<number>;
    /**
     * Set global response time (linear)
     * @param value linear value between `0` and `1`
     */
    setResponseTime(value: number): void;
    /**
     * Set global response time (ms)
     * @param value milliseconds value between `20` and `4000`
     */
    setResponseTimeMs(timeMs: number): void;
    /** Access to automix groups `a` and `b` */
    groups: {
        [Id in AutomixGroupId]: AutomixGroup;
    };
    constructor(conn: MixerConnection, store: MixerStore);
}
