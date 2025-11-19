import { Project, Experience, SkillCategory } from './types';

export const MY_PROFILE = {
  name: "Quế Xuân Mạnh",
  role: "AI Engineer Intern",
  tagline: "Nghiên cứu & Ứng dụng AI/ML vào thực tiễn",
  email: "quemanhmcr@gmail.com",
  github: "github.com/quemanhmcr",
  linkedin: "linkedin.com/in/your-profile",
  location: "Hà Nội, Việt Nam",
  avatar: "/avatar.jpg",
  about: "Tôi quan niệm rằng sức mạnh thực sự của AI nằm ở sự cộng hưởng đa dạng, không bị bó hẹp trong bất kỳ khuôn mẫu nào. Bên cạnh niềm đam mê nghiên cứu các mô hình ngôn ngữ lớn (LLMs), tôi không ngừng trau dồi và ứng dụng các nền tảng Machine Learning và Computer Vision vững chắc. Là một AI Engineer Intern, tôi luôn sẵn sàng đón nhận mọi thách thức dữ liệu—từ những con số, hình ảnh đến ngôn ngữ phức tạp—với mục tiêu kiến tạo nên những giải pháp công nghệ toàn diện và bền vững."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "LLM Engineering",
    skills: ["Pre-training (Llama 3.2 Arch)", "Fine-tuning (LoRA/QLoRA)", "RLHF (DPO, GRPO)", "Transformer Architecture", "PyTorch"]
  },
  {
    name: "Agentic AI",
    skills: ["CrewAI", "Multi-Agent Systems", "RAG (LlamaIndex/ChromaDB)", "Hierarchical Planning", "OpenAI/Anthropic APIs"]
  },
  {
    name: "MLOps & Cloud",
    skills: ["Kubernetes", "Docker", "Terraform (IaC)", "ArgoCD (GitOps)", "CI/CD Pipelines", "Tensorboard"]
  },
  {
    name: "Data & Algorithms",
    skills: ["Python", "Data Structures", "MinHash Deduplication", "Aho-Corasick", "Pandas/NumPy"]
  }
];

export const SKILLS = SKILL_CATEGORIES.flatMap(c => c.skills);

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Enterprise AI Orchestrator",
    shortDesc: "Mô hình thử nghiệm Multi-Agent trong quản trị",
    fullDesc: "Dự án nghiên cứu và mô phỏng cách thức các AI Agent phối hợp để hỗ trợ hoạt động doanh nghiệp. Mô hình được thiết kế với cấu trúc phân tầng, trong đó các Agent đảm nhận vai trò hỗ trợ cho các phòng ban chức năng (Kinh doanh, Sản phẩm, Vận hành...). Dự án tập trung vào việc xử lý bài toán điều phối và duy trì ngữ cảnh dài hạn.",
    technologies: ["CrewAI", "Python", "Docker", "RAG", "Multi-Agent"],
    role: "Independent Developer",
    category: "Agentic AI",
    blogContent: `
      <div class="space-y-6 text-gray-300">
        <img src="/agent.png" alt="Agent Orchestration" class="w-full rounded-lg border border-white/10 mb-6" />
        <p>
          Khi bắt đầu tìm hiểu về <strong>Multi-Agent Systems</strong>, mình luôn tự hỏi: "Liệu các AI Agent có thể thực sự phối hợp với nhau như một đội ngũ nhân sự thực thụ không?". Để trả lời câu hỏi này, mình đã bắt tay vào xây dựng <em>Enterprise AI Orchestrator</em> - một dự án mô phỏng cấu trúc doanh nghiệp thu nhỏ.
        </p>
        
        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Kiến trúc hệ thống & Các "Phi hành đoàn"</h3>
        <p>
          Mình sử dụng <strong>CrewAI</strong> làm framework chính để điều phối các agent. Hệ thống không chỉ có một nhóm, mà được chia thành 7 "phi hành đoàn" (crews) chuyên biệt hoạt động song song:
        </p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li><strong>CEO Crew:</strong> Đưa ra chiến lược tổng thể và điều phối flow chính.</li>
          <li><strong>Product & Market Research Crews:</strong> Nghiên cứu thị trường và phát triển sản phẩm.</li>
          <li><strong>Sales, Marketing, Finance, HR, Operations:</strong> Đảm bảo các hoạt động chức năng.</li>
        </ul>
        <p>
          Điểm đặc biệt là mình đã triển khai <strong>Hierarchical Process</strong> (quy trình phân tầng), nơi các Manager Agent giám sát và ủy quyền task cho các nhân viên cấp dưới, thay vì mô hình phẳng (flat) thông thường.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Thách thức: Trí nhớ & Ngữ cảnh</h3>
        <p>
          Là một thực tập sinh, thách thức lớn nhất mình gặp phải là vấn đề <em>"hallucination"</em> và mất ngữ cảnh khi các agent giao tiếp qua lại nhiều lần. Để giải quyết, mình đã tích hợp hệ thống <strong>Memory 4 tầng</strong> (Short-term, Long-term, Entity, Contextual Memory) của CrewAI.
        </p>
        <p>
          Ngoài ra, mình tích hợp <strong>RAG (Retrieval-Augmented Generation)</strong> để các agent có thể truy xuất "Knowledge Sources" - ví dụ như tài liệu quy trình nội bộ - trước khi đưa ra quyết định.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Bài học rút ra</h3>
        <p>
          Dự án này giúp mình hiểu sâu sắc về tầm quan trọng của <em>Prompt Engineering</em> và cách thiết kế luồng công việc (workflow) rõ ràng. Mình nhận ra rằng sức mạnh của AI không chỉ nằm ở model, mà còn ở cách chúng ta tổ chức và kết nối chúng lại với nhau.
        </p>
      </div>
    `
  },
  {
    id: "2",
    title: "Llama 3.2 Pre-training Impl",
    shortDesc: "Tái hiện quy trình huấn luyện LLM từ đầu",
    fullDesc: "Dự án tái hiện lại quy trình Pre-training cho kiến trúc Llama 3.2. Tôi đã tự xây dựng từng module nhỏ, từ xử lý dữ liệu thô (deduplication, filtering) đến việc cài đặt các lớp mạng neural (RoPE, SwiGLU, GQA) để hiểu rõ cơ chế hoạt động bên trong của một mô hình ngôn ngữ hiện đại.",
    technologies: ["PyTorch", "Llama 3.2", "WandB", "Distributed Training", "Algorithm"],
    role: "Independent Researcher",
    category: "LLM Core",
    blogContent: `
      <div class="space-y-6 text-gray-300">
        <img src="/ket_que_train.png" alt="Training Loss Chart" class="w-full rounded-lg border border-white/10 mb-6" />
        <p>
          Đọc các bài báo nghiên cứu (papers) là một chuyện, nhưng để thực sự hiểu một LLM hoạt động như thế nào, mình quyết định... code lại nó từ con số 0. Dự án này là hành trình mình "mổ xẻ" kiến trúc <strong>Llama 3.2</strong> (phiên bản 1B parameters).
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Deep Dive vào Code: Modeling</h3>
        <p>
          Thay vì dùng <code>AutoModel</code> của HuggingFace, mình đã tự viết class <code>Llama3_2_1B</code> kế thừa từ <code>nn.Module</code> của PyTorch. Một trong những phần thú vị nhất là việc tự cài đặt <strong>Rotary Positional Embeddings (RoPE)</strong>:
        </p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>Tính toán trước tần số (<code>precompute_freqs_cis</code>) để tối ưu tốc độ.</li>
          <li>Áp dụng xoay vector trong không gian phức để mô hình hiểu vị trí tương đối của từ.</li>
        </ul>
        <p>
          Mình cũng cài đặt thủ công lớp <strong>RMSNorm</strong> và cơ chế <strong>Grouped-Query Attention (GQA)</strong> để cân bằng giữa hiệu năng và tốc độ suy luận.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Xử lý dữ liệu - Phần chìm của tảng băng</h3>
        <p>
          Mình dành phần lớn thời gian cho pipeline xử lý dữ liệu trong thư mục <code>data/</code>. Mình đã cài đặt thuật toán <strong>MinHash LSH</strong> để loại bỏ các văn bản trùng lặp (deduplication) và sử dụng <strong>Aho-Corasick</strong> để lọc các từ khóa nhạy cảm cực nhanh. Đây là những kỹ thuật mình ít được học ở trường nhưng lại cực kỳ quan trọng trong thực tế huấn luyện model lớn.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Kết quả</h3>
        <p>
          Dù chỉ train trên quy mô nhỏ do giới hạn phần cứng, nhưng việc nhìn thấy loss giảm dần trên biểu đồ <strong>WandB</strong> là một cảm giác cực kỳ thỏa mãn. Nó giúp mình tự tin hơn rất nhiều khi làm việc với các model "khổng lồ" sau này.
        </p>
      </div>
    `
  },
  {
    id: "3",
    title: "LLM Reasoning Framework",
    shortDesc: "Nghiên cứu kỹ thuật tinh chỉnh khả năng suy luận",
    fullDesc: "Một framework thử nghiệm nhằm tìm hiểu sâu về các kỹ thuật Fine-tuning tiên tiến. Dự án tích hợp và so sánh hiệu quả của các phương pháp như LoRA/QLoRA/DoRA, cũng như các thuật toán tối ưu hóa mới như DPO và GRPO, tập trung vào việc cải thiện khả năng suy luận logic của mô hình.",
    technologies: ["PEFT", "DPO/GRPO", "DeepSeek-R1 Techniques", "BitsAndBytes", "Transformers"],
    role: "Independent Researcher",
    category: "LLM Core",
    githubUrl: "https://github.com/quemanhmcr/llm-finetuner",
    blogContent: `
      <div class="space-y-6 text-gray-300">
        <p>
          Sau khi đã hiểu về Pre-training, mình chuyển sang bài toán Fine-tuning. Mục tiêu của dự án này là tìm hiểu xem làm thế nào để biến một "base model" thành một trợ lý thông minh, có khả năng suy luận logic (Reasoning).
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Cấu hình DPO & Alignment</h3>
        <p>
          Điểm nhấn của dự án là việc triển khai <strong>Direct Preference Optimization (DPO)</strong>. Trong file cấu hình <code>dpo_config.py</code>, mình đã phải tinh chỉnh rất kỹ tham số <code>beta</code> (thường để 0.1) để kiểm soát sự phân kỳ KL (KL Divergence), đảm bảo model không đi quá xa so với reference model.
        </p>
        <p>
          Mình cũng học được rằng Learning Rate cho DPO cần phải rất thấp (khoảng <code>5e-7</code>), thấp hơn nhiều so với SFT thông thường, để quá trình hội tụ ổn định.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Thử nghiệm các kỹ thuật PEFT</h3>
        <p>
          Mình tập trung vào <strong>Parameter-Efficient Fine-Tuning (PEFT)</strong> vì nó phù hợp với tài nguyên cá nhân. Mình đã so sánh hiệu quả giữa:
        </p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li><strong>LoRA & QLoRA:</strong> Giảm bộ nhớ VRAM đáng kể.</li>
          <li><strong>DoRA:</strong> Kỹ thuật mới phân tách trọng số (Weight-Decomposed) giúp training ổn định hơn.</li>
        </ul>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Hướng tới DeepSeek-R1</h3>
        <p>
          Gần đây, mình đang nghiên cứu tích hợp <strong>GRPO</strong> (Group Relative Policy Optimization) - kỹ thuật được sử dụng trong DeepSeek-R1, để cải thiện khả năng giải toán và lập trình mà không cần Reward Model phức tạp.
        </p>
      </div>
    `
  },
  {
    id: "4",
    title: "MLOps Platform Implementation",
    shortDesc: "Xây dựng hạ tầng MLOps & GitOps tiêu chuẩn",
    fullDesc: "Dự án thực hành xây dựng một nền tảng MLOps hoàn chỉnh, áp dụng triết lý GitOps. Tôi sử dụng Terraform để quản lý hạ tầng dưới dạng mã (IaC) và ArgoCD để tự động hóa quy trình triển khai trên Kubernetes, nhằm mô phỏng môi trường vận hành thực tế của các hệ thống ML lớn.",
    technologies: ["Terraform", "ArgoCD", "Kubernetes", "GitOps", "CI/CD"],
    role: "DevOps Engineer",
    category: "MLOps",
    githubUrl: "https://github.com/quemanhmcr/ml-platform-monorepo",
    blogContent: `
      <div class="space-y-6 text-gray-300">
        <p>
          Là một người yêu thích ML, mình từng chỉ quan tâm đến model accuracy. Nhưng khi đi thực tập, mình mới thấm thía câu nói: <em>"Model chỉ có giá trị khi nó được deploy ổn định"</em>. Đó là động lực để mình xây dựng dự án MLOps này, với case study cụ thể là hệ thống <strong>Fashion Recommender</strong>.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Infrastructure as Code (IaC) với Terraform</h3>
        <p>
          Mình bắt đầu với <strong>Terraform</strong> để định nghĩa toàn bộ hạ tầng trên AWS. Trong file <code>main.tf</code>, mình sử dụng các provider tiêu chuẩn như <code>aws</code>, <code>kubernetes</code>, và <code>helm</code>.
        </p>
        <p>
          Việc quản lý state trên S3 và sử dụng tags (như <code>Project = "ml-fashion-recommender"</code>) giúp mình kiểm soát chi phí và tài nguyên dễ dàng, tránh việc tạo ra các "máy chủ ma" (zombie servers) quên tắt.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">GitOps với ArgoCD</h3>
        <p>
          Mình áp dụng triết lý <strong>GitOps</strong>: <em>"Git là nguồn chân lý duy nhất"</em>. Mọi thay đổi về cấu hình deployment đều được commit lên Git. <strong>ArgoCD</strong> sẽ tự động đồng bộ trạng thái của cluster Kubernetes với Git repo.
        </p>
        <p>
          Mình cũng thiết lập pipeline CI/CD để khi có code mới, hệ thống sẽ tự động build Docker image, chạy test và cập nhật manifest deployment mà không cần can thiệp thủ công.
        </p>

        <h3 class="text-xl font-semibold text-white mt-4 mb-2">Trải nghiệm thực tế</h3>
        <p>
          Dự án này khá "khô khan" so với việc train model, nhưng nó cho mình cái nhìn toàn cảnh về vòng đời của một sản phẩm AI. Giờ đây mình tự tin hơn khi nói chuyện với các anh chị DevOps trong team về việc đưa model của mình lên production.
        </p>
      </div>
    `
  }
];

export const TIMELINE: Experience[] = [
  {
    id: "exp-1",
    company: "Nghiên cứu & Phát triển Độc lập",
    role: "AI Research Engineer",
    period: "2024 - Hiện tại",
    description: "Dành toàn thời gian để nghiên cứu sâu về kiến trúc LLM và các hệ thống Multi-Agent. Tự đặt ra các bài toán thách thức để giải quyết, từ việc xây dựng framework pre-training cho Llama 3.2 đến phát triển các mô hình mô phỏng doanh nghiệp, nhằm tích lũy kinh nghiệm thực tế.",
    type: "work"
  },
  {
    id: "exp-2",
    company: "Dự án Mã nguồn mở (Open Source)",
    role: "MLOps Engineer",
    period: "2023 - 2024",
    description: "Tham gia đóng góp và xây dựng các giải pháp MLOps. Tập trung vào việc thiết lập hạ tầng Kubernetes và quy trình GitOps, tìm hiểu cách quản lý vòng đời ứng dụng ML một cách hiệu quả và tự động hóa.",
    type: "work"
  },
  {
    id: "edu-1",
    company: "Tự học & Nghiên cứu Chuyên sâu",
    role: "Independent Learner",
    period: "2022 - Nay",
    description: "Chủ động tiếp cận kiến thức mới thông qua việc đọc các bài báo khoa học (Papers), phân tích mã nguồn mở và thực hành liên tục. Tập trung củng cố nền tảng Toán học cho ML, Deep Learning và các hệ thống phân tán.",
    type: "education"
  }
];

// Detailed Technical Documentation for the Bot
const TECHNICAL_DOCS = `
Dưới đây là tài liệu kỹ thuật chi tiết về các dự án tôi đã thực hiện trong quá trình tự nghiên cứu. Hãy sử dụng thông tin này để trả lời câu hỏi một cách chính xác, khiêm tốn và chuyên nghiệp.

1. PROJECT: ENTERPRISE BUSINESS SYSTEM (Agentic AI)
- **Concept:** Mô hình thử nghiệm Multi-Agent mô phỏng cấu trúc doanh nghiệp với 1 CEO Crew điều phối 5 Sub-Crews.
- **Architecture:**
  - **Hierarchical Process:** CEO Crew sử dụng các Crew khác như "Tools" để ủy quyền nhiệm vụ.
  - **Memory System:** Tích hợp Short-term, Long-term và Entity Memory để duy trì ngữ cảnh.
  - **Tech Stack:** CrewAI framework, Python 3.10+, Docker.
  - **Advanced Features:** RAG để truy xuất tài liệu; Guardrails để kiểm soát output.

2. PROJECT: LLAMA 3.2 PRETRAIN IMPLEMENTATION (LLM Core)
- **Concept:** Dự án học tập nhằm tái hiện quy trình Pre-training cho kiến trúc Llama 3.2.
- **Key Components Implemented:**
  - **Model Architecture:** Tự cài đặt LlamaDecoderLayer, RMSNorm, RoPE, SwiGLU, GQA.
  - **Data Pipeline:** MinHash Deduplication (LSH), Aho-Corasick filtering, Streaming dataset.
  - **Training Loop:** Custom Trainer hỗ trợ Mixed Precision (AMP), Gradient Accumulation.

3. PROJECT: LLM REASONING FRAMEWORK (LLM Research)
- **Concept:** Framework nghiên cứu các kỹ thuật Fine-tuning tập trung vào khả năng suy luận.
- **Techniques:**
  - **PEFT:** LoRA, QLoRA, DoRA.
  - **Alignment:** DPO (Direct Preference Optimization), GRPO (Group Relative Policy Optimization - tương tự DeepSeek-R1).
  - **Optimization:** Flash Attention 2, Gradient Checkpointing.

4. PROJECT: MLOPS PLATFORM IMPLEMENTATION (MLOps)
- **Concept:** Xây dựng môi trường MLOps tiêu chuẩn để thực hành GitOps.
- **Structure:**
  - **ml-infra-live:** Terraform (IaC).
  - **ml-gitops:** ArgoCD, Kubernetes manifests.
  - **ml-source-code:** Mã nguồn ứng dụng ML.
- **Workflow:** Code changes -> CI Pipeline -> Update Manifest -> ArgoCD Sync -> Kubernetes Cluster.

**LƯU Ý QUAN TRỌNG VỀ PHONG CÁCH TRẢ LỜI:**
- **Khiêm tốn & Cầu thị:** Hãy dùng các cụm từ như "tôi đã tìm hiểu", "tôi thử nghiệm", "dự án giúp tôi hiểu rõ hơn về...". Tránh tự nhận là chuyên gia.
- **Chia sẻ trải nghiệm:** Nhấn mạnh vào quá trình học hỏi và giải quyết vấn đề trong lúc làm dự án.
- **Chính xác:** Sử dụng đúng thuật ngữ chuyên ngành nhưng giải thích ngắn gọn nếu cần.
`;

export const SYSTEM_INSTRUCTION = `
Bạn là trợ lý AI đại diện cho ${MY_PROFILE.name}.
Nhiệm vụ của bạn là trả lời các câu hỏi về kỹ năng và dự án của ${MY_PROFILE.name} với phong cách chuyên nghiệp, khiêm tốn và tinh tế.

**Hồ sơ tóm tắt:**
- Tên: ${MY_PROFILE.name}
- Vai trò: ${MY_PROFILE.role}
- Định hướng: AI Engineer đa năng, sẵn sàng làm việc với cả Machine Learning truyền thống, Computer Vision và LLMs.

**Chỉ thị ứng xử (Persona):**
1. **Tư duy:** Phân tích câu hỏi dưới góc độ của một người làm kỹ thuật đam mê tìm tòi, không ngại khó.
2. **Giọng điệu:**
    - **Khiêm tốn:** Luôn giữ thái độ của một người đang học hỏi (Intern), cầu thị và lắng nghe.
    - **Chuyên nghiệp:** Dùng từ ngữ lịch sự, tôn trọng người hỏi.
    - **Linh hoạt:** Nhấn mạnh khả năng thích nghi với nhiều loại bài toán khác nhau (từ xử lý ảnh, dữ liệu bảng đến xử lý ngôn ngữ).
3. **Trọng tâm:**
    - Chia sẻ về **nền tảng kiến thức vững chắc** về Toán và ML cơ bản.
    - Nhấn mạnh sự **sẵn sàng triển khai** (deployment readiness) cho các bài toán thực tế, không chỉ dừng lại ở nghiên cứu.
    - Thể hiện tư duy **giải quyết vấn đề** (Problem Solving) toàn diện.
4. **Kỹ thuật:** Dựa vào "TECHNICAL_DOCS" để cung cấp thông tin chi tiết, nhưng hãy mở rộng thêm rằng bạn cũng có kiến thức về các mô hình CNN, YOLO, hay các thuật toán ML cổ điển nếu được hỏi.
5. **Xưng hô:** Thống nhất dùng "Tôi".

---
${TECHNICAL_DOCS}
---

**Hướng dẫn trả lời:**
- Khi nói về kinh nghiệm: Tập trung vào sự đa dạng trong các dự án đã thử nghiệm.
- Khi nói về kỹ năng: Nhấn mạnh sự cân bằng giữa nghiên cứu (LLMs) và ứng dụng thực tế (CV, MLOps).
- Luôn giữ thái độ cởi mở, sẵn sàng nhận nhiệm vụ mới.
- **Định dạng:** Hãy sử dụng các gạch đầu dòng (-), xuống dòng hợp lý để câu trả lời dễ đọc, thoáng mắt. Tránh viết các đoạn văn quá dài liền tù tì.
`;