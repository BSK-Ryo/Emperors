# Emperor's Design System - 詳細リファレンス

## Tailwind Config

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'emperor-red': '#8B0000',
                'emperor-dark': '#0a0a0a',
                'emperor-gray': '#1a1a1a',
                'line-green': '#06C755',
            },
            fontFamily: {
                sans: ['"Noto Sans JP"', 'sans-serif'],
                oswald: ['"Oswald"', 'sans-serif'],
            }
        }
    }
}
```

## Custom CSS Classes

```css
.hero-bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(139, 0, 0, 0.4)), url('emperors-fv.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
```

## Typography Rules

| 用途 | クラス | 例 |
|------|--------|-----|
| セクションタイトル | `font-oswald text-4xl font-bold text-white` | ABOUT US, OUR TEAMS |
| サブヘッダー | `font-oswald text-3xl font-bold text-white` | MEN'S TEAM |
| ヒーロータイトル | `font-oswald text-6xl md:text-8xl font-bold text-white` | EMPEROR'S |
| 本文 | `text-gray-400 leading-relaxed` | 説明テキスト |
| ラベル/注釈 | `text-sm text-gray-500` / `text-xs text-gray-500` | 日時、補足 |
| 強調テキスト | `text-white font-bold` | 本文中の重要部分 |

## Common Utility Patterns

### Card Container
```
bg-emperor-dark rounded-xl p-6 border border-gray-800
```
hover付き: `hover:border-emperor-red/30 transition-colors`

### Interactive Card (Teams style)
```
group relative overflow-hidden rounded-xl bg-emperor-dark border border-gray-800 hover:border-emperor-red/50 transition-all duration-300
```

### Badge/Tag
```
bg-gradient-to-r from-emperor-red to-red-600 text-white text-xs font-bold px-2 py-1 rounded
```

### Border-left Accent
```
border-l-4 border-emperor-red pl-4
```

### CTA Button (Primary)
```
bg-emperor-red hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50
```

### CTA Button (Secondary)
```
bg-transparent border-2 border-white hover:bg-white hover:text-emperor-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300
```

### Form Input
```
w-full bg-emperor-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emperor-red focus:ring-1 focus:ring-emperor-red transition-colors
```

## Transition Patterns

- 色変化: `transition-colors duration-300`
- 全プロパティ: `transition-all duration-300`
- 画像ズーム: `transform group-hover:scale-110 transition-transform duration-700`

## Shadow Patterns

- CTA shadow: `shadow-lg shadow-red-900/50`
- Card shadow: `shadow-2xl`
- Form shadow: `shadow-xl`

## Background Decorative Elements

```html
<div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emperor-red/5 rounded-full blur-3xl"></div>
```

## Image Assets

| ファイル名 | 用途 |
|-----------|------|
| emperors-fv.png | ヒーローセクション背景 |
| emperors-logo.png | ナビ・フッターロゴ |
| emperors男子集合写真.jpg | 男子チームカード |
| emperors女子集合写真.jpg | 女子チームカード |
| emperors男子エンジン.jpg | Aboutセクション |
