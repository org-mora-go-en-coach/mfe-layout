# MFE Layout

Mora Go 화면의 공통 레이아웃과 내비게이션을 담당하는 React 마이크로 프런트엔드입니다.

## 구현 내용

- 데스크톱·모바일 공통 애플리케이션 프레임
- 헤더, 사이드바, 하단 내비게이션과 콘텐츠 영역 제공
- `mount()` 계약을 통한 Shell 런타임 연결
- SCSS 기반 반응형 스타일
- 버전별 ESM 원격 모듈 빌드

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버는 `http://localhost:4100`에서 실행됩니다. `npm run build`는 최신 파일과 패키지 버전별 `remoteEntry.js`를 생성합니다.
