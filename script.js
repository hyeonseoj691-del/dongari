const speciesData = [
    {
        name: "페넥여우",
        image: "https://images.unsplash.com/photo-1612536315141-e67bc8374000?w=600&h=600&fit=crop",
        description: "페넥여우는 사하라 사막과 중동의 모래 사막에 서식하는 세계에서 가장 작은 여우입니다. 거대한 귀를 가지고 있어 체온 조절과 먹이 사냥에 도움이 됩니다. 매우 사교적이고 야행성 동물로, 밤에 활동하며 곤충, 도마뱀, 쥐 등을 사냥합니다. 사막 개발과 애완동물 불법 거래로 인해 개체 수가 감소하고 있습니다."
    },
    {
        name: "마밀라리아 선인장",
        image: "https://images.unsplash.com/photo-1462220945917-36f3d487b642?w=600&h=600&fit=crop",
        description: "마밀라리아 선인장은 멕시코와 남미 사막에 자생하는 작고 둥근 선인장입니다. 특징적인 유두 모양의 가시와 아름다운 꽃이 핀다는 특징이 있습니다. 분비되는 밀랍은 전통 의약품 제조에 사용되어 과도하게 채집되고 있습니다. 서식지 파괴와 불법 채집으로 인해 현재 멸종 위기에 처해 있으며, 국제적인 보호가 필요합니다."
    },
    {
        name: "야생쌍봉낙타",
        image: "https://images.unsplash.com/photo-1503481851512-e10b62f55ed3?w=600&h=600&fit=crop",
        description: "야생쌍봉낙타는 중앙아시아의 고비 사막에만 서식하는 매우 드문 종입니다. 가축화된 낙타와 달리 더 작고 민첩하며 광선 근시를 가지고 있습니다. 극한의 사막 환경에 완벽하게 적응했으며, 낮은 번식률을 가집니다. 오직 약 1,000마리 미만만 남아있어 전 지구적 멸종 위기종으로 지정되어 있습니다."
    }
];

function showSpecies(index) {
    const mainPage = document.getElementById('mainPage');
    const detailPage = document.getElementById('detailPage');
    
    const species = speciesData[index];
    document.getElementById('speciesName').textContent = species.name;
    document.getElementById('speciesImage').src = species.image;
    document.getElementById('speciesDescription').textContent = species.description;
    
    mainPage.classList.add('hidden');
    detailPage.classList.remove('hidden');
}

function goBack() {
    const mainPage = document.getElementById('mainPage');
    const detailPage = document.getElementById('detailPage');
    
    mainPage.classList.remove('hidden');
    detailPage.classList.add('hidden');
}
