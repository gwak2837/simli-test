# Contributing to this repository

> 참고: [https://guides.github.com/introduction/flow/](https://guides.github.com/introduction/flow/)

## Getting started

개발을 시작하기 전에

- 컴퓨터 개발 환경을 확인합니다. 이 프로젝트에 필요한 [개발 환경](README.md)은 여기서 확인할 수 있습니다.
- Have you read the [code of conduct](CODE_OF_CONDUCT.md)?
- Check out the [existing issues](https://github.com/rmfpdlxmtidl/simli-test/issues)

## 이슈 등록

다른 사람에게 자신의 진행 상황을 공유하기 위해 GitHub에 자신이 할 일을 이슈로 등록합니다.

이슈 등록 시 [이슈 템플릿](https://github.com/rmfpdlxmtidl/simli-test/issues/new/choose)을 이용합니다. 그리고 이슈 제목은 제목만 보고도 대략적으로 내용을 알 수 있을 정도로 작성한 후 오른쪽의 Assignee는 자신으로, Labels과 Projects는 적절하게 선택합니다. 이슈 내용은 어떤 기능을 개발할 것인지 제목보다 상세하게 적으면 좋습니다.

## 브랜치 생성

생성한 이슈를 기반으로 develop 브랜치에서 자신이 작업할 feature 브랜치를 생성합니다.

브랜치를 생성하기 전엔 다른 사람의 커밋을 항상 최신으로 유지하기 위해 `git pull, yarn` 등을 실행합니다.

만약 이슈 번호가 `#1`이면 브랜치 이름은 `feature/#1/description-of-feature`와 같은 형식으로 짓고, 설명 부분은 [Kebob Case](https://en.wiktionary.org/wiki/kebab_case)를 사용해서 영어로 간단히 짓습니다.

나중에 브랜치 단위로 코드 리뷰가 이뤄지므로 브랜치 단위는 코드 변경 사항이 최소 (+100)줄, 최대 (+500)줄이 되도록 설정하는 것을 권장합니다.

## Pull Request 생성

팀원에게 자신의 진행 상황을 공유하기 위해 GitHub에 해당 feature 브랜치를 develop 브랜치로 병합하는 PR을 `Draft`로 생성합니다.

PR 제목은 소스 브랜치 이름으로 합니다. 예를 들어 `feature/#1/project-setting` 브랜치를 develop 브랜치로 병합하는 PR의 제목은 `Feature/#1/project setting` 형식으로 짓습니다.

이슈와 마찬가지로 PR를 등록할 때 오른쪽의 Assignee는 자신으로 설정하고, Labels와 Projects는 적절하게 선택합니다.

## 코드 작성 및 커밋

feature 브랜치에서 개발을 진행하고 자유롭게 커밋합니다.

모든 커밋 메시지는 영어로 작성하는 것을 권장합니다. 하지만 제목(Summary)만 영어로 쓴 다음에 설명(Description)에 한국말로 덧붙일 수 있습니다.

커밋 제목 접두사는 현재형 동사를 사용합니다. e.g. Add, Fix, Update, Delete, Refactor, Revert etc...

아직 작업 중인 커밋은 제목 앞에 `WIP:` 를 붙여줍니다.

커밋할 때 작업한 모든 내용을 한 커밋에 몰아 넣지 말고, 다른 사람도 잘 알아볼 수 있도록 의미 있게 여러 개로 구분해서 커밋합니다.

## Code Review 요청

개발이 완료되면 PR 페이지 아래 쪽의 "Ready for Review" 버튼을 클릭하고 다른 사람에게 코드 리뷰를 요청합니다. 이때 PR 내용에 자신이 무엇을 작업했는지 언급해주면 좋습니다.

코드 리뷰를 요청하기 전에 PR의 충돌 사항을 수정하고 대상 브랜치에 병합합니다. 충돌 사항 수정은 VSCode를 이용하면 로컬에서 작업할 수 있습니다.

코드 리뷰를 요청하는 코드 단위는 최소 (+100)줄, 최대 (+500)줄을 권장합니다.

코드 리뷰 후 모든 피드백 사항이 PR에 반영되면 PR을 승인합니다.

이 프로젝트에선 코드 리뷰 승인을 받은 PR에 새로운 커밋이 생기면 기존 코드 리뷰 승인이 사라지니 유의합니다.

## Code Review

어떤 PR은 이전 PR에 의존하고(이전 PR 커밋을 포함하고) 있을 수 있어서, 코드 리뷰는 번호가 낮은 PR 부터 하는 것을 권장합니다.

#### 방법

1. Pull Request 들어가기
2. File changed
3. 코드에 의견, 질문, 제안 등 달고
4. Review changes
5. Approve
6. Submit review

#### 기능 동작

구현된 기능이 아래의 브라우저에서 특정 레이아웃 비율에서 의도한 대로 동작하는지 확인합니다.

- Chrome
- Safari
- Edge
- Whale (한국)
- Firefox (외국)

Whale은 한국에서 많이 사용하지만 외국에선 잘 사용하지 않고, Firefox는 외국에서 많이 사용하지만 한국에선 잘 사용하지 않는다고 합니다. [#브라우저 점유율 (대한민국)](https://gs.statcounter.com/browser-market-share/all/south-korea)

#### 코드 품질

코드 품질이나 코딩 컨벤션에 대해서 확인합니다. 이때 코드 품질이 안 좋은 이유와 참고할 수 있는 사이트를 같이 언급하는 것을 권장합니다.

## FAQ

#### Q. 코드 리뷰가 안 끝났는데 다른 작업을 시작하고 싶어요. 이럴 땐 어떻게 하나요?

develop 브랜치 대신 코드 리뷰가 필요한 feature 브랜치(자신이 작업한 브랜치)를 기반으로 새로운 feature 브랜치를 위 1~3번 과정대로 생성한 후 개발을 진행합니다.

#### Q. 다른 사람이 작업한 내용의 코드 리뷰가 아직 끝나지 않아 develop에 반영되지 않았는데 제 브랜치로 반영하고 싶으면 어떻게 하나요?

원래는 코드 리뷰가 끝나고 develop에 반영된 내용을 자신의 브랜치로 병합하는 것을 권장하지만, 이 경우 파일 충돌에 유의해야 합니다.
