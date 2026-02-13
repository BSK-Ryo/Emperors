// ============================================================
// Firebase Configuration - Emperor's Basketball Team CMS
// ============================================================
// このファイルの firebaseConfig を、自分のFirebaseプロジェクトの
// 設定値に置き換えてください。
// Firebase Console > プロジェクト設定 > マイアプリ > ウェブアプリ で確認できます。
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyCQr778dngjP2azZ2N0hALpY3WDgeHs-T0",
    authDomain: "emperors-cms.firebaseapp.com",
    projectId: "emperors-cms",
    storageBucket: "emperors-cms.firebasestorage.app",
    messagingSenderId: "860126881659",
    appId: "1:860126881659:web:249f329cb794064fa43fde"
};

// Firebase 初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ============================================================
// キャッシュユーティリティ
// Firestore無料枠の読み取り回数を節約するため、
// localStorageに5分間キャッシュする
// ============================================================
const CACHE_TTL = 5 * 60 * 1000; // 5分

function getCachedData(key) {
    try {
        const cached = localStorage.getItem('emperors_' + key);
        const cacheTime = localStorage.getItem('emperors_' + key + '_time');
        if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < CACHE_TTL) {
            return JSON.parse(cached);
        }
    } catch (e) {
        // localStorage が使えない環境では無視
    }
    return null;
}

function setCachedData(key, data) {
    try {
        localStorage.setItem('emperors_' + key, JSON.stringify(data));
        localStorage.setItem('emperors_' + key + '_time', String(Date.now()));
    } catch (e) {
        // localStorage が使えない環境では無視
    }
}
