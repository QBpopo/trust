/* eslint-disable */
import type { ReplaceFunc } from "./replace.ts";
export type ReplaceFuncs<T, Old, New> =
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
(...args: infer A6): infer R6;
(...args: infer A7): infer R7;
(...args: infer A8): infer R8;
(...args: infer A9): infer R9;
(...args: infer A10): infer R10;
(...args: infer A11): infer R11;
(...args: infer A12): infer R12;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
& ReplaceFunc<(...args: A6) => R6, Old, New>
& ReplaceFunc<(...args: A7) => R7, Old, New>
& ReplaceFunc<(...args: A8) => R8, Old, New>
& ReplaceFunc<(...args: A9) => R9, Old, New>
& ReplaceFunc<(...args: A10) => R10, Old, New>
& ReplaceFunc<(...args: A11) => R11, Old, New>
& ReplaceFunc<(...args: A12) => R12, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
(...args: infer A6): infer R6;
(...args: infer A7): infer R7;
(...args: infer A8): infer R8;
(...args: infer A9): infer R9;
(...args: infer A10): infer R10;
(...args: infer A11): infer R11;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
& ReplaceFunc<(...args: A6) => R6, Old, New>
& ReplaceFunc<(...args: A7) => R7, Old, New>
& ReplaceFunc<(...args: A8) => R8, Old, New>
& ReplaceFunc<(...args: A9) => R9, Old, New>
& ReplaceFunc<(...args: A10) => R10, Old, New>
& ReplaceFunc<(...args: A11) => R11, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
(...args: infer A6): infer R6;
(...args: infer A7): infer R7;
(...args: infer A8): infer R8;
(...args: infer A9): infer R9;
(...args: infer A10): infer R10;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
& ReplaceFunc<(...args: A6) => R6, Old, New>
& ReplaceFunc<(...args: A7) => R7, Old, New>
& ReplaceFunc<(...args: A8) => R8, Old, New>
& ReplaceFunc<(...args: A9) => R9, Old, New>
& ReplaceFunc<(...args: A10) => R10, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
(...args: infer A6): infer R6;
(...args: infer A7): infer R7;
(...args: infer A8): infer R8;
(...args: infer A9): infer R9;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
& ReplaceFunc<(...args: A6) => R6, Old, New>
& ReplaceFunc<(...args: A7) => R7, Old, New>
& ReplaceFunc<(...args: A8) => R8, Old, New>
& ReplaceFunc<(...args: A9) => R9, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
(...args: infer A6): infer R6;
(...args: infer A7): infer R7;
(...args: infer A8): infer R8;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
& ReplaceFunc<(...args: A6) => R6, Old, New>
& ReplaceFunc<(...args: A7) => R7, Old, New>
& ReplaceFunc<(...args: A8) => R8, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
(...args: infer A6): infer R6;
(...args: infer A7): infer R7;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
& ReplaceFunc<(...args: A6) => R6, Old, New>
& ReplaceFunc<(...args: A7) => R7, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
(...args: infer A6): infer R6;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
& ReplaceFunc<(...args: A6) => R6, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
(...args: infer A5): infer R5;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
& ReplaceFunc<(...args: A5) => R5, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
(...args: infer A4): infer R4;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
& ReplaceFunc<(...args: A4) => R4, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
(...args: infer A3): infer R3;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
& ReplaceFunc<(...args: A3) => R3, Old, New>
:
T extends {
(...args: infer A1): infer R1;
(...args: infer A2): infer R2;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
& ReplaceFunc<(...args: A2) => R2, Old, New>
:
T extends {
(...args: infer A1): infer R1;
} ?
& ReplaceFunc<(...args: A1) => R1, Old, New>
:
unknown;
