---
name: emperors-frontend
description: Emperor's Basketball Team website (index.html) のデザインシステムとフロントエンドパターン。サイトのセクション追加・スタイル変更・レイアウト調整・レスポンシブ修正を行う際に参照する。Tailwind CSSカラートークン、タイポグラフィルール、セクション構造パターン、修正ワークフローを提供する。
---

# Emperor's Frontend Design System

## Quick Reference

- **File**: `index.html`（シングルページサイト、全セクション1ファイル）
- **CSS**: Tailwind CSS via CDN (`cdn.tailwindcss.com`)
- **Icons**: Lucide Icons (`unpkg.com/lucide@latest`)
- **Fonts**: Google Fonts - Noto Sans JP (body: `font-sans`), Oswald (headings: `font-oswald`)

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| emperor-red | #8B0000 | アクセント、CTA、ボーダー、アンダーライン |
| emperor-dark | #0a0a0a | ページ背景 |
| emperor-gray | #1a1a1a | カード背景、交互セクション |
| line-green | #06C755 | LINEリンクのみ |

## Section Header Pattern

全セクション共通のヘッダー構造:
```html
<div class="text-center mb-16">
    <h2 class="font-oswald text-4xl font-bold text-white mb-4">SECTION TITLE</h2>
    <div class="w-24 h-1 bg-emperor-red mx-auto"></div>
</div>
```

## Background Alternation

- Primary: `bg-emperor-dark`
- Alternate: `bg-emperor-gray`
- Gradient: `bg-gradient-to-b from-emperor-gray to-emperor-dark`

現在の順序: dark(About) → gray(Teams) → dark(Schedule) → **gray(次のセクション)** → gradient(Contact)

## Responsive Breakpoints

- `sm:` 小調整
- `md:` タブレット/デスクトップ切り替え
- `lg:` ワイドレイアウト（グリッドカラム）

## Modification Workflow

1. `references/design-system.md` でTailwind設定・ユーティリティパターンを確認
2. `references/section-patterns.md` で既存セクションのHTML構造を確認
3. 背景交互パターンに従って配置
4. セクションヘッダーパターンを統一使用
5. モバイルファーストのレスポンシブ設計
6. Lucideアイコン使用時は `data-lucide` 属性（既存の `lucide.createIcons()` で自動初期化）
7. 新セクション追加時はナビリンクも更新
