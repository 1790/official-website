import Vue from 'vue'
import Router from 'vue-router'
import PageNavTransparent from '@/components/PageNavTransparent'
import PageNav from '@/components/PageNav'
import PageFooter from '@/components/PageFooter'
import Front from '@/pages/Front'
import service from '@/pages/service'
import about from '@/pages/about'
import team from '@/pages/team'
import job from '@/pages/job'
import step from '@/pages/step'
import contact from '@/pages/contact'
import copyright from '@/pages/copyright'
import ProductList from '@/pages/ProductList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Front',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: Front,
      }
    },
    {
      path: '/service',
      name: 'about',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: service,
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: about,
      }
    },
    {
      path: '/team',
      name: 'team',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: team,
      }
    },
    {
      path: '/job',
      name: 'job',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: job,
      }
    },
    {
      path: '/step',
      name: 'step',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: step,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: contact,
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      components: {
        PageNav: PageNav,
        PageFooter: PageFooter,
        default: copyright,
      }
    }
  ]
})
