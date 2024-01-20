import { SoundcraftUI } from './soundcraft-ui';
import { ChannelType, MixerModel } from './types';
/** Clamp numeric value to min and max */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Transform a given value to int, float or string
 * @param value
 */
export declare function transformStringValue(value: string): string | number;
/**
 * Transform player time in seconds to human-readable format M:SS
 * @param value player time in seconds
 */
export declare function playerTimeToString(value: number): string;
export declare function getLinkedChannelNumber(channel: number, stereoIndex: number): number;
/**
 * Construct a human-readable name for a channel
 * based on the default labels from the web interface
 * @param type
 * @param channel
 * @returns
 */
export declare function constructReadableChannelName(type: ChannelType, channel: number): string;
/** Manually set mixer model. Used for testing only! */
export declare function setMixerModel(model: MixerModel, conn: SoundcraftUI): void;
