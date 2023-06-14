<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-img
        src="../assets/header.jpg"
        class="header-image"/>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Portal IDE-BH
          <span class="date">{{ todaysDate }}</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

     <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="220"
        :breakpoint="700"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
              to="/"
              exact
              clickable
              v-ripple
              >
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item
              clickable
              v-ripple
              >
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Servicios
              </q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"/>
              </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list>
                  <q-item
                    to="/blog"
                    clickable
                  >
                    <q-item-section>Blog</q-item-section>
                  </q-item>
                  <q-item
                    to="/moodle"
                    clickable
                  >
                    <q-item-section>Moodle</q-item-section>
                  </q-item>
                  <q-item
                    to="/mapas"
                    clickable
                  >
                    <q-item-section>Visor de mapas</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
            <q-separator/>
            <q-item
              to="/noticias"
              exact
              clickable
              v-ripple
              >
              <q-item-section avatar>
                <q-icon name="newspaper" />
              </q-item-section>

              <q-item-section>
                Noticias
              </q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"/>
              </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list>
                  <q-item
                    clickable
                  >
                    <q-item-section>
                      Enlaces
                    </q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right"/>
                    </q-item-section>
                      <q-menu anchor="top end" self="top start">
                        <q-item
                          tag="a"
                          target="_blank"
                          href="https://www.geotech.cu/"
                          clickable
                        >
                          <q-item-section>IGT</q-item-section>
                        </q-item>
                        <q-item
                          tag="a"
                          target="_blank"
                          href="https://www.idee.es/"
                          clickable
                        >
                          <q-item-section>Geoportal IDEE</q-item-section>
                        </q-item>
                      </q-menu>
                  </q-item>
                  <q-item
                    to="/enl-const"
                    clickable
                  >
                    <q-item-section>=========</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
            <q-separator/>
            <q-item
              to="/ayuda"
              exact
              clickable
              v-ripple
              >
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Ayuda
              </q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"/>
              </q-item-section>
            </q-item>
            <q-separator/>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/menu_header_fix.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <div class="menu">IDE-BH</div>
            
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <!--<keep-alive>
        <router-view />
      </keep-alive>-->
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar>
        <q-img
          src="../assets/iconos/gtebh.svg" width="50px"/>
        <q-img
          src="../assets/iconos/logoaecid.jpg" width="200px"/>
        <div><a href="">Derechos Reservados</a> | <a href="">Privacidad</a> | <a href="">Aviso Legal</a></div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd - DD / MMMM / YYYY - HH:mm aa')
    }
  }
})
</script>

<style lang="scss">
  .header-image {
    //height: 100%;
    z-index: -1;
    //opacity: 0.7;
    //filter: grayscale(50%);
  }
  .date{
    font-size: small;
    color: black;
    text-align: right;
    align-content: right;
  }
  .menu{
    font-weight: bolder;
    color: black;
    text-align: right;
  }
</style>
