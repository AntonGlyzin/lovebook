<template>
<div class="container-wrp">
  <header class="head-site">
        <div class="head-site-contain">
                    <a href="#" class="head-site-icon" ></a>
                    <label class="head-site-icon" for="head-site-check"></label>
                    <input type="checkbox" name="" id="head-site-check">
                    <div class="bird-container">
                        <div class="bird"></div>
                    </div>
                    <nav class="head-site-nav">
                        <a href="#review">Отзывы</a>
                        <a href="#simple">Пример</a>
                        <a href="#pay">Купить</a>
                        <a href="#contact">Контакты</a>
                        <div class="head-site-nav-dot"></div>
                    </nav>
        </div>
        <section class="head-site-head">
            <div class="head-site-head-buy">
                <h1>Поэма о любви</h1>
                <p>Мироздание пронзила <br>
                    Поэтическая сила.<br>
                    Век гоняет в венах кровь.<br>
                    Ей название - любовь.♡</p>
                <div class="head-site-head-buy-btn">
                    <a href="#contact" class="head-site-head-buy-btn-lnk">Узнать больше об авторе</a>
                </div>
            </div>
            <div class="head-site-head-book">
                <img :src="require('./assets/images/book-order.png')" alt="image">
            </div>
            <div class="head-site-head-img1"></div>
            <div class="head-site-head-img2" ></div>
        </section>
    </header>

    <main class="main-site">
      <section class="main-site-what"><div class="main-site-div"></div>
            <h1>Что есть в книге?</h1>
            <div class="main-site-what-is">
                <div class="main-site-what-is-contain">
                    <figure class="main-site-what-is-item">
                    <img :src="require('../src/assets/images/main-site-what-is-item1.svg')" alt="">
                    <img :src="require('../src/assets/images/TheDigitalArtist-4520311_1920.jpg')" alt="">
                    <figcaption class="main-site-what-is-item-h">Много романтики и страсти</figcaption>
                </figure>
                </div>
                <div class="main-site-what-is-contain">
                    <figure class="main-site-what-is-item">
                    <img :src="require('../src/assets/images/main-site-what-is-item2.svg')" alt="">
                    <img :src="require('../src/assets/images/silhouette-3038483_1920.jpg')" alt="">
                    <figcaption class="main-site-what-is-item-h">Много иллюстраций </figcaption>
                </figure>
                </div>
                <div class="main-site-what-is-contain">
                    <figure class="main-site-what-is-item">
                    <img :src="require('../src/assets/images/main-site-what-is-item3.svg')" alt="">
                    <img :src="require('../src/assets/images/fantasy-4655368_1920.jpg')" alt="">
                    <figcaption class="main-site-what-is-item-h">Каждая строчка - чувство и эмоция</figcaption>
                </figure>
                </div>
                <div class="main-site-what-is-contain">
                      <figure class="main-site-what-is-item">
                    <img :src="require('../src/assets/images/main-site-what-is-item4.svg')" alt="">
                    <img :src="require('../src/assets/images/window-6359355_1920.jpg')" alt="">
                    <figcaption class="main-site-what-is-item-h">Путишествие внутрь себя</figcaption>
                </figure>
                </div>
                        <div class="main-site-what-is-contain">
                            <figure class="main-site-what-is-item">
                        <img :src="require('../src/assets/images/female-user.svg')" alt="">
                        <img :src="require('../src/assets/images/KELLEPICS-2494760_1920.jpg')" alt="">
                        <figcaption class="main-site-what-is-item-h">Ритм и красота</figcaption>
                    </figure>
                    </div>
                    <div class="main-site-what-is-contain">
                        <figure class="main-site-what-is-item">
                    <img :src="require('../src/assets/images/ghost.png')" alt="">
                    <img :src="require('../src/assets/images/kalhh-man-4660655_1920.jpg')" alt="">
                    <figcaption class="main-site-what-is-item-h">Мистика</figcaption>
                </figure>
                </div>
            </div>
        </section>
        <section class="main-site-simple">
            <a name="simple"></a>
            <div class="main-site-div"></div>
            <h1>Нужен пример?</h1>
            <video :src="require('../src/assets/images/video.mp4')" controls>
            </video>
        </section>
        <section class="main-site-download">
            <a name="pay"></a>
            <div class="main-site-div"></div>
            <h1>Где купить электронную и бумажную версию?</h1>
            <div class="main-site-download-items">
                <figure class="main-site-download-items-item">
                    <a href="https://ridero.ru/books/lyubov_za_granyu_zvyozd/" class="main-site-download-items-img2"></a>
                </figure>
            </div>
        </section>
        <section class="main-site-review">
            <a name="review"></a>
            <div class="main-site-div"></div>
            <h1>Отзывы про стихи</h1>
            <div class="main-site-review-items">
                <blockquote class="main-site-review-items-item">
                    <p><q>Доброе утро Антон!
                        Замечательно всё и стихи
                        с замечательным ритмом и рифмой
                        и картинка, выражающая истинную страсть
                        сильного мужчины.
                        -------
                        Приятного дня.</q></p>
                    <cite>&mdash; Ковалёв Александр Павлович</cite>
                </blockquote>

                <blockquote class="main-site-review-items-item">
                    <p><q>Прекрасный Гимн любви Читается на одном дыхании!
                        С добром и теплом души - Лариса</q></p>
                    <cite>&mdash; Лариса Чех</cite>
                </blockquote>
                <blockquote class="main-site-review-items-item">
                    <p><q>Оооооооооооо! Какой океан
                        страсти, нежности и Любви.
                        Антон, Казанова ничто
                        в сравнении с тобой.
                        снова вдохновил.</q></p>
                    <cite>&mdash; Галина Яловол 4</cite>
                </blockquote>
                <blockquote class="main-site-review-items-item">
                    <p><q>Антон, пишите очень поэтично, необычно, очень много красивой фантазии. Читать интересно!
                      Прочитала несколько стихотворений. Спасибо, получила удовольствие. С уважением!</q></p>
                      <cite> &mdash; Марина Морская</cite>
                </blockquote>
                <blockquote class="main-site-review-items-item">
                    <p><q>Антон это просто о-фи-геть как прекрасно написано!
                        В вашей душе живёт такая красота к любимой девушке.
                        Супер-стих! Восхищена! Спасибо!
                        Здоровья и вдохновения!
                        С уважением. Наталья.</q></p>
                    <cite>&mdash; Наталья Мальцева 4</cite>
                </blockquote>
                <blockquote class="main-site-review-items-item">
                    <p><q>Почти как у А.С. Пушкина: "И шестикрылый Серафим на перепутье мне явился!".
                        Что ж, теперь пора "глаголом жечь сердца людей". С уважением-</q></p>
                    <cite>&mdash; Надежда Ансеева</cite>
                </blockquote>
            </div>
        </section>
    </main>
    <footer class="footer-site">
        <a name="contact"></a>
        <div class="footer-site-main">
            <div class="footer-site-main-author">
                <figure class="footer-site-main-div"></figure>
                <div class="footer-site-main-author-wrp">
                    <div class="footer-site-main-author-link">
                        <a href="https://vk.com/tosha.glyzin" class="fa-brands fa-vk"></a>
                        <a href="https://t.me/tosha_glyzin" class="fa-brands fa-telegram"></a>
                    </div>
                    <div class="footer-site-main-author-img"></div>
                </div>
                <h1>Об авторе</h1>
                <p>
                    Номинант национальной премии «Поэт года» за 2021 год.
Награждён медалью «Фёдор Достоевский 200 лет».
Также мои произведения публиковались в альманахе «Лирика 2021».
                </p>
            </div>
            <div class="footer-site-main-form" id="form">
                <div :style="ifmsg" class="result">{{msg}}</div>
                <form action="">
                    <textarea name="" id="" cols="30" rows="5" required placeholder="Ваш вопрос" v-model="body"></textarea>
                    <input type="text" name="telegram" id="" required placeholder="telegram (не обязательно)" v-model="tele">
                    <div class="captcha-wrp" v-if="ifCaptch">
                        <img :src="getCaptch" alt="captcha" class="captcha">
                        <input type="hidden" name="captcha_0" :value="captcha_0" required="" id="id_captcha_0">
                        <input type="text" name="captcha_1" required="" id="id_captcha_1" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" v-model="captcha_1" placeholder="Проверка на бота:)">
                    </div>
                    <button @click="senMessage()" type="button" ><p>Отправить</p> <img class="mail-send" :src="require('../src/assets/images/envelope-solid.svg')" alt=""></button>
                </form>
            </div>
        </div>

    </footer>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      host: 'https://antonioglyzin.pythonanywhere.com',
      tele: '',
      body: '',
      ifmsg: 'opacity: 0;padding: 0px;',
      msg: '',
      captcha_1: '',
      page: 'lovebook',
      imgCaptcg: '',
      captcha_0: '',
      ifCaptch: false,
      chat: '654579717'
    }
  },
  computed: {
    getCaptch () {
      return this.host + this.imgCaptcg
    }
  },
  methods: {
    senMessage () {
      if (!this.captcha_0) {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        axios.get(this.host + '/api/captcha/refresh/')
          .then(res => {
            this.imgCaptcg = res.data.image_url
            this.captcha_0 = res.data.key
            this.ifCaptch = true
          })
      } else {
        axios.get(`${this.host}/api/checkcaptcha/`, {
          params: {
            captcha_1: this.captcha_1,
            captcha_0: this.captcha_0
          }

        }).then(res => {
          axios.post(`${this.host}/api/genie/send-message/`, {
            // params:{
            page: this.page,
            tele: this.tele,
            body: this.body,
            chat: this.chat
            // }
          }).then(res => {
            this.captcha_1 = ''
            this.tele = ''
            this.body = ''
            this.msg = 'Сообщение отправленно!'
            this.ifmsg = 'opacity: 1;padding: 40px;'
            setTimeout(() => {
              this.msg = ''
              this.ifmsg = 'opacity: 0;padding: 0px;'
            }, 5000)
          }).catch(res => {
            this.msg = 'Ошибка!!!'
            this.ifmsg = 'opacity: 1;padding: 40px;'
            this.captcha_1 = ''
            setTimeout(() => {
              this.msg = ''
              this.ifmsg = 'opacity: 0;padding: 0px;'
            }, 5000)
          })
        }).catch(res => {
          axios.get(this.host + '/api/captcha/refresh/')
            .then(res => {
              this.imgCaptcg = res.data.image_url
              this.captcha_0 = res.data.key
              this.ifCaptch = true
            })
          this.captcha_1 = ''
        })
      }
    }
  }
}
</script>

<style lang="scss">
.footer-site-main-form{
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      margin-right: 8px;
    }
  }
}
.mail-send{
  width: 34px;
  height: 27px;
  fill: rgb(255, 255, 255);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
