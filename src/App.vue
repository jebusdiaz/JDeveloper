<template>

  <v-app>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
     <div class="scrollbtn" id="scrollbtn" @click="up">
       <i class="fas fa-angle-up"></i>
     </div>
    
    <nav class="navbar" id="navbar" v-scroll="handleScroll">
      <div class="max-width">
        <div class="logo"><a href="#">JD<span>eveloper.</span></a></div>
        <ul class="menu" id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="menu-btn" id="menu-btn" v-on:click="toggle"><i class="fas fa-bars"></i></div>
      </div>
    </nav>

    <!-- Home -->
    <section class="home" id="home">
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">Hello, my name is </div> 
          <div class="text-2">Jesús Díaz </div> 
          <div class="text-3">and i'm <span>Developer</span> </div>
          <a href="https://www.facebook.com/jesus.diaz.35977/"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.linkedin.com/in/jes%C3%BAs-d%C3%ADaz-b3b155150/"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/id_jesusdiaz/"><i class="fab fa-instagram"></i></a>

          
        </div>
      </div>

    </section>

  <!-- About -->

    <section class="about" id="about">
      <div class="max-width">
        <h2 class="tittle">About me</h2>
        <div class="about-content">
          <div class="column left">
            
            <img src="./assets/foto_jesus.jpg">

          </div> 
            <div class="column right">
              <div class="text">I'm Jesus Diaz, a <span>Developer</span> </div>
              <p>Hello everybody,I’m gonna tell you a little about myself. I’m a mechanical engineering student of Universidad de Carabobo <br>
              My history began when i was in 6th semester and i was getting Computacion para ingenieros (computation for engineers). In that course i started to learn Microsoft Visual Basic. At that moment my passion for programming began and i started to learn how to use HTML and CSS. 2 Years later i learned JavaScript, PHP and some frameworks(see skill) i love challenges and solve problems trough programming</p>

              <a href="./assets/123456.pdf" download="curriculum.pdf">Download CV</a>
            </div>
          
        </div>
      </div>

    </section>
    
<!-- services -->

    <section class="services" id="services">
      <div class="max-width">
        <h2 class="tittle">My services</h2>
        <div class="serv-content" >
          <div class="card" v-for="item in items"
          :key="item.title">
            <div class="box">
              <i :class=" item.icon"></i>
              <div class="text">{{ item.title }}</div>
              <p>{{ item.text }}</p>
            </div>
          </div>
          
        </div>
      </div>

    </section>

<!-- skills -->

    <section class="skills" id="skills">
      <div class="max-width">
        <h2 class="tittle">My skills</h2>
        <div class="skills-content" >
          <div class="column left">
            <div class="text"> My creative skills and experiences</div>
            <p>I was studied different languages in web pages in a self-taught way, and I learned each one of them.
              For example, HTML, CSS and javascript i was learned in FreecodeCamp.com. frameworks such as Laravel and Vuejs i was learned in EDteam.com.
            </p>
            <a href="https://www.linkedin.com/in/jes%C3%BAs-d%C3%ADaz-b3b155150/">read more</a>
          </div>
          <div class="column right">
            <div class="bars" v-for="item in elements" :key="item.title">
              <div class="infor">
                <span>{{ item.title }}</span>
                <span>{{ item.porcent }}</span>
              </div>
              <div :class="item.line"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
<!-- portfolio -->

   <section class="portfolio" id="portfolio">
      <div class="max-width">
        <h2 class="tittle">Portfolio</h2>
        <div class="portfolio-content" >
          <div class="card" >
            <div class="box">
                <img src="./assets/Material_Desing.png">
              <div class="text">Portfolio SPA</div>
              <p>
                <ul>
                <li>VueJs</li>
                <li>Vue Router</li>
                <li>Material Desing</li>
                <li>Vuetify</li>
                </ul>
              </p>
            </div>
          </div>
          

          <div class="card" >
            <div class="box">
              
              <img src="./assets/clima_app.jpg">
              
              <div class="text">APP para Clima</div>
              <p>
                <ul>
                <li>VueJs</li>
                <li>Axios</li>
                <li>API OpenWeatherMap</li>
                <li>CSS</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
<!-- contact -->

    <section class="contact" id="contact">
      <div class="max-width">
        <h2 class="tittle">Contact me</h2>
        <div class="contact-content" >
          <div class="column left">
            <div class="text">Get in touch</div>
            <p> I live and work in Venezuela.You can contact me on my social networks or to my email </p>
            <div class="icons">
              <div class="row">
                <i class="fas fa-user"></i>
                <div class="infor">
                  <div class="head">Name</div>
                  <div class="sub-title">Jesús Díaz</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-map-marker-alt"></i>
                <div class="infor">
                  <div class="head">Address</div>
                  <div class="sub-title">Carabobo,Venezuela</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-envelope"></i>
                <div class="infor">
                  <div class="head">Email</div>
                  <div class="sub-title">jebusdiaz8a@gmail.com</div>
                </div>
              </div>
              <a class="ct" href="https://www.facebook.com/jesus.diaz.35977/"><i class="fab fa-facebook-square"></i></a>
          <a class="ct" href="https://www.linkedin.com/in/jes%C3%BAs-d%C3%ADaz-b3b155150/"><i class="fab fa-linkedin-in"></i></a>
          <a class="ct" href="https://www.instagram.com/id_jesusdiaz/"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div class="column right">
           <GoogleMap :latitude= 10.251269 :longitude= -67.817665 :title="'Titulo Marcador'" />
            </div>
        </div>
      </div>

    </section>
    <footer>
      <span>Created By Jesus Diaz | <span class="far fa-copyright"></span> 2021 all right reserved. </span>
    </footer>
  </v-app>

</template>

<script>
import GoogleMap from "./components/GoogleMap";
export default{
  components:{
    GoogleMap
  },

  data () {
      return {
        map:null,
        google:null,
        items: [
          { title: 'Web desing', icon: 'fas fa-paint-brush ', text:'I can desing your website, blog, etc, useing basic tecnologies such as HTML, CSS and Javascript ' },
          { title: 'Responsive Desing', icon: 'fas fa-chart-line', text:'I love built websites using responsive design because that look awesome on all devices '},
          { title: 'Front-End', icon: 'fas fa-code', text:'Is the practice of build a website or Web Application so that a user can see and interact with them directly.'},
          
        ],

        elements:[
          {title:"HTML",porcent:"90%",line:"line html"},
          {title:"CSS",porcent:"80%",line:"line css"},
          {title:"JavaScript",porcent:"70%",line:"line js"},
          {title:"PHP",porcent:"70%",line:"line php"},
          {title:"Laravel",porcent:"60%",line:"line lara"},
          {title:"VueJs",porcent:"70%",line:"line vuejs"},
          {title:"MySQL",porcent:"70%",line:"line mysql"},
          {title:"Photoshop",porcent:"50%",line:"line photoshop"},
          
        ]
      
      }
    },


   
  methods: {
    up: function() {

      document.documentElement.scrollTop = 0;
    },

    handleScroll: function () {
      let el=document.getElementById('navbar')
      if (window.scrollY > 20) {
        el.classList.add('sticky');
      }else{
        el.classList.remove('sticky');
      }
      let btn=document.getElementById('scrollbtn')
      if (window.scrollY>100) {
        btn.classList.add('show');

      } else {
        btn.classList.remove('show');
      }
    },

    toggle:function(event){
      let toggle=document.getElementById('menu')

      if (event) {
        toggle.classList.toggle("active")
      
        
      } 
    },
        
  }

}


/*api key:AIzaSyB1ewh1wTzxAoGy-1L_edJxmP6ESjk3j8o*/
</script>
