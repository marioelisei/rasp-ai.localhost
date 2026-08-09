/**
 * i18n.js — Internationalization for Pi5 Voice AI
 * Languages: pt (Brazilian Portuguese), en (English),
 *            zh (Simplified Chinese), de (German), fr (French)
 */

const TRANSLATIONS = {

  /* ═══ PORTUGUESE (default) ═══════════════════════════════ */
  pt: {
    "nav.pipeline":   "Pipeline",
    "nav.hardware":   "Hardware",
    "nav.steps":      "Setup",
    "nav.script":     "Script",
    "nav.next":       "Próximos passos",

    "hero.pill":      "Raspberry Pi 5 · 8 GB · 128 GB",
    "hero.title":     "Assistente de Voz com<br><em>IA Offline</em>",
    "hero.sub":       "Conecte Whisper + Ollama + Piper em um pipeline de voz totalmente local — sem nuvem, sem API keys, sem mensalidade.",

    "pipe.mic":       "Microfone",
    "pipe.mic.role":  "entrada de áudio",
    "pipe.whisper":   "Voz→Texto",
    "pipe.llm":       "Modelo de Linguagem",
    "pipe.tts":       "Texto→Voz",
    "pipe.spk":       "Alto-falante",
    "pipe.spk.role":  "saída de áudio",

    "stat.ram":       "RAM usada",
    "stat.cost":      "custo mensal",
    "stat.offline":   "offline",

    "s0.title":       "Hardware necessário",
    "s0.badge":       "Antes de começar",

    "hw.mic":         "Microfone USB",
    "hw.mic.desc":    "Qualquer mic USB plug-and-play funciona. Sem drivers no Linux.",
    "hw.spk":         "Alto-falante",
    "hw.spk.desc":    "USB com amplificador embutido ou saída 3.5mm do Pi.",
    "hw.spk.rec":     "qualquer caixa USB",
    "hw.sd":          "Cartão SD A2",
    "hw.sd.desc":     "32, 64 ou 128 GB classe A2 para leitura/escrita rápida dos modelos.",
    "hw.sd.rec":      "Recomendado MicroSD classe A2",
    "hw.cool":        "Refrigeração",
    "hw.cool.desc":   "O Pi 5 esquenta durante inferência. Use o cooler oficial ou um dissipador.",
    "hw.cool.rec":    "! importante",

    "s1.title":       "Preparar o sistema",
    "s1.desc":        "Use o <strong>Raspberry Pi OS Lite 64-bit</strong> (sem desktop — economiza RAM). Flash com o Raspberry Pi Imager.",
    "note.audio.title": "Dica de áudio",
    "note.audio.body":  "Se o microfone USB não aparecer, rode <code>sudo raspi-config</code> → System Options → Audio e selecione o dispositivo correto.",

    "s2.title":       "Instalar Ollama + LLM",
    "s2.desc":        "O Ollama roda LLMs localmente via API REST. Suporte ARM64 nativo no Pi 5.",
    "s2.models.title":"Escolha um modelo pelo uso de RAM:",
    "m.fast":         "mais rápido, respostas simples",
    "m.balanced":     "⭐ melhor custo/benefício",
    "m.multilang":    "forte em multilinguagem",
    "m.efficient":    "muito eficiente",
    "note.part1.title":"Parte 1 pronta",
    "note.part1.body": "O Ollama está rodando uma API REST na porta <code>11434</code> — chamaremos isso do script Python.",

    "s3.title":       "Instalar Whisper (STT)",
    "s3.desc":        "Usamos o <strong>faster-whisper</strong>, versão otimizada com CTranslate2 — muito mais rápido no Pi 5.",
    "tbl.model":      "Modelo",
    "tbl.ram":        "RAM",
    "tbl.speed":      "Velocidade",
    "tbl.quality":    "Qualidade PT-BR",
    "spd.vfast":      "muito rápido",
    "spd.fast":       "rápido",
    "spd.med":        "médio",
    "spd.slow":       "lento",
    "q.fair":         "razoável",
    "q.good":         "boa",
    "q.great":        "ótima — recomendado",
    "q.exc":          "excelente",

    "s4.title":       "Instalar Piper TTS",
    "s4.desc":        "O <strong>Piper</strong> é um TTS offline da Nabu Casa (equipe do Home Assistant). Tem voz em português do Brasil.",
    "note.part3.title":"Parte 3 pronta",
    "note.part3.body": "Se você ouviu a frase pelo alto-falante, o Piper está funcionando.",

    "s5.title":       "Script de integração — Pipeline completo",
    "s5.badge":       "núcleo do projeto",
    "s5.desc":        "Este script conecta os três componentes em um loop contínuo: grava → transcreve → raciocina → fala.",

    "s6.title":       "Iniciar automaticamente no boot",
    "s6.badge":       "opcional",
    "s6.desc":        "Crie um serviço systemd para o assistente iniciar automaticamente quando o Pi ligar.",

    "ram.title":      "Uso de RAM estimado total",
    "ram.component":  "Componente",
    "ram.note":       "Observação",
    "ram.os":         "SO + sistema",
    "ram.loaded":     "carregado na memória",
    "ram.running":    "modelo em execução",
    "ram.per":        "por processo",
    "ram.total":      "TOTAL",
    "ram.ok":         "confortável nos 8 GB",

    "next.title":     "Evoluções possíveis",
    "next.wake":      "Adicione <code>openWakeWord</code> para o assistente só acordar ao ouvir \"Hey Pi\", economizando processamento.",
    "next.rag":       "Alimente o LLM com seus próprios documentos usando <code>ChromaDB</code> — o assistente responde sobre o seu conteúdo.",
    "next.ha":        "Integre com Home Assistant via API local para controlar luzes, tomadas e sensores por voz.",
    "next.web":       "Suba o <code>Open WebUI</code> junto ao Ollama para acessar o assistente pelo celular via rede local.",
    "next.vision":    "Adicione uma câmera e use um modelo multimodal (<code>llava</code>) para descrever o que está na frente.",
    "next.auto":      "Adicione controle por gestos com <code>MediaPipe</code> ou alertas de câmera com <code>YOLOv8</code>.",

    "footer.license": "Licença MIT",
    "footer.github":  "Ver no GitHub",
    "footer.built":   "Construído com Ollama, Whisper e Piper",

    "toast.copied":   "Copiado!",
  },

  /* ═══ ENGLISH ═════════════════════════════════════════════ */
  en: {
    "nav.pipeline":   "Pipeline",
    "nav.hardware":   "Hardware",
    "nav.steps":      "Setup",
    "nav.script":     "Script",
    "nav.next":       "Next Steps",

    "hero.pill":      "Raspberry Pi 5 · 8 GB · 128 GB",
    "hero.title":     "Offline AI Voice<br><em>Assistant</em>",
    "hero.sub":       "Connect Whisper + Ollama + Piper in a fully local voice pipeline — no cloud, no API keys, no monthly fees.",

    "pipe.mic":       "Microphone",
    "pipe.mic.role":  "audio input",
    "pipe.whisper":   "Speech→Text",
    "pipe.llm":       "Language Model",
    "pipe.tts":       "Text→Speech",
    "pipe.spk":       "Speaker",
    "pipe.spk.role":  "audio output",

    "stat.ram":       "RAM used",
    "stat.cost":      "monthly cost",
    "stat.offline":   "offline",

    "s0.title":       "Required Hardware",
    "s0.badge":       "Before you start",

    "hw.mic":         "USB Microphone",
    "hw.mic.desc":    "Any USB plug-and-play mic works. No driver needed on Linux.",
    "hw.spk":         "Speaker",
    "hw.spk.desc":    "USB speaker with built-in amp, or via 3.5mm audio jack.",
    "hw.spk.rec":     "any USB speaker",
    "hw.sd":          "SD Card A2",
    "hw.sd.desc":     "32, 64 or 128 GB class A2 for fast model read/write speed.",
    "hw.sd.rec":      "Recommend MicroSD class A2",
    "hw.cool":        "Cooling",
    "hw.cool.desc":   "Pi 5 runs hot during inference. Use the official active cooler or a heatsink.",
    "hw.cool.rec":    "! important",

    "s1.title":       "Prepare the System",
    "s1.desc":        "Use <strong>Raspberry Pi OS Lite 64-bit</strong> (no desktop — saves RAM). Flash with Raspberry Pi Imager.",
    "note.audio.title":"Audio tip",
    "note.audio.body": "If the USB mic doesn't appear, run <code>sudo raspi-config</code> → System Options → Audio and select the correct device.",

    "s2.title":       "Install Ollama + LLM",
    "s2.desc":        "Ollama runs LLMs locally via a REST API. Native ARM64 support on Pi 5.",
    "s2.models.title":"Choose a model based on available RAM:",
    "m.fast":         "fastest, simple answers",
    "m.balanced":     "⭐ best quality/performance ratio",
    "m.multilang":    "strong multilingual",
    "m.efficient":    "very efficient",
    "note.part1.title":"Part 1 done",
    "note.part1.body": "Ollama is now running a REST API on port <code>11434</code> — we'll call this from the Python script.",

    "s3.title":       "Install Whisper (STT)",
    "s3.desc":        "We use <strong>faster-whisper</strong>, an optimized version using CTranslate2 — much faster than vanilla Whisper on Pi 5.",
    "tbl.model":      "Model",
    "tbl.ram":        "RAM",
    "tbl.speed":      "Speed",
    "tbl.quality":    "Quality",
    "spd.vfast":      "very fast",
    "spd.fast":       "fast",
    "spd.med":        "medium",
    "spd.slow":       "slow",
    "q.fair":         "fair",
    "q.good":         "good",
    "q.great":        "great — recommended",
    "q.exc":          "excellent",

    "s4.title":       "Install Piper TTS",
    "s4.desc":        "<strong>Piper</strong> is an offline TTS engine by Nabu Casa (Home Assistant team). Has a native Portuguese voice.",
    "note.part3.title":"Part 3 done",
    "note.part3.body": "If you heard the phrase through the speaker, Piper is working correctly.",

    "s5.title":       "Integration Script — Full Pipeline",
    "s5.badge":       "core of the project",
    "s5.desc":        "This script connects the three components in a continuous loop: record → transcribe → reason → speak.",

    "s6.title":       "Auto-start on Boot",
    "s6.badge":       "optional",
    "s6.desc":        "Create a systemd service so the assistant starts automatically when the Pi powers on.",

    "ram.title":      "Total Estimated RAM Usage",
    "ram.component":  "Component",
    "ram.note":       "Note",
    "ram.os":         "OS + system",
    "ram.loaded":     "loaded in memory",
    "ram.running":    "model running",
    "ram.per":        "per process",
    "ram.total":      "TOTAL",
    "ram.ok":         "comfortable within 8 GB",

    "next.title":     "Possible Evolutions",
    "next.wake":      "Add <code>openWakeWord</code> so the assistant only wakes up on \"Hey Pi\", saving processing power.",
    "next.rag":       "Feed the LLM your own documents using <code>ChromaDB</code> — the assistant answers questions about your content.",
    "next.ha":        "Integrate with Home Assistant via local API to control lights, switches, and sensors by voice.",
    "next.web":       "Deploy <code>Open WebUI</code> alongside Ollama to access the assistant from your phone via local network.",
    "next.vision":    "Add a camera and use a multimodal model (<code>llava</code>) to describe what's in front of the camera.",
    "next.auto":      "Add gesture control with <code>MediaPipe</code> or smart camera alerts with <code>YOLOv8</code>.",

    "footer.license": "MIT License",
    "footer.github":  "View on GitHub",
    "footer.built":   "Built with Ollama, Whisper & Piper",

    "toast.copied":   "Copied!",
  },

  /* ═══ CHINESE (Simplified) ════════════════════════════════ */
  zh: {
    "nav.pipeline":   "流程",
    "nav.hardware":   "硬件",
    "nav.steps":      "安装",
    "nav.script":     "脚本",
    "nav.next":       "下一步",

    "hero.pill":      "Raspberry Pi 5 · 8 GB · 128 GB",
    "hero.title":     "离线AI语音<br><em>助手</em>",
    "hero.sub":       "将 Whisper + Ollama + Piper 连接成完全本地化的语音管道 — 无需云端，无需API密钥，无月费。",

    "pipe.mic":       "麦克风",
    "pipe.mic.role":  "音频输入",
    "pipe.whisper":   "语音→文字",
    "pipe.llm":       "语言模型",
    "pipe.tts":       "文字→语音",
    "pipe.spk":       "扬声器",
    "pipe.spk.role":  "音频输出",

    "stat.ram":       "内存占用",
    "stat.cost":      "月费用",
    "stat.offline":   "离线运行",

    "s0.title":       "所需硬件",
    "s0.badge":       "开始之前",

    "hw.mic":         "USB 麦克风",
    "hw.mic.desc":    "任何即插即用的USB麦克风均可。Linux无需驱动。",
    "hw.spk":         "扬声器",
    "hw.spk.desc":    "带内置放大器的USB音箱，或通过3.5mm音频接口。",
    "hw.spk.rec":     "任意USB音箱",
    "hw.sd":          "SD卡 A2",
    "hw.sd.desc":     "32、64 或 128 GB A2级别，保证模型读写速度。",
    "hw.sd.rec":      "推荐 MicroSD A2 级别",
    "hw.cool":        "散热",
    "hw.cool.desc":   "Pi 5推理时发热明显。请使用官方主动散热器或散热片。",
    "hw.cool.rec":    "! 重要",

    "s1.title":       "准备系统",
    "s1.desc":        "使用 <strong>Raspberry Pi OS Lite 64位</strong>（无桌面环境——节省内存）。用 Raspberry Pi Imager 烧录。",
    "note.audio.title":"音频提示",
    "note.audio.body": "如果USB麦克风未被识别，运行 <code>sudo raspi-config</code> → System Options → Audio 选择正确设备。",

    "s2.title":       "安装 Ollama + 大语言模型",
    "s2.desc":        "Ollama 通过 REST API 在本地运行大语言模型。Pi 5 原生支持 ARM64。",
    "s2.models.title":"根据内存选择模型：",
    "m.fast":         "最快，适合简单回答",
    "m.balanced":     "⭐ 最佳性价比",
    "m.multilang":    "多语言能力强",
    "m.efficient":    "非常高效",
    "note.part1.title":"第一部分完成",
    "note.part1.body": "Ollama 现在在 <code>11434</code> 端口运行 REST API — 将在 Python 脚本中调用。",

    "s3.title":       "安装 Whisper（语音识别）",
    "s3.desc":        "使用 <strong>faster-whisper</strong>，基于 CTranslate2 的优化版本 — 在 Pi 5 上比原版快得多。",
    "tbl.model":      "模型",
    "tbl.ram":        "内存",
    "tbl.speed":      "速度",
    "tbl.quality":    "中文质量",
    "spd.vfast":      "非常快",
    "spd.fast":       "快",
    "spd.med":        "中等",
    "spd.slow":       "慢",
    "q.fair":         "一般",
    "q.good":         "良好",
    "q.great":        "很好 — 推荐",
    "q.exc":          "优秀",

    "s4.title":       "安装 Piper 文字转语音",
    "s4.desc":        "<strong>Piper</strong> 是 Nabu Casa（Home Assistant团队）开发的离线TTS引擎。",
    "note.part3.title":"第三部分完成",
    "note.part3.body": "如果您通过扬声器听到了语音，Piper 工作正常。",

    "s5.title":       "集成脚本 — 完整流程",
    "s5.badge":       "项目核心",
    "s5.desc":        "该脚本将三个组件连接成连续循环：录音 → 转录 → 推理 → 语音合成。",

    "s6.title":       "开机自动启动",
    "s6.badge":       "可选",
    "s6.desc":        "创建 systemd 服务，让助手在 Pi 开机时自动启动。",

    "ram.title":      "预计总内存使用",
    "ram.component":  "组件",
    "ram.note":       "备注",
    "ram.os":         "操作系统+系统",
    "ram.loaded":     "已加载到内存",
    "ram.running":    "模型运行中",
    "ram.per":        "每个进程",
    "ram.total":      "总计",
    "ram.ok":         "8 GB内完全够用",

    "next.title":     "可能的扩展方向",
    "next.wake":      "添加 <code>openWakeWord</code>，让助手只在听到\"Hey Pi\"时唤醒，节省计算资源。",
    "next.rag":       "使用 <code>ChromaDB</code> 为LLM提供您自己的文档 — 助手可回答关于您内容的问题。",
    "next.ha":        "通过本地API集成 Home Assistant，用语音控制灯光、插座和传感器。",
    "next.web":       "在 Ollama 旁边部署 <code>Open WebUI</code>，通过本地网络从手机访问助手。",
    "next.vision":    "添加摄像头并使用多模态模型（<code>llava</code>）描述摄像头前的内容。",
    "next.auto":      "使用 <code>MediaPipe</code> 添加手势控制，或用 <code>YOLOv8</code> 实现智能摄像头警报。",

    "footer.license": "MIT 许可证",
    "footer.github":  "在 GitHub 上查看",
    "footer.built":   "基于 Ollama、Whisper 和 Piper 构建",

    "toast.copied":   "已复制！",
  },

  /* ═══ GERMAN ══════════════════════════════════════════════ */
  de: {
    "nav.pipeline":   "Pipeline",
    "nav.hardware":   "Hardware",
    "nav.steps":      "Setup",
    "nav.script":     "Skript",
    "nav.next":       "Nächste Schritte",

    "hero.pill":      "Raspberry Pi 5 · 8 GB · 128 GB",
    "hero.title":     "Offline-KI-Sprachassistent<br><em>lokal & privat</em>",
    "hero.sub":       "Verbinde Whisper + Ollama + Piper zu einer vollständig lokalen Sprachpipeline — ohne Cloud, ohne API-Schlüssel, ohne monatliche Kosten.",

    "pipe.mic":       "Mikrofon",
    "pipe.mic.role":  "Audioeingang",
    "pipe.whisper":   "Sprache→Text",
    "pipe.llm":       "Sprachmodell",
    "pipe.tts":       "Text→Sprache",
    "pipe.spk":       "Lautsprecher",
    "pipe.spk.role":  "Audioausgang",

    "stat.ram":       "RAM-Nutzung",
    "stat.cost":      "monatliche Kosten",
    "stat.offline":   "offline",

    "s0.title":       "Benötigte Hardware",
    "s0.badge":       "Vor dem Start",

    "hw.mic":         "USB-Mikrofon",
    "hw.mic.desc":    "Jedes USB Plug-and-Play-Mikrofon funktioniert. Kein Treiber unter Linux nötig.",
    "hw.spk":         "Lautsprecher",
    "hw.spk.desc":    "USB-Lautsprecher mit eingebautem Verstärker oder über 3,5mm-Klinke.",
    "hw.spk.rec":     "beliebiger USB-Lautsprecher",
    "hw.sd":          "SD-Karte A2",
    "hw.sd.desc":     "32, 64 oder 128 GB Klasse A2 für schnelle Lese-/Schreibgeschwindigkeit der Modelle.",
    "hw.sd.rec":      "Empfohlen: MicroSD Klasse A2",
    "hw.cool":        "Kühlung",
    "hw.cool.desc":   "Der Pi 5 wird während der Inferenz heiß. Verwende den offiziellen Aktivkühler oder einen Kühlkörper.",
    "hw.cool.rec":    "! wichtig",

    "s1.title":       "System vorbereiten",
    "s1.desc":        "Verwende <strong>Raspberry Pi OS Lite 64-bit</strong> (kein Desktop — spart RAM). Flashe mit Raspberry Pi Imager.",
    "note.audio.title":"Audio-Hinweis",
    "note.audio.body": "Falls das USB-Mikrofon nicht erkannt wird, führe <code>sudo raspi-config</code> → System Options → Audio aus.",

    "s2.title":       "Ollama + LLM installieren",
    "s2.desc":        "Ollama führt LLMs lokal über eine REST-API aus. Native ARM64-Unterstützung auf dem Pi 5.",
    "s2.models.title":"Modell nach verfügbarem RAM auswählen:",
    "m.fast":         "schnellstes, einfache Antworten",
    "m.balanced":     "⭐ bestes Qualitäts-/Leistungsverhältnis",
    "m.multilang":    "starke Mehrsprachigkeit",
    "m.efficient":    "sehr effizient",
    "note.part1.title":"Teil 1 fertig",
    "note.part1.body": "Ollama läuft jetzt als REST-API auf Port <code>11434</code> — das rufen wir aus dem Python-Skript auf.",

    "s3.title":       "Whisper installieren (STT)",
    "s3.desc":        "Wir verwenden <strong>faster-whisper</strong>, eine optimierte Version mit CTranslate2 — viel schneller auf dem Pi 5.",
    "tbl.model":      "Modell",
    "tbl.ram":        "RAM",
    "tbl.speed":      "Geschwindigkeit",
    "tbl.quality":    "Qualität (DE)",
    "spd.vfast":      "sehr schnell",
    "spd.fast":       "schnell",
    "spd.med":        "mittel",
    "spd.slow":       "langsam",
    "q.fair":         "ausreichend",
    "q.good":         "gut",
    "q.great":        "sehr gut — empfohlen",
    "q.exc":          "ausgezeichnet",

    "s4.title":       "Piper TTS installieren",
    "s4.desc":        "<strong>Piper</strong> ist eine Offline-TTS-Engine von Nabu Casa (Home-Assistant-Team).",
    "note.part3.title":"Teil 3 fertig",
    "note.part3.body": "Wenn du den Satz über den Lautsprecher gehört hast, funktioniert Piper korrekt.",

    "s5.title":       "Integrationsskript — Vollständige Pipeline",
    "s5.badge":       "Kern des Projekts",
    "s5.desc":        "Dieses Skript verbindet die drei Komponenten in einer kontinuierlichen Schleife: aufnehmen → transkribieren → verarbeiten → sprechen.",

    "s6.title":       "Automatischer Start beim Booten",
    "s6.badge":       "optional",
    "s6.desc":        "Erstelle einen systemd-Dienst, damit der Assistent beim Einschalten des Pi automatisch startet.",

    "ram.title":      "Geschätzter gesamter RAM-Verbrauch",
    "ram.component":  "Komponente",
    "ram.note":       "Hinweis",
    "ram.os":         "OS + System",
    "ram.loaded":     "im Speicher geladen",
    "ram.running":    "Modell aktiv",
    "ram.per":        "pro Prozess",
    "ram.total":      "GESAMT",
    "ram.ok":         "komfortabel innerhalb von 8 GB",

    "next.title":     "Mögliche Erweiterungen",
    "next.wake":      "Füge <code>openWakeWord</code> hinzu, damit der Assistent nur bei \"Hey Pi\" aufwacht.",
    "next.rag":       "Speise das LLM mit eigenen Dokumenten via <code>ChromaDB</code> — der Assistent beantwortet Fragen dazu.",
    "next.ha":        "Integriere Home Assistant über die lokale API zur Sprachsteuerung von Licht und Steckdosen.",
    "next.web":       "Installiere <code>Open WebUI</code> neben Ollama für Zugriff vom Handy über das Heimnetz.",
    "next.vision":    "Füge eine Kamera hinzu und nutze ein multimodales Modell (<code>llava</code>) zur Bildbeschreibung.",
    "next.auto":      "Gestensteuerung mit <code>MediaPipe</code> oder Kameraalarm mit <code>YOLOv8</code>.",

    "footer.license": "MIT-Lizenz",
    "footer.github":  "Auf GitHub ansehen",
    "footer.built":   "Erstellt mit Ollama, Whisper & Piper",

    "toast.copied":   "Kopiert!",
  },

  /* ═══ FRENCH ══════════════════════════════════════════════ */
  fr: {
    "nav.pipeline":   "Pipeline",
    "nav.hardware":   "Matériel",
    "nav.steps":      "Installation",
    "nav.script":     "Script",
    "nav.next":       "Prochaines étapes",

    "hero.pill":      "Raspberry Pi 5 · 8 Go · 128 Go",
    "hero.title":     "Assistant Vocal IA<br><em>100% hors ligne</em>",
    "hero.sub":       "Connectez Whisper + Ollama + Piper dans un pipeline vocal entièrement local — sans cloud, sans clé API, sans abonnement.",

    "pipe.mic":       "Microphone",
    "pipe.mic.role":  "entrée audio",
    "pipe.whisper":   "Parole→Texte",
    "pipe.llm":       "Modèle de langage",
    "pipe.tts":       "Texte→Parole",
    "pipe.spk":       "Haut-parleur",
    "pipe.spk.role":  "sortie audio",

    "stat.ram":       "RAM utilisée",
    "stat.cost":      "coût mensuel",
    "stat.offline":   "hors ligne",

    "s0.title":       "Matériel requis",
    "s0.badge":       "Avant de commencer",

    "hw.mic":         "Microphone USB",
    "hw.mic.desc":    "N'importe quel micro USB plug-and-play fonctionne. Aucun pilote requis sous Linux.",
    "hw.spk":         "Haut-parleur",
    "hw.spk.desc":    "Enceinte USB avec ampli intégré ou via prise jack 3,5 mm.",
    "hw.spk.rec":     "n'importe quelle enceinte USB",
    "hw.sd":          "Carte SD A2",
    "hw.sd.desc":     "32, 64 ou 128 Go classe A2 pour des vitesses de lecture/écriture rapides des modèles.",
    "hw.sd.rec":      "Recommandé : MicroSD classe A2",
    "hw.cool":        "Refroidissement",
    "hw.cool.desc":   "Le Pi 5 chauffe pendant l'inférence. Utilisez le refroidisseur actif officiel.",
    "hw.cool.rec":    "! important",

    "s1.title":       "Préparer le système",
    "s1.desc":        "Utilisez <strong>Raspberry Pi OS Lite 64 bits</strong> (sans bureau — économise la RAM). Flashez avec Raspberry Pi Imager.",
    "note.audio.title":"Conseil audio",
    "note.audio.body": "Si le micro USB n'apparaît pas, lancez <code>sudo raspi-config</code> → System Options → Audio.",

    "s2.title":       "Installer Ollama + LLM",
    "s2.desc":        "Ollama exécute des LLMs localement via une API REST. Support ARM64 natif sur Pi 5.",
    "s2.models.title":"Choisissez un modèle selon la RAM disponible :",
    "m.fast":         "le plus rapide, réponses simples",
    "m.balanced":     "⭐ meilleur rapport qualité/performance",
    "m.multilang":    "fort en multilangue",
    "m.efficient":    "très efficace",
    "note.part1.title":"Partie 1 terminée",
    "note.part1.body": "Ollama tourne maintenant comme API REST sur le port <code>11434</code>.",

    "s3.title":       "Installer Whisper (STT)",
    "s3.desc":        "Nous utilisons <strong>faster-whisper</strong>, version optimisée avec CTranslate2 — bien plus rapide sur Pi 5.",
    "tbl.model":      "Modèle",
    "tbl.ram":        "RAM",
    "tbl.speed":      "Vitesse",
    "tbl.quality":    "Qualité (FR)",
    "spd.vfast":      "très rapide",
    "spd.fast":       "rapide",
    "spd.med":        "moyen",
    "spd.slow":       "lent",
    "q.fair":         "passable",
    "q.good":         "bonne",
    "q.great":        "très bonne — recommandé",
    "q.exc":          "excellente",

    "s4.title":       "Installer Piper TTS",
    "s4.desc":        "<strong>Piper</strong> est un moteur TTS hors ligne par Nabu Casa (équipe Home Assistant). Dispose d'une voix française.",
    "note.part3.title":"Partie 3 terminée",
    "note.part3.body": "Si vous avez entendu la phrase via le haut-parleur, Piper fonctionne correctement.",

    "s5.title":       "Script d'intégration — Pipeline complet",
    "s5.badge":       "cœur du projet",
    "s5.desc":        "Ce script connecte les trois composants en une boucle continue : enregistrement → transcription → raisonnement → synthèse vocale.",

    "s6.title":       "Démarrage automatique au boot",
    "s6.badge":       "optionnel",
    "s6.desc":        "Créez un service systemd pour que l'assistant démarre automatiquement à la mise sous tension.",

    "ram.title":      "Utilisation RAM totale estimée",
    "ram.component":  "Composant",
    "ram.note":       "Remarque",
    "ram.os":         "OS + système",
    "ram.loaded":     "chargé en mémoire",
    "ram.running":    "modèle en cours",
    "ram.per":        "par processus",
    "ram.total":      "TOTAL",
    "ram.ok":         "confortable dans 8 Go",

    "next.title":     "Évolutions possibles",
    "next.wake":      "Ajoutez <code>openWakeWord</code> pour que l'assistant ne se réveille qu'au mot \"Hey Pi\".",
    "next.rag":       "Alimentez le LLM avec vos propres documents via <code>ChromaDB</code> — il répond sur votre contenu.",
    "next.ha":        "Intégrez Home Assistant via l'API locale pour contrôler les lumières et prises par la voix.",
    "next.web":       "Déployez <code>Open WebUI</code> à côté d'Ollama pour accéder à l'assistant depuis votre téléphone.",
    "next.vision":    "Ajoutez une caméra et utilisez un modèle multimodal (<code>llava</code>) pour décrire l'environnement.",
    "next.auto":      "Contrôle gestuel avec <code>MediaPipe</code> ou alertes caméra intelligentes avec <code>YOLOv8</code>.",

    "footer.license": "Licence MIT",
    "footer.github":  "Voir sur GitHub",
    "footer.built":   "Construit avec Ollama, Whisper et Piper",

    "toast.copied":   "Copié !",
  },
};

/* ── Engine ─────────────────────────────────────────────── */
const I18n = (() => {
  let current = localStorage.getItem('pi5-lang') || 'pt';

  function apply(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    current = lang;
    localStorage.setItem('pi5-lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });
  }

  function lockWidths() {
    const langs = Object.keys(TRANSLATIONS);
    const targets = document.querySelectorAll(
      '.nav-links a[data-i18n], .badge[data-i18n], .pill[data-i18n], .pipe-label[data-i18n], .stat-label[data-i18n]'
    );
    targets.forEach(el => {
      const key = el.getAttribute('data-i18n');
      let maxW = 0;
      langs.forEach(lang => {
        const t = TRANSLATIONS[lang];
        if (t && t[key] !== undefined) {
          el.innerHTML = t[key];
          maxW = Math.max(maxW, el.offsetWidth);
        }
      });
      const restored = TRANSLATIONS[current] && TRANSLATIONS[current][key];
      if (restored !== undefined) el.innerHTML = restored;
      if (maxW > 0) el.style.minWidth = maxW + 'px';
    });
  }

  function init() {
    apply(current);
    lockWidths();
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => apply(btn.dataset.lang));
    });
  }

  return { init, apply, get current() { return current; } };
})();

document.addEventListener('DOMContentLoaded', () => I18n.init());
