import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { Easings } from '../utils/transitions/easings';
import { FadeableChannel } from './interfaces';
/**
 * Represents a volume bus like headphones or solo
 */
export declare class VolumeBus implements FadeableChannel {
    protected conn: MixerConnection;
    protected store: MixerStore;
    protected busName: string;
    protected busId?: number | undefined;
    private transitionSources$;
    /** Linear level of the volume bus (between `0` and `1`) */
    faderLevel$: import("rxjs").Observable<number>;
    /** dB level of the volume bus (between `-Infinity` and `10`) */
    faderLevelDB$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore, busName: string, busId?: number | undefined);
    /**
     * Perform fader transition to linear value
     * @param targetValue Target value as linear value (between 0 and 1)
     * @param fadeTime Fade time in ms
     * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
     * @param fps Frames per second, defaults to 25
     */
    fadeTo(targetValue: number, fadeTime: number, easing?: Easings, fps?: number): Promise<void>;
    /**
     * Perform fader transition to dB value
     * @param targetValueDB Target value as dB value (between -Infinity and 10)
     * @param fadeTime Fade time in ms
     * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
     * @param fps Frames per second, defaults to 25
     */
    fadeToDB(targetValueDB: number, fadeTime: number, easing?: Easings, fps?: number): Promise<void>;
    /**
     * Set linear level of the bus volume
     * @param value value between `0` and `1`
     */
    setFaderLevel(value: number): void;
    private setFaderLevelRaw;
    /**
     * Set dB level of the bus volume
     * @param value value between `-Infinity` and `10`
     */
    setFaderLevelDB(dbValue: number): void;
    /**
     * Change the volume fader value relatively by adding a given value
     * @param offsetDB value (dB) to add to the current value
     */
    changeFaderLevelDB(offsetDB: number): void;
}
