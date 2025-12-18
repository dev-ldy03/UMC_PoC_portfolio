import { useState, type ChangeEvent } from "react";

const FileUpload = () => {
    // 업로드된 파일의 프리뷰 URL을 저장할 상태
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [fileType, setFileType] = useState<string>("");

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setFileType(file.type);
            // 파일을 읽어 브라우저에서 사용할 수 있는 임시 URL 생성
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #ccc",
                margin: "10px",
            }}
        >
            <h3>[F-01b] 사진/PDF 업로드 테스트</h3>
            <input
                type="file"
                accept="image/*, application/pdf"
                onChange={handleFileChange}
            />

            <div style={{ marginTop: "20px" }}>
                {previewUrl &&
                    (fileType.includes("pdf") ? (
                        // PDF 미리보기: iframe이나 object 태그 사용
                        <iframe
                            src={previewUrl}
                            width="100%"
                            height="500px"
                            title="PDF Preview"
                        />
                    ) : (
                        // 이미지 미리보기
                        <img
                            src={previewUrl}
                            alt="Preview"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    ))}
            </div>
        </div>
    );
};

export default FileUpload;
