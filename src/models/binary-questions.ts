type Answer = {
  id: string
  name: string // 척도 이름
  value: number // 척도 변경값
}

type Question = {
  id: string
  question: string
  onYes: Answer[] // '네' 클릭 시 수행할 계산
  onNo: Answer[] // '아니요' 클릭 시 수행할 계산
}

export type Result = {
  id: string
  title: string
  conditions: {
    id: string
    name: string
    value: number
    type: string
  }[]
  imageUrl: string
  contents: {
    id: string
    content: string
    tag?: string // HTML 태그 종류. 기본값은 <p>
  }[]
}

type Test = {
  id: string
  questions: Question[]
  results: Result[]
}

export const tests: Record<string, Test> = {
  Test_1: {
    id: '1',
    questions: [
      {
        id: '1',
        question: '나는 중독자다. 일 중독자.',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          '일은 곧 나요. 나는 곧 일이다. 일과 나는 하나다. 일즉나 나즉일 -조선의 왕 정조(?).',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '3',
        question: '"일용할 양식을 주옵시고"는 "일을 주옵시고"다.',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '4',
        question: '쉰다는 것. 그것은 곧 나에게 죽음이다. 일이 아니면 죽음을 달라.',
        onYes: [
          { id: '1', name: '중독', value: 10 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '5',
        question: '당신의 친구가 주말 여행을 가자고 조른다. 당신은 그와 여행을 갈 것인가?',
        onYes: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '6',
        question: '오늘의 일은 휴식의 니코틴보다 향기롭다!',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '7',
        question: '나는 알코올보다 일에 취하는 편이다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '8',
        question: '나는 일주일 중 월요일이 가장 설렌다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '일에 미친 당신',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [{ id: '1', content: '손모가지 절단만이 답입니다.' }],
      },
      {
        id: '2',
        title: '열심히 일한 당신',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [{ id: '1', content: '당신은 일꾼입니다. 미네랄을 캐세요.' }],
      },
      {
        id: '3',
        title: '자유로운 영혼의 소유자',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [{ id: '1', content: '선비의 정신을 가졌군요! 다음 심리테스트도 해보세요!' }],
      },
    ],
  },
  Test_2: {
    id: '1',
    questions: [
      {
        id: '1',
        question: '나는 조선의 선비다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
          { id: '3', name: '평온', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -5 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          '위층에 새로운 노비가 이사를 왔다. 그는 조선의 덕을 알지 못한다. 그와 이웃이 될 것인가?',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
          { id: '3', name: '짜증', value: 10 },
        ],
      },
      {
        id: '3',
        question: '나는 배가 고플 때 의식을 셧다운 한다.',
        onYes: [
          { id: '1', name: '평온', value: 10 },
          { id: '2', name: '짜증', value: -10 },
        ],
        onNo: [
          { id: '1', name: '평온', value: -10 },
          { id: '2', name: '짜증', value: 10 },
        ],
      },
      {
        id: '4',
        question: '맞춤법 따위는 개나 줘버려. 나는 킹 세종의 뜻을 헤아리기엔 덕이 부족하다.',
        onYes: [
          { id: '1', name: '평온', value: -10 },
          { id: '2', name: '짜증', value: 10 },
          { id: '3', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '평온', value: 10 },
          { id: '2', name: '짜증', value: -10 },
        ],
      },
      {
        id: '5',
        question: '좀비는 인간과 친구가 될 수 있다.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '6',
        question: '나는 외제차를 타는 미제 앞잡이들과 상종할 수 없다.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '7',
        question: '위대하신 령도자! 우리 민족끼리 단합하자!',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '8',
        question: '배고플때 먹빵을 보며 대리만족을 한다.',
        onYes: [
          { id: '1', name: '평온', value: 10 },
          { id: '2', name: '짜증', value: -10 },
          { id: '3', name: '선비 정신', value: 20 },
        ],
        onNo: [{ id: '2', name: '힙 정신', value: -10 }],
      },
      {
        id: '9',
        question: '배고플때 먹빵을 보며 배달의 민족 콜.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
          { id: '3', name: '평온', value: 10 },
          { id: '4', name: '짜증', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
          { id: '3', name: '평온', value: -10 },
          { id: '4', name: '짜증', value: 10 },
        ],
      },
      {
        id: '10',
        question:
          '중고물품을 거래하러 교대역 1번 출구로 나왔다. 저기 수상쩍은 남자가 당신에게 "당근이세요?"라고 물어볼 때 당신은 "오이인데요."라고 대답한다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -20 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '당신은 조선의 무법자입니다.',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [{ id: '1', content: '가끔 셧다운이 필요할 것 같군요.' }],
      },
      {
        id: '2',
        title: '당신은 조선의 노예입니다.',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [{ id: '1', content: '가끔 주인에게 열폭하는 것도 장수의 비결!' }],
      },
      {
        id: '3',
        title: '당신은 조선의 선비입니다.',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [{ id: '1', content: '기분 좋으세요?' }],
      },
    ],
  },
  Test_3: {
    id: '3',
    questions: [
      {
        id: '1',
        question: '조별과제에서 팀원들과 의견이 다를 경우 이를 말한다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(인간)', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(인간)', value: 5 },
        ],
      },
      {
        id: '2',
        question: '친구가 돈을 빌려가고 기한안에 안갚을 때 나는 3일 안에 돈을 갚으라고 요구한다',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(돈)', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(돈)', value: 5 },
        ],
      },
      {
        id: '3',
        question: '최신 전자기기를 산 후 미세한 불량이 발생했을 경우 즉각 환불한다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(돈)', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(돈)', value: 5 },
        ],
      },
      {
        id: '4',
        question:
          '맛있게 저녁을 먹고 집에 왔는데 음료수 하나가 추가 계산된 사실을 알게 되었을 경우 바로 결제취소를 요구한다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(돈)', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(돈)', value: 5 },
        ],
      },
      {
        id: '5',
        question:
          '친구들과의 모임에서 식사할 때 원치 않은 메뉴로 결정되면 먹기 싫다고 강하게 주장한다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(인간)', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(인간)', value: 5 },
        ],
      },
      {
        id: '6',
        question: '친구가 2주 연속 하루전에 아르바이트를 대신해달라고 한다. 해주시겠습니가?',
        onYes: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(인간)', value: 5 },
        ],
        onNo: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(인간)', value: -5 },
        ],
      },
      {
        id: '7',
        question: '길에서 누군가 도를 아시냐고 물어왔다 응답해주시나요?',
        onYes: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
        ],
        onNo: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
        ],
      },
      {
        id: '8',
        question: '지하철을 타고 있는데 누군가 볼펜을 사라고 권유하면 산다.',
        onYes: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
        ],
        onNo: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
        ],
      },
      {
        id: '9',
        question:
          '버스에서 누군가 당신의 새로산 신발을 밟았다. 상대방이 미안함의 표시를 안할 경우 따진다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
        ],
      },
      {
        id: '10',
        question: '음식점에서 음식을 먹다 머리카락이 나왔을 경우 바꿔달라고 요청한다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '날개 없는 천사 , 티 없는 흑우!!!',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [
          { id: '1', content: '모든 것을 양보하고 배려해주는 당신 이 시대의 진정한 인격자' },
        ],
      },
      {
        id: '2',
        title: '경주 최 부잣집 마인드 돈에 있어서 만큼은 나도 호구!!!',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [
          {
            id: '1',
            content: '가격비교를 거부하는 당신 푼돈에 연연하지 않는 대범함을 지니셨군요!',
          },
        ],
      },
      {
        id: '3',
        title: '마더 테레사 있는 것은 아낌없이 양보하고 나눠주고 싶은 호구!!!',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [
          {
            id: '1',
            content:
              '인간관계에 있어서 늘 남을 먼저 생각하는 당신 그룹에 있어서 꼭 한명쯤은 필요한 사람이신군요! ',
          },
        ],
      },
      {
        id: '4',
        title: '개가 짖어도 기차는 간다 원리원칙을 중요시하는 NO 호구!!! ',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [
          {
            id: '1',
            content: '남은 남 나는 나 아무리 친한사이라도 개인간의 존중을 중요시하는 사람이시군요!',
          },
        ],
      },
    ],
  },
  Test_4: {
    id: '4',
    questions: [
      {
        id: '1',
        question: '오늘 하루도 거울을 보면서 행복을 느꼈나요?.',
        onYes: [
          { id: '1', name: '자아도취감', value: 30 },
          { id: '2', name: '자신감', value: 15 },
        ],
        onNo: [
          { id: '1', name: '자아도취감', value: -10 },
          { id: '2', name: '자신감', value: -5 },
        ],
      },
      {
        id: '2',
        question: '길거리를 지나다니면서 다른 사람의 경외감어린 시선을 느껴본적 있나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 30 }],
        onNo: [{ id: '1', name: '자아도취감', value: -10 }],
      },
      {
        id: '3',
        question: '어떤 일을 할 때 나는 반드시 해낸다고 했다가 실패한 경험이 있나요?',
        onYes: [{ id: '1', name: '자아도취감', value: -20 }],
        onNo: [{ id: '1', name: '자아도취감', value: 30 }],
      },
      {
        id: '4',
        question: '잠자리에 들때 오늘도 내가 무언가 해냈다는 생각이 드나요?',
        onYes: [
          { id: '1', name: '자아도취감', value: 30 },
          { id: '2', name: '자신감', value: 15 },
        ],
        onNo: [
          { id: '1', name: '자아도취감', value: -10 },
          { id: '2', name: '자신감', value: -5 },
        ],
      },
      {
        id: '5',
        question: '누군가 당신을 쳐다볼때 오늘도 나의 외모가 빛나고 있다고 느끼나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 30 }],
        onNo: [{ id: '1', name: '자아도취감', value: -15 }],
      },
      {
        id: '6',
        question: '상대방이 나에 대해 비난을 해도 그저 비웃음으로 응수하시나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 40 }],
        onNo: [{ id: '1', name: '자아도취감', value: -10 }],
      },
      {
        id: '7',
        question:
          '어떤 대결에서 이겼을 때 "이것이 너와 나 와의 눈높이다" 대사를 치고 싶은 적이 있었나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 100 }],
        onNo: [{ id: '1', name: '자아도취감', value: -50 }],
      },
      {
        id: '8',
        question: '누군가 당신의 단점을 물었을 때 도저히 찾지 못해 당황한 적 있었나요?!',
        onYes: [{ id: '1', name: '자아도취감', value: 50 }],
        onNo: [{ id: '1', name: '자아도취감', value: -30 }],
      },
      {
        id: '9',
        question: '당신을 사랑하는 사람이 수도없이 많을 것이라 생각하나요?',
        onYes: [
          { id: '1', name: '자아도취감', value: 30 },
          { id: '2', name: '자신감', value: 15 },
        ],
        onNo: [
          { id: '1', name: '자아도취감', value: -10 },
          { id: '2', name: '자신감', value: -5 },
        ],
      },
      {
        id: '10',
        question: '어떤 일을 처음 시작해도 조금만 시간이 있다면 충분히 해낼 것이라 생각하나요?',
        onYes: [
          { id: '1', name: '자아도취감', value: 30 },
          { id: '2', name: '자신감', value: 15 },
        ],
        onNo: [
          { id: '1', name: '자아도취감', value: 30 },
          { id: '2', name: '자신감', value: -10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '당신은 심각한 자아도취증이시군요.',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [
          {
            id: '1',
            content:
              '나르시시즘이란 단어를 당신의 이름으로 바꿔야 할 정도의 엄청난 자아도취 상태입니다',
          },
        ],
      },
      {
        id: '2',
        title: '당신은 넘치는 자신감으로 자아도취증 상태로 진행중이군요!',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [
          {
            id: '1',
            content:
              '주변 사람들의 시선을 신경쓰지 않고 당당한 당신! 꾸준한 노력과 약간의 겸손이 더해진다면 훌륭한 인재가 될것입니다',
          },
        ],
      },
      {
        id: '3',
        title: '당신은 평범합니다. 당신에겐 자아도취는 과도한 수식어!.',
        conditions: [
          { id: '1', name: '중독', value: 20, type: '이상' },
          { id: '2', name: '중독', value: 40, type: '이하' },
        ],
        imageUrl: '',
        contents: [
          {
            id: '1',
            content:
              '누구나 자아도취 해본적 있지않나요? 적어도 화장실 앞에선 내 모습이 한결 빛난다던지?',
          },
        ],
      },
    ],
  },
}
