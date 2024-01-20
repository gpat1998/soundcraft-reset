import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { FxChannel } from './fx-channel';
/**
 * Represents an FX bus
 */
export declare class FxBus {
    private conn;
    private store;
    private bus;
    constructor(conn: MixerConnection, store: MixerStore, bus: number);
    /**
     * Get input channel on the FX bus
     * @param channel Channel number
     */
    input(channel: number): FxChannel;
    /**
     * Get line channel on the FX bus
     * @param channel Channel number
     */
    line(channel: number): FxChannel;
    /**
     * Get player channel on the FX bus
     * @param channel Channel number
     */
    player(channel: number): FxChannel;
    /**
     * Get sub group channel on the FX bus
     * @param channel Channel number
     */
    sub(channel: number): FxChannel;
}
