# FDS 9기 해커톤 템플릿 프로젝트

이 프로젝트는 스쿨에서 진행한 숫자야구 프로젝트를 Refactoring하여 재구현한 것 입니다. 빌드 도구로 [Parcel](https://parceljs.org/)을 사용하고 있으며, [create-react-app](https://github.com/facebook/create-react-app)에서 사용하는 [Babel](http://babeljs.io/) 프리셋인 [babel-preset-react-app](https://github.com/facebook/create-react-app/tree/master/packages/babel-preset-react-app)을 통해 여러 최신 문법을 사용할 수 있도록 설정되어 있습니다.

## 해커톤 주제

- [숫자야구](./docs/number-baseball.md)
- 오목 - 다음에 할 프로젝트 입니다.

## Refactoring 목표
- 라운드 진행 순으로 리스트 추가 기능
- HTML & CSS 
  - BEM naming 사용, SaSS문법 사용

## 프로젝트 관련 명령

- `npm install` - 프로젝트 실행에 필요한 파일을 설치하는 명령. 프로젝틑 최초 실행 시 반드시 실행해주어야 합니다.
- `npm start` - 개발용 서버를 실행시키는 명령
- `npm run build` - Netlify 등의 호스팅 서비스에서 사용할 수 있는 HTML, CSS, JS 파일을 생성해주는 명령. `dist` 폴더에 파일이 생성됩니다.

