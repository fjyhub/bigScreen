import BorderBox1 from './borderBox1'
import BorderBox2 from './borderBox2'
import BorderBox3 from './borderBox3'
import Icon from './icon'
import ScrollBoard from './scrollBoard'
// import x from './x.vue'

const components = [BorderBox1, BorderBox2, BorderBox3, Icon, ScrollBoard]

export default function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
