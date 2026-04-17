const TEAM_DATA = {
    "foure": {
        teamName: "포레(fou:re)",
        order: "1조",
        category: "자립",
        summary: "조부모 돌봄 자립준비청년의\n학업 중도포기 문제",
        mainTitle: "가족 돌봄과 자립 사이의 선택,\n우리는 무엇을 놓치고 있는가",
        tags: ["자립준비청년", "학업포기"],
        theme: { main: "#8B52FB", grad: "linear-gradient(135deg, #8B52FB 0%, #A67BFF 100%)", tagBg: "#f5f0ff", bgText: "FOU:RE" }
    },
    "green": {
        teamName: "그린",
        order: "2조",
        category: "자립",
        summary: "자립준비청년의 학업 중단,\n그 이면의 구조적 결핍",
        mainTitle: "보호 종료 이후의 교육 공백:\n누구를 위한 자립인가",
        tags: ["자립준비청년", "교육단절"],
        theme: { main: "#804BEB", grad: "linear-gradient(135deg, #804BEB 0%, #9D74FF 100%)", tagBg: "#f2edff", bgText: "GREEN" }
    },
    "hearim": {
        teamName: "헤아림",
        order: "3조",
        category: "장애",
        summary: "장애인 의무고용제도 내\n발달장애인 배제 문제",
        mainTitle: "숫자 뒤에 가려진 고용 불평등,\n발달장애인의 내일",
        tags: ["발달장애인", "고용배제"],
        theme: { main: "#6C40C9", grad: "linear-gradient(135deg, #6C40C9 0%, #8A5EE6 100%)", tagBg: "#eeebf7", bgText: "HEARIM" }
    },
    "dodream": {
        teamName: "두드림(Do-Dream)",
        order: "4조",
        category: "장애",
        summary: "경계성지능 한부모 가정의\n삶과 자립의 사각지대",
        mainTitle: "이중의 어려움, 하나의 관심:\n경계성지능 한부모의 고군분투",
        tags: ["경계성지능한부모", "사각지대"],
        theme: { main: "#653CC3", grad: "linear-gradient(135deg, #653CC3 0%, #7E56DC 100%)", tagBg: "#ece9f5", bgText: "DO-DREAM" }
    },
    "lighthouse": {
        teamName: "등대",
        order: "5조",
        category: "이주",
        summary: "중도입국청소년의 입학 지연\n및 학업 포기 문제",
        mainTitle: "닫힌 교문 앞의 이방인들,\n중도입국청소년의 권리",
        tags: ["중도입국청소년", "입학지연"],
        theme: { main: "#633CBB", grad: "linear-gradient(135deg, #633CBB 0%, #744BC9 100%)", tagBg: "#ebe8f2", bgText: "LIGHT HOUSE" }
    }
};


const SUNNY_DATA = [
    {
        id: "article-01",
        teamId: "foure",
        teamName: "포레 (fou:re)",
        part: "Part 1. 문제의 발견",
        title: "#1 스물 하나, 홀로 짊어진 시간들",
        thumbnail: "images/fore_1.jpg",
        thumbnailCaption: "이미지 출처 : pixabay", 
        content: `
            <p>수업 중간에 울린 전화는 119였습니다.</p>
            <p>“할머님께서 횡단보도를 건너다 넘어지셨어요. 바로 병원으로 오세요.”</p>
            <p>수업은 뒷전이었고, 성진은 병원으로 뛰었습니다. 뛰어가는 내내 머릿속에는 한 가지 생각뿐이었습니다. ‘괜찮으셔야 하는데.’</p>
            <p>어릴 적에 부모가 이혼하고 오갈 데 없던 성진을 도맡아 키워준 사람은 할머니였습니다. 사회에서는 잠시 위탁가정에서 자라는 것이라 말했지만, 성진이 성인이 될 때까지 할머니는 그의 보호자이자 가족의 전부였습니다.</p>
            <p>할머니의 소식을 듣고 뛰어온 성진에게 의사는 말했습니다.</p>
            
            <div class="bg-purple-50 p-8 rounded-2xl my-10 border-l-4 border-[#63489a]">
                <p class="mb-0 text-gray-700 italic">“일상생활 속에서도 주의 깊게 보셔야 합니다. 조금만 자극이 가도 위험할 수 있습니다.”</p>
            </div>

            <p>그 날 이후 성진은 약해진 할머니의 관절이 안정화될 때까지 일주일을 통째로 할머니와 함께 보냈습니다. </p>
            <p>당시는 기말고사 기간이었고, 성진은 대학교 2학년이었습니다. 할머니를 돌보고 병원을 함께 다니는 바람에, 성진은 결국 기말고사를 치르지 못했습니다. 시험을 보지 못한 과목들은 그대로 F 학점으로 남았고, 그 결과 다음 학기 국가장학금 수혜 기준을 충족하지 못하게 되었습니다.</p>
            
            <p>갑작스럽게 장학금이 끊기자 등록금을 감당할 수 없었습니다. 성진이 야간 아르바이트를 하며 모았던 작은 돈은 모두 할머니의 병원비로 소진되었기 때문입니다. 결국 성진은 다음 학기에 계획에 없던 휴학을 선택할 수밖에 없었습니다.</p>
            
            <p>대학에 다니며 친구를 사귀고, 하고 싶은 공부를 하는 일은 성진에게는 먼 이야기였습니다. 누군가에게는 당연한 보호였던 시간이, 성진에게는 ‘갚아야 할 빚’처럼 느껴졌습니다. </p>
            <p>성진은 누군가를 지탱하기에도, 자신의 삶을 지켜내기에도 너무 어린 나이, 스물한 살이었습니다.</p>

            <div class="my-12 py-8 border-y border-gray-100">
                <p class="text-xl font-bold text-[#63489a] mb-4">“가정위탁 배경 자립준비청년의 아킬레스건이 나를 돌봐줬던 분이잖아요. 부모 대신 그들에게 은혜를 갚아야 한다는 생각이 굉장히 강합니다. 그래서 분리를 하지 못합니다.”</p>
                <p class="text-sm text-gray-400 font-bold">— 자립지원전담기관 담당자</p>
            </div>

            <p>비슷한 경험은 다른 자립준비청년에게도 이어집니다.</p>

<div class="my-12 py-8 border-y border-gray-100">
                <p class="text-xl font-bold text-[#63489a] mb-4">“지난 학기에는 일하느라 학점이 부족해서 장학금에서 탈락했습니다. 그래서 제 통장을 깨고, 돈을 더 빌려서 280만 원을 만들어 등록금으로 마련했습니다.”</p>
                <p class="text-sm text-gray-400 font-bold">— 연구참여자 지민</p>
            </div>
            <p>돌봄과 자신의 삶 사이에서 방향을 잡지 못하는 자립준비청년의 현실입니다. 그리고 그 경계에 서 있는 것은 성진 한 사람만의 이야기가 아닙니다.</p>
        `,
        subImage: "" // 하단 추가 이미지
    },
    {
        id: "article-02",
        teamId: "foure",
        teamName: "포레 (fou:re)",
        part: "Part 2. 원인 분석",
        title: "#2 ‘돌봄’이라는 당연함에 부딪히다",
         thumbnail: "images/fore_2.jpg",
          thumbnailCaption: "이미지 출처 : pixabay, @EDUIN", 
        content: `
    <p>1편에서 만났던 성진이를 기억하시나요?...(중략)... 특히 전체 가정위탁 아동 100명 중 70명<sup>3</sup> 은 할머니, 할아버지 밑에서 자란 ‘조손 가정’ 아이들입니다.</p>

    <div class="img-container">
        <img src="images/fore_3.jpg" class="content-img" alt="가족 돌봄 이미지">
        <p class="img-caption">▲ 이미지 출처 : ChatGPT 생성 이미지</p>
    </div>

    <p>문제는 이들이 성인이 된 후입니다...(중략)... 학업을 중단하는 것<sup>6</sup> 으로 나타났습니다. 결국 돌봄과 생계, 학업 중에서 ‘학업’을 가장 먼저 내려놓고 있습니다.</p>

    <div class="footnote-section">
        <p>1. 2025년 자립준비청년 현황(아동권리보장원, 2026)</p>
        <p>2. 2023 자립지원 실태조사(보건복지부, 2024)</p>
        <p>3. 2021 가정위탁보호 현황보고서(아동권리보장원, 2022)</p>
        <p>4. 2021년 아동자립지원 통계현황(보건복지부, 2022)</p>
        <p>5. 2023 서울시 가족돌봄청년 실태조사</p>
        <p>6. 한국대학교육협의회 대학알리미, 2023년 자립지원 실태조사, 2022년 가족돌봄청년 실태조사 를 통한 추정치</p>
    </div>
`
    },
     {
        id: "article-03",
        teamId: "foure",
        teamName: "포레 (fou:re)",
        part: "Part 3. 원인 분석",
        title: "#3 할머니의 시계는 멈추지 않는다",
 thumbnail: "images/fore_4.jpg",
        content: "<p>세 번째 파트 내용이 들어갈 자리입니다.</p>"
    },
     {
        id: "article-04",
        teamId: "foure",
        teamName: "포레 (fou:re)",
        part: "Part 4. 원인 분석",
        title: "#4 버티는 사이, 미래는 조금씩 늦어진다",
 thumbnail: "images/fore_5.jpg",
        content: "<p>네 번째 파트 내용이 들어갈 자리입니다.</p>"
    },
    {
        id: "article-05",
        teamId: "foure",
        teamName: "포레 (fou:re)",
        part: "Part 5. 팀 소개",
        title: "#5 당연함을 깨기 위해,",
 thumbnail: "images/fore_5.jpg",
        content: "<p>다섯 번째 파트 내용이 들어갈 자리입니다.</p>"
    },
];
// 팀 상세 정보를 담은 데이터 추가
const TEAM_DETAILS = {
    "foure": {
        order: "LAB 01",
        name: "포레(fou:re)",
        teamProfileImg: "images/fore_team_1.jpg", 
        description: "저희 fou:re(포레)는 사회를 바라볼 때 당연하게 여겨져 온 것들을 다시 질문하는 데서 출발합니다. 익숙함 속에서 무심히 지나쳐 온 문제를 되짚으며, 사회를 서로 연결된 하나의 숲(forest)처럼  바라봅니다. 동시에 four(4명)과 re(다시·회복)의 결합으로, 실패하더라도 끊임없이 다시 도전하고 시도하겠다는 의지를 담고 있습니다.",
        email: "fore_sunny@example.com",
        instagram: "https://instagram.com/아이디", // 버튼으로 연결
        homepage: "https://velog.io/@아이디", // 버튼으로 연결        
        members: [
            { name: "김은결",  img: "images/fore_member1.jpg" },
            { name: "박성인",  img: "images/fore_member2.jpg" },
            { name: "오재란",  img: "images/fore_member3.jpg" },
            { name: "하수진",  img: "images/fore_member4.jpg" }
        ]
    },
    "green": {
        order: "LAB 02",
        name: "그린 : 자립준비청년 학업 중단",
        teamProfileImg: "images/green_team_1.jpg", 
        description: "자립준비청년들이 경제적 어려움으로 인해 학업을 포기하지 않도록, 지속 가능한 교육 환경과 정책적 지원 방안을 연구합니다.",
        email: "fore_sunny@example.com",
        instagram: "https://instagram.com/아이디", // 버튼으로 연결
        homepage: "https://velog.io/@아이디", // 버튼으로 연결     
        members: [
            { name: "정그린",  img: "images/g_member1.png" },
            { name: "나에듀", img: "images/g_member2.png" },
            { name: "정린린", img: "images/g_member3.png" },
            { name: "나듀듀",  img: "images/g_member4.png" },
            { name: "정그링", img: "images/g_member5.png" }
        ]
    }
    // ... 나머지 팀들도 동일한 형식으로 추가
};
