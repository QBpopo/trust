/* eslint-disable */
import type { ReplaceCtor } from "./replace.ts";
export type ReplaceCtors<T, Old, New> =
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
new (...args: infer A6): infer R6;
new (...args: infer A7): infer R7;
new (...args: infer A8): infer R8;
new (...args: infer A9): infer R9;
new (...args: infer A10): infer R10;
new (...args: infer A11): infer R11;
new (...args: infer A12): infer R12;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
& ReplaceCtor<new (...args: A6) => R6, Old, New>
& ReplaceCtor<new (...args: A7) => R7, Old, New>
& ReplaceCtor<new (...args: A8) => R8, Old, New>
& ReplaceCtor<new (...args: A9) => R9, Old, New>
& ReplaceCtor<new (...args: A10) => R10, Old, New>
& ReplaceCtor<new (...args: A11) => R11, Old, New>
& ReplaceCtor<new (...args: A12) => R12, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
new (...args: infer A6): infer R6;
new (...args: infer A7): infer R7;
new (...args: infer A8): infer R8;
new (...args: infer A9): infer R9;
new (...args: infer A10): infer R10;
new (...args: infer A11): infer R11;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
& ReplaceCtor<new (...args: A6) => R6, Old, New>
& ReplaceCtor<new (...args: A7) => R7, Old, New>
& ReplaceCtor<new (...args: A8) => R8, Old, New>
& ReplaceCtor<new (...args: A9) => R9, Old, New>
& ReplaceCtor<new (...args: A10) => R10, Old, New>
& ReplaceCtor<new (...args: A11) => R11, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
new (...args: infer A6): infer R6;
new (...args: infer A7): infer R7;
new (...args: infer A8): infer R8;
new (...args: infer A9): infer R9;
new (...args: infer A10): infer R10;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
& ReplaceCtor<new (...args: A6) => R6, Old, New>
& ReplaceCtor<new (...args: A7) => R7, Old, New>
& ReplaceCtor<new (...args: A8) => R8, Old, New>
& ReplaceCtor<new (...args: A9) => R9, Old, New>
& ReplaceCtor<new (...args: A10) => R10, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
new (...args: infer A6): infer R6;
new (...args: infer A7): infer R7;
new (...args: infer A8): infer R8;
new (...args: infer A9): infer R9;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
& ReplaceCtor<new (...args: A6) => R6, Old, New>
& ReplaceCtor<new (...args: A7) => R7, Old, New>
& ReplaceCtor<new (...args: A8) => R8, Old, New>
& ReplaceCtor<new (...args: A9) => R9, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
new (...args: infer A6): infer R6;
new (...args: infer A7): infer R7;
new (...args: infer A8): infer R8;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
& ReplaceCtor<new (...args: A6) => R6, Old, New>
& ReplaceCtor<new (...args: A7) => R7, Old, New>
& ReplaceCtor<new (...args: A8) => R8, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
new (...args: infer A6): infer R6;
new (...args: infer A7): infer R7;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
& ReplaceCtor<new (...args: A6) => R6, Old, New>
& ReplaceCtor<new (...args: A7) => R7, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
new (...args: infer A6): infer R6;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
& ReplaceCtor<new (...args: A6) => R6, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
new (...args: infer A5): infer R5;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
& ReplaceCtor<new (...args: A5) => R5, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
new (...args: infer A4): infer R4;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
& ReplaceCtor<new (...args: A4) => R4, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
new (...args: infer A3): infer R3;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
& ReplaceCtor<new (...args: A3) => R3, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
new (...args: infer A2): infer R2;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
& ReplaceCtor<new (...args: A2) => R2, Old, New>
:
T extends {
new (...args: infer A1): infer R1;
} ?
& ReplaceCtor<new (...args: A1) => R1, Old, New>
:
unknown;
