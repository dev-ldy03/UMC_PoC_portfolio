// src/types/mathlive.d.ts
import type { MathfieldElement } from "mathlive";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "math-field": {
                ref?: React.RefObject<MathfieldElement>;
                style?: React.CSSProperties;
                class?: string;
                id?: string;
                // 필요한 다른 HTML 속성들 추가 가능
            };
        }
    }
}

export {};
