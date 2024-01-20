import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { BusType, ChannelType } from '../types';
import { Easings } from '../utils/transitions/easings';
import { FadeableChannel } from './interfaces';
/**
 * Represents a single channel with a fader
 */
export declare class Channel implements FadeableChannel {
    protected conn: MixerConnection;
    protected store: MixerStore;
    protected channelType: ChannelType;
    protected channel: number;
    protected busType: BusType;
    protected bus: number;
    fullChannelId: string;
    protected faderLevelCommand: string;
    protected linkedChannelIds: string[];
    private transitionSources$;
    /** Index of this channel in the stereolink compound (0 = I'm first, 1 = I'm second, -1 = not linked) */
    protected stereoIndex$: import("rxjs").Observable<number>;
    /** Linear level of the channel (between `0` and `1`) */
    faderLevel$: import("rxjs").Observable<number>;
    /** dB level of the channel (between `-Infinity` and `10`) */
    faderLevelDB$: import("rxjs").Observable<number>;
    /** MUTE value of the channel (`0` or `1`) */
    mute$: import("rxjs").Observable<number>;
    /** Name of the channel */
    name$: import("rxjs").Observable<string | number>;
    constructor(conn: MixerConnection, store: MixerStore, channelType: ChannelType, channel: number, busType?: BusType, bus?: number);
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
     * Set linear level of the channel fader
     * @param value value between `0` and `1`
     */
    setFaderLevel(value: number): void;
    private setFaderLevelRaw;
    /**
     * Set dB level of the channel fader
     * @param value value between `-Infinity` and `10`
     */
    setFaderLevelDB(dbValue: number): void;
    /**
     * Change the fader value relatively by adding a given value
     * @param offsetDB value (dB) to add to the current value
     */
    changeFaderLevelDB(offsetDB: number): void;
    /**
     * Set MUTE value for the channel
     * @param value MUTE value `0` or `1`
     */
    setMute(value: number): void;
    /** Enable MUTE for the channel */
    mute(): void;
    /** Disable MUTE for the channel */
    unmute(): void;
    /** Toggle MUTE status for the channel */
    toggleMute(): void;
}
