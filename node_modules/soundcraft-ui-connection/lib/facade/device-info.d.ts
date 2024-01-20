import { MixerStore } from '../state/mixer-store';
import { MixerModel } from '../types';
export declare class DeviceInfo {
    private store;
    /**
     * Hardware model of the mixer.
     * Possible values: `ui12`, `ui16`, `ui24`
     */
    model$: import("rxjs").Observable<MixerModel>;
    /** Firmware version of ther mixer */
    firmware$: import("rxjs").Observable<string>;
    /**
     * Hardware model of the mixer.
     * Possible values: `ui12`, `ui16`, `ui24`
     */
    model?: MixerModel;
    constructor(store: MixerStore);
}
