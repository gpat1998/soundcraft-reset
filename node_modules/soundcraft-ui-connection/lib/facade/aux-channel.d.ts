import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { ChannelType } from '../types';
import { PannableChannel } from './interfaces';
import { SendChannel } from './send-channel';
/**
 * Represents a channel on an AUX bus
 */
export declare class AuxChannel extends SendChannel implements PannableChannel {
    /** when the AUX bus is stereo-linked, this contains the ID of this channel on the linked bus */
    private auxLinkChannelIds;
    /** PAN value of the AUX channel (between `0` and `1`) */
    pan$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore, channelType: ChannelType, channel: number, bus: number);
    /**
     * Set PAN value of the AUX channel.
     * This only works for stereo-linked AUX buses, not for mono AUX.
     * @param value value between `0` and `1`
     */
    pan(value: number): void;
    /**
     * Set PRE/POST PROC value for the AUX channel
     * @param value `1` (POST PROC) or `0` (PRE PROC)
     */
    setPostProc(value: number): void;
    /** Set AUX channel to POST PROC */
    postProc(): void;
    /** Set AUX channel to PRE PROC */
    preProc(): void;
}
