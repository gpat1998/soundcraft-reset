import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { PlayerState } from '../types';
/**
 * Represents the media player
 */
export declare class Player {
    private conn;
    private store;
    /** Current state (playing, stopped, paused) */
    state$: import("rxjs").Observable<PlayerState>;
    /** Current playlist name */
    playlist$: import("rxjs").Observable<string>;
    /** Current track name */
    track$: import("rxjs").Observable<string>;
    /** Current track length in seconds */
    length$: import("rxjs").Observable<number>;
    /** Elapsed time of current track in seconds */
    elapsedTime$: import("rxjs").Observable<number>;
    /** Remaining time of current track in seconds */
    remainingTime$: import("rxjs").Observable<number>;
    /** Shuffle setting (`0` or `1`) */
    shuffle$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore);
    /** Start the media player */
    play(): void;
    /** Pause the media player */
    pause(): void;
    /** Stop the media player */
    stop(): void;
    /** Jump to next track */
    next(): void;
    /** Jump to previous track */
    prev(): void;
    /**
     * Load a playlist by name
     * @param playlist Playlist name
     */
    loadPlaylist(playlist: string): void;
    /**
     * Load a track from a given playlist
     * @param playlist Playlist name
     * @param track Track name on the playlist
     */
    loadTrack(playlist: string, track: string): void;
    /**
     * Set player shuffle setting
     * @param value `0` or `1`
     */
    setShuffle(value: number): void;
    /**
     * Toggle player shuffle setting
     */
    toggleShuffle(): void;
    /**
     * Set player mode like `manual` or `auto`.
     * Values are rather internal, please use convenience functions `manual()` and `auto()`.
     * @param value
     */
    setPlayMode(value: number): void;
    /** Enable manual mode */
    setManual(): void;
    /** Enable automatic mode */
    setAuto(): void;
}
