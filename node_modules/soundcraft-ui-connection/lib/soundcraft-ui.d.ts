import { AutomixController } from './facade/automix-controller';
import { AuxBus } from './facade/aux-bus';
import { DeviceInfo } from './facade/device-info';
import { DualTrackRecorder } from './facade/dual-track-recorder';
import { FxBus } from './facade/fx-bus';
import { HwChannel } from './facade/hw-channel';
import { MasterBus } from './facade/master-bus';
import { MultiTrackRecorder } from './facade/multi-track-recorder';
import { MuteGroup, MuteGroupID } from './facade/mute-group';
import { Player } from './facade/player';
import { ShowController } from './facade/show-controller';
import { VolumeBus } from './facade/volume-bus';
import { MixerConnection } from './mixer-connection';
import { MixerStore } from './state/mixer-store';
export declare class SoundcraftUI {
    private targetIP;
    readonly conn: MixerConnection;
    readonly store: MixerStore;
    deviceInfo: DeviceInfo;
    /** Connection status */
    status$: import("rxjs").Observable<import("./types").ConnectionEvent>;
    /** Master bus */
    master: MasterBus;
    /** Media player */
    player: Player;
    /** 2-track recorder */
    recorderDualTrack: DualTrackRecorder;
    /** multitrack recorder */
    recorderMultiTrack: MultiTrackRecorder;
    /** SOLO and Headphone buses */
    volume: {
        solo: VolumeBus;
        headphone: (id: number) => VolumeBus;
    };
    /** Show controller (Shows, Snapshots, Cues) */
    shows: ShowController;
    /** Automix controller */
    automix: AutomixController;
    constructor(targetIP: string);
    /**
     * Get AUX bus
     * @param bus Bus number
     */
    aux(bus: number): AuxBus;
    /**
     * Get FX bus
     * @param bus Bus number
     */
    fx(bus: number): FxBus;
    /**
     * Get MUTE group or related groupings (MUTE ALL and MUTE FX)
     * @param id ID of the group: 1..6, all, fx
     */
    muteGroup(id: MuteGroupID): MuteGroup;
    /** Unmute all mute groups, "MUTE ALL" and "MUTE FX" */
    clearMuteGroups(): void;
    /**
     * Get hardware channel. With 1:1 patching, those are the same as input channels.
     * However, if patched differently, HW channel 1 still is the first input on the hardware.
     *
     * @param channel Channel number
     */
    hw(channel: number): HwChannel;
    /** Connect to the mixer. Returns a Promise that resolves when the connection is open. */
    connect(): Promise<void>;
    /** Disconnect from the mixer. Returns a Promise that resolves when the connection is closed. */
    disconnect(): Promise<void>;
    /**
     * Reconnect to the mixer after 1 second.
     * Returns a Promise that resolves when the connection is open again.
     */
    reconnect(): Promise<void>;
}
