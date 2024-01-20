/**
 * Toggle a bit of `value`
 * @param value Source value
 * @param bitIndex Bit index, right to left
 */
export declare function toggleBit(value: number, bitIndex: number): number;
/**
 * Change a bit of `value` to 0
 * @param value Source value
 * @param bitIndex Bit index, right to left
 */
export declare function clearBit(value: number, bitIndex: number): number;
/**
 * Change a bit of `value` to 1
 * @param value Source value
 * @param bitIndex Bit index, right to left
 */
export declare function setBit(value: number, bitIndex: number): number;
/**
 * Return the value of a specific bit in `value`
 * @param value Source value
 * @param bitIndex Bit index, right to left
 */
export declare function getValueOfBit(value: number, bitIndex: number): number;
