const barnerImagesData1 = [
  {
    url: 'https://pic.imgdb.cn/item/64d89f131ddac507ccdb7db2.webp',
    transform: [1, 0, 0, 1, 0, 0],
    width: 1950,
    a: 0.01
  },
  {
    url: 'https://pic.imgdb.cn/item/64d89f821ddac507ccdc71e4.webp',
    transform: [1, 0, 0, 1, -240, -5],
    width: 457.5,
    deg: -Math.PI / 60000,
    a: 0.035,
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc10d9.webp',
    transform: [1, 0, 0, 1, -300, 45],
    width: 157.5,
    deg: -Math.PI / 15000,
    a: 0.03,
    g: -0.02
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f811ddac507ccdc715c.webp',
    transform: [1, 0, 0, 1, -180, 0],
    width: 314.3,
    a: -0.035
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc64c2.webp',
    transform: [1, 0, 0, 1, -300, 20],
    width: 571.2,
    deg: Math.PI / 40000,
    a: 0.05
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc65e6.webp',
    transform: [1, 0, 0, 1, 100, 0],
    width: 1446,
    a: 0.01
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc655c.webp',
    transform: [1, 0, 0, 1, 220, 0],
    width: 158.25,
    deg: Math.PI / 10000,
    a: 0.06,
    g: 0.045
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc6536.webp',
    transform: [1, 0, 0, 1, -240, 0],
    width: 1721.3,
    a: 0.01
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f811ddac507ccdc7133.webp',
    transform: [1, 0, 0, 1, 320, 0],
    width: 642.96,
    a: 0.075,
    g: -0.025
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f7c1ddac507ccdc649b.webp',
    transform: [1, 0, 0, 1, 20, 0],
    blur: 1,
    width: 2131.5,
    a: 0.18
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f5c1ddac507ccdc1bbd.webp',
    transform: [1, 0, 0, 1, 400, 0],
    blur: 2.5,
    width: 299.52,
    deg: -Math.PI / 30000,
    a: 0.15,
    g: -0.02
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f571ddac507ccdc113d.webp',
    transform: [1, 0, 0, 1, 0, 10],
    width: 457.1,
    deg: Math.PI / 20000,
    f: 0.0001,
    a: 0.06,
    g: 0.01
  },
   {
    url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc10aa.webp',
    transform: [1, 0, 0, 1, -150, 0],
    width: 419.2,
    opacity: [0.1, 1],
    a: -0.02
  },
  {
    url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc1077.webp',
    transform: [1, 0, 0, 1, 40, 10],
    width: 816.9,
    blur: 1,
    a: 0.09
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f561ddac507ccdc102a.webp',
    transform: [1, 0, 0, 1, 20, 0],
    blur: 3,
    width: 1805.6,
    a: 0.3
  }, {
    url: 'https://pic.imgdb.cn/item/64d89f821ddac507ccdc71c6.webp',
    transform: [1, 0, 0, 1, 0, 0],
    width: 2400,
    a: 0.25
  }]

const barnerImagesData2 = [
  {
    "width": 1916,
    "height": 179,
    url: 'https://pic.imgdb.cn/item/64e08056661c6c8e540748c5.webp',
    "transform": [1, 0, 0, 1, 0, 0],
    a: 0.01
  },
  {
    "width": 690,
    "height": 56,
    url: 'https://pic.imgdb.cn/item/64e0808e661c6c8e5407fb3d.webp',
    "transform": [1, 0, 0, 1, 95.8065, -19.1613],
    a: 0.02
  },
  {
    "width": 1360,
    "height": 179,
    url: 'https://pic.imgdb.cn/item/64e083b8661c6c8e5411820c.webp',
    "transform": [1, 0, 0, 1, 223.548, 9.58065],
    a: 0.015
  },
  {
    "width": 1781,
    "height": 179,
    url: 'https://pic.imgdb.cn/item/64e083cf661c6c8e5411c5d2.webp',
    "transform": [1, 0, 0, 1, -102.194, 6.3871],
    a: 0.02
  },
  {
    "width": 911,
    "height": 141,
    "url": "https://pic.imgdb.cn/item/64e083e5661c6c8e541200a9.webp",
    "transform": [1, 0, 0, 1, -127.742, 25.5484],
    a: 0.04,
    opacity: [1, 0]
  },
  {
    "width": 911,
    "height": 141,
    "url": "https://pic.imgdb.cn/item/64e08404661c6c8e541256f4.webp",
    "transform": [1, 0, 0, 1, -127.742, 25.5484],
    a: 0.04,
    opacity: [0, 1],
  },
  {
    "width": 84,
    "height": 45,
    "url": "https://pic.imgdb.cn/item/64e0840d661c6c8e541271aa.webp",
    "transform": [1, 0, 0, 1, -558.871, 37.2581],
    a: 0.02
  },
  {
    "width": 201,
    "height": 103,
    "url": "https://pic.imgdb.cn/item/64e08416661c6c8e541289a1.webp",
    "transform": [1, 0, 0, 1, -606.774, 44.7097],
    a: 0.1
  },
  {
    "width": 95,
    "height": 34,
    "url": "https://pic.imgdb.cn/item/64e08421661c6c8e5412a883.webp",
    "transform": [1, 0, 0, 1, 380.565, 76.1129],
    a: 0.07
  },
  {
    "width": 68,
    "height": 40,
    "url": "https://pic.imgdb.cn/item/64e0842c661c6c8e5412c88f.webp",
    "transform": [1, 0, 0, 1, 63.871, 0],
    a: 0.075,
    deg: -Math.PI / 40000,
    g: -0.0075
  },
  {
    "width": 304,
    "height": 116,
    "url": "https://pic.imgdb.cn/item/64e08435661c6c8e5412e1ee.webp",
    "transform": [1, 0, 0, 1, -127.742, 12.7742],
    a: 0.04
  },
  {
    "width": 259,
    "height": 64,
    "url": "https://pic.imgdb.cn/item/64e0843c661c6c8e5412f5b4.webp",
    "transform": [1, 0, 0, 1, -193.742, 41.5161],
    a: 0.04,
    deg: Math.PI / 40000,
  },
  {
    "width": 1980,
    "height": 221,
    "url": "https://pic.imgdb.cn/item/64e08445661c6c8e54130dee.webp",
    "transform": [1, 0, 0, 1, -23.9516, -3.99194],
    a: 0.07
  },
  {
    "width": 196,
    "height": 88,
    "url": "https://pic.imgdb.cn/item/64e0844c661c6c8e54132471.webp",
    "transform": [1, 0, 0, 1, -268.258, -51.0968],
    a: 0.16
  },
  {
    "width": 2235,
    "height": 209,
    "url": "https://pic.imgdb.cn/item/64e08455661c6c8e54133dda.webp",
    "transform": [1, 0, 0, 1, 0, -14.9032],
    a: 0.16,
    blur: 3
  }
]

const body = document.getElementById('app')
const lerp = (start, end, amt) => (1 - amt) * start + amt * end; // 计算线性插值
const barnersData = [barnerImagesData1, barnerImagesData2]
console.log('barnersData :>> ', barnersData);
let allImagesData = barnerImagesData1

let compensate = 0 // 视窗补偿值
let layers = [] // DOM集合

document.getElementById('selectBox').addEventListener("click", (e) => {
  const setData = barnersData[+e.target.id - 1]
  if (!setData) return
  allImagesData = setData
  body.innerHTML = ""
  layers = []
  initItems()
})

// 添加图片元素
function initItems() {
  compensate = window.innerWidth > 1650 ? window.innerWidth / 1650 : 1
  if (layers.length <= 0) {
    body.style.display = 'none'
    for (let i = 0; i < allImagesData.length; i++) {
      const item = allImagesData[i]
      const layer = document.createElement('div')
      layer.classList.add('layer')
      layer.style = 'transform:' + new DOMMatrix(item.transform)
      item.opacity && (layer.style.opacity = item.opacity[0])
      const img = document.createElement('img')
      img.src = item.url
      img.style.filter = `blur(${item.blur}px)`
      img.style.width = `${item.width * compensate}px`
      layer.appendChild(img)
      body.appendChild(layer)
    }
    body.style.display = ''
    layers = document.querySelectorAll(".layer")
  } else {
    for (let i = 0; i < layers.length; i++) {
      layers[i].firstElementChild.style.width = `${allImagesData[i].width * compensate}px`
    }
  }
}
initItems()

let initX = 0
let moveX = 0
let startTime = 0;
const duration = 300; // 动画持续时间（毫秒）
function mouseMove() { // 滑动操作
  animate()
}
function leave() {
  startTime = 0;
  requestAnimationFrame(homing); // 开始动画
}
function homing(timestamp) {
  !startTime && (startTime = timestamp)
  const elapsed = timestamp - startTime
  const progress = Math.min(elapsed / duration, 1)
  animate(progress) // 传递动画进度
  progress < 1 && requestAnimationFrame(homing) // 继续下一帧
}
// 动画执行
function animate(progress) {
  if(layers.length <= 0) return
  const isHoming = typeof progress === 'number'
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const item = allImagesData[i]
    let m = new DOMMatrix(item.transform)
    let move = moveX * item.a // 移动X translateX
    let s = item.f ? item.f * moveX + 1 : 1 // 放大比例 Scale
    let g = moveX * (item.g || 0) // 移动Y translateY
    if (isHoming) { // 回正时处理
      m.e = lerp(moveX * item.a + item.transform[4], item.transform[4], progress)
      move = 0
      s = lerp(item.f ? item.f * moveX + 1 : 1, 1, progress)
      g = lerp(item.g ? item.g * moveX : 0, 0, progress)
    }
    m = m.multiply(new DOMMatrix([m.a * s, m.b, m.c, m.d * s, move, g]))
    if (item.deg) { // 有旋转角度
      const deg = isHoming ? lerp(item.deg * moveX, 0, progress) : item.deg * moveX
      m = m.multiply(new DOMMatrix([Math.cos(deg), Math.sin(deg), -Math.sin(deg), Math.cos(deg), 0, 0]))
    }
    if (item.opacity) { // 有透明度变化
      layer.style.opacity = isHoming && moveX > 0 ? lerp(item.opacity[1], item.opacity[0], progress) : lerp(item.opacity[0], item.opacity[1], moveX / window.innerWidth * 2)
    }
    layer.style.transform = m // 应用所有变换效果
  }
}
// 鼠标滑入与滑动
body.addEventListener('mouseover', (e) => initX = e.pageX)
body.addEventListener('mousemove', (e) => {
  moveX = e.pageX - initX
  requestAnimationFrame(mouseMove)
})
// 鼠标已经离开了视窗或者切出浏览器，执行回正动画
body.addEventListener("mouseleave", leave)
// document.addEventListener("mouseleave", leave)
window.onblur = leave
// 添加窗口大小监听
window.addEventListener('resize', initItems)
