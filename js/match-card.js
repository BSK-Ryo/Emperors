// ============================================================
// Match Card Rendering - shared utility
// news.html / men-team.html / women-team.html で共有
// window.renderMatchCardHtml(item) → 試合結果カードのHTML文字列を返す
// ============================================================
(function () {
    function escapeHtml(value) {
        const div = document.createElement('div');
        div.textContent = value == null ? '' : String(value);
        return div.innerHTML;
    }

    function normalizeDate(date) {
        return String(date || '').replaceAll('-', '.');
    }

    function resultText(item) {
        if (item.scoreFor || item.scoreAgainst) {
            return `${escapeHtml(item.scoreFor || '-')}-${escapeHtml(item.scoreAgainst || '-')}`;
        }
        return escapeHtml(item.result || 'RESULT');
    }

    function extractYouTubeId(url) {
        if (!url) return '';
        const patterns = [
            /[?&]v=([A-Za-z0-9_-]{11})/,
            /youtu\.be\/([A-Za-z0-9_-]{11})/,
            /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
            /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
        ];
        for (const pattern of patterns) {
            const m = String(url).match(pattern);
            if (m) return m[1];
        }
        return '';
    }

    function renderVideoThumbnail(item) {
        const videoId = extractYouTubeId(item.youtubeUrl);
        if (!videoId) return '';
        const safeUrl = escapeHtml(item.youtubeUrl);
        return `
            <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" aria-label="ハイライト動画をYouTubeで見る" class="block relative mt-4 overflow-hidden rounded-md bg-black aspect-video group/video">
                <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg"
                     onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${videoId}/hqdefault.jpg';"
                     alt="ハイライト動画サムネイル" loading="lazy"
                     class="w-full h-full object-cover transition-transform duration-300 group-hover/video:scale-105">
                <div class="absolute inset-0 bg-black/30 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
                    <span class="inline-flex w-12 h-12 rounded-full bg-emperor-orange/95 items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" fill="white" class="w-5 h-5 ml-0.5" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                    </span>
                </div>
                <span class="absolute bottom-2 right-2 inline-flex items-center gap-1 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    YouTube
                </span>
            </a>
        `;
    }

    const resultColors = {
        '勝利': 'text-green-400',
        '敗戦': 'text-red-400',
        '引き分け': 'text-yellow-300',
        '結果なし': 'text-white',
    };
    const typeClasses = {
        '公式戦': 'bg-red-900/30 text-red-200 border-red-700/50',
        '練習試合': 'bg-emperor-orange/20 text-orange-200 border-emperor-orange/50',
    };
    const resultBadgeMap = {
        '勝利':   { label: 'WIN',  classes: 'bg-green-500/15 text-green-400 border-green-500/50' },
        '敗戦':   { label: 'LOSS', classes: 'bg-red-500/15 text-red-400 border-red-500/50' },
        '引き分け': { label: 'DRAW', classes: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/50' },
    };
    const stripeColorMap = {
        '勝利':   'bg-green-500',
        '敗戦':   'bg-red-500',
        '引き分け': 'bg-yellow-500',
    };

    window.renderMatchCardHtml = function (item) {
        const badge = resultBadgeMap[item.result];
        const stripe = stripeColorMap[item.result] || '';
        return `
            <article class="relative overflow-hidden bg-emperor-dark border border-gray-800 rounded-lg p-5 flex flex-col">
                ${stripe ? `<span class="absolute top-0 left-0 right-0 h-1 ${stripe}" aria-hidden="true"></span>` : ''}
                <div class="flex items-center justify-between gap-3 mb-4">
                    <p class="text-xs text-gray-500">${escapeHtml(item.team || 'チーム')}</p>
                    <span class="${typeClasses[item.matchType] || 'bg-gray-800 text-gray-300 border-gray-700'} border text-[11px] font-bold px-2 py-0.5 rounded-full">${escapeHtml(item.matchType || '試合')}</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                    <p class="font-oswald text-3xl ${resultColors[item.result] || 'text-white'} font-bold leading-none">${resultText(item)}</p>
                    ${badge ? `<span class="font-oswald inline-flex items-center justify-center px-3 py-1 rounded text-sm font-bold border tracking-[0.15em] ${badge.classes}">${badge.label}</span>` : ''}
                </div>
                <p class="text-sm text-white font-bold mt-4 leading-snug">vs ${escapeHtml(item.opponent || '対戦相手')}</p>
                <p class="text-xs text-gray-500 mt-2">${escapeHtml(normalizeDate(item.date))}${item.competition ? ' / ' + escapeHtml(item.competition) : ''}</p>
                ${item.summary ? `<p class="text-sm text-gray-400 mt-3 leading-relaxed">${escapeHtml(item.summary)}</p>` : ''}
                ${renderVideoThumbnail(item)}
            </article>
        `;
    };
})();
