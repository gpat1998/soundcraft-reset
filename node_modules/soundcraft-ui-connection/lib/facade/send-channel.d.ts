import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { BusType, ChannelType } from '../types';
import { Channel } from './channel';
/**
 * Represents a channel on a send bus (AUX or FX).
 * Used as super class for Aux and Fx
 */
export declare class SendChannel extends Channel {
    protected constructChannelId(channelType: ChannelType, channel: number, busType: BusType, bus: number): string;
    fullChannelId: string;
    faderLevelCommand: string;
    /** PRE/POST value of the channel (`1` (POST) or `0` (PRE)) */
    post$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore, channelType: ChannelType, channel: number, busType: BusType, bus: number);
    /**
     * Set PRE/POST value for the channel
     * @param value `1` (POST) or `0` (PRE)
     */
    setPost(value: number): void;
    /** Set AUX channel to POST */
    post(): void;
    /** Set AUX channel to PRE */
    pre(): void;
    /** Toggle PRE/POST status of the channel */
    togglePost(): void;
}
