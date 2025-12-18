import { useState, useEffect, useRef } from "react";
import "mathlive";
import type { MathfieldElement } from "mathlive";

// 1. TypeScript에게 <math-field> 태그의 존재를 알린다.
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "math-field": React.DetailedHTMLProps<
                React.HTMLAttributes<MathfieldElement>,
                MathfieldElement
            > & {
                ref?: React.RefObject<MathfieldElement>;
            };
        }
    }
}

const MathInput = () => {
    const [latex, setLatex] = useState<string>("");
    const mfRef = useRef<MathfieldElement>(null);

    useEffect(() => {
        const mf = mfRef.current;
        if (mf) {
            // 초기값 설정
            mf.value = "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}";
            setLatex(mf.value);

            // 입력 이벤트 핸들러
            const handleInput = (e: Event) => {
                // 커스텀 엘리먼트의 값에 접근
                const target = e.target as MathfieldElement;
                setLatex(target.value);
            };

            mf.addEventListener("input", handleInput);
            return () => mf.removeEventListener("input", handleInput);
        }
    }, []);

    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #3498db",
                margin: "10px",
                borderRadius: "8px",
            }}
        >
            <h3>[F-01c] 보조 입력기 (MathLive) 테스트</h3>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
                기획안의 수식 입력 고통을 해결하기 위한 컴포넌트다.
            </p>

            <math-field
                ref={mfRef}
                style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    fontSize: "1.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    backgroundColor: "white",
                }}
            />

            <div
                style={{
                    marginTop: "20px",
                    backgroundColor: "#f8f9fa",
                    padding: "15px",
                    borderRadius: "4px",
                    textAlign: "left",
                }}
            >
                <strong style={{ color: "#2c3e50" }}>추출된 LaTeX 코드:</strong>
                <code
                    style={{
                        display: "block",
                        marginTop: "10px",
                        color: "#e74c3c",
                        wordBreak: "break-all",
                    }}
                >
                    {latex || "(수식을 입력하세요)"}
                </code>
            </div>
        </div>
    );
};

export default MathInput;
