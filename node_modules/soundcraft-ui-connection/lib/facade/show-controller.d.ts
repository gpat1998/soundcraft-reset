import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
/**
 * Controller for Shows, Snapshots and Cues
 */
export declare class ShowController {
    private conn;
    private store;
    /** Currently loaded show */
    currentShow$: import("rxjs").Observable<string>;
    /** Currently loaded snapshot */
    currentSnapshot$: import("rxjs").Observable<string>;
    /** Currently loaded cue */
    currentCue$: import("rxjs").Observable<string>;
    constructor(conn: MixerConnection, store: MixerStore);
    /**
     * Load a show by name
     * @param show Show name
     */
    loadShow(show: string): void;
    /**
     * Load a snapshot in a show
     * @param show Show name
     * @param snapshot Snapshot name in the show
     */
    loadSnapshot(show: string, snapshot: string): void;
    /**
     * Load a cue in a show
     * @param show Show name
     * @param cue Cue name in the show
     */
    loadCue(show: string, cue: string): void;
}
