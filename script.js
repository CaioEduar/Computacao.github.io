document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeButton = document.getElementById("close-button");

    const content = {
        "2400": "O ábaco é um antigo instrumento de cálculo composto por varas com contas móveis, usado para operações matemáticas simples. Originário de várias culturas antigas, como sumérios e chineses, foi fundamental antes da invenção das calculadoras modernas. Continua a ser valorizado por sua eficácia no desenvolvimento das habilidades matemáticas básicas.",
        "1642": "Blaise Pascal foi um matemático, físico e filósofo francês do século XVII. Famoso por suas contribuições para a geometria projetiva, ele também inventou a máquina de calcular, conhecida como a Pascalina, em 1642. Este dispositivo mecânico pioneiro ajudou a realizar operações aritméticas básicas, marcando um avanço significativo na história da computação e da tecnologia. Pascal também é lembrado por suas contribuições para a teologia cristã e sua defesa do pensamento racional.",
        "1837": "Charles Babbage foi um matemático e inventor inglês do século XIX, reconhecido como o 'pai do computador'. Ele concebeu a ideia das máquinas analíticas e diferenciais, precursoras dos computadores modernos. A Máquina Diferencial, projetada para calcular tabelas matemáticas, e a Máquina Analítica, capaz de realizar qualquer cálculo, são marcos importantes na história da computação. Babbage também é conhecido por suas contribuições para a matemática e a ciência, influenciando profundamente o desenvolvimento da tecnologia computacional.",
        "1843": "Ada Lovelace foi uma matemática e escritora britânica do século XIX, conhecida por seu trabalho pioneiro com o 'Motor Analítico' de Charles Babbage. Como colaboradora próxima de Babbage, Lovelace escreveu o primeiro algoritmo destinado a ser processado por uma máquina, tornando-se assim a primeira programadora de computadores da história. Seus insights visionários sobre o potencial das máquinas para além do cálculo numérico estabeleceram as bases para a ciência da computação moderna. Lovelace é lembrada por sua combinação única de habilidades matemáticas e visão futurista, sendo um ícone de inspiração para as mulheres na tecnologia.",
        "1890": "Herman Hollerith foi um inventor e estatístico americano do final do século XIX e início do século XX, notável por desenvolver a máquina de tabulação, precursora dos modernos sistemas de processamento de dados. Em 1890, sua invenção foi crucial para o censo dos Estados Unidos, agilizando enormemente a coleta e análise de informações demográficas. Fundador da Tabulating Machine Company, que mais tarde se tornou a IBM, Hollerith é considerado um dos pioneiros na aplicação de tecnologia para resolver problemas de dados em larga escala, deixando um legado duradouro no campo da computação e da estatística.",
        "1936": "Alan Turing foi um matemático, lógico e criptoanalista britânico, amplamente reconhecido como o pai da ciência da computação e da inteligência artificial. Durante a Segunda Guerra Mundial, Turing desempenhou um papel crucial na quebra dos códigos de comunicação nazistas, contribuindo significativamente para a vitória dos Aliados. Ele formulou o conceito teórico de uma máquina universal de Turing, que estabeleceu os fundamentos para o design de computadores modernos. Além de suas contribuições técnicas, Turing foi pioneiro na reflexão ética sobre inteligência artificial e questões de computação e mente, deixando um legado profundo e duradouro no campo da ciência e da tecnologia.",
        "1945": "O Projeto Manhattan foi um esforço de pesquisa e desenvolvimento durante a Segunda Guerra Mundial, liderado pelos Estados Unidos, com o objetivo de produzir armas nucleares. Iniciado em 1942 e concluído em 1946, o projeto envolveu uma colaboração maciça de cientistas, engenheiros e militares para desenvolver e fabricar as primeiras bombas atômicas. O projeto resultou nas bombas lançadas sobre Hiroshima e Nagasaki em agosto de 1945, marcando um ponto crucial na história militar, política e tecnológica. O sucesso do Projeto Manhattan inaugurou a era nuclear e teve implicações profundas nas relações internacionais e na estratégia de defesa global.",
        "1946": "O ENIAC (Electronic Numerical Integrator and Computer) foi o primeiro computador eletrônico digital de grande escala, desenvolvido nos Estados Unidos durante a Segunda Guerra Mundial. Projetado por John Mauchly e J. Presper Eckert, o ENIAC entrou em operação em 1946, utilizando aproximadamente 18.000 válvulas de vácuo e pesando cerca de 30 toneladas. Ele foi pioneiro em cálculos balísticos para o Exército dos Estados Unidos, marcando o início da era dos computadores eletrônicos e estabelecendo um modelo para futuros desenvolvimentos na computação digital.",
    };

    timelineItems.forEach(item => {
        item.addEventListener("click", () => {
            const date = item.getAttribute("data-date");
            modalText.textContent = content[date];
            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
