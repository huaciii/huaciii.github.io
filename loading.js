// GIF 动画的持续时间（毫秒）
const GIF_DURATION = 3000; // 根据你的 GIF 实际时长调整
const FADE_OUT_DURATION = 800; // 淡出动画持续时间（与 CSS 中的 transition 对应）

// 初始化加载动画
function initializeLoading() {
    // 创建加载屏幕
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    
    const loadingGif = document.createElement('img');
    loadingGif.src = './img/loading.gif';
    loadingGif.alt = 'Loading...';
    
    loadingScreen.appendChild(loadingGif);
    document.body.insertBefore(loadingScreen, document.body.firstChild);

    // 等待页面加载完成
    window.addEventListener('load', function() {
        // 等待 GIF 播放完成
        setTimeout(() => {
            // 开始淡出动画
            loadingScreen.classList.add('fade-out');
            
            // 等待淡出动画即将完成时开始显示内容
            setTimeout(() => {
                document.body.classList.add('content-visible');
                // 完全移除加载屏幕
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, FADE_OUT_DURATION - 200); // 提前200ms开始显示内容，使过渡更流畅
        }, GIF_DURATION);
    });
}

// 在页面加载时初始化加载动画
document.addEventListener('DOMContentLoaded', initializeLoading); 