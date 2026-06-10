/*
 * 职责：题库层；固化课程作业原题与同知识点衍生题。
 * 状态读写：不读取、不写入 State/localStorage；只挂载 window.CP.tags 与 window.CP.questions。
 */
window.CP = window.CP || {};

window.CP.tags = {
  comm_basics: "通信系统基础概念",
  info_unit: "信息量单位",
  info_amount: "信息量计算",
  baud_rate: "码元速率",
  info_rate: "信息速率",
  mary_bits: "多进制码元比特数",
  ber_ser: "误码率与误信率",
  energy_power_signal: "能量信号与功率信号",
  gaussian_linear: "高斯过程与线性系统",
  wss: "广义平稳随机过程",
  autocorr_r0_rinf: "自相关函数特征值",
  channel_const_random: "恒参信道与随参信道",
  additive_multiplicative: "加性干扰与乘性干扰",
  shannon: "香农容量公式",
  db_linear: "dB与线性信噪比",
  bw_infinite_capacity: "无限带宽容量极限",
  am_dsb_ssb_fdm: "AM/DSB/SSB/FDM",
  ma_index: "调幅系数",
  fm_beta: "调频指数",
  carson: "卡森公式",
  direct_fm: "直接调频法",
  fm_pm_trap: "FM/PM判别陷阱",
  line_codes: "数字基带码型",
  isi: "码间串扰",
  baseband_spectrum: "基带功率谱",
  optimal_threshold: "最佳判决门限",
  psk_anti_noise: "2PSK抗噪性能",
  ask_threshold_sensitive: "2ASK门限敏感性",
  fsk_spectral_eff: "2FSK频带利用率",
  hdb3_rule: "HDB3编码规则",
  ook_fsk_psk_waveform: "OOK/2FSK/2PSK波形"
};

window.CP.questions = [
  {
    id: "CP-S-001",
    type: "single",
    question: "已知二进制2分钟内共传送了72000个码元，码元速率是（ ），如果码元脉冲保持不变，改为八进制数字信号，码元速率是（ ）。",
    options: [
      { key: "A", text: "72000 Baud，28000 Baud" },
      { key: "B", text: "36000 Baud，12000 Baud" },
      { key: "C", text: "36000 Baud，36000 Baud" },
      { key: "D", text: "600 Baud，600 Baud" }
    ],
    answer: "D",
    explanation: "码元速率 RB=码元数/时间=72000/(2×60)=600 Baud。码元脉冲保持不变时码元持续时间不变，所以改为八进制后码元速率仍为600 Baud。",
    knowledgeTag: "baud_rate",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-S-002",
    type: "single",
    question: "已知二进制2分钟内共传送了72000个码元，信息速率是（ ），如果码元脉冲保持不变，改为八进制数字信号，信息速率是（ ）。",
    options: [
      { key: "A", text: "600 bit/s，600 bit/s" },
      { key: "B", text: "600 bit/s，1800 bit/s" },
      { key: "C", text: "1800 bit/s，600 bit/s" },
      { key: "D", text: "1800 bit/s，1800 bit/s" }
    ],
    answer: "B",
    explanation: "二进制每码元携带log2(2)=1 bit，Rb=600 bit/s；八进制每码元携带log2(8)=3 bit，Rb=600×3=1800 bit/s。",
    knowledgeTag: "info_rate",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-S-003",
    type: "single",
    question: "已知一个十六进制的数字传输系统，若其码元速率为2000 Baud，则该系统最大可能的信息速率为（ ）。",
    options: [
      { key: "A", text: "2000 bit/s" },
      { key: "B", text: "4000 bit/s" },
      { key: "C", text: "1000 bit/s" },
      { key: "D", text: "8000 bit/s" }
    ],
    answer: "D",
    explanation: "十六进制M=16，每码元携带log2(16)=4 bit，所以信息速率Rb=2000×4=8000 bit/s。",
    knowledgeTag: "mary_bits",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-S-004",
    type: "single",
    question: "在信道上传输的是（ ）的通信系统称为模拟通信系统。",
    options: [
      { key: "A", text: "以上均不对" },
      { key: "B", text: "数字信号" },
      { key: "C", text: "任何信号" },
      { key: "D", text: "模拟信号" }
    ],
    answer: "D",
    explanation: "模拟通信系统在信道上传输模拟信号；数字通信系统在信道上传输数字信号。",
    knowledgeTag: "comm_basics",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-S-005",
    type: "single",
    question: "通信双方都能收发消息，但不能同时收发的工作方式属于（ ）。",
    options: [
      { key: "A", text: "半双工通信" },
      { key: "B", text: "单工通信" },
      { key: "C", text: "双工通信" }
    ],
    answer: "A",
    explanation: "半双工通信允许双方都能发送和接收，但同一时刻只能单向传输。",
    knowledgeTag: "comm_basics",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-S-006",
    type: "single",
    question: "衡量数字通信系统传输质量的指标是（ ）。",
    options: [
      { key: "A", text: "信噪比" },
      { key: "B", text: "噪声功率" },
      { key: "C", text: "误码率" },
      { key: "D", text: "话音清晰度" }
    ],
    answer: "C",
    explanation: "数字通信系统可靠性的常用质量指标是误码率。",
    knowledgeTag: "ber_ser",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-S-007",
    type: "single",
    question: "设平稳随机过程X(t)的自相关函数为R(τ)，则R(0)表示X(t)的（ ）。",
    options: [
      { key: "A", text: "直流功率" },
      { key: "B", text: "总能量" },
      { key: "C", text: "平均功率" },
      { key: "D", text: "方差" }
    ],
    answer: "C",
    explanation: "平稳随机过程的R(0)=E[X²(t)]，表示平均功率。",
    knowledgeTag: "autocorr_r0_rinf",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-S-008",
    type: "single",
    question: "设平稳随机过程X(t)的自相关函数为R(τ)，当τ趋于无穷时R(τ)表示X(t)的（ ）。",
    options: [
      { key: "A", text: "平均功率" },
      { key: "B", text: "方差" },
      { key: "C", text: "直流功率" },
      { key: "D", text: "总能量" }
    ],
    answer: "C",
    explanation: "R(∞)等于均值平方，反映随机过程的直流功率。",
    knowledgeTag: "autocorr_r0_rinf",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-S-009",
    type: "single",
    question: "以下属于无线信道的是（ ）。",
    options: [
      { key: "A", text: "电磁波" },
      { key: "B", text: "双绞线" },
      { key: "C", text: "电缆" },
      { key: "D", text: "光纤" }
    ],
    answer: "A",
    explanation: "电磁波传播属于无线传输媒介；双绞线、电缆、光纤属于有线媒介。",
    knowledgeTag: "channel_const_random",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-S-010",
    type: "single",
    question: "设一数字传输系统传送8进制码元，码元传输速率为1200 Baud，此时该系统的信息传输速率为（ ）。",
    options: [
      { key: "A", text: "1200 bit/s" },
      { key: "B", text: "3600 bit/s" },
      { key: "C", text: "4800 bit/s" },
      { key: "D", text: "2400 bit/s" }
    ],
    answer: "B",
    explanation: "8进制每码元携带3 bit，因此Rb=1200×3=3600 bit/s。",
    knowledgeTag: "info_rate",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-S-011",
    type: "single",
    question: "根据香农公式可知，为了使信道容量趋于无穷大，不可以采取下列哪项措施？",
    options: [
      { key: "A", text: "噪声功率谱密度始终为零" },
      { key: "B", text: "系统带宽为无穷大" },
      { key: "C", text: "噪声功率为零" },
      { key: "D", text: "信号发射功率为无穷大" }
    ],
    answer: "B",
    explanation: "C=B log2(1+S/N)。在噪声功率随带宽增加的通常模型下，单纯令B趋于无穷并不会使容量趋于无穷。",
    knowledgeTag: "bw_infinite_capacity",
    difficulty: 2,
    sourceGroup: "作业3"
  },
  {
    id: "CP-S-012",
    type: "single",
    question: "在抗加性高斯白噪声方面，性能最好的是（ ）。",
    options: [
      { key: "A", text: "相干2PSK" },
      { key: "B", text: "相干2ASK" },
      { key: "C", text: "相干2DPSK" },
      { key: "D", text: "相干2FSK" }
    ],
    answer: "A",
    explanation: "在相干二进制数字调制中，相干2PSK的抗加性高斯白噪声性能最好。",
    knowledgeTag: "psk_anti_noise",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-S-013",
    type: "single",
    question: "下列哪种解调方式对判决门限敏感？",
    options: [
      { key: "A", text: "相干2ASK" },
      { key: "B", text: "相干2PSK" },
      { key: "C", text: "差分相干解调" },
      { key: "D", text: "相干2FSK" }
    ],
    answer: "A",
    explanation: "2ASK以幅度判决为主，门限偏移会直接影响判决结果，因此对门限敏感。",
    knowledgeTag: "ask_threshold_sensitive",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-S-014",
    type: "single",
    question: "若信号的幅度为1，双极性归零码的最佳判决门限为（ ）。",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "0" },
      { key: "C", text: "与信道特性有关" },
      { key: "D", text: "0.5" }
    ],
    answer: "B",
    explanation: "等概双极性信号电平关于0对称，最佳判决门限为0。",
    knowledgeTag: "optimal_threshold",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-S-015",
    type: "single",
    question: "下列二进制数字调制系统频带利用率最低的是（ ）。",
    options: [
      { key: "A", text: "2PSK" },
      { key: "B", text: "2FSK" },
      { key: "C", text: "2ASK" },
      { key: "D", text: "2DPSK" }
    ],
    answer: "B",
    explanation: "2FSK需要用两个不同载频表示二进制符号，频带利用率通常最低。",
    knowledgeTag: "fsk_spectral_eff",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-S-016",
    type: "single",
    question: "2DPSK、2ASK、2PSK和2FSK采用相干解调时，抗加性高斯白噪声性能最差的是（ ）。",
    options: [
      { key: "A", text: "2ASK" },
      { key: "B", text: "2FSK" },
      { key: "C", text: "2DPSK" },
      { key: "D", text: "2PSK" }
    ],
    answer: "A",
    explanation: "相干2ASK最易受幅度噪声和门限设置影响，抗噪性能最差。",
    knowledgeTag: "ask_threshold_sensitive",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-S-017",
    type: "single",
    question: "已知每个码元持续时间Ts=0.5 ms，则码元速率RB为（ ）。",
    options: [
      { key: "A", text: "500 Baud" },
      { key: "B", text: "1000 Baud" },
      { key: "C", text: "2000 Baud" },
      { key: "D", text: "4000 Baud" }
    ],
    answer: "C",
    explanation: "RB=1/Ts=1/(0.5×10^-3)=2000 Baud。",
    knowledgeTag: "baud_rate",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-018",
    type: "single",
    question: "在M进制数字传输中，每个码元最多携带的信息量为（ ）。",
    options: [
      { key: "A", text: "M bit" },
      { key: "B", text: "log2(M) bit" },
      { key: "C", text: "2M bit" },
      { key: "D", text: "1/M bit" }
    ],
    answer: "B",
    explanation: "M个等概符号每个码元可表示log2(M) bit信息。",
    knowledgeTag: "mary_bits",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-019",
    type: "single",
    question: "若四进制码元速率为2400 Baud，则信息速率为（ ）。",
    options: [
      { key: "A", text: "1200 bit/s" },
      { key: "B", text: "2400 bit/s" },
      { key: "C", text: "4800 bit/s" },
      { key: "D", text: "9600 bit/s" }
    ],
    answer: "C",
    explanation: "四进制每码元2 bit，Rb=2400×2=4800 bit/s。",
    knowledgeTag: "info_rate",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-020",
    type: "single",
    question: "概率为1/8的离散消息所含信息量为（ ）。",
    options: [
      { key: "A", text: "1 bit" },
      { key: "B", text: "2 bit" },
      { key: "C", text: "3 bit" },
      { key: "D", text: "8 bit" }
    ],
    answer: "C",
    explanation: "I=-log2(P)=-log2(1/8)=3 bit。",
    knowledgeTag: "info_amount",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-021",
    type: "single",
    question: "下列哪一项不是信息量的单位？",
    options: [
      { key: "A", text: "bit" },
      { key: "B", text: "Hartley" },
      { key: "C", text: "nat" },
      { key: "D", text: "Baud" }
    ],
    answer: "D",
    explanation: "bit、Hartley、nat都是信息量单位；Baud是码元速率单位。",
    knowledgeTag: "info_unit",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-022",
    type: "single",
    question: "香农公式C=B log2(1+S/N)中，S/N必须使用（ ）。",
    options: [
      { key: "A", text: "dB值" },
      { key: "B", text: "线性功率比" },
      { key: "C", text: "百分数" },
      { key: "D", text: "波特" }
    ],
    answer: "B",
    explanation: "代入香农公式时，S/N应先由dB值换算成线性功率比。",
    knowledgeTag: "db_linear",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-023",
    type: "single",
    question: "若信噪比为20 dB，其对应的线性信噪比为（ ）。",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "10" },
      { key: "C", text: "100" },
      { key: "D", text: "1000" }
    ],
    answer: "C",
    explanation: "S/N(dB)=10log10(S/N)，20 dB对应S/N=10^(20/10)=100。",
    knowledgeTag: "db_linear",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-024",
    type: "single",
    question: "AM波包络最大值为12 V、最小值为4 V，则调幅系数ma为（ ）。",
    options: [
      { key: "A", text: "0.25" },
      { key: "B", text: "0.50" },
      { key: "C", text: "0.67" },
      { key: "D", text: "2.00" }
    ],
    answer: "B",
    explanation: "ma=(Vmax-Vmin)/(Vmax+Vmin)=(12-4)/(12+4)=0.50。",
    knowledgeTag: "ma_index",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-025",
    type: "single",
    question: "某FM信号最大频偏Δf=15 kHz，调制信号频率fm=3 kHz，则调频指数β为（ ）。",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "5" },
      { key: "C", text: "12" },
      { key: "D", text: "18" }
    ],
    answer: "B",
    explanation: "β=Δf/fm=15/3=5。",
    knowledgeTag: "fm_beta",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-026",
    type: "single",
    question: "按卡森公式，Δf=20 kHz、fm=5 kHz的FM信号近似带宽为（ ）。",
    options: [
      { key: "A", text: "25 kHz" },
      { key: "B", text: "40 kHz" },
      { key: "C", text: "50 kHz" },
      { key: "D", text: "100 kHz" }
    ],
    answer: "C",
    explanation: "卡森公式B≈2(Δf+fm)=2×(20+5)=50 kHz。",
    knowledgeTag: "carson",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-027",
    type: "single",
    question: "普通AM信号中，真正承载调制信息的是（ ）。",
    options: [
      { key: "A", text: "载波本身" },
      { key: "B", text: "上、下边带" },
      { key: "C", text: "直流分量" },
      { key: "D", text: "噪声分量" }
    ],
    answer: "B",
    explanation: "AM调制后的调制信息位于上下边带；载波本身不携带有用调制信息。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-028",
    type: "single",
    question: "双极性基带信号在等概条件下的最佳判决门限通常取（ ）。",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "正电平" },
      { key: "C", text: "负电平" },
      { key: "D", text: "最大幅度的一半" }
    ],
    answer: "A",
    explanation: "双极性信号的两个判决电平关于0对称，等概时最佳门限为0。",
    knowledgeTag: "optimal_threshold",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-029",
    type: "single",
    question: "HDB3码是在AMI码基础上为解决长连0问题而引入（ ）。",
    options: [
      { key: "A", text: "违代码和取代节" },
      { key: "B", text: "载波同步" },
      { key: "C", text: "频分复用" },
      { key: "D", text: "门限检波" }
    ],
    answer: "A",
    explanation: "HDB3通过000V或B00V等取代节破坏长串0，从而增加定时信息。",
    knowledgeTag: "hdb3_rule",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-030",
    type: "single",
    question: "OOK信号中，二进制符号主要由载波的（ ）来区分。",
    options: [
      { key: "A", text: "有无" },
      { key: "B", text: "频率正负" },
      { key: "C", text: "相位连续变化" },
      { key: "D", text: "码元速率翻倍" }
    ],
    answer: "A",
    explanation: "OOK是开关键控，通常用有载波表示1、无载波表示0。",
    knowledgeTag: "ook_fsk_psk_waveform",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-031",
    type: "single",
    question: "在相干二进制数字调制中，利用两个反相信号、欧氏距离较大，因此抗加性高斯白噪声性能较好的是（ ）。",
    options: [
      { key: "A", text: "相干2PSK" },
      { key: "B", text: "相干2ASK" },
      { key: "C", text: "相干2FSK" },
      { key: "D", text: "OOK" }
    ],
    answer: "A",
    explanation: "相干2PSK用相位相反的两个载波表示二进制符号，信号距离较大，在同类相干二进制调制中抗加性高斯白噪声性能较好。",
    knowledgeTag: "psk_anti_noise",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-S-032",
    type: "single",
    question: "2FSK频带利用率较低的主要原因是（ ）。",
    options: [
      { key: "A", text: "需要用两个不同载频分别表示0和1，占用频带较宽" },
      { key: "B", text: "只能传输模拟信号" },
      { key: "C", text: "不需要载波" },
      { key: "D", text: "判决门限必须固定为0" }
    ],
    answer: "A",
    explanation: "2FSK用两个不同频率承载二进制符号，频谱占用通常宽于2ASK、2PSK，因此频带利用率较低。",
    knowledgeTag: "fsk_spectral_eff",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-M-001",
    type: "multiple",
    question: "信息量的单位包括（ ）。",
    options: [
      { key: "A", text: "哈特莱" },
      { key: "B", text: "奈特" },
      { key: "C", text: "比特" },
      { key: "D", text: "波特" }
    ],
    answer: ["A", "B", "C"],
    explanation: "Hartley、nat、bit均可作信息量单位；Baud是码元速率单位。",
    knowledgeTag: "info_unit",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-M-002",
    type: "multiple",
    question: "信源编码与译码的目的包括（ ）。",
    options: [
      { key: "A", text: "增强抗干扰能力" },
      { key: "B", text: "保证所传信息的安全" },
      { key: "C", text: "提高信息传输的有效性" },
      { key: "D", text: "完成模/数转换" }
    ],
    answer: ["C", "D"],
    explanation: "按本课程作业口径，信源编码与译码用于提高有效性并完成模/数转换相关处理。",
    knowledgeTag: "comm_basics",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-M-003",
    type: "multiple",
    question: "以下说法正确的是（ ）。",
    options: [
      { key: "A", text: "周期性功率信号的互相关函数和其互功率谱构成一对傅里叶变换" },
      { key: "B", text: "一个信号可以既不是能量信号，也不是功率信号" },
      { key: "C", text: "高斯过程经过线性系统后就可能不是高斯过程" },
      { key: "D", text: "两个连续的周期信号相加一定也是周期的" }
    ],
    answer: ["A", "B"],
    explanation: "A、B为本课程作业正确项；高斯过程通过线性系统仍为高斯过程，两个周期信号相加不一定仍周期。",
    knowledgeTag: "energy_power_signal",
    difficulty: 2,
    sourceGroup: "作业2"
  },
  {
    id: "CP-M-004",
    type: "multiple",
    question: "（ ）系统的信道属于无线信道。",
    options: [
      { key: "A", text: "光纤通信" },
      { key: "B", text: "WIFI" },
      { key: "C", text: "卫星通信" },
      { key: "D", text: "LIFI" }
    ],
    answer: ["B", "C", "D"],
    explanation: "WIFI、卫星通信、LIFI均不依赖实体导线传输；光纤通信属于有线信道。",
    knowledgeTag: "channel_const_random",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-M-005",
    type: "multiple",
    question: "信道容量的单位包括（ ）。",
    options: [
      { key: "A", text: "波特" },
      { key: "B", text: "比特/秒" },
      { key: "C", text: "赫兹" },
      { key: "D", text: "比特/符号" }
    ],
    answer: ["B", "D"],
    explanation: "信道容量可用信息传输速率单位bit/s，也可按每符号信息量表示；Baud和Hz不是容量单位。",
    knowledgeTag: "shannon",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-M-006",
    type: "multiple",
    question: "以下系统的信道属于随参信道的有（ ）。",
    options: [
      { key: "A", text: "地波" },
      { key: "B", text: "光纤通信" },
      { key: "C", text: "天波" },
      { key: "D", text: "电离层散射" }
    ],
    answer: ["A", "C", "D"],
    explanation: "按课程作业口径，地波、天波和电离层散射属于随参信道；光纤通信属于恒参信道。",
    knowledgeTag: "channel_const_random",
    difficulty: 2,
    sourceGroup: "作业3"
  },
  {
    id: "CP-M-007",
    type: "multiple",
    question: "恒参信道的失真包括哪些？",
    options: [
      { key: "A", text: "非线性失真" },
      { key: "B", text: "频率失真" },
      { key: "C", text: "相位失真" },
      { key: "D", text: "多径效应" }
    ],
    answer: ["A", "B", "C"],
    explanation: "恒参信道主要失真包括非线性失真、频率失真和相位失真；多径效应通常归入随参信道特征。",
    knowledgeTag: "channel_const_random",
    difficulty: 2,
    sourceGroup: "作业3"
  },
  {
    id: "CP-M-008",
    type: "multiple",
    question: "下列哪些属于调制信道模型中的乘性干扰特点？",
    options: [
      { key: "A", text: "随信道变化" },
      { key: "B", text: "始终存在" },
      { key: "C", text: "无信号时消失" },
      { key: "D", text: "与信号相乘" }
    ],
    answer: ["A", "C", "D"],
    explanation: "乘性干扰与信号相乘并随信道变化；无信号时乘性干扰项随之消失。",
    knowledgeTag: "additive_multiplicative",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-M-009",
    type: "multiple",
    question: "普通调幅波的说法正确的是（ ）。",
    options: [
      { key: "A", text: "设备简单" },
      { key: "B", text: "与其他调制方式比较占用的频带窄" },
      { key: "C", text: "解调方便，便于接收" },
      { key: "D", text: "功率利用率太低，整机利用率低" }
    ],
    answer: ["A", "C", "D"],
    explanation: "普通AM设备简单、解调方便，但功率利用率低；它并不比SSB等方式更省带宽。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-M-010",
    type: "multiple",
    question: "调频信号（FM）的带宽与哪些因素有关？",
    options: [
      { key: "A", text: "调制信号频率" },
      { key: "B", text: "调频指数" },
      { key: "C", text: "载波频率" },
      { key: "D", text: "调制信号幅度" }
    ],
    answer: ["A", "B", "D"],
    explanation: "FM带宽与调制频率、最大频偏和调频指数有关；调制信号幅度会影响频偏，载波频率本身不决定带宽。",
    knowledgeTag: "fm_beta",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-M-011",
    type: "multiple",
    question: "直接调频法的说法正确的是（ ）。",
    options: [
      { key: "A", text: "载频会发生漂移" },
      { key: "B", text: "不可以获得较大的频偏" },
      { key: "C", text: "频率稳定度不高" },
      { key: "D", text: "可以获得较大的频偏" }
    ],
    answer: ["A", "C", "D"],
    explanation: "直接调频法易获得较大频偏，但载频会漂移，频率稳定度不高。",
    knowledgeTag: "direct_fm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-M-012",
    type: "multiple",
    question: "调制的目的有（ ）。",
    options: [
      { key: "A", text: "提高无线通信时的天线辐射效率" },
      { key: "B", text: "把多个基带信号搬移到不同载频处以实现信道复用" },
      { key: "C", text: "扩展信号带宽，提高抗干扰、抗衰落能力" },
      { key: "D", text: "增大输出功率" }
    ],
    answer: ["A", "B", "C"],
    explanation: "调制可提高天线效率、实现频分复用，并可通过扩展带宽改善抗干扰能力；增大输出功率不是调制本身目的。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-M-013",
    type: "multiple",
    question: "DSB信号的组成部分包括（ ）。",
    options: [
      { key: "A", text: "正交分量" },
      { key: "B", text: "上边带" },
      { key: "C", text: "载波分量" },
      { key: "D", text: "下边带" }
    ],
    answer: ["B", "D"],
    explanation: "DSB-SC双边带抑制载波信号由上边带和下边带组成，不含独立载波分量。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-M-014",
    type: "multiple",
    question: "单边带调制（SSB）的优点包括（ ）。",
    options: [
      { key: "A", text: "节省功率" },
      { key: "B", text: "设备简单" },
      { key: "C", text: "抗干扰能力强" },
      { key: "D", text: "节省带宽" }
    ],
    answer: ["A", "C", "D"],
    explanation: "SSB只传输一个边带，可节省功率和带宽，并具有较好的抗干扰能力；设备实现相对复杂。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-M-015",
    type: "multiple",
    question: "以下哪些码型通常含有丰富的定时信息？",
    options: [
      { key: "A", text: "CMI码" },
      { key: "B", text: "单极性NRZ码" },
      { key: "C", text: "HDB3码" },
      { key: "D", text: "AMI长连0段" }
    ],
    answer: ["A", "C"],
    explanation: "CMI码跳变频繁，HDB3通过取代节限制长连0，二者有利于提取定时信息。",
    knowledgeTag: "line_codes",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-M-016",
    type: "multiple",
    question: "关于双极性基带信号，正确的是（ ）。",
    options: [
      { key: "A", text: "等概时最佳判决门限为0" },
      { key: "B", text: "一定具有直流分量" },
      { key: "C", text: "相对于单极性码可减小直流分量" },
      { key: "D", text: "只能用于2FSK调制" }
    ],
    answer: ["A", "C"],
    explanation: "双极性等概信号判决门限为0，正负电平抵消可减小直流分量。",
    knowledgeTag: "optimal_threshold",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-M-017",
    type: "multiple",
    question: "下列关于香农公式C=B log2(1+S/N)的说法正确的是（ ）。",
    options: [
      { key: "A", text: "B为信道带宽" },
      { key: "B", text: "S/N应使用线性比值" },
      { key: "C", text: "S/N直接代入dB数值" },
      { key: "D", text: "C表示信道容量" }
    ],
    answer: ["A", "B", "D"],
    explanation: "香农公式中B为带宽，C为容量，信噪比必须用线性值而不是dB值。",
    knowledgeTag: "shannon",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-M-018",
    type: "multiple",
    question: "关于信息量I=-log2(P)，正确的是（ ）。",
    options: [
      { key: "A", text: "事件概率越小，信息量越大" },
      { key: "B", text: "概率为1的事件信息量为0" },
      { key: "C", text: "概率越大，信息量越大" },
      { key: "D", text: "以2为底时单位为bit" }
    ],
    answer: ["A", "B", "D"],
    explanation: "I=-log2(P)，概率越小信息量越大；P=1时I=0；以2为底对应bit。",
    knowledgeTag: "info_amount",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-M-019",
    type: "multiple",
    question: "关于调频指数β和卡森公式，正确的是（ ）。",
    options: [
      { key: "A", text: "β=Δf/fm" },
      { key: "B", text: "B≈2(Δf+fm)" },
      { key: "C", text: "β越大带宽越小" },
      { key: "D", text: "最大频偏越大，近似带宽通常越大" }
    ],
    answer: ["A", "B", "D"],
    explanation: "β=Δf/fm，卡森公式B≈2(Δf+fm)，频偏增大时带宽通常增大。",
    knowledgeTag: "carson",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-M-020",
    type: "multiple",
    question: "关于OOK、2FSK、2PSK波形特征，正确的是（ ）。",
    options: [
      { key: "A", text: "OOK用载波有无表示符号" },
      { key: "B", text: "2FSK用两个不同频率表示符号" },
      { key: "C", text: "2PSK用相位反转表示符号变化" },
      { key: "D", text: "三者都只能改变载波幅度" }
    ],
    answer: ["A", "B", "C"],
    explanation: "OOK对应幅度开关，2FSK对应频率键控，2PSK对应相位键控。",
    knowledgeTag: "ook_fsk_psk_waveform",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-J-001",
    type: "judge",
    question: "消息中所含信息量与消息的重要程度有关。",
    options: [],
    answer: false,
    explanation: "信息量只与消息出现概率有关，与主观重要程度无关。",
    knowledgeTag: "info_amount",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-J-002",
    type: "judge",
    question: "消息所表达的事件越不可能发生，信息量就越大。",
    options: [],
    answer: true,
    explanation: "I=-log2(P)，概率P越小，信息量越大。",
    knowledgeTag: "info_amount",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-J-003",
    type: "judge",
    question: "通信系统的有效性和可靠性往往是相互矛盾的。",
    options: [],
    answer: true,
    explanation: "提高可靠性常需增加冗余或降低速率，可能牺牲有效性。",
    knowledgeTag: "comm_basics",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-J-004",
    type: "judge",
    question: "对于二进制数字信号，M=2，码元速率和信息速率相等。",
    options: [],
    answer: false,
    explanation: "按作业系统口径该题判错。严格写单位时，二进制有Rb=RB×log2(2)=RB，但二者物理量和单位不同。",
    knowledgeTag: "baud_rate",
    difficulty: 2,
    sourceGroup: "作业1"
  },
  {
    id: "CP-J-005",
    type: "judge",
    question: "模拟信号是取值离散的信号。",
    options: [],
    answer: false,
    explanation: "模拟信号的取值通常连续；取值离散是数字信号特征。",
    knowledgeTag: "comm_basics",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-J-006",
    type: "judge",
    question: "若线性系统的输入为高斯过程，则系统输出也是高斯过程。",
    options: [],
    answer: true,
    explanation: "高斯过程经过线性系统后仍为高斯过程。",
    knowledgeTag: "gaussian_linear",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-J-007",
    type: "judge",
    question: "连续信号2e^-t u(t)是能量信号。",
    options: [],
    answer: true,
    explanation: "u(t)限制信号只在t≥0存在，能量积分∫0∞4e^-2t dt=2，有限，所以是能量信号。",
    knowledgeTag: "energy_power_signal",
    difficulty: 2,
    sourceGroup: "作业2"
  },
  {
    id: "CP-J-008",
    type: "judge",
    question: "连续信号2e^-t是能量信号。",
    options: [],
    answer: false,
    explanation: "未乘u(t)时，t趋于负无穷信号幅度发散，能量积分不收敛，不是能量信号。",
    knowledgeTag: "energy_power_signal",
    difficulty: 2,
    sourceGroup: "作业2"
  },
  {
    id: "CP-J-009",
    type: "judge",
    question: "具有各态历经的随机过程一定是平稳过程。",
    options: [],
    answer: true,
    explanation: "本课程作业口径认为各态历经过程必须满足平稳性条件。",
    knowledgeTag: "wss",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-J-010",
    type: "judge",
    question: "广平稳随机过程必定是严义平稳的。",
    options: [],
    answer: false,
    explanation: "广义平稳只约束均值和自相关函数，不能推出严义平稳。",
    knowledgeTag: "wss",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-J-011",
    type: "judge",
    question: "乘性干扰特点：当没有信号时，没有乘性干扰。",
    options: [],
    answer: true,
    explanation: "乘性干扰与信号相乘，无信号时乘性干扰项随信号为零。",
    knowledgeTag: "additive_multiplicative",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-J-012",
    type: "judge",
    question: "随参信道是基本不随时间变化的信道。",
    options: [],
    answer: false,
    explanation: "随参信道参数随时间随机变化；恒参信道才基本不随时间变化。",
    knowledgeTag: "channel_const_random",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-J-013",
    type: "judge",
    question: "若带宽B趋于无穷大，信道容量会趋于无限大。",
    options: [],
    answer: false,
    explanation: "在噪声功率随带宽增长的通常模型下，B趋于无穷时容量趋于有限极限而非无穷大。",
    knowledgeTag: "bw_infinite_capacity",
    difficulty: 2,
    sourceGroup: "作业3"
  },
  {
    id: "CP-J-014",
    type: "judge",
    question: "无限制增大带宽，信道容量也会无限制增大。",
    options: [],
    answer: false,
    explanation: "单纯无限制增大带宽不能使容量无限制增大，这是香农公式常见陷阱。",
    knowledgeTag: "bw_infinite_capacity",
    difficulty: 2,
    sourceGroup: "作业3"
  },
  {
    id: "CP-J-015",
    type: "judge",
    question: "加性干扰特点：当没有信号时，没有加性干扰。",
    options: [],
    answer: false,
    explanation: "加性干扰独立叠加在信号上，即使没有信号也可能存在。",
    knowledgeTag: "additive_multiplicative",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-J-016",
    type: "judge",
    question: "如果信号带宽大于信道带宽，且相当多能量的频率分量不在信道通带范围内，信号将严重畸变失真。",
    options: [],
    answer: true,
    explanation: "超出通带的频率分量会被滤除，若这些分量含有较多能量，波形会严重失真。",
    knowledgeTag: "channel_const_random",
    difficulty: 1,
    sourceGroup: "作业3"
  },
  {
    id: "CP-J-017",
    type: "judge",
    question: "如果预先不知道调制信号m(t)的具体形式，则无法判断已调信号是调相信号还是调频信号。",
    options: [],
    answer: true,
    explanation: "FM和PM的相位表达形式可能相互转换；不知m(t)时无法可靠区分。",
    knowledgeTag: "fm_pm_trap",
    difficulty: 2,
    sourceGroup: "作业4"
  },
  {
    id: "CP-J-018",
    type: "judge",
    question: "调频信号的调频指数越大，其带宽越小。",
    options: [],
    answer: false,
    explanation: "调频指数增大通常意味着频偏增大，按卡森公式带宽不会变小。",
    knowledgeTag: "carson",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-J-019",
    type: "judge",
    question: "6cos[2π×10^8t+3cos(4π×10^3t)]是调频信号。",
    options: [],
    answer: false,
    explanation: "按本课程判题口径：不知m(t)无法区分FM/PM，故判错。",
    knowledgeTag: "fm_pm_trap",
    difficulty: 2,
    sourceGroup: "作业4"
  },
  {
    id: "CP-J-020",
    type: "judge",
    question: "AM调制是一种线性过程。",
    options: [],
    answer: false,
    explanation: "按本课程判题口径，此判断为错。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 2,
    sourceGroup: "作业4"
  },
  {
    id: "CP-J-021",
    type: "judge",
    question: "直接调频法的主要优点是可以获得较大的频偏。",
    options: [],
    answer: true,
    explanation: "直接调频法可获得较大频偏，但频率稳定度相对不高。",
    knowledgeTag: "direct_fm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-J-022",
    type: "judge",
    question: "间接调频法的主要优点是可以获得较大的频偏。",
    options: [],
    answer: false,
    explanation: "间接调频法的频率稳定度较好，但不以获得较大频偏为主要优点。",
    knowledgeTag: "direct_fm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-J-023",
    type: "judge",
    question: "单极性NRZ信号中没有定时分量。",
    options: [],
    answer: true,
    explanation: "单极性NRZ长串同码时缺少跳变，不含可靠定时分量。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-024",
    type: "judge",
    question: "单极性非归零码具有直流分量。",
    options: [],
    answer: true,
    explanation: "单极性NRZ电平不关于零对称，通常含直流分量。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-025",
    type: "judge",
    question: "单极性非归零码不适应有交流耦合的远距离传输，只适用于计算机内部或极近距离的传输。",
    options: [],
    answer: true,
    explanation: "单极性NRZ含直流分量且定时信息不足，不适合交流耦合远距离传输。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-026",
    type: "judge",
    question: "单极性非归零码有直流分量，要求传输线路具有直流传输能力。",
    options: [],
    answer: true,
    explanation: "存在直流分量的码型需要线路能够传输直流成分。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-027",
    type: "judge",
    question: "CMI频繁出现波形跳变，含有丰富的定时信息。",
    options: [],
    answer: true,
    explanation: "CMI编码通过规则跳变提供较丰富的定时信息。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-028",
    type: "judge",
    question: "单极性基带信号是否存在离散线谱取决于矩形脉冲的占空比。",
    options: [],
    answer: true,
    explanation: "矩形脉冲占空比会影响功率谱中离散线谱成分。",
    knowledgeTag: "baseband_spectrum",
    difficulty: 2,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-029",
    type: "judge",
    question: "双极性非归零码有直流分量，要求传输线路具有直流传输能力。",
    options: [],
    answer: false,
    explanation: "等概双极性NRZ正负电平抵消，通常无直流分量。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-030",
    type: "judge",
    question: "AMI码没有直流成分。",
    options: [],
    answer: true,
    explanation: "AMI码的正负脉冲交替出现，可消除直流成分。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-J-031",
    type: "judge",
    question: "码间串扰会使前一码元波形的拖尾影响后续码元的抽样判决。",
    options: [],
    answer: true,
    explanation: "码间串扰的本质就是码元波形在时间上相互重叠，前一码元拖尾会影响后续码元判决。",
    knowledgeTag: "isi",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-J-032",
    type: "judge",
    question: "在相干解调条件下，2PSK的抗加性高斯白噪声性能通常优于2ASK。",
    options: [],
    answer: true,
    explanation: "2PSK以相反相位区分符号，信号距离较大；2ASK受幅度噪声和门限影响更明显，因此2PSK抗噪性能通常更好。",
    knowledgeTag: "psk_anti_noise",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-J-033",
    type: "judge",
    question: "2FSK通常需要两个不同频率承载二进制符号，因此频带利用率一般低于2ASK和2PSK。",
    options: [],
    answer: true,
    explanation: "2FSK的两个符号占据不同频率位置，所需频带较宽，所以频带利用率通常最低。",
    knowledgeTag: "fsk_spectral_eff",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-J-034",
    type: "judge",
    question: "只要已调信号相位项中出现cos形式的调制项，就一定可以判定它是FM信号。",
    options: [],
    answer: false,
    explanation: "仅凭相位项形式不能可靠区分FM和PM；若不知道m(t)的具体形式，可能无法判定调制类型。",
    knowledgeTag: "fm_pm_trap",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-B-001",
    type: "blank",
    question: "按传输媒介，通信系统可分为____通信系统和____通信系统。",
    options: [],
    answer: [["有线"], ["无线"]],
    explanation: "按传输媒介分类，通信系统分为有线通信系统和无线通信系统。",
    knowledgeTag: "comm_basics",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-B-002",
    type: "blank",
    question: "在八进制（M=8）中，若码元速率为1000 Baud，则信息速率为____ bit/s。",
    options: [],
    answer: "3000",
    explanation: "八进制每码元携带3 bit，Rb=1000×3=3000 bit/s。",
    knowledgeTag: "info_rate",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-B-003",
    type: "blank",
    question: "已知二进制数字信号每个码元占有的时间为2 ms，0、1码等概率出现，则码元速率为____ Baud，信息速率为____ bit/s。",
    options: [],
    answer: [["500"], ["500"]],
    explanation: "RB=1/Ts=1/(2×10^-3)=500 Baud；二进制每码元1 bit，所以Rb=500 bit/s。",
    knowledgeTag: "baud_rate",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-B-004",
    type: "blank",
    question: "若符号“E”出现的概率为0.25，则符号“E”所包含的信息量为____ bit。",
    options: [],
    answer: "2",
    explanation: "I=-log2(0.25)=2 bit。",
    knowledgeTag: "info_amount",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-B-005",
    type: "blank",
    question: "通信系统中，用于传输信号的物理媒介称为____。",
    options: [],
    answer: "信道",
    explanation: "传输信号的物理媒介称为信道。",
    knowledgeTag: "comm_basics",
    difficulty: 1,
    sourceGroup: "作业1"
  },
  {
    id: "CP-B-006",
    type: "blank",
    question: "根据乘性干扰的特性，调制信道可分为恒参信道和随参信道，其中光纤信道是一种____信道，短波电离层反射信道是一种____信道。",
    options: [],
    answer: [["恒参"], ["随参"]],
    explanation: "光纤信道参数基本稳定，属于恒参信道；短波电离层反射受传播条件变化影响，属于随参信道。",
    knowledgeTag: "channel_const_random",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-B-007",
    type: "blank",
    question: "若X和Y相互独立，且均值均为0、方差均为4，高斯随机过程Z=Xcos2000πt-Ysin2000πt，则Z的均值为____，方差为____。",
    options: [],
    answer: [["0"], ["4"]],
    explanation: "线性组合均值为0；方差为4cos²+4sin²=4。",
    knowledgeTag: "gaussian_linear",
    difficulty: 2,
    sourceGroup: "作业2"
  },
  {
    id: "CP-B-008",
    type: "blank",
    question: "某随机过程X的均值为1，方差为2，则随机过程Y=2X+1的均值为____，方差为____。",
    options: [],
    answer: [["3"], ["8"]],
    explanation: "E[Y]=2E[X]+1=3；Var(Y)=2²Var(X)=8。",
    knowledgeTag: "gaussian_linear",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-B-009",
    type: "blank",
    question: "广义平稳随机过程的数学期望、方差与____无关，自相关函数只与____有关。",
    options: [],
    answer: [["时间"], ["时间间隔", "时间差"]],
    explanation: "广义平稳要求均值和方差不随时间变化，自相关函数只依赖时间间隔。",
    knowledgeTag: "wss",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-B-010",
    type: "blank",
    question: "如果白噪声取值的概率分布服从高斯分布，则称之为____。",
    options: [],
    answer: "高斯白噪声",
    explanation: "服从高斯分布的白噪声称为高斯白噪声。",
    knowledgeTag: "gaussian_linear",
    difficulty: 1,
    sourceGroup: "作业2"
  },
  {
    id: "CP-B-011",
    type: "blank",
    question: "用双踪示波器观察到调幅波，包络最大值为20 V、最小值为4 V，则调幅度为____。（写成小数，保留两位）",
    options: [],
    answer: "0.67",
    explanation: "ma=(Vmax-Vmin)/(Vmax+Vmin)=(20-4)/(20+4)=16/24≈0.67。",
    knowledgeTag: "ma_index",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-B-012",
    type: "blank",
    question: "频分复用（FDM）按____分割信号。",
    options: [],
    answer: "频率",
    explanation: "FDM是Frequency Division Multiplexing，即按频率划分信道资源。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-B-013",
    type: "blank",
    question: "已知FM信号表达式6cos[2π×10^8t+3cos(4π×10^3t)]，则调频指数为____。",
    options: [],
    answer: "3",
    explanation: "角度项中调制项系数为3，按题目表达式可读出调制指数为3。",
    knowledgeTag: "fm_beta",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-B-014",
    type: "blank",
    question: "产生SSB信号的方法有两种：____和____。",
    options: [],
    answer: [["滤波法"], ["相移法", "移相法"]],
    explanation: "SSB常用产生方法为滤波法和相移法（也称移相法）。",
    knowledgeTag: "am_dsb_ssb_fdm",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-B-015",
    type: "blank",
    question: "已知FM信号表达式6cos[2π×10^8t+3cos(4π×10^3t)]，则载波幅度为____ V。",
    options: [],
    answer: "6",
    explanation: "余弦函数外的幅度系数为6 V。",
    knowledgeTag: "fm_beta",
    difficulty: 1,
    sourceGroup: "作业4"
  },
  {
    id: "CP-B-016",
    type: "blank",
    question: "已知调频信号 s(t)=20cos[2×10^8·π·t+8cos(4000π·t)]，则调制指数β为____，最大频偏Δf为____ kHz，按卡森公式得到的信号带宽B为____ kHz。",
    options: [],
    answer: [["8"], ["16"], ["36"]],
    explanation: "相位中的调制项振幅即调制指数，β=8。调制信号角频率为4000π，故fm=4000π/(2π)=2000 Hz=2 kHz。最大频偏Δf=β·fm=8×2=16 kHz。卡森公式B≈2(Δf+fm)=2×(16+2)=36 kHz。",
    knowledgeTag: "fm_beta",
    difficulty: 2,
    sourceGroup: "作业4"
  },
  {
    id: "CP-B-017",
    type: "blank",
    question: "前面的码元对后面的若干码元有影响，这种影响称为____。",
    options: [],
    answer: "码间串扰",
    explanation: "码元波形拖尾影响后续码元判决，称为码间串扰。",
    knowledgeTag: "isi",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-B-018",
    type: "blank",
    question: "数字基带信号的功率谱密度可能包括两部分，即____和____。",
    options: [],
    answer: [["连续谱"], ["离散谱"]],
    explanation: "数字基带功率谱通常由连续谱和可能存在的离散谱组成。",
    knowledgeTag: "baseband_spectrum",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-B-019",
    type: "blank",
    question: "在等概条件下，双极性的最佳判决门限电平为____。",
    options: [],
    answer: ["0", "零"],
    explanation: "等概双极性电平关于零对称，最佳门限为0。",
    knowledgeTag: "optimal_threshold",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-B-020",
    type: "blank",
    question: "码元持续时间为Ts时，码元速率RB=____。",
    options: [],
    answer: ["1/Ts", "1/T_s"],
    explanation: "码元速率定义为单位时间内传输的码元数，所以RB=1/Ts。",
    knowledgeTag: "baud_rate",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-B-021",
    type: "blank",
    question: "无码间串扰传输要求在抽样时刻，除当前码元外，其他码元对抽样值的贡献为____。",
    options: [],
    answer: ["0", "零"],
    explanation: "码间串扰来自相邻码元在抽样时刻的叠加影响；无码间串扰条件要求其他码元在该抽样时刻贡献为0。",
    knowledgeTag: "isi",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-B-022",
    type: "blank",
    question: "平稳随机过程自相关函数中，R(0)表示____，R(∞)表示____。",
    options: [],
    answer: [["平均功率"], ["直流功率"]],
    explanation: "R(0)=E[X²(t)]表示平均功率；R(∞)等于均值平方，表示直流功率。",
    knowledgeTag: "autocorr_r0_rinf",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-B-023",
    type: "blank",
    question: "已知调频信号s(t)=12cos[2π·1×10^8·t+5cos(2π·3×10^3·t)]，则调制指数β为____，调制频率fm为____ kHz，最大频偏Δf为____ kHz，按卡森公式得到的信号带宽B为____ kHz。",
    options: [],
    answer: [["5"], ["3", "3 kHz"], ["15", "15 kHz"], ["36", "36 kHz"]],
    explanation: "调制指数β=相位项中调制分量的振幅系数，代入表达式得β=5。调制频率fm=调制项角频率/(2π)，代入2π·3×10^3得fm=(2π·3×10^3)/(2π)=3×10^3 Hz=3 kHz。最大频偏Δf=β·fm=5×3=15 kHz。卡森带宽B=2(Δf+fm)=2×(15+3)=36 kHz。载波频率1×10^8 Hz不参与带宽计算。",
    knowledgeTag: "carson",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-B-024",
    type: "blank",
    question: "已知调频信号s(t)=8cos[2π·5×10^7·t+2cos(2π·4×10^3·t)]，则载波幅度Ac为____ V，调制指数β为____，最大频偏Δf为____ kHz，按卡森公式得到的信号带宽B为____ kHz。",
    options: [],
    answer: [["8", "8 V"], ["2"], ["8", "8 kHz"], ["24", "24 kHz"]],
    explanation: "载波幅度Ac=cos前的幅度系数，代入表达式得Ac=8 V。调制指数β=相位项中调制分量的振幅系数，代入得β=2。调制频率fm=调制项角频率/(2π)，代入2π·4×10^3得fm=(2π·4×10^3)/(2π)=4×10^3 Hz=4 kHz。最大频偏Δf=β·fm=2×4=8 kHz。卡森带宽B=2(Δf+fm)=2×(8+4)=24 kHz。载波频率5×10^7 Hz不参与带宽计算。",
    knowledgeTag: "fm_beta",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-B-025",
    type: "blank",
    question: "已知调频信号s(t)=15cos[2π·8×10^7·t+10cos(2π·1×10^3·t)]，则调制指数β为____，调制频率fm为____ kHz，最大频偏Δf为____ kHz，按卡森公式得到的信号带宽B为____ kHz。",
    options: [],
    answer: [["10"], ["1", "1 kHz"], ["10", "10 kHz"], ["22", "22 kHz"]],
    explanation: "调制指数β=相位项中调制分量的振幅系数，代入表达式得β=10。调制频率fm=调制项角频率/(2π)，代入2π·1×10^3得fm=(2π·1×10^3)/(2π)=1×10^3 Hz=1 kHz。最大频偏Δf=β·fm=10×1=10 kHz。卡森带宽B=2(Δf+fm)=2×(10+1)=22 kHz。载波频率8×10^7 Hz不参与带宽计算。",
    knowledgeTag: "carson",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-B-026",
    type: "blank",
    question: "已知调频信号s(t)=6cos[2π·2×10^8·t+3cos(2π·5×10^3·t)]，则载波幅度Ac为____ V，调制指数β为____，调制频率fm为____ kHz，按卡森公式得到的信号带宽B为____ kHz。",
    options: [],
    answer: [["6", "6 V"], ["3"], ["5", "5 kHz"], ["40", "40 kHz"]],
    explanation: "载波幅度Ac=cos前的幅度系数，代入表达式得Ac=6 V。调制指数β=相位项中调制分量的振幅系数，代入得β=3。调制频率fm=调制项角频率/(2π)，代入2π·5×10^3得fm=(2π·5×10^3)/(2π)=5×10^3 Hz=5 kHz。最大频偏Δf=β·fm=3×5=15 kHz。卡森带宽B=2(Δf+fm)=2×(15+5)=40 kHz。载波频率2×10^8 Hz不参与带宽计算。",
    knowledgeTag: "fm_beta",
    difficulty: 3,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-C-001",
    type: "calculation",
    question: "设某四进制数字传输系统中每个码元持续时间为833×10^-6 s，连续工作1 h后接收端收到6个错码，且每个错误码元中仅发生1 bit错误。求码元速率、信息速率、误码率和误信率。",
    options: [],
    answer: { final: "RB≈1200 Baud，Rb≈2400 bit/s，误码率≈1.39×10^-6，误信率≈6.94×10^-7", accept: ["1200 Baud;2400 bit/s;1.39e-6;6.94e-7"], tolerance: 0.02 },
    explanation: "公式：RB=1/Ts，Rb=RBlog2M，误码率=错码数/总码元数，误信率=错比特数/总比特数。代入Ts=833×10^-6 s，得RB≈1200 Baud；四进制每码元2 bit，Rb=1200×2=2400 bit/s；1 h码元数=1200×3600=4.32×10^6，误码率=6/(4.32×10^6)=1.39×10^-6；总比特数=2400×3600=8.64×10^6，误信率=6/(8.64×10^6)=6.94×10^-7。最终结果为RB≈1200 Baud，Rb≈2400 bit/s，误码率≈1.39×10^-6，误信率≈6.94×10^-7。",
    knowledgeTag: "ber_ser",
    difficulty: 3,
    sourceGroup: "作业1"
  },
  {
    id: "CP-C-002",
    type: "calculation",
    question: "黑白电视图像每帧含有3×10^5个像素，每个像素有16个等概亮度等级，要求每秒传输30帧。若信道输出S/N=30 dB，求传输该图像所要求的最小带宽。",
    options: [],
    answer: { final: "约3.61 MHz", accept: ["3.61 MHz", "3.6 MHz"], tolerance: 0.05 },
    explanation: "公式：R=像素数×每像素信息量×帧率，C=B log2(1+S/N)。代入16级亮度得每像素log2(16)=4 bit，R=3×10^5×4×30=3.6×10^7 bit/s；30 dB对应S/N=10^(30/10)=1000；B=R/log2(1001)≈3.6×10^7/9.967≈3.61×10^6 Hz。最终最小带宽约为3.61 MHz。",
    knowledgeTag: "shannon",
    difficulty: 3,
    sourceGroup: "作业3"
  },
  {
    id: "CP-C-003",
    type: "calculation",
    question: "某一单频调频波振幅为10 V，瞬时角频率为ω(t)=2π×10^7+2000πcos(200πt)，求调频波表达式、调频指数和近似带宽。",
    options: [],
    answer: { final: "s(t)=10cos(2π×10^7t+10sin200πt)，β=10，B≈2.2 kHz", accept: ["10cos(2π×10^7t+10sin200πt);10;2.2kHz"], tolerance: 0.05 },
    explanation: "公式：θ(t)=∫ω(t)dt，β=Δf/fm，B≈2(Δf+fm)。代入ω(t)=2π×10^7+2000πcos(200πt)，得θ(t)=2π×10^7t+(2000π/200π)sin(200πt)=2π×10^7t+10sin(200πt)，所以s(t)=10cos(2π×10^7t+10sin200πt)；fm=200π/(2π)=100 Hz，Δf=βfm=10×100=1000 Hz，B≈2(1000+100)=2200 Hz。最终β=10，带宽约2.2 kHz。",
    knowledgeTag: "fm_beta",
    difficulty: 3,
    sourceGroup: "作业4"
  },
  {
    id: "CP-C-004",
    type: "calculation",
    question: "已知s(t)=cos(2π×10^4t)+4cos(2.2π×10^4t)+cos(2.4π×10^4t)是某AM已调信号展开式，求调幅系数和调制信号频率。",
    options: [],
    answer: { final: "ma=0.5，fm=1 kHz", accept: ["0.5;1kHz", "0.5;1000Hz"], tolerance: 0.01 },
    explanation: "公式：AM单音展开中边带幅度=maAc/2，边带间隔=fm。代入三项频率10 kHz、11 kHz、12 kHz，中间11 kHz为载波，边带间隔为1 kHz，所以fm=1 kHz；载波幅度Ac=4，边带幅度1=maAc/2，得ma=2×1/4=0.5。最终调幅系数ma=0.5，调制信号频率fm=1 kHz。",
    knowledgeTag: "ma_index",
    difficulty: 3,
    sourceGroup: "作业4"
  },
  {
    id: "CP-C-005",
    type: "calculation",
    question: "八进制系统码元速率为2400 Baud，求每码元比特数和信息速率。",
    options: [],
    answer: { final: "3 bit/码元，7200 bit/s", accept: ["3;7200"], tolerance: 0 },
    explanation: "公式：每码元比特数=log2M，Rb=RBlog2M。代入M=8，得log2(8)=3 bit/码元；代入RB=2400 Baud，Rb=2400×3=7200 bit/s。最终为3 bit/码元，7200 bit/s。",
    knowledgeTag: "mary_bits",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-C-006",
    type: "calculation",
    question: "信道带宽B=4 kHz，信噪比S/N=20 dB，求信道容量。",
    options: [],
    answer: { final: "约26.63 kbit/s", accept: ["26.63 kbit/s", "26630 bit/s"], tolerance: 0.05 },
    explanation: "公式：S/N=10^(dB/10)，C=B log2(1+S/N)。代入20 dB得S/N=10^(20/10)=100；代入B=4000 Hz，C=4000×log2(101)≈4000×6.658=26632 bit/s。最终容量约为26.63 kbit/s。",
    knowledgeTag: "db_linear",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-C-007",
    type: "calculation",
    question: "AM波包络最大值为18 V、最小值为6 V，求调幅系数ma。",
    options: [],
    answer: { final: "0.5", accept: ["0.5", "0.50"], tolerance: 0.01 },
    explanation: "公式：ma=(Vmax-Vmin)/(Vmax+Vmin)。代入Vmax=18 V、Vmin=6 V，得ma=(18-6)/(18+6)=12/24=0.5。最终调幅系数ma=0.5。",
    knowledgeTag: "ma_index",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-C-008",
    type: "calculation",
    question: "某FM信号最大频偏Δf=75 kHz，最高调制频率fm=15 kHz，求调频指数β和卡森近似带宽。",
    options: [],
    answer: { final: "β=5，B≈180 kHz", accept: ["5;180kHz"], tolerance: 0.01 },
    explanation: "公式：β=Δf/fm，卡森公式B≈2(Δf+fm)。代入Δf=75 kHz、fm=15 kHz，得β=75/15=5；B≈2×(75+15)=180 kHz。最终β=5，带宽约180 kHz。",
    knowledgeTag: "carson",
    difficulty: 1,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-C-009",
    type: "calculation",
    question: "某二进制系统码元持续时间Ts=0.25 ms，连续传输10 s收到2个错码。求码元速率和误码率。",
    options: [],
    answer: { final: "RB=4000 Baud，误码率=5×10^-5", accept: ["4000;5e-5"], tolerance: 0.01 },
    explanation: "公式：RB=1/Ts，误码率=错码数/总码元数。代入Ts=0.25 ms，RB=1/(0.25×10^-3)=4000 Baud；10 s内总码元数=4000×10=40000；误码率=2/40000=5×10^-5。最终RB=4000 Baud，误码率=5×10^-5。",
    knowledgeTag: "ber_ser",
    difficulty: 2,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-C-010",
    type: "calculation",
    question: "按HDB3规则，若自上一个违代码V以来已有奇数个非零脉冲，当前四连0前的最近一个非零脉冲为+V，且当前出现0000，当前取代节应如何选择？",
    options: [],
    answer: { final: "000+V", accept: ["000+V", "000V且V为+V"] },
    explanation: "HDB3四连0取代判定式：n=奇数时用000V，n=偶数时用B00V，其中n为自上一个V以来的非零脉冲数。本题代入n=奇数，所以选000V；V为违代码，极性与最近一个非零脉冲相同。代入最近一个非零脉冲为+V，得到取代节000+V，最终为000+V。",
    knowledgeTag: "hdb3_rule",
    difficulty: 3,
    sourceGroup: "衍生题"
  },
  {
    id: "CP-W-001",
    type: "waveform",
    question: "设发送数字信息为110010101100，画OOK波形时，应如何表示“1”和“0”？",
    options: [],
    answer: "序列110010101100中，1码元画有载波，0码元画无载波",
    explanation: "OOK为开关键控，通常用有载波表示1，用无载波表示0，因此按110010101100逐码元开关载波。",
    knowledgeTag: "ook_fsk_psk_waveform",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-W-002",
    type: "waveform",
    question: "设发送数字信息为110010101100，画2FSK波形时，若0对应Ts=2Tc、1对应Ts=Tc，应如何表示？",
    options: [],
    answer: "序列110010101100中，1码元画高频载波，0码元画低频载波",
    explanation: "题设给出1对应一个码元内周期更短、频率更高的载波，0对应周期更长、频率更低的载波。",
    knowledgeTag: "ook_fsk_psk_waveform",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-W-003",
    type: "waveform",
    question: "设发送数字信息为110010101100，画2PSK波形时，角度0代表0、角度180°代表1，应如何表示？",
    options: [],
    answer: "序列110010101100中，0码元画0°相位载波，1码元画180°相位载波",
    explanation: "2PSK用载波相位区分二进制符号，题设规定0对应0°，1对应180°。",
    knowledgeTag: "ook_fsk_psk_waveform",
    difficulty: 1,
    sourceGroup: "作业5"
  },
  {
    id: "CP-W-004",
    type: "waveform",
    question: "已知信码序列为1010000000001100000100001，未给出的前一个码为+V。HDB3波形的关键处理是什么？",
    options: [],
    answer: "先按AMI交替极性编码1，遇四连0按000V或B00V取代，使V违代码极性交替并破坏长连0",
    explanation: "HDB3不是简单把0画成零电平；长串0需替换为含违代码V的取代节，并用B脉冲保证相邻违代码极性交替，便于提取定时。",
    knowledgeTag: "hdb3_rule",
    difficulty: 3,
    sourceGroup: "作业5"
  },
  {
    id: "CP-W-005",
    type: "waveform",
    question: "给定二进制序列10110，若用双极性NRZ码表示，正电平代表1、负电平代表0，最终电平序列是什么？",
    options: [],
    answer: "+ - + + -",
    explanation: "双极性NRZ用两个相反电平表示0和1；按题设1为正、0为负，10110对应+ - + + -。",
    knowledgeTag: "line_codes",
    difficulty: 1,
    sourceGroup: "衍生题"
  }
];
