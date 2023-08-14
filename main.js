const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd');
const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
// canvas.style.zIndex = "9999";

const app = {
    currenIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Ánh nắng của anh',
            singer: 'kien',
            path: './assets/audio/Anh-Nang-Cua-Anh-Cho-Em-Den-Ngay-Mai-OST-Duc-Phuc.mp3',
            image: './assets/img/kien.jpg',

        },
        {
            name: 'Lạc vào trong mơ',
            singer: 'kien',
            path: './assets/audio/lacvaotrongmo.mp3',
            image: './assets/img/screenshot_1656145012.png',
        },
        {
            name: 'i love you',
            singer: 'kien',
            path: './assets/audio/iloveyou.mp3',
            image: './assets/img/screenshot_1656154398.png',
        },
        {
            name: 'yeu la day',
            singer: 'kien',
            path: './assets/audio/yeuladay.mp3',
            image: './assets/img/screenshot_1658424279.png',
        },
        {
            name: 'em thich',
            singer: 'kien',
            path: './assets/audio/emthich.mp3',
            image: './assets/img/yeu em.jpg',
        },
        {
            name: 'Gọi em dậy đi học',
            singer: 'kien',
            path: './assets/audio/Dậy đi ông cháu ơi x Tôi aurthu người indonexia x Xời tuyệt vời - Nhạc nền hot tiktok 2022.mp4',
            image: './assets/img/ad1.jpg',
        },
        {
            name: 'Nhắc nhở em vài điều:3',
            singer: 'kien',
            path: './assets/audio/goiemdaydihoc.mp3',
            image: './assets/img/em3.jpg',
        },
        {
            name: 'Vợ yêu',
            singer: 'kien',
            path: './assets/audio/voyeu.mp3',
            image: './assets/img/hc1.jpg',
        },
        {
            name: 'Phận làm dâu chỉ có anh thương em thôi',
            singer: 'kien',
            path: './assets/audio/phanlamdau.mp3',
            image: './assets/img/em5.png',
        },
        {
            name: 'My love ^.^',
            singer: 'kien',
            path: './assets/audio/My-Love-Westlife.mp3',
            image: './assets/img/hc1.jpg',
        },
        {
            name: 'I do❤️',
            singer: 'kien',
            path: './assets/audio/911.mp3',
            image: './assets/img/em 1.jpg',
        },
        {
            name: 'At My Worst',
            singer: 'kien',
            path: './assets/audio/At My Worst - Pink Sweat$ ( Lyrics + Vietsub ).mp4',
            image: './assets/img/yeu em.jpg',
        },
        {
            name: 'Yêu em rất nhiều<3',
            singer: 'kien',
            path: './assets/audio/HOÀNG TÔN - YÊU EM RẤT NHIỀU (Lyrics Video).mp4',
            image: './assets/img/cr1.jpg',
        },
        {
            name: "Can't take my eyes off youuuu",
            singer: 'kien',
            path: "./assets/audio/[Vietsub+Lyric] 𝑪𝒂𝒏'𝒕 𝑻𝒂𝒌𝒆 𝑴𝒚 𝑬𝒚𝒆𝒔 𝑶𝒇𝒇 𝒀𝒐𝒖 - 𝑱𝒐𝒔𝒆𝒑𝒉 𝑽𝒊𝒏𝒄𝒆𝒏𝒕.mp4",
            image: './assets/img/yeu em.jpg',
        },
        {
            name: "Em ổn không??",
            singer: 'kien',
            path: './assets/audio/EM ỔN KHÔNG - TRỊNH THIÊN ÂN x VIRUSS.mp4',
            image: './assets/img/kienchinh.jpg',
        },
        {
            name: "Từ em mà ra",
            singer: 'kien',
            path: './assets/audio/LiL Z - -TỪ EM MÀ RA -( ft Đức Anh) [ MV Official ].mp4',
            image: './assets/img/yeu em.jpg',
        },
        {
            name: "Forget me now",
            singer: 'kien',
            path: './assets/audio/Forget Me Now - Fishy ft. Trí Dũng「Cukak Remix」- Audio Lyrics.mp4',
            image: './assets/img/cr3.jpg',
        },
        {
            name: "Sài gòn đau lòng quá <3",
            singer: 'kien',
            path: "./assets/audio/'SÀI GÒN ĐAU LÒNG QUÁ' toàn kỷ niệm chúng ta... - HỨA KIM TUYỀN x HOÀNG DUYÊN (OFFICIAL MV).mp4",
            image: './assets/img/cr2.jpg',
        },
        {
            name: "Kiên đếch cần gì nhiều ngoài...",
            singer: 'kien',
            path: "./assets/audio/Đen - Anh Đếch Cần Gì Nhiều Ngoài Em ft. Vũ., Thành Đồng (M-V).mp4",
            image: './assets/img/cr1.jpg',
        },
        {
            name: "Mấy khi được yêu hc <33",
            singer: 'kien',
            path: "./assets/audio/MẤY KHI ĐƯỢC YÊU - Nguyên.mp4",
            image: './assets/img/haf chinh.jpg',
        },
        {
            name: "Can you love me?? yup=)))",
            singer: 'kien',
            path: "./assets/audio/CAN WE LOVE - Obito - (Official Lyric Video).mp4",
            image: './assets/img/update1.png',
        },
        {
            name: "Chỉ muốn bên ... thật gần>.<",
            singer: 'kien',
            path: "./assets/audio/Chỉ Muốn Bên Em Thật Gần (Orinn Remix) - YLing - Nhạc Trẻ EDM Hot TikTok Gây Nghiện Hay Nhất 2022.mp4",
            image: './assets/img/update2.jpg',
        },
        {
            name: "Không phải dù cho mai về sau fake nhé @@",
            singer: 'kien',
            path: "./assets/audio/CHỈ MUỐN BÊN EM LÚC NÀY - JIKI X ft HUY VẠC (FULL MV LYRIC).mp4",
            image: './assets/img/update5.jpg',
        },
        {
            name: "It's youuuuu",
            singer: 'kien',
            path: "./assets/audio/it you.mp4",
            image: './assets/img/update3.jpg',
        },
        {
            name: "Anh trông theo đó nhưng chỉ thấy em=))))",
            singer: 'kien',
            path: "./assets/audio/- Anh trông theo đó đây nhưng sao chẳng thấy..- ( 2A.M JustaTee x BigDaddy) - Audio Lyrics Video.mp4",
            image: './assets/img/update4.jpg',
        },

    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                        <div class="song ${index === this.currenIndex ? 'active' : ''}" data-index=${index}>
                            <div class="thumb" style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>  
                    `
        })
        playlist.innerHTML = htmls.join('');

    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currenIndex]
            },
            set: function (value) {
                currentSong = value.this;
            }
        })
    },
    hanleEvent: function () {
        _this = this;
        const cdWidth = cd.offsetWidth;
        const cdHeight = cd.offsetHeight;
        // xu li cd quay khi phat nhac 
        // animate sẽ trả về 1 cái đối tượng 
        const cdThumAnimate = cdThumb.animate([
            { transform: 'rotate(360deg' }
        ], {
            duration: 10000,//10 giaay 
            iterations: Infinity,
        })
        cdThumAnimate.pause();
        // xu li phong to thu nho cd
        document.onscroll = function () {
            // active luớt lên là thu nhỏ ảnh lại 
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            const newCdHeight = cdHeight - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.height = newCdHeight > 0 ? newCdHeight + 'px' : 0;
            // cd.style.opacity=newCdWidth/cdHeight;
        }
        // cxu li khi click playign nhac
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }
        // chạy nhạc khi mà click 
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumAnimate.play();
        }
        // khi song bị pause
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumAnimate.pause();
        }
        // khi chay nhac thi thanh chay 
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }
        // solve tua nhac
        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }
        // next sang bai  khac
        nextBtn.onclick = function () {
            _this.nextSong();
            audio.play();
            _this.render();
            _this.scrollToACtiveSong();

        }
        // prev bai truowc
        prevBtn.onclick = function () {
            _this.prevSong();
            audio.play();
            _this.render();
            _this.scrollToACtiveSong();
        }
        //xử lí chạy random nhacj`
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom)
            _this.playrandomSong()
            audio.play()
        }
        // xu li lap lai mot baihat
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat)
            // _this

        }
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }
        //khi click vaò 1 bài bất kì 
        playlist.onclick = function (e) {
            //thich bài nào chọn bài đó , giống như cách anh thích em =))) 
            const elementTomake = e.target.closest('.song:not(.active)')
            if (elementTomake || (e.target.closest('.option'))) {
                if (elementTomake) {
                    _this.currenIndex = Number(elementTomake.dataset.index)
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();
                    _this.scrollToACtiveSong()

                }
            }
        }

    },
    scrollToACtiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }, 10)
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path
        // console.log(heading, cdThumb, audio);
    },
    nextSong: function () {
        this.currenIndex++;
        if (this.currenIndex >= this.songs.length) {
            this.currenIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currenIndex--;
        if (this.currenIndex < 0) {
            this.currenIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playrandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currenIndex)
        this.currenIndex = newIndex
        this.loadCurrentSong();
    },

    start: function () {
        // ding nghia thuoc tinh
        this.defineProperties();
        //kawng nghe/ xu li event
        this.hanleEvent();
        // solve bai hay dau tien 
        this.loadCurrentSong();
        // render playlist
        this.render();
    },
    

}
app.start();

// document.addEventListener("DOMContentLoaded", function () {
//     var hearts = [];
  
//     var canvas = document.createElement("canvas");
//     var c = canvas.getContext("2d");
  
//     document.body.appendChild(canvas);
//     canvas.style.zIndex = "9999";
//     canvas.style.position = "fixed";
//     canvas.style.top = "0";
//     canvas.style.left = "0";
//     canvas.style.pointerEvents = "none";
  
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
  
//     function Heart(x, y) {
//       this.x = x;
//       this.y = y;
//       this.opacity = 0.9;
//     }
  
//     Heart.prototype.draw = function (c) {
//       c.globalAlpha = this.opacity;
//       c.fillStyle = "red";
//       c.font = "20px Arial";
//       c.fillText("❤️", this.x, this.y);
//       c.globalAlpha = 1;
//     };
  
//     function animate() {
//       requestAnimationFrame(animate);
//       c.clearRect(0, 0, canvas.width, canvas.height);
  
//       for (var i = 0; i < hearts.length; i++) {
//         hearts[i].y -= 1;
//         hearts[i].opacity -= 0.015;
//         hearts[i].draw(c);
  
//         if (hearts[i].opacity <= 0) {
//           hearts.splice(i, 2);
//           i--;
//         }
//       }
//     }
  
//     animate();
  
//     function createHeart(x, y) {
//       var heart = new Heart(x, y);
//       hearts.push(heart);
//     }
  
//     var timeout;
  
//     document.addEventListener("mousemove", function (event) {
//       clearTimeout(timeout);
//       createHeart(event.clientX, event.clientY);
  
//       timeout = setTimeout(function () {
//         createHeart(event.clientX, event.clientY);
//       }, 500);
//     });
  
//     document.addEventListener("mouseleave", function () {
//       clearTimeout(timeout);
//     });
//   });
document.addEventListener("DOMContentLoaded", function () {
    var hearts = [];
  
    var canvas = document.createElement("canvas");
    var c = canvas.getContext("2d");
  
    document.body.appendChild(canvas);
    canvas.style.zIndex = "9999";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    function Heart(x, y) {
      this.x = x;
      this.y = y;
      this.opacity = 0.8;
    }
  
    Heart.prototype.draw = function (c) {
      c.globalAlpha = this.opacity;
      c.fillStyle = "red";
      c.font = "20px Arial";
      c.fillText("❤️", this.x, this.y);
      c.globalAlpha = 1;
    };
  
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
  
      for (var i = 0; i < hearts.length; i++) {
        hearts[i].y -= 1;
        hearts[i].opacity -= 0.0099999;
        hearts[i].draw(c);
  
        if (hearts[i].opacity <= 0) {
          hearts.splice(i, 1);
          i--;
        }
      }
    }
  
    animate();
  
    function createHeart(x, y) {
      var heart = new Heart(x, y);
      hearts.push(heart);
    }
  
    function autoCreateHeart() {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      createHeart(x, y);
  
      setTimeout(autoCreateHeart, 50); // Thời gian tạo trái tim tự động (ms)
    }
  
    autoCreateHeart();
  
    var timeout;
  
    function handleMouseMove(event) {
      clearTimeout(timeout);
      createHeart(event.clientX, event.clientY);
  
      timeout = setTimeout(function () {
        createHeart(event.clientX, event.clientY);
      }, 1000);
    }
  
    function handleMouseLeave() {
      clearTimeout(timeout);
    }
  
    function handleMouseStill(event) {
        clearTimeout(timeout);
        createHeart(event.clientX, event.clientY);
      
        timeout = setTimeout(function () {
          createHeart(event.clientX, event.clientY);
        }, 50);
      }
    document.addEventListener("mousemove", handleMouseMove);
  
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseStill);
  });
  