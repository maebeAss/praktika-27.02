import './App.css'
import { ImageSlider } from './ImageSlider'
import slider1 from "../public/siteSlider1.png"
import slider2 from "../public/siteSlider2.png"

const IMAGES = [slider1, slider2]

function App() {
  return (
    <>
      <header>
        <nav>
          <h3>Mini apps</h3>
          <div className='nav-bar-ul'>
            <a>Почему Telegram?</a>
            <a>Наши услуги</a>
            <a>Преимущества</a>
            <a>Как это работает</a>
          </div>
          <button className='nav-bar-butt'>
            <p>Оставить заявку</p>
          </button>
        </nav>
        <div className='hero-sec'>
          <div className='hero-sec-main'>
            <div className='hero-sec-text'>
              <h1>Треть рынка в один клик!</h1>
              <h4>Разработайте Telegram Mini App - будущее мобильной коммерции уже здесь!</h4>
            </div>
            <button className='hero-sec-butt'>
              <p>Хочу мини-приложение!</p>
            </button>
          </div>
          <section className='hero-img-sec'>
            <video src='...'></video>
          </section>
        </div>
      </header>
      <main>
        <div className='main-slider'>
          <div className='slider-title'>
            <div className='slider-navPoint'>
              <div className='nav-point'></div>
              <div className='nav-point'></div>
              <div className='nav-point'></div>
              <div className='nav-point'></div>
            </div>
            <h2>Real Estate</h2>
            <div className='butt-sec'>
              <button className='slider-butt'>
                <p>Поиск</p>
              </button>
              <button className='slider-butt'>
                <p>Выбор категории</p>
              </button>
            </div>
          </div>
          <div className='img-slider'>
            <ImageSlider imageUrls={IMAGES}/>
          </div>
        </div>
        <div className='card-sec'>
          <div className='card'>
            <img src='../public/card1.png'/>
            <p>Подходит для любой ниши:<br/><span> магазины, доставка, образвание, недвижимость и др.</span></p>
          </div>
          <div className='card'>
          <img src='../public/card2.png'/>
            <p>Уведомления нового поколения:<br/><span> замените устаревшие SMS на инетрактивные сообщения.</span></p>
          </div>
          <div className='card'>
            <img src='../public/card3.png'/>
            <p>Цифровизация и автоматизация:<br/><span> управляйте продажами и коммуникацией.</span></p>
          </div>
          <div className='card'>
            <img src='../public/card4.png'/>
            <p>Геймификация:<span> вовлекайте клиентов через акции и розыгрыши.</span></p>
          </div>
        </div>
        <div className='telegram-sec'>
          <img className="card-img" src='../public/telegram1.png'/>
          <div className='card-text-sec'>
            <h2>Почему Telegram?</h2>
            <ol>
              <li>Клиенту удобнее покупать в мессенджере</li>
              <li>Будьте ближе к клиентам — становитесь частью их повседневной жизни</li>
              <li>Вы рядом, как часть семьи</li>
              <li>Новый рынок и глобальный рост</li>
            </ol>
            <hr></hr>
            <div className='card-sub-text'>
              <p>Telegram открывает доступ не только к российской аудитории, но и к международному рынку.</p>
              <p>Используйте глобальный тренд, чтобы развивать свой бизнес и быть впереди конкурентов</p>
            </div>
          </div>
        </div>
        <div className='portfolio-sec'>
          <div className='portf-content-sec'>
            <div className='portf-text-sec'>
              <h4>30+ экспертов с опытом работы в ИИ, машинном обучении и дизайне</h4>
              <p>Полный цикл разработки: от анализа до запуска, а также гарантия качественного пользовательского опыта</p>
            </div>
            <div className='portf-sign-sec'>
              <div>
                <h4>Sk</h4>
              </div>
            </div>
          </div>
          <div className='portf-img-sec'>
            <img></img>
            <img></img>
            <img></img>
          </div>
        </div>
        <div className='howThatWorks-sec'>
          <div className='title-sec'>
            <h3>Как это работает?</h3>
            <div className='miniCard-sec'>
              <div className='card'>
                <h4></h4>
                <p></p>
              </div>
              <div className='card'>
                <h4></h4>
                <p></p>
              </div>
              <div className='card'>
                <h4></h4>
                <p></p>
              </div>
            </div>
            <p></p>
          </div>
          <div className='map-sec'>
            <img></img>
          </div>
        </div>
        <div className='newLevel-sec'>
          <div className='text-sec'>
            <h2></h2>
            <h4></h4>
            <p></p>
          </div>
          <div className='forma-sec'>
            <div className='nameForma-sec'>
              <input></input>
              <input></input>
            </div>
            <div className='phone+sphereForma-sec'>
              <input></input>
              <input></input>
            </div>
            <button>
              <h4>Отправить</h4>
            </button>
            <p></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App