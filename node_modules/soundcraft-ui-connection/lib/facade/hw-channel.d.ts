import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { DeviceInfo } from './device-info';
/**
 * Represents a hardware input on the mixer
 */
export declare class HwChannel {
    protected conn: MixerConnection;
    protected store: MixerStore;
    protected deviceInfo: DeviceInfo;
    protected channel: number;
    fullChannelId: string;
    /** Phantom power state of the channel (`0` or `1`) */
    phantom$: import("rxjs").Observable<number>;
    /** Linear gain level of the channel (between `0` and `1`) */
    gain$: import("rxjs").Observable<number>;
    /** dB gain level of the channel */
    gainDB$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore, deviceInfo: DeviceInfo, channel: number);
    /**
     * Set phantom power state for the channel
     * @param value `0` or `1`
     */
    setPhantom(value: number): void;
    /** Switch ON phantom power for the channel */
    phantomOn(): void;
    /** Switch OFF phantom power for the channel */
    phantomOff(): void;
    /** Toggle phantom power for the channel */
    togglePhantom(): void;
    /**
     * Set gain level (linear) for the channel
     * @param value value between `0` and `1`
     */
    setGain(value: number): void;
    /**
     * Set gain level (dB) for the channel
     * @param value value between `-6` and `57`
     */
    setGainDB(dbValue: number): void;
    /**
     * Change the gain value relatively by adding a given value
     * @param offsetDB value (dB) to add to the current value
     */
    changeGainDB(offsetDB: number): void;
}
