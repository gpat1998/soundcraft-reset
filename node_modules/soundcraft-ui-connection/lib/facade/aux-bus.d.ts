import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { AuxChannel } from './aux-channel';
/**
 * Represents an AUX bus
 */
export declare class AuxBus {
    private conn;
    private store;
    private bus;
    constructor(conn: MixerConnection, store: MixerStore, bus: number);
    /**
     * Get input channel on the AUX bus
     * @param channel Channel number
     */
    input(channel: number): AuxChannel;
    /**
     * Get line channel on the AUX bus
     * @param channel Channel number
     */
    line(channel: number): AuxChannel;
    /**
     * Get player channel on the AUX bus
     * @param channel Channel number
     */
    player(channel: number): AuxChannel;
    /**
     * Get FX channel on the AUX bus
     * @param channel Channel number
     */
    fx(channel: number): AuxChannel;
}
