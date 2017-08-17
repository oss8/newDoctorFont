// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.min.css'

import App from '@/App'
import { Button, Cell, Badge, Picker, IndexList, IndexSection, DatetimePicker, Field, Popup, Tabbar, TabItem, TabContainer, TabContainerItem, Swipe, SwipeItem, Progress, Range, Toast, Search, Radio ,Checklist } from 'mint-ui'
import router from '@/router'
import { Auth, Api, City } from '@/plugins'
import * as filters from '@/filters'
// import vconsole from 'vconsole'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Badge.name, Badge)
Vue.component(Picker.name, Picker)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Field.name, Field)
Vue.component(Popup.name, Popup)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Progress.name, Progress)
Vue.component(Range.name, Range)
Vue.component(Toast.name, Toast)
Vue.component(Search.name, Search)
Vue.component(Radio.name, Radio)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Checklist.name, Checklist);
// Vue.use(vconsole)
Object.keys(filters).forEach(k => {
    Vue.filter(k, filters[k])
})

Vue.use(Auth)
Vue.use(Api)
Vue.use(City)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App />',
    components: { App }
})
