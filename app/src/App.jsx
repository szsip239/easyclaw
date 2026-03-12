import { useState, useEffect, useCallback } from 'react'
import './App.css'

/* ─── Shared CodeBlock component ─── */
function CodeBlock({ label, code }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [code])
  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-label">{label}</span>
        <button className={`code-copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
          {copied ? '✓ 已复制' : '复制'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  )
}

/* ─── Navigation ─── */
const NAV_ITEMS = [
  { id: 'section-1', label: '领取云电脑' },
  { id: 'section-2', label: '手动安装' },
  { id: 'section-3', label: '自动安装' },
  { id: 'section-4', label: '获取Token' },
  { id: 'section-5', label: '配置飞书' },
  { id: 'section-6', label: '使用龙虾' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean)
      let current = ''
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top <= 120) current = sec.id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-brand">
          <span className="nav-brand-icon">🦞</span>
          <span>OpenClaw 安装指南</span>
        </div>
        <button className="nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-links${mobileOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-link${activeSection === item.id ? ' active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span>🦞</span>
          <span>中国电信天翼云 & OpenClaw</span>
        </div>
        <h1 className="hero-title">
          <span className="accent">OpenClaw</span> 安装指南
        </h1>
        <p className="hero-subtitle">
          苏州工业园区天翼云 AI 助手快速上手，零基础也能轻松搞定
        </p>
        <div className="hero-actions">
          <a href="#section-3" className="btn btn-primary">
            快速安装 →
          </a>
          <a href="#section-1" className="btn btn-outline">
            免费领取云电脑
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 1: 领取天翼云电脑 ─── */
function Section1() {
  return (
    <section className="section" id="section-1">
      <div className="section-inner">
        <div className="section-label">
          <span className="label-num">1</span> 免费福利
        </div>
        <h2 className="section-title">免费领取天翼云电脑</h2>
        <p className="section-desc">
          微信扫码即可免费领取，到期自动退订，不涉及任何费用
        </p>
        <div className="qr-section">
          <div className="qr-image">
            <img src="/qrcode.jpg" alt="微信扫码领取天翼云电脑" />
          </div>
          <div className="qr-info">
            <h3>AI 云电脑 OpenClaw 体验版</h3>
            <ul className="benefit-list">
              <li>
                <span className="benefit-check">✓</span>
                4核8G 云电脑免费使用 1 个月
              </li>
              <li>
                <span className="benefit-check">✓</span>
                赠送 2500 万 Token 额度
              </li>
              <li>
                <span className="benefit-check">✓</span>
                预装 OpenClaw，免配置零门槛体验
              </li>
              <li>
                <span className="benefit-check">✓</span>
                安全隔离环境，不影响本地电脑
              </li>
            </ul>
            <p className="qr-date">活动时间：2026.2.3 - 2026.3.31</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: 手动安装 ─── */
function Section2() {
  const [platform, setPlatform] = useState('mac')
  return (
    <section className="section" id="section-2">
      <div className="section-inner">
        <div className="section-label">
          <span className="label-num">2</span> 手动安装
        </div>
        <h2 className="section-title">自己动手安装 OpenClaw</h2>
        <p className="section-desc">
          按照步骤在终端中执行命令，约 30 分钟完成安装
        </p>

        <div className="alert alert-warning">
          <span className="alert-icon">⚠️</span>
          <div>
            <strong>安全提醒：</strong>在自己的主用电脑或公司电脑上安装存在一定安全风险。
            推荐在<a href="#section-1">免费领取的天翼云电脑</a>上安装，既安全又方便。
          </div>
        </div>

        <div className="tabs">
          <button className={`tab-btn${platform === 'mac' ? ' active' : ''}`} onClick={() => setPlatform('mac')}>
            🍎 Mac
          </button>
          <button className={`tab-btn${platform === 'win' ? ' active' : ''}`} onClick={() => setPlatform('win')}>
            🪟 Windows
          </button>
        </div>

        {platform === 'mac' ? (
          <div>
            <div className="steps">
              <div className="step">
                <div className="step-indicator"><span className="step-num">1</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>打开终端</h4>
                  <p>按 Command + 空格，搜索"终端"并打开</p>
                </div>
              </div>
              <div className="step">
                <div className="step-indicator"><span className="step-num">2</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>安装 Homebrew</h4>
                  <p>Mac 的软件包管理器，如已安装可跳过</p>
                  <CodeBlock label="Terminal" code={`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`} />
                </div>
              </div>
              <div className="step">
                <div className="step-indicator"><span className="step-num">3</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>安装 Node.js</h4>
                  <p>OpenClaw 运行所需的环境</p>
                  <CodeBlock label="Terminal" code="brew install node" />
                </div>
              </div>
              <div className="step">
                <div className="step-indicator"><span className="step-num">4</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>一键安装 OpenClaw</h4>
                  <CodeBlock label="Terminal" code="npm install -g openclaw" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="steps">
              <div className="step">
                <div className="step-indicator"><span className="step-num">1</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>以管理员身份打开 PowerShell</h4>
                  <p>右键点击开始菜单，选择"Windows PowerShell (管理员)"</p>
                </div>
              </div>
              <div className="step">
                <div className="step-indicator"><span className="step-num">2</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>安装 WSL</h4>
                  <p>Windows 子系统 Linux，安装后需重启电脑</p>
                  <CodeBlock label="PowerShell (管理员)" code="wsl --install" />
                </div>
              </div>
              <div className="step">
                <div className="step-indicator"><span className="step-num">3</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>打开 WSL 终端</h4>
                  <p>重启后在开始菜单搜索"Ubuntu"打开</p>
                </div>
              </div>
              <div className="step">
                <div className="step-indicator"><span className="step-num">4</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>安装 Node.js</h4>
                  <CodeBlock label="WSL Terminal" code={`curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs`} />
                </div>
              </div>
              <div className="step">
                <div className="step-indicator"><span className="step-num">5</span><div className="step-line" /></div>
                <div className="step-content">
                  <h4>一键安装 OpenClaw</h4>
                  <CodeBlock label="WSL Terminal" code="npm install -g openclaw" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <a
            href="https://waytoagi.feishu.cn/wiki/PchGw7xkzikprvk26gLctxJ2nBc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            📖 查看完整详细教程 →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: 自动安装 ─── */
function Section3() {
  const [showConfig, setShowConfig] = useState(false)
  return (
    <section className="section" id="section-3">
      <div className="section-inner">
        <div className="section-label">
          <span className="label-num">3</span> 推荐方式
        </div>
        <h2 className="section-title">通过 OneClaw 一键安装</h2>
        <p className="section-desc">
          下载安装包，打开即用，无需命令行操作。安装的是最新版本 OpenClaw。
        </p>

        <div className="alert alert-info">
          <span className="alert-icon">💡</span>
          <div>
            推荐在<a href="#section-1">天翼云电脑</a>上安装，更加安全。
            安装前请先<a href="#section-4">获取免费 Token</a>。
          </div>
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--gray-800)', marginBottom: 16 }}>
          选择你的系统下载
        </h3>
        <div className="download-grid">
          <a href="https://oneclaw.cn/releases/OneClaw-2026.3.12-arm64.dmg" className="btn-download" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon">🍎</span>
            <span className="btn-label">
              <span className="btn-label-main">macOS Apple Silicon</span>
              <span className="btn-label-sub">M1 / M2 / M3 / M4 芯片</span>
            </span>
          </a>
          <a href="https://oneclaw.cn/releases/OneClaw-2026.3.12-x64.dmg" className="btn-download" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon">🍎</span>
            <span className="btn-label">
              <span className="btn-label-main">macOS Intel</span>
              <span className="btn-label-sub">Intel 芯片 Mac</span>
            </span>
          </a>
          <a href="https://oneclaw.cn/releases/OneClaw-Setup-2026.3.12-x64.exe" className="btn-download" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon">🪟</span>
            <span className="btn-label">
              <span className="btn-label-main">Windows x64</span>
              <span className="btn-label-sub">Intel / AMD 处理器</span>
            </span>
          </a>
          <a href="https://oneclaw.cn/releases/OneClaw-Setup-2026.3.12-arm64.exe" className="btn-download" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon">🪟</span>
            <span className="btn-label">
              <span className="btn-label-main">Windows ARM64</span>
              <span className="btn-label-sub">Snapdragon X 处理器</span>
            </span>
          </a>
        </div>

        <div style={{ marginTop: 32 }}>
          <button
            className="btn btn-outline"
            onClick={() => setShowConfig(!showConfig)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {showConfig ? '收起' : '展开'} 安装后的 API 配置说明 {showConfig ? '↑' : '↓'}
          </button>
        </div>

        {showConfig && (
          <div style={{ marginTop: 24 }}>
            <p style={{ fontSize: 14, color: 'var(--gray-600)', marginBottom: 16 }}>
              安装完成后，打开 OneClaw → <strong>设置</strong> → <strong>模型配置</strong> → 选择 <strong>自定义</strong>，然后填入以下信息：
            </p>
            <img
              src="/config-guide.png"
              alt="模型配置界面"
              style={{ width: '100%', maxWidth: 700, borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)', marginBottom: 24 }}
            />
            <div className="config-grid">
              <div className="config-card">
                <h4>☁️ 使用天翼云电脑 Token</h4>
                <div className="config-item">
                  <span className="config-key">接口地址</span>
                  <span className="config-value">https://yilian.ctyun.cn/api/v3</span>
                </div>
                <div className="config-item">
                  <span className="config-key">模型 ID</span>
                  <span className="config-value">ep-20260131221655-t48nr</span>
                </div>
                <div className="config-item">
                  <span className="config-key">API 密钥</span>
                  <span className="config-value"><a href="#section-4">第4步获取的 Key</a></span>
                </div>
              </div>
              <div className="config-card">
                <h4>🔮 使用天翼云息壤 Token</h4>
                <div className="config-item">
                  <span className="config-key">接口地址</span>
                  <span className="config-value">https://wishub-x6.ctyun.cn/v1</span>
                </div>
                <div className="config-item">
                  <span className="config-key">模型 ID</span>
                  <span className="config-value"><a href="#section-4">根据息壤教程选择</a></span>
                </div>
                <div className="config-item">
                  <span className="config-key">推荐模型</span>
                  <span className="config-value">GLM-5 / Doubao-Seed-2.0</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Section 4: 获取 Token ─── */
function Section4() {
  return (
    <section className="section" id="section-4">
      <div className="section-inner">
        <div className="section-label">
          <span className="label-num">4</span> 免费额度
        </div>
        <h2 className="section-title">免费获得天翼云 Token</h2>
        <p className="section-desc">
          两种方式各可获得 2500 万 Token，足够长期使用
        </p>

        <div className="card-grid">
          <div className="token-card">
            <div className="token-card-header">
              <div className="token-card-icon cloud">☁️</div>
              <div>
                <h3>方式一：云电脑自带 Token</h3>
                <p>无需额外注册，开箱即用</p>
              </div>
            </div>
            <div className="token-card-body">
              <div className="steps">
                <div className="step">
                  <div className="step-indicator"><span className="step-num">1</span><div className="step-line" /></div>
                  <div className="step-content">
                    <h4>进入应用</h4>
                    <p>点击云电脑桌面的 "OpenClaw 进入应用"</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-indicator"><span className="step-num">2</span><div className="step-line" /></div>
                  <div className="step-content">
                    <h4>打开配置</h4>
                    <p>点击 "配置"，然后点击右下角 "原始"</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-indicator"><span className="step-num">3</span><div className="step-line" /></div>
                  <div className="step-content">
                    <h4>复制 API Key</h4>
                    <p>找到 apiKey 字段，复制并保存好</p>
                  </div>
                </div>
              </div>
              <div className="alert alert-info" style={{ marginTop: 16, marginBottom: 0 }}>
                <span className="alert-icon">📋</span>
                <div style={{ fontSize: 13 }}>
                  <strong>Key 格式参考：</strong>
                  <code style={{ fontSize: 11, wordBreak: 'break-all', display: 'inline', padding: '2px 6px', background: 'rgba(0,0,0,0.05)', borderRadius: 4 }}>
                    "apiKey":"ZDEyMGY4YTQtMjZiMi00MGQ3..."
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="token-card">
            <div className="token-card-header">
              <div className="token-card-icon xirang">🔮</div>
              <div>
                <h3>方式二：天翼云息壤</h3>
                <p>额外 2500 万 Token，多种旗舰模型可选</p>
              </div>
            </div>
            <div className="token-card-body">
              <div className="steps">
                <div className="step">
                  <div className="step-indicator"><span className="step-num">1</span><div className="step-line" /></div>
                  <div className="step-content">
                    <h4>注册天翼云账号</h4>
                    <p>如没有账号需注册并完成实名认证</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-indicator"><span className="step-num">2</span><div className="step-line" /></div>
                  <div className="step-content">
                    <h4>进入息壤智算</h4>
                    <p>登录天翼云 → 左上角"息壤智算" → "服务接入"</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-indicator"><span className="step-num">3</span><div className="step-line" /></div>
                  <div className="step-content">
                    <h4>获取 API 信息</h4>
                    <p>创建接入端，获取密钥和模型 ID</p>
                  </div>
                </div>
              </div>
              <div className="model-tags">
                <span className="model-tag">GLM-5</span>
                <span className="model-tag">Doubao-Seed-2.0-pro</span>
                <span className="model-tag">Qwen3.5-397B</span>
                <span className="model-tag">Deepseek-V3.2</span>
              </div>
              <a
                href="https://www.kdocs.cn/l/cpTaVsNkpouo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                📖 查看详细教程 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: 配置飞书 ─── */
function Section5() {
  return (
    <section className="section" id="section-5">
      <div className="section-inner">
        <div className="section-label">
          <span className="label-num">5</span> 飞书集成
        </div>
        <h2 className="section-title">配置飞书插件</h2>
        <p className="section-desc">
          让 OpenClaw 接入飞书，直接在飞书中帮你处理文档、日历、消息等工作
        </p>

        <div className="feishu-features">
          <div className="feishu-feature">
            <div className="feishu-feature-icon">📄</div>
            <h4>文档协作</h4>
            <p>阅读和编辑飞书文档</p>
          </div>
          <div className="feishu-feature">
            <div className="feishu-feature-icon">📅</div>
            <h4>日历管理</h4>
            <p>查看日程、安排会议</p>
          </div>
          <div className="feishu-feature">
            <div className="feishu-feature-icon">💬</div>
            <h4>消息处理</h4>
            <p>理解群聊上下文</p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--gray-900)', marginBottom: 20 }}>
            安装步骤
          </h3>
          <div className="steps">
            <div className="step">
              <div className="step-indicator"><span className="step-num">1</span><div className="step-line" /></div>
              <div className="step-content">
                <h4>安装并配置 OpenClaw</h4>
                <p>确保已通过上述方式安装好 OpenClaw</p>
              </div>
            </div>
            <div className="step">
              <div className="step-indicator"><span className="step-num">2</span><div className="step-line" /></div>
              <div className="step-content">
                <h4>安装飞书官方插件</h4>
                <p>按照飞书插件文档完成安装和授权</p>
              </div>
            </div>
          </div>

          <div className="alert alert-warning" style={{ marginTop: 20, marginBottom: 0 }}>
            <span className="alert-icon">💻</span>
            <div>
              <strong>Windows 用户注意：</strong>如果看不到登录二维码，需要先安装
              <strong> Cmder</strong> 终端工具，然后在 Cmder 中执行安装命令。
            </div>
          </div>
        </div>

        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <a
            href="https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            📖 查看飞书插件完整教程 →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: 使用龙虾 (Placeholder) ─── */
function Section6() {
  return (
    <section className="section" id="section-6">
      <div className="section-inner">
        <div className="section-label">
          <span className="label-num">6</span> 进阶使用
        </div>
        <h2 className="section-title">配置及使用龙虾</h2>
        <div className="placeholder-section">
          <div className="placeholder-icon">🦞</div>
          <p className="placeholder-text">内容正在准备中，敬请期待...</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer">
      <p>苏州园区电信支持团队 提供技术支持及企业上门培训服务</p>
    </footer>
  )
}

/* ─── App ─── */
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Section1 />
      <div className="section-divider" />
      <Section2 />
      <div className="section-divider" />
      <Section3 />
      <div className="section-divider" />
      <Section4 />
      <div className="section-divider" />
      <Section5 />
      <div className="section-divider" />
      <Section6 />
      <Footer />
    </>
  )
}

export default App
