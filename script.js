// ==========================================
// 1. 作品集数据结构
// ==========================================
const portfolioData = {
 'Pizza Hut': {
  'TOM&JERRY': [
   'https://i.postimg.cc/BnXmMH3H/01-kao-bei.jpg',
   'https://i.postimg.cc/kgzfZGMp/02-kao-bei.jpg',
   'https://i.postimg.cc/y8tv5x6v/03-kao-bei.jpg',
   'https://i.postimg.cc/xdmtSQc9/04(ye-deng-kao-bei.jpg',
   'https://i.postimg.cc/CK8mV0zB/05-kao-bei.jpg',
   'https://i.postimg.cc/NMwbsnH7/06-kao-bei.jpg',
   'https://i.postimg.cc/XJcLpgfm/07-kao-bei.jpg',
   'https://i.postimg.cc/gjzDR646/08-kao-bei.jpg',
   'https://i.postimg.cc/26mFRZpR/OOH-liu-xin-zhi-xin-PIZZA-heng-ban-kao-bei.jpg',
   'https://i.postimg.cc/zBjwJG5G/OOH2-KV520-kao-bei.jpg',
   'https://i.postimg.cc/8cZbbP0g/bao-zhuang01-kao-bei.jpg',
   'https://i.postimg.cc/CLK7xkzJ/bao-zhuang02-kao-bei.jpg'
  ],
  '经典系列': [
   'https://i.postimg.cc/JhhKGX6y/1nuan-dong-shui-guo-cha-kao-bei.jpg',
   'https://i.postimg.cc/CKKJz8Pb/2a-pei-luo-cheng-guang-kao-bei.jpg',
   'https://i.postimg.cc/YSyRgSZz/3xiao-shi-kao-bei.jpg',
   'https://i.postimg.cc/KYsfLYwN/4an-ge-si-shou-si-niu-rou-peipizza-bread-kao-bei.jpg'
  ],
  '夏季冰品': [
   'https://i.postimg.cc/sgj4NSRk/6KV-kao-bei2.jpg',
   'https://i.postimg.cc/QdfJGtXv/7che-li-zi-KV2-kao-bei2.jpg'
  ],
  '微观': [
   'https://i.postimg.cc/CLyvmz1H/7xian-qie-yi-da-li-ma-si-ka-peng-ti-la-mi-su-kao-bei3.jpg',
   'https://i.postimg.cc/9F3xJrMd/8xian-qie-yi-da-li-ma-si-ka-peng-ti-la-mi-su2-kao-bei2.jpg',
   'https://i.postimg.cc/c4qDXrHh/9niu-pai-kao-bei.jpg'
  ],
  '烧烤': [
   'https://i.postimg.cc/g04qp0GY/qing-jing-tu-yang-rou-chuan-zi-ran-fen-kao-bei.jpg',
   'https://i.postimg.cc/YS8f7St7/qing-jing-tu-yang-rou-chuan-la-fen-kao-bei.jpg',
   'https://i.postimg.cc/tg9t86QM/qing-jing-tu-ji-jia-sa-fen-kao-bei-2.jpg',
   'https://i.postimg.cc/GtTkvJG3/zhi-kao-hu-lun-bei-er-yang-rou-chuan-kao-bei.jpg',
   'https://i.postimg.cc/XqBw9cdV/zhi-kao-you-bian-kao-bei.jpg',
   'https://i.postimg.cc/Y9s64y4s/zhi-kao-mi-zhi-ji-chi-kao-bei.jpg',
   'https://i.postimg.cc/FKGgvKhr/rou-zhi-te-xie-an-ge-si-fei-niu-chuan-kao-bei.jpg',
   'https://i.postimg.cc/Y99NCwSY/rou-zhi-te-xie-you-po-la-zi-kao-chi-kao-bei.jpg',
   'https://i.postimg.cc/855dzVC7/rou-zhi-te-xie-xi-lin-guo-lei-yang-rou-chuan-kao-bei.jpg'
  ],
  '早餐意面': [
   'https://i.postimg.cc/C50qfThD/11luo-lei-qing-jiang-jia-zu-KV-kao-bei.jpg',
   'https://i.postimg.cc/jjGNtnG5/12qing-jing-san-kao-bei.jpg',
   'https://i.postimg.cc/9027q5md/13-qing-jing-si-kao-bei.jpg',
   'https://i.postimg.cc/PxYDxrj5/14hong-hui-niu-rou-yi-mian-shi-yu-kao-bei.jpg',
   'https://i.postimg.cc/rwHRNtyD/zhu-chu-tui-jian-hei-jiao-fei-niu-yi-mian-kao-bei.jpg',
   'https://i.postimg.cc/FFxfn6Fw/15zao-can-cai-dan2-feng-mian-kao-bei-2.jpg',
   'https://i.postimg.cc/jjVdj6df/16zao-can-cai-dan3-xi-shi-quan-can-nei-ye-kao-bei-2.jpg'
  ],
  '披萨': [
   'https://i.postimg.cc/LskQ1RRV/new-yi-shi-rou-jiang-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/pVs7C28W/he-niu-zhi-zun-pi-sa-2-kao-bei.jpg',
   'https://i.postimg.cc/Fsq6tDDC/xia-wei-yi-feng-qing-pi-sa.jpg',
   'https://i.postimg.cc/m2qnx8mf/qing-jing-tu-4-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/zGgcqKQY/yi-shi-niu-rou-yang-cong-pi-sa-shou-na-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/8z60TMY5/yi-shi-niu-rou-yang-cong-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/BvfwbtWL/yi-shi-niu-rou-yang-cong-pi-sa2-kao-bei.jpg',
   'https://i.postimg.cc/hvZ5trgP/ge-gong-zuo-la-li-hua-he-tao-pi-sa-KV-kao-bei.jpg',
   'https://i.postimg.cc/dtXfM44X/xin-ao-er-liang-feng-qing-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/Hnvhk2mR/fen-wei-tu-mei-shi-han-bao-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/sXcLtzNZ/fen-wei-tu-hei-song-lu-ji-rou-wen-quan-dan-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/ZRcQ1mM6/bao-jiang-liu-lian-ye-ye-pi-sa-kao-bei.jpg',
   'https://i.postimg.cc/Y2dVRpFV/hao-hua-da-man-guan120-kao-bei-2.jpg',
   'https://i.postimg.cc/LXTWrSbJ/chao-ji-zhi-zun0103-kao-bei-2.jpg',
   'https://i.postimg.cc/8PsYnqBG/liu-jin-xian-dan-huang-nan-mei-bai-xia-pi-sa.jpg',
   'https://i.postimg.cc/GhNf0qqD/liu-jin-xian-dan-huang-nen-ji-pi-sa-kao-bei-2.jpg',
   'https://i.postimg.cc/xCY7x8gw/bing-bian-te-xie-kao-bei.jpg',
   'https://i.postimg.cc/ydjZ9pkf/shuang-ren-zhan-jiang-mei-tu-fu-ben-kao-bei.jpg',
   'https://i.postimg.cc/T1PWcjbC/fen-wei-tu-pi-sa-bing-kao-bei.jpg',
   'https://i.postimg.cc/mDjHMpt6/bo-luo-niu-pi-sa-mei-tu-fu-ben-kao-bei.jpg',
   'https://i.postimg.cc/bYL5NzNm/yi-mian-Combo-90du-kao-bei.jpg'
  ]
 },
 'KFC': [
  'https://picsum.photos/1200/800?random=5',
  'https://picsum.photos/1200/800?random=6'
 ],
 'Starbucks': [
  'https://picsum.photos/1200/800?random=8'
 ],
 'Dior': [
  'https://i.postimg.cc/bJ4ZJTbZ/1.jpg',
  'https://i.postimg.cc/fL1VLKXJ/2.jpg',
  'https://i.postimg.cc/bJ4ZJTbS/3.jpg',
  'https://i.postimg.cc/fyXJ09jj/4.jpg',
  'https://i.postimg.cc/4ytmh9bP/5.jpg',
  'https://i.postimg.cc/SR8JzM7v/6.jpg',
  'https://i.postimg.cc/tRV1cKQ9/7.jpg',
  'https://i.postimg.cc/4ytmh9b6/hua-he-tu-an3-jiao-du3-dan-hua-he-yi-xiu.jpg'
 ],
 '雅诗兰黛': [
  'https://i.postimg.cc/YCLyL2JG/0228-ya-shi-lan-dai0014.jpg',
  'https://i.postimg.cc/5tcKBdVn/0825EL7061.jpg',
  'https://i.postimg.cc/Dzqj5jvc/20231124-ya-shi-lan-dai-ID0292.jpg',
  'https://i.postimg.cc/Dzqj5jfk/20231124-ya-shi-lan-dai-ID0321.jpg',
  'https://i.postimg.cc/RZJbJCjx/24-0415-ya-shi-lan-dai-li-he.jpg',
  'https://i.postimg.cc/WzfXtx81/xie-fang-li-he.jpg',
  'https://i.postimg.cc/44888hGf/zheng-shi-ban.jpg',
  'https://i.postimg.cc/wBhfFfxg/li-he.jpg',
  'https://i.postimg.cc/1tsWdG4Z/li-he2.jpg',
  'https://i.postimg.cc/MTqsL7XG/li-he3.jpg'
 ],
 'OMEGA': [
  'https://picsum.photos/1200/800?random=12'
 ],
 '浪琴': [
  'https://picsum.photos/1200/800?random=13'
 ],
 'VERSACE': [
  'https://i.postimg.cc/6pCg15zM/23-0918-AYA04534-HDR.jpg',
  'https://i.postimg.cc/SKq30FtH/23-0918-AYA04571.jpg',
  'https://i.postimg.cc/SN2wCG9K/23-0918-AYA02977.jpg',
  'https://i.postimg.cc/Yq5T3mNS/23-0918-AYA02989.jpg',
  'https://i.postimg.cc/8zL9nPwf/23-0918-AYA03130de-fu-ben.jpg',
  'https://i.postimg.cc/J4fSqB3n/23-0918-AYA03077.jpg',
  'https://i.postimg.cc/qMPWLCcn/23-0918-AYA03108.jpg',
  'https://i.postimg.cc/7YFjVT10/23-0918-AYA03130.jpg',
  'https://i.postimg.cc/HLHRGDhn/24-0406-VIC8946-HDR.jpg',
  'https://i.postimg.cc/Bvgy4Yrt/24-0406-VIC9000-HDR.jpg',
  'https://i.postimg.cc/N04VBJ36/24-0406-VIC9040-HDR.jpg',
  'https://i.postimg.cc/q7LY4bPm/24-0406-VIC9102-HDR.jpg',
  'https://i.postimg.cc/85zY5dGb/24-0406-VIC9108-HDR.jpg',
  'https://i.postimg.cc/j5S156KY/24-0406-VIC9174-HDR.jpg',
  'https://i.postimg.cc/hjZ57JPq/24-0406-VIC9380-HDR.jpg',
  'https://i.postimg.cc/zvLPwJVC/NG-05253-HDR.jpg',
  'https://i.postimg.cc/NFyP8g5N/NG-05274-HDR.jpg',
  'https://i.postimg.cc/Fz2CD2LC/NG-05331-HDR.jpg',
  'https://i.postimg.cc/T1ZNCZbv/NG-05343-HDR.jpg',
  'https://i.postimg.cc/qBYFJC5C/NG-05349-HDR.jpg',
  'https://i.postimg.cc/0534kJBd/NG-05421-HDR.jpg',
  'https://i.postimg.cc/Fzq8wY23/VIC3158-HDR.jpg',
  'https://i.postimg.cc/GtNV64ZW/VIC3246-HDR.jpg',
  'https://i.postimg.cc/v8SJ4Kc4/VIC3463-HDR.jpg',
  'https://i.postimg.cc/8kn27Yjc/VIC3484-HDR.jpg',
  'https://i.postimg.cc/ryYBDHKQ/VIC3526-HDR.jpg',
  'https://i.postimg.cc/gkXf8KZ5/VIC3589-HDR.jpg'
 ],
 'GUCCI': [
  'https://i.postimg.cc/KcPk74K0/ZOV-8479-PSD-kao-bei.jpg',
  'https://i.postimg.cc/HWwc0jJS/ZOV-8508-PSD-kao-bei.jpg',
  'https://i.postimg.cc/WbsD5jgP/ZOV-8543-PSD-kao-bei.jpg',
  'https://i.postimg.cc/J4RypmZr/ZOV-8547-PSD-kao-bei-1fu-ben.jpg',
  'https://i.postimg.cc/CLJRtts5/ZOV-8567-PSD-kao-bei.jpg',
  'https://i.postimg.cc/tCDsffNh/ZOV-8602-PSD-kao-bei.jpg',
  'https://i.postimg.cc/7Z65yVK3/ZOV-8606-PSD-kao-bei.jpg',
  'https://i.postimg.cc/htjXqr22/ZOV-8689.jpg',
  'https://i.postimg.cc/pLTmtZs6/ZOV-8709.jpg',
  'https://i.postimg.cc/Jz2G7kFf/ZOV-8744.jpg',
  'https://i.postimg.cc/Njz5GHVg/ZOV-8747.jpg',
  'https://i.postimg.cc/SRjr9qgG/MIA05588-JPG-kao-bei.jpg',
  'https://i.postimg.cc/HWP3gcL0/MIA056001.jpg',
  'https://i.postimg.cc/rszJ4cfJ/MIA05604-PSD-kao-bei.jpg',
  'https://i.postimg.cc/yxWPRBLj/MIA05609.jpg',
  'https://i.postimg.cc/2y3wWm07/MIA05616.jpg',
  'https://i.postimg.cc/Gt9QDrXg/MIA05618.jpg',
  'https://i.postimg.cc/Y0VxfVPb/MIA05666.jpg',
  'https://i.postimg.cc/8c3bB3Yq/MIA05671.jpg',
  'https://i.postimg.cc/x87Py77r/MIA05677-JPG-kao-bei.jpg',
  'https://i.postimg.cc/ZngLFgg4/MIA05686-PSD-kao-bei.jpg',
  'https://i.postimg.cc/vTjvLjj8/MIA05690.jpg',
  'https://i.postimg.cc/SQtVh2K9/MIA05827.jpg'
 ],
 'bubberry': [
  'https://picsum.photos/1200/800?random=16'
 ],
'Chloe': [
  'https://i.postimg.cc/90nrgBfS/1SSH09327.jpg',
  'https://i.postimg.cc/D0M8pcZF/2SSH09516.jpg',
  'https://i.postimg.cc/7hWftN6P/3SSH09352.jpg',
  'https://i.postimg.cc/dQHk0J9y/4Wechat-IMG116.jpg',
  'https://i.postimg.cc/XNHGvngK/5SSH09471.jpg',
  'https://i.postimg.cc/66j2QBh0/6SSH09475.jpg',
  'https://i.postimg.cc/66j2QBhb/7SSH09479.jpg',
  'https://i.postimg.cc/2jcb5CxP/8SSH09486.jpg',
  'https://i.postimg.cc/tRSZg95Q/9SSH09392.jpg',
  'https://i.postimg.cc/wT1tynW4/10SSH09371.jpg',
  'https://i.postimg.cc/RVW362P8/11SSH09456.jpg',
  'https://i.postimg.cc/ncXsjNRb/12SSH09309.jpg',
  'https://i.postimg.cc/zXyLb4t5/13SSH09396.jpg',
  'https://i.postimg.cc/c4vKgP9L/14SSH09400.jpg',
  'https://i.postimg.cc/qMNthWbq/15SSH09414.jpg',
  'https://i.postimg.cc/3Jky4zSd/16SSH09428.jpg'
 ],
 'LANVIN': [
  'https://i.postimg.cc/RC1ZHfkC/SSH01590.jpg',
  'https://i.postimg.cc/3JKJCNh0/SSH01593.jpg',
  'https://i.postimg.cc/GhchJtRG/SSH01595.jpg',
  'https://i.postimg.cc/yYVYXxKP/SSH01617.jpg',
  'https://i.postimg.cc/wT0xWzxS/SSH01622.jpg',
  'https://i.postimg.cc/P5JX97PD/SSH01657.jpg',
  'https://i.postimg.cc/0NJ82JYX/SSH01665.jpg',
  'https://i.postimg.cc/TPWRYWjw/SSH03748.jpg',
  'https://i.postimg.cc/8Cr1Prdz/SSH03756.jpg',
  'https://i.postimg.cc/RF5v3VG6/SSH03757.jpg',
  'https://i.postimg.cc/B69J8QN1/SSH03760.jpg',
  'https://i.postimg.cc/NM6BRqPR/SSH03810.jpg'
 ]
};

// ==========================================
// 2. 状态控制变量与 DOM 元素获取
// ==========================================
let currentBrand = 'Pizza Hut';
let currentSubGroup = 'TOM&JERRY';
let currentIndex = 0;
let autoPlayTimer = null;

const galleryTrack = document.getElementById('galleryTrack');
const counterElement = document.getElementById('imageCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// ==========================================
// 3. 自动轮播控制函数
// ==========================================
function startAutoPlay() {
 stopAutoPlay();
 autoPlayTimer = setInterval(() => {
  nextSlide();
 }, 3000);
}

function stopAutoPlay() {
 if (autoPlayTimer) {
  clearInterval(autoPlayTimer);
  autoPlayTimer = null;
 }
}

function resetAutoPlay() {
 startAutoPlay();
}

function nextSlide() {
 const items = galleryTrack.querySelectorAll('.gallery-item');
 if (!items.length || items.length <= 1) return;
 currentIndex = (currentIndex + 1) % items.length;
 updateSlider();
}

function prevSlide() {
 const items = galleryTrack.querySelectorAll('.gallery-item');
 if (!items.length || items.length <= 1) return;
 currentIndex = (currentIndex - 1 + items.length) % items.length;
 updateSlider();
}

// ==========================================
// 4. 辅助计算方法（带多图智能拼图打包逻辑）
// ==========================================
function getActiveImages() {
 const brandData = portfolioData[currentBrand];
 if (Array.isArray(brandData)) {
  return brandData;
 } else if (brandData && typeof brandData === 'object') {
  return brandData[currentSubGroup] || [];
 }
 return [];
}

// 专门针对 TOM&JERRY 和 经典系列 的拼卡打包逻辑
function getFormattedCards() {
 const rawImages = getActiveImages();

 // 如果是经典系列且正好有4张图，打包为 1 个 4格拼图卡片
 if (currentBrand === 'Pizza Hut' && currentSubGroup === '经典系列' && rawImages.length === 4) {
  return [{ type: 'grid-4', images: rawImages }];
 }

 // 如果是 TOM&JERRY，按需求把图片每两张一组拼成双格卡片
 if (currentBrand === 'Pizza Hut' && currentSubGroup === 'TOM&JERRY') {
  let cards = [];
  for (let i = 0; i < rawImages.length; i += 2) {
   if (i + 1 < rawImages.length) {
    cards.push({ type: 'grid-2', images: [rawImages[i], rawImages[i+1]] });
   } else {
    cards.push({ type: 'single', images: [rawImages[i]] });
   }
  }
  return cards;
 }

 // 其他常规分类：每张图独立成卡
 return rawImages.map(src => ({ type: 'single', images: [src] }));
}

// ==========================================
// 5. 画廊渲染主逻辑（完美支持拼图与单张混合排版）
// ==========================================
async function buildGallery() {
 const displayCards = getFormattedCards();
 galleryTrack.innerHTML = '';
 currentIndex = 0;

 displayCards.forEach((card, idx) => {
  const item = document.createElement('div');
  item.className = `gallery-item ${idx === currentIndex ? 'active' : ''}`;

  if (card.type === 'grid-4') {
   item.innerHTML = `
    <div class="grid-container-4">
     ${card.images.map(img => `<div class="grid-cell"><img src="${img}" alt="拼图项" referrerpolicy="no-referrer"></div>`).join('')}
    </div>
    <div class="white-overlay"></div>
   `;
  } else if (card.type === 'grid-2') {
   item.innerHTML = `
    <div class="grid-container-2">
     ${card.images.map(img => `<div class="grid-cell"><img src="${img}" alt="拼图项" referrerpolicy="no-referrer"></div>`).join('')}
    </div>
    <div class="white-overlay"></div>
   `;
  } else {
   item.innerHTML = `
    <img src="${card.images[0]}" alt="作品 ${idx + 1}" referrerpolicy="no-referrer">
    <div class="white-overlay"></div>
   `;
  }

  item.addEventListener('click', () => {
   currentIndex = idx;
   updateSlider();
   resetAutoPlay();
  });

  galleryTrack.appendChild(item);
 });

 updateSlider();
 if (displayCards.length > 1) {
  startAutoPlay();
 } else {
  stopAutoPlay();
 }
}

// ==========================================
// 6. 轮滑平滑滑动与高亮逻辑
// ==========================================
function updateSlider() {
 const items = galleryTrack.querySelectorAll('.gallery-item');
 if (!items.length) return;

 const len = items.length;
 if (currentIndex < 0) currentIndex = 0;
 if (currentIndex >= len) currentIndex = len - 1;

 const winWidth = window.innerWidth;
 const cardWidth = winWidth * 0.55;
 const gap = 30;

 const startOffset = (winWidth - cardWidth) / 2;
 const moveDistance = (cardWidth + gap) * currentIndex - startOffset;

 galleryTrack.style.transform = `translateX(${-moveDistance}px)`;

 items.forEach((item, idx) => {
  if (idx === currentIndex) {
   item.classList.add('active');
  } else {
   item.classList.remove('active');
  }
 });

 counterElement.textContent = `${currentIndex + 1} / ${len}`;
}

// ==========================================
// 7. 侧边栏品牌/子分类切换
// ==========================================
function switchSubBrand(brandName, subGroup, element) {
 currentBrand = brandName;
 currentSubGroup = subGroup;

 document.querySelectorAll('.sub-item, .brand-item').forEach(item => {
  item.classList.remove('active');
 });

 if (element && element.parentElement) {
  element.parentElement.classList.add('active');
 }

 buildGallery();
}

function navigateSidebarMenu(direction) {
 const menuLinks = Array.from(document.querySelectorAll('.sidebar .brand-list a'));
 if (!menuLinks.length) return;

 let currentIdx = menuLinks.findIndex(link => {
  const parentLi = link.parentElement;
  return parentLi && parentLi.classList.contains('active');
 });

 if (currentIdx === -1) {
  currentIdx = 0;
 } else {
  if (direction === 'up') {
   currentIdx = (currentIdx - 1 + menuLinks.length) % menuLinks.length;
  } else if (direction === 'down') {
   currentIdx = (currentIdx + 1) % menuLinks.length;
  }
 }

 const targetLink = menuLinks[currentIdx];
 if (targetLink) {
  targetLink.click();
  targetLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
 }
}

// ==========================================
// 8. 事件监听器
// ==========================================
prevBtn.addEventListener('click', () => {
 prevSlide();
 resetAutoPlay();
});

nextBtn.addEventListener('click', () => {
 nextSlide();
 resetAutoPlay();
});

document.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowLeft') {
  prevSlide();
  resetAutoPlay();
 } else if (e.key === 'ArrowRight') {
  nextSlide();
  resetAutoPlay();
 } else if (e.key === 'ArrowUp') {
  e.preventDefault();
  navigateSidebarMenu('up');
 } else if (e.key === 'ArrowDown') {
  e.preventDefault();
  navigateSidebarMenu('down');
 }
});

const mainContent = document.querySelector('.main-content');
if (mainContent) {
 mainContent.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
   nextSlide();
  } else {
   prevSlide();
  }
  resetAutoPlay();
 }, { passive: false });

 mainContent.addEventListener('mouseenter', stopAutoPlay);
 mainContent.addEventListener('mouseleave', startAutoPlay);
}

window.addEventListener('resize', updateSlider);

buildGallery();

