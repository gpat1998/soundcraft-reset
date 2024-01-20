import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { Easings } from '../utils/transitions/easings';
import { DelayableMasterChannel } from './delayable-master-channel';
import { FadeableChannel, PannableChannel } from './interfaces';
import { MasterChannel } from './master-channel';
/**
 * Represents the master bus
 */
export declare class MasterBus implements FadeableChannel, PannableChannel {
    private conn;
    private store;
    /** Linear level of the master fader (between `0` and `1`) */
    faderLevel$: import("rxjs").Observable<number>;
    /** dB level of the master fader (between `-Infinity` and `10`) */
    faderLevelDB$: import("rxjs").Observable<number>;
    /** PAN value of the master (between `0` and `1`) */
    pan$: import("rxjs").Observable<number>;
    /** DIM value of the master (`0` or `1`) */
    dim$: import("rxjs").Observable<number>;
    /** LEFT DELAY (ms) of the master */
    delayL$: import("rxjs").Observable<number>;
    /** RIGHT DELAY (ms) of the master */
    delayR$: import("rxjs").Observable<number>;
    private transitionSources$;
    constructor(conn: MixerConnection, store: MixerStore);
    /** Fader getters */
    /**
     * Get input channel on the master bus
     * @param channel Channel number
     */
    input(channel: number): DelayableMasterChannel;
    /**
     * Get line channel on the master bus
     * @param channel Channel number
     */
    line(channel: number): DelayableMasterChannel;
    /**
     * Get player channel on the master bus
     * @param channel Channel number
     */
    player(channel: number): MasterChannel;
    /**
     * Get AUX output channel on the master bus
     * @param channel Channel number
     */
    aux(channel: number): DelayableMasterChannel;
    /**
     * Get FX channel on the master bus
     * @param channel Channel number
     */
    fx(channel: number): MasterChannel;
    /**
     * Get sub group channel on the master bus
     * @param channel Channel number
     */
    sub(channel: number): MasterChannel;
    /**
     * Get VCA channel on the master bus
     * @param channel Channel number
     */
    vca(channel: number): MasterChannel;
    /** Master actions */
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
     * Set linear level of the master fader
     * @param value value between `0` and `1`
     */
    setFaderLevel(value: number): void;
    private setFaderLevelRaw;
    /**
     * Set dB level of the master fader
     * @param dbValue value between `-Infinity` and `10`
     */
    setFaderLevelDB(dbValue: number): void;
    /**
     * Change the fader value relatively by adding a given value
     * @param offsetDB value (dB) to add to the current value
     */
    changeFaderLevelDB(offsetDB: number): void;
    /**
     * Set PAN value for the master
     * @param value value between `0` and `1`
     */
    pan(value: number): void;
    /**
     * Set DIM value for the master
     * @param value DIM value `0` or `1`
     */
    setDim(value: number): void;
    /** Enable DIM on the master */
    dim(): void;
    /** Disable DIM on the master */
    undim(): void;
    /** Toggle DIM on the master */
    toggleDim(): void;
    /** Set LEFT DELAY (ms) for master output. Maximum 500 ms */
    setDelayL(ms: number): void;
    /** Set RIGHT DELAY (ms) for master output. Maximum 500 ms */
    setDelayR(ms: number): void;
    /**
     * Relatively change LEFT DELAY (ms) for master output. Maximum 500 ms
     * @param offsetMs value (ms) to add to the current value
     */
    changeDelayL(offsetMs: number): void;
    /**
     * Relatively change RIGHT DELAY (ms) for master output. Maximum 500 ms
     * @param offsetMs value (ms) to add to the current value
     */
    changeDelayR(offsetMs: number): void;
    private setDelay;
}
