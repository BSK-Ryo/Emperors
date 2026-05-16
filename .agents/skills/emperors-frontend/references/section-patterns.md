# Emperor's Section Patterns

各セクションのHTML構造パターン。新セクション追加時の参考にする。

## Navigation (固定ナビ)

```html
<nav class="fixed w-full z-50 bg-emperor-dark/95 border-b border-emperor-red/30 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <!-- ロゴ (左) -->
            <!-- デスクトップメニュー (右, hidden md:block) -->
            <!-- モバイルメニューボタン (md:hidden) -->
        </div>
    </div>
    <!-- モバイルメニューパネル (hidden md:hidden) -->
</nav>
```

ナビリンク追加時: デスクトップ(div.ml-10内)とモバイル(div#mobile-menu内)の両方に追加すること。

## Hero Section

```html
<section id="home" class="hero-bg h-screen flex items-center justify-center relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-emperor-dark"></div>
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <!-- サブタイトル、メインタイトル、説明文、CTAボタン -->
    </div>
    <!-- スクロールインジケーター (absolute bottom) -->
</section>
```

## Standard Content Section

基本テンプレート:
```html
<section id="section-id" class="py-20 bg-emperor-dark">  <!-- or bg-emperor-gray -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- セクションヘッダー -->
        <div class="text-center mb-16">
            <h2 class="font-oswald text-4xl font-bold text-white mb-4">TITLE</h2>
            <div class="w-24 h-1 bg-emperor-red mx-auto mb-6"></div>
            <p class="text-gray-400">サブテキスト</p>
        </div>
        <!-- コンテンツ -->
    </div>
</section>
```

## About Section (2カラムグリッド)

```html
<div class="grid md:grid-cols-2 gap-12 items-center">
    <!-- 左: 画像 (rounded-lg overflow-hidden shadow-2xl border border-gray-800) -->
    <!-- 右: テキスト + 統計ブロック (border-l-4 border-emperor-red pl-4) -->
</div>
```

## Teams Section (カード型, 装飾背景付き)

```html
<section class="py-20 bg-emperor-gray relative overflow-hidden">
    <!-- 背景装飾 (absolute, blur-3xl) -->
    <div class="max-w-7xl mx-auto ... relative z-10">
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Team Card -->
            <div class="group relative overflow-hidden rounded-xl bg-emperor-dark border border-gray-800 hover:border-emperor-red/50 transition-all duration-300">
                <div class="h-64 overflow-hidden relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-emperor-dark to-transparent z-10"></div>
                    <img class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                </div>
                <div class="p-8 relative z-20 -mt-12">
                    <!-- タイトル + アイコン、説明文、チェックリスト -->
                </div>
            </div>
        </div>
    </div>
</section>
```

## Schedule Section (マルチカラムグリッド)

```html
<section id="schedule" class="py-20 bg-emperor-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
                <h3 class="font-oswald text-3xl font-bold text-white mb-6 border-l-4 border-emperor-red pl-4">SCHEDULE</h3>
                <div class="bg-emperor-gray rounded-xl p-6 border border-gray-800">
                    <!-- スケジュールアイテム -->
                </div>
            </div>
            <!-- lg:col-span-1 は現在空き -->
        </div>
    </div>
</section>
```

## Contact Section (中央揃えフォーム)

```html
<section id="contact" class="py-20 bg-gradient-to-b from-emperor-gray to-emperor-dark">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- ヘッダー -->
        <form class="bg-emperor-dark p-8 rounded-2xl shadow-xl border border-gray-800">
            <!-- input, select, textarea, button -->
        </form>
    </div>
</section>
```

## Footer

```html
<footer class="bg-black py-10 border-t border-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <!-- ロゴ | ソーシャルリンク | コピーライト -->
    </div>
</footer>
```

## Checklist Item Pattern

```html
<li class="flex items-center">
    <i data-lucide="check" class="h-4 w-4 text-emperor-red mr-2"></i>
    テキスト
</li>
```

## Info Block with Icon

```html
<p class="flex items-center">
    <i data-lucide="icon-name" class="h-4 w-4 mr-2 text-emperor-red"></i>
    テキスト
</p>
```
