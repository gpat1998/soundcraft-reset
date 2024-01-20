import { MixerConnection } from '../mixer-connection';
import { ChannelStore } from './channel-store';
export declare class MixerStore {
    private conn;
    /** Internal filtered stream of matched SETD and SETS messages */
    private setdSetsMessageMatches$;
    /** Stream of raw SETD and SETS messages */
    readonly messages$: import("rxjs").Observable<string>;
    /** The full mixer state as a flat object. Updates whenever the state changes. */
    readonly state$: import("rxjs").Connectable<any>;
    readonly channelStore: ChannelStore;
    constructor(conn: MixerConnection);
}
