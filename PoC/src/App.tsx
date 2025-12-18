import MathInput from "./components/MathInput";
import FileUpload from "./components/FileUpload";
import TldrawCanvas from "./components/TldrawCanvas";

function App() {
    return (
        <div
            style={{
                padding: "40px",
                maxWidth: "900px",
                margin: "0 auto",
                fontFamily: "sans-serif",
            }}
        >
            <header
                style={{
                    marginBottom: "40px",
                    borderBottom: "2px solid #eee",
                    paddingBottom: "20px",
                }}
            >
                <h1 style={{ color: "#2c3e50", marginBottom: "10px" }}>
                    Proovy FE 기술 검증 프로토타입
                </h1>
                <p style={{ color: "#7f8c8d" }}>
                    기획안의 <strong>[P1: 입력의 고통 해결]</strong>을 위한
                    3가지 솔루션을 구현했습니다.
                </p>
            </header>

            <section style={{ marginBottom: "40px" }}>
                <MathInput />
            </section>

            <section style={{ marginBottom: "40px" }}>
                <FileUpload />
            </section>

            <section style={{ marginBottom: "40px" }}>
                <TldrawCanvas />
            </section>
        </div>
    );
}
export default App;
