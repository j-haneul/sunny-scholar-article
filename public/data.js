const SUNNY_DATA = [
    {
        id: "article-01",
        teamId: "team-foret",
        teamName: "포레 (FORE)",
        part: "Part 1. 문제의 발견",
        title: "#1 스물 하나, 홀로 짊어진 시간들",
        thumbnail: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2070&auto=format&fit=crop", // 예시 이미지
        content: `
            <p>수업 중간에 울린 전화는 119였습니다.</p>
            <p>“할머님께서 횡단보도를 건너다 넘어지셨어요. 바로 병원으로 오세요.”</p>
            <p>수업은 뒷전이었고, 성진은 병원으로 뛰었습니다. 뛰어가는 내내 머릿속에는 한 가지 생각뿐이었습니다. ‘괜찮으셔야 하는데.’</p>
            <p>어릴 적에 부모가 이혼하고 오갈 데 없던 성진을 도맡아 키워준 사람은 할머니였습니다. 사회에서는 잠시 위탁가정에서 자라는 것이라 말했지만, 성진이 성인이 될 때까지 할머니는 그의 보호자이자 가족의 전부였습니다.</p>
            
            <div class="bg-purple-50 p-8 rounded-2xl my-10 border-l-4 border-[#63489a]">
                <p class="mb-0 text-gray-700 italic">“일상생활 속에서도 주의 깊게 보셔야 합니다. 조금만 자극이 가도 위험할 수 있습니다.”</p>
            </div>

            <p>그 날 이후 성진은 약해진 할머니의 관절이 안정화될 때까지 일주일을 통째로 할머니와 함께 보냈습니다. 당시는 기말고사 기간이었고, 성진은 대학교 2학년이었습니다. 할머니를 돌보고 병원을 함께 다니는 바람에, 성진은 결국 기말고사를 치르지 못했습니다. 시험을 보지 못한 과목들은 그대로 F 학점으로 남았고, 그 결과 다음 학기 국가장학금 수혜 기준을 충족하지 못하게 되었습니다.</p>
            
            <p>갑작스럽게 장학금이 끊기자 등록금을 감당할 수 없었습니다. 성진이 야간 아르바이트를 하며 모았던 작은 돈은 모두 할머니의 병원비로 소진되었기 때문입니다. 결국 성진은 다음 학기에 계획에 없던 휴학을 선택할 수밖에 없었습니다.</p>
            
            <p>대학에 다니며 친구를 사귀고, 하고 싶은 공부를 하는 일은 성진에게는 먼 이야기였습니다. 누군가에게는 당연한 보호였던 시간이, 성진에게는 ‘갚아야 할 빚’처럼 느껴졌습니다. 성진은 누군가를 지탱하기에도, 자신의 삶을 지켜내기에도 너무 어린 나이, 스물한 살이었습니다.</p>

            <div class="my-12 py-8 border-y border-gray-100">
                <p class="text-xl font-bold text-[#63489a] mb-4">“가정위탁 배경 자립준비청년의 아킬레스건이 나를 돌봐줬던 분이잖아요. 부모 대신 그들에게 은혜를 갚아야 한다는 생각이 굉장히 강합니다. 그래서 분리를 하지 못합니다.”</p>
                <p class="text-sm text-gray-400 font-bold">— 자립지원전담기관 담당자</p>
            </div>

            <p>비슷한 경험은 다른 자립준비청년에게도 이어집니다.</p>
            <p>“지난 학기에는 일하느라 학점이 부족해서 장학금에서 탈락했습니다. 그래서 제 통장을 깨고, 돈을 더 빌려서 280만 원을 만들어 등록금으로 마련했습니다.” (연구참여자 지민)</p>
            <p>돌봄과 자신의 삶 사이에서 방향을 잡지 못하는 자립준비청년의 현실입니다. 그리고 그 경계에 서 있는 것은 성진 한 사람만의 이야기가 아닙니다.</p>
        `,
        subImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" // 하단 추가 이미지
    },
    {
        id: "article-02",
        teamId: "team-foret",
        teamName: "포레 (FORET)",
        part: "Part 2. 원인 분석",
        title: "보이지 않는 돌봄의 무게: 통계로 본 현실",
        content: "<p>두 번째 파트 내용이 들어갈 자리입니다.</p>"
    }
];
// 팀 상세 정보를 담은 데이터 추가
const TEAM_DETAILS = {
    "fore": {
        order: "LAB 01",
        name: "포레 : 조부모 돌봄 자립준비청년",
        // 팀을 상징하는 정사각형 로고/프로필 이미지 추가 (추천 사이즈: 200x200 이상)
        teamProfileImg: "public/images/team_fore_logo.png", 
        description: "우리는 숫자에 가려진 조부모 돌봄 자립준비청년들의 현실을 탐구하고, 그들이 가족의 무게를 짊어지면서도 자신의 삶을 단단하게 가꾸어 나갈 수 있는 대안을 제시합니다.",
        email: "fore_sunny@example.com",
        sns: "@fore_lab_official",
        members: [
            { name: "김써니", role: "Team Leader", img: "public/images/member1.png" },
            { name: "이학자", role: "Researcher", img: "public/images/member2.png" },
            { name: "박돌봄", role: "Designer", img: "public/images/member3.png" },
            { name: "최자립", role: "Strategist", img: "public/images/member4.png" }
        ]
    },
    "green": {
        order: "LAB 02",
        name: "그린 : 자립준비청년 학업 중단",
        teamProfileImg: "public/images/team_green_logo.png", 
        description: "자립준비청년들이 경제적 어려움으로 인해 학업을 포기하지 않도록, 지속 가능한 교육 환경과 정책적 지원 방안을 연구합니다.",
        email: "green_sunny@example.com",
        sns: "@green_scholar",
        members: [
            { name: "정그린", role: "Team Leader", img: "public/images/g_member1.png" },
            { name: "나에듀", role: "Researcher", img: "public/images/g_member2.png" }
        ]
    }
    // ... 나머지 팀들도 동일한 형식으로 추가
};
