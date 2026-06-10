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
    explanation: "二进制每码元携带log2(2)=1 bit，Rb=600 bit/s；八进制每码元携
