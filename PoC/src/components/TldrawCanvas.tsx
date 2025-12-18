import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const TldrawCanvas = () => {
    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #27ae60",
                margin: "10px",
                borderRadius: "8px",
            }}
        >
            <h3 style={{ color: "#27ae60" }}>[F-01a] 디지털 캔버스 (tldraw)</h3>
            <div
                style={{
                    width: "100%",
                    height: "500px",
                    border: "1px solid #eee",
                }}
            >
                <Tldraw />
            </div>
        </div>
    );
};
export default TldrawCanvas;
