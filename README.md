# Proovy Front-End Proof of Concept (PoC)
기술 검토 프로토타입

## Key Features

기획안의 [P1: 입력 시스템] 요구사항을 바탕으로 3가지 입력 인터페이스를 구현해 보았다.
기술 구현 여부를 표현하기 위함이기에 디자인적 요소는 거의 빼고 기능 구현 위주로 하였다. 

1. Digital Canvas (tldraw)
   - 태블릿 유저를 위한 프리핸드 필기 환경 제공
   - `tldraw` 오픈소스를 활용한 인터랙티브 UI 구축

2. Formula Editor (MathLive)
   - 가상 키보드 및 수식 입력을 통한 정규화된 LaTeX 데이터 추출
   - Web Components의 React 환경 내 타입 안정성 확보 (Custom d.ts)

3. File System (PDF/Image Upload)
   - 노트북/데스크탑 유저를 위한 이미지 및 PDF 업로드 및 실시간 프리뷰
   - `URL.createObjectURL`을 통한 클라이언트 사이드 최적화

## Tech Stack
- 프레임워크: React 18 (Vite)
- 언어: TypeScript
- 라이브러리:`tldraw`, `mathlive`

## Installation

```bash
git clone [repository-url]
cd [project-folder]
npm install
npm run dev
