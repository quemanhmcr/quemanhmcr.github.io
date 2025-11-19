# Hồ Sơ Chi Tiết: Quế Xuân Mạnh

## 1. Thông Tin Cá Nhân
- **Họ và tên:** Quế Xuân Mạnh
- **Vai trò:** AI Engineer Intern
- **Định vị bản thân:** Cầu nối giữa nghiên cứu hàn lâm và ứng dụng thực tế. Biến lý thuyết chuyên sâu thành kết quả hiện hữu.
- **Tagline:** Nghiên cứu & Ứng dụng AI/ML vào thực tiễn
- **Email:** quemanhmcr@gmail.com
- **GitHub:** [github.com/quemanhmcr](https://github.com/quemanhmcr)
- **Facebook:** [facebook.com/manh.wa.511360](https://www.facebook.com/manh.wa.511360)
- **Địa điểm:** Hà Nội, Việt Nam

### Giới thiệu bản thân (About Me)
"Tôi quan niệm rằng sức mạnh thực sự của AI nằm ở sự cộng hưởng đa dạng, không bị bó hẹp trong bất kỳ khuôn mẫu nào. Bên cạnh niềm đam mê nghiên cứu các mô hình ngôn ngữ lớn (LLMs), tôi không ngừng trau dồi và ứng dụng các nền tảng Machine Learning và Computer Vision vững chắc. Là một AI Engineer Intern, tôi luôn sẵn sàng đón nhận mọi thách thức dữ liệu—từ những con số, hình ảnh đến ngôn ngữ phức tạp—với mục tiêu kiến tạo nên những giải pháp công nghệ toàn diện và bền vững."

---

## 2. Kỹ Năng Chuyên Môn (Technical Spectrum)
"Không giới hạn trong một lĩnh vực. Kết hợp LLMs, CV và ML truyền thống để tạo ra trí tuệ nhân tạo toàn diện và mở rộng được."

### LLM Engineering
- **Pre-training:** Llama 3.2 Architecture (Custom Implementation)
- **Fine-tuning:** LoRA, QLoRA
- **RLHF & Alignment:** DPO (Direct Preference Optimization), GRPO (Group Relative Policy Optimization)
- **Core:** Transformer Architecture, PyTorch

### Agentic AI
- **Frameworks:** CrewAI, LangChain (Basic)
- **Architecture:** Multi-Agent Systems, Hierarchical Planning
- **RAG:** LlamaIndex, ChromaDB
- **APIs:** OpenAI, Anthropic

### MLOps & Cloud
- **Containerization:** Docker, Kubernetes
- **IaC:** Terraform
- **GitOps:** ArgoCD
- **CI/CD:** Pipelines
- **Monitoring:** Tensorboard

### Data & Algorithms
- **Languages:** Python
- **Algorithms:** MinHash Deduplication, Aho-Corasick
- **Libraries:** Pandas, NumPy

---

## 3. Dự Án Tiêu Biểu (Featured Projects)

### 3.1. Enterprise AI Orchestrator (Agentic AI)
**Mô tả ngắn:** Mô hình thử nghiệm Multi-Agent trong quản trị doanh nghiệp.
**Vai trò:** Independent Developer
**Công nghệ:** CrewAI, Python, Docker, RAG, Multi-Agent

**Chi tiết kỹ thuật:**
- **Concept:** Mô phỏng cấu trúc doanh nghiệp với 1 CEO Crew điều phối 5 Sub-Crews (Sales, Marketing, Finance, HR, Operations).
- **Kiến trúc:**
    - **Hierarchical Process:** Sử dụng quy trình phân tầng, nơi Manager Agent giám sát và ủy quyền task.
    - **Memory System:** Tích hợp 4 tầng nhớ (Short-term, Long-term, Entity, Contextual) để giải quyết vấn đề mất ngữ cảnh và hallucination.
- **Tính năng nâng cao:**
    - **RAG:** Truy xuất tài liệu quy trình nội bộ trước khi ra quyết định.
    - **Guardrails:** Kiểm soát đầu ra của mô hình.

**Bài học:** Hiểu sâu sắc về Prompt Engineering và tầm quan trọng của việc thiết kế workflow rõ ràng cho các Agent.

### 3.2. Llama 3.2 Pre-training Implementation (LLM Core)
**Mô tả ngắn:** Tái hiện quy trình huấn luyện LLM từ đầu.
**Vai trò:** Independent Researcher
**Công nghệ:** PyTorch, Llama 3.2, WandB, Distributed Training, Algorithm

**Chi tiết kỹ thuật:**
- **Mục tiêu:** Tự xây dựng từng module của Llama 3.2 (1B parameters) để hiểu sâu cơ chế hoạt động thay vì dùng thư viện có sẵn.
- **Modeling:**
    - Tự cài đặt `LlamaDecoderLayer`, `RMSNorm`.
    - **RoPE (Rotary Positional Embeddings):** Tính toán tần số phức để mô hình hiểu vị trí từ.
    - **GQA (Grouped-Query Attention):** Cân bằng hiệu năng và tốc độ.
    - **SwiGLU:** Activation function.
- **Data Pipeline:**
    - **MinHash LSH:** Deduplication (loại bỏ văn bản trùng lặp).
    - **Aho-Corasick:** Lọc từ khóa nhạy cảm tốc độ cao.
- **Training:** Custom Trainer hỗ trợ Mixed Precision (AMP) và Gradient Accumulation.

### 3.3. LLM Reasoning Framework (LLM Research)
**Mô tả ngắn:** Nghiên cứu kỹ thuật tinh chỉnh khả năng suy luận.
**Vai trò:** Independent Researcher
**Công nghệ:** PEFT, DPO/GRPO, DeepSeek-R1 Techniques, BitsAndBytes, Transformers

**Chi tiết kỹ thuật:**
- **Mục tiêu:** Biến base model thành trợ lý thông minh có khả năng suy luận logic.
- **Alignment (DPO):** Tinh chỉnh tham số `beta` (0.1) và Learning Rate thấp (`5e-7`) để kiểm soát KL Divergence.
- **PEFT:** So sánh hiệu quả giữa LoRA, QLoRA và DoRA (Weight-Decomposed).
- **DeepSeek-R1:** Nghiên cứu tích hợp GRPO để cải thiện khả năng giải toán/lập trình mà không cần Reward Model phức tạp.

### 3.4. MLOps Platform Implementation (MLOps)
**Mô tả ngắn:** Xây dựng hạ tầng MLOps & GitOps tiêu chuẩn.
**Vai trò:** DevOps Engineer
**Công nghệ:** Terraform, ArgoCD, Kubernetes, GitOps, CI/CD

**Chi tiết kỹ thuật:**
- **Triết lý:** "Model chỉ có giá trị khi nó được deploy ổn định".
- **IaC (Terraform):** Định nghĩa hạ tầng AWS, quản lý state trên S3, sử dụng tags để quản lý chi phí.
- **GitOps (ArgoCD):** Tự động đồng bộ trạng thái cluster Kubernetes với Git repo.
- **CI/CD:** Tự động build Docker image, chạy test và cập nhật manifest khi có code mới.

---

## 4. Quá Trình Phát Triển (Timeline)

### 2024 - Hiện tại: Nghiên cứu & Phát triển Độc lập
- **Vai trò:** AI Research Engineer
- **Hoạt động:** Dành toàn thời gian nghiên cứu sâu kiến trúc LLM và Multi-Agent. Tự đặt bài toán thách thức (Pre-training Llama 3.2, Enterprise Simulation) để tích lũy kinh nghiệm thực tế.

### 2023 - 2024: Dự án Mã nguồn mở (Open Source)
- **Vai trò:** MLOps Engineer
- **Hoạt động:** Đóng góp và xây dựng giải pháp MLOps. Thiết lập hạ tầng K8s, quy trình GitOps và tự động hóa vòng đời ứng dụng ML.

### 2022 - Nay: Tự học & Nghiên cứu Chuyên sâu
- **Vai trò:** Independent Learner
- **Hoạt động:** Đọc báo khoa học (Papers), phân tích mã nguồn mở. Củng cố nền tảng Toán học cho ML, Deep Learning và hệ thống phân tán.

---

## 5. Định Hướng & Tư Duy (Mindset)
- **Engineering Mindset:** Không chỉ dừng lại ở lý thuyết, luôn hướng tới việc biến các nghiên cứu thành sản phẩm chạy được (Deployment Readiness).
- **Problem Solving:** Tiếp cận vấn đề toàn diện, từ dữ liệu, thuật toán đến hạ tầng triển khai.
- **Continuous Learning:** Luôn cập nhật các kỹ thuật mới nhất (như GRPO, DoRA) và không ngại thử thách với các kiến trúc phức tạp.
- **Khiêm tốn & Cầu thị:** Luôn giữ thái độ của một người học hỏi, sẵn sàng lắng nghe và cải thiện.
