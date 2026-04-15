const SUNNY_DATA = [
    {
        id: "fore-1",
        teamId: "fore",
        teamOrder: "01",
        teamName: "포레 : 조부모 돌봄 자립준비청년",
        part: "PART 01",
        title: "문제의 실마리: 조부모라는 변수",
        thumbnail: "public/images/fore_1.png",
        subImage: "fore_1_detail.png", // 추가 이미지
        link: "article_view.html?id=fore-1",
        content: `우리는 현장에서 조부모를 돌보는 자립준비청년들을 만났습니다. 
                  대부분의 지원 정책은 '개인'의 자립에만 초점이 맞춰져 있었고, 
                  그들이 짊어진 '가족의 무게'는 숫자에 가려져 있었습니다.<br><br>
                  인터뷰를 통해 확인한 결과, 학업 중단의 가장 큰 원인은 단순히 성적이 아니라 
                  갑작스러운 조부모의 병환과 그로 인한 간병 부담이었습니다.`
    },
    {
        id: "fore-2",
        teamId: "fore",
        teamOrder: "01",
        teamName: "포레 : 조부모 돌봄 자립준비청년",
        part: "PART 02",
        title: "현장의 목소리: 숨겨진 돌봄의 무게",
        thumbnail: "fore_2.png",
        subImage: "", // 이미지가 없을 경우 빈값
        link: "article_view.html?id=fore-2",
        content: `두 번째 단계로 우리는 실제 간병 현장의 하루를 기록했습니다. 
                  아침 6시부터 시작되는 일과 속에 '학업'이 들어갈 틈은 좁았습니다.<br><br>
                  이 아티클에서는 그들의 일과표를 통해 우리가 정의해야 할 
                  진짜 문제가 무엇인지 심층적으로 다룹니다.`
    },
    {
        id: "green-1",
        teamId: "green",
        teamOrder: "02",
        teamName: "그린 : 자립준비청년 학업 중단",
        part: "PART 01",
        title: "학업을 포기하게 만드는 환경",
        thumbnail: "green_1.png",
        subImage: "green_1_sub.png",
        link: "article_view.html?id=green-1",
        content: `자립준비청년에게 학교는 단순한 교육 기관 그 이상입니다. 
                  하지만 당장 내일의 생계가 위협받는 상황에서 학업은 사치로 느껴지곤 합니다.`
    },
    {
        id: "green-2",
        teamId: "green",
        teamOrder: "02",
        teamName: "그린 : 자립준비청년 학업 중단",
        part: "PART 02",
        title: "그럼에도 필요한 학업",
        thumbnail: "green_2.png",
        subImage: "",
        link: "article_view.html?id=green-2",
        content: `왜 우리는 다시 교육을 이야기해야 할까요? 
                  장기적인 자립을 위해서는 단기적인 지원을 넘어선 교육의 기회가 필수적입니다.`
    }
];

// 팀 상세 정보를 담은 데이터 추가
const TEAM_LIST = [
    {
        id: "fore",
        order: "LAB 01",
        name: "포레 : 조부모 돌봄 자립준비청년",
        description: "가족 돌봄의 무게를 짊어진 청년들의 자립을 연구합니다.",
        thumbnail: "public/images/team_fore_thumb.png", // 팀 리스트용 대표 이미지
        link: "team_detail.html?id=fore"
    },
    {
        id: "green",
        order: "LAB 02",
        name: "그린 : 자립준비청년 학업 중단",
        description: "중단 없는 학업을 위한 환경 조성을 고민합니다.",
        thumbnail: "public/images/team_green_thumb.png",
        link: "team_detail.html?id=green"
    },
    // 나머지 팀들도 동일한 형식으로 추가 (총 5개 팀 예시)
    { id: "team3", order: "LAB 03", name: "팀 03 제목", description: "설명글", thumbnail: "public/images/team3.png", link: "team_detail.html?id=team3" },
    { id: "team4", order: "LAB 04", name: "팀 04 제목", description: "설명글", thumbnail: "public/images/team4.png", link: "team_detail.html?id=team4" },
    { id: "team5", order: "LAB 05", name: "팀 05 제목", description: "설명글", thumbnail: "public/images/team5.png", link: "team_detail.html?id=team5" }
];
