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

type Result = {
  id: string
  title: string
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
        question: 'Q. 조별과제에서 팀원들과 의견이 다를 경우 이를 말한다.',
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
        question: 'Q. 친구가 돈을 빌려가고 기한안에 안갚을 때 나는 3일 안에 돈을 갚으라고 요구한다',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(돈)', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(돈)', value: 5 },
      },
      {
        id: '3',
        question: 'Q. 최신 전자기기를 산 후 미세한 불량이 발생했을 경우 즉각 환불한다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
          { id: '3', name: '호구력(돈)', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
          { id: '3', name: '호구력(돈)', value: 5 },
      },
      {
        id: '4',
        question: 'Q. 맛있게 저녁을 먹고 집에 왔는데 음료수 하나가 추가 계산된 사실을 알게 되었을 경우 바로 결제취소를 요구한다.'
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
        question: 'Q. 친구들과의 모임에서 식사할 때 원치 않은 메뉴로 결정되면 먹기 싫다고 강하게 주장한다.',
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
        question: 'Q. 친구가 2주 연속 하루전에 아르바이트를 대신해달라고 한다. 해주시겠습니가?',
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
        question: 'Q. 길에서 누군가 도를 아시냐고 물어왔다 응답해주시나요?',
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
        question: 'Q. 지하철을 타고 있는데 누군가 볼펜을 사라고 권유하면 산다.',
        onYes: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
        ],
        onNo: [

          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
      },
      {
        id: '9',
        question: 'Q. 버스에서 누군가 당신의 새로산 신발을 밟았다. 상대방이 미안함의 표시를 안할 경우 따진다.',
        onYes: [
          { id: '1', name: '자신감', value: 5 },
          { id: '2', name: '호구력', value: -5 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 5 },
          { id: '2', name: '호구력', value: 5 },
      },
      {
        id: '10',
        question: 'Q. 음식점에서 음식을 먹다 머리카락이 나왔을 경우 바꿔달라고 요청한다.',
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
        imageUrl: '',
        contents: [{ id: '1', content: '모든 것을 양보하고 배려해주는 당신 이 시대의 진정한 인격자' }],
      },
    ],
    results: [
      {
        id: '2',
        title: '경주 최 부잣집 마인드 돈에 있어서 만큼은 나도 호구!!!',
        imageUrl: '',
        contents: [{ id: '1', content: '가격비교를 거부하는 당신 푼돈에 연연하지 않는 대범함을 지니셨군요!' }],
      },
    ],
    results: [
      {
        id: '3',
        title: '마더 테레사 있는 것은 아낌없이 양보하고 나눠주고 싶은 호구!!!',
        imageUrl: '',
        contents: [{ id: '1', content: '인간관계에 있어서 늘 남을 먼저 생각하는 당신 그룹에 있어서 꼭 한명쯤은 필요한 사람이신군요! ' }],
      },
    ],
    results: [
      {
        id: '4',
        title: '개가 짖어도 기차는 간다 원리원칙을 중요시하는 NO 호구!!! ',
        imageUrl: '',
        contents: [{ id: '1', content: '남은 남 나는 나 아무리 친한사이라도 개인간의 존중을 중요시하는 사람이시군요!' }],
      },
    ],



  },
  Test_2: {
    id: '1',
    questions: [
      {
        id: '1',
        question: 'Q. 나는 조선의 선비다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 1 },
          { id: '2', name: '힙 정신', value: -1 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -5 },
          { id: '2', name: 'b', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          'Q. 위층에 새로운 노비가 이사를 왔다. 그는 조선의 덕을 알지 못한다. 그와 이웃이 될 것인가?',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
      {
        id: '3',
        question: 'Q. 나는 배가 고플 때 의식을 셧다운 한다.',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
      {
        id: '4',
        question: 'Q. 맞춤법 따위는 개나 줘버려. 나는 킹 세종의 뜻을 헤아리기엔 덕이 부족하다.',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
      {
        id: '5',
        question: 'Q. 좀비는 인간과 친구가 될 수 있다.',
        onYes: [
          { id: '1', name: 'a', value: 10 },
          { id: '2', name: 'b', value: -10 },
        ],
        onNo: [
          { id: '1', name: 'a', value: -50 },
          { id: '2', name: 'b', value: 100 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '당신은 조선의 무법자입니다.',
        imageUrl: '',
        contents: [{ id: '1', content: '가끔 셧다운이 필요할 것 같군요.' }],
      },
      {
        id: '2',
        title: '당신은 조선의 노예입니다.',
        imageUrl: '',
        contents: [{ id: '1', content: '가끔 주인에게 열폭하는 것도 장수의 비결!' }],
      },
      {
        id: '3',
        title: '당신은 조선의 선비입니다.',
        imageUrl: '',
        contents: [{ id: '1', content: '기분 좋으세요?' }],
      },
    ],
  },
}
