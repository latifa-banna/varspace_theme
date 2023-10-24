export { default as StoreinoWelcome } from '../..\\components\\StoreinoWelcome.vue'
export { default as SectionsAbout } from '../..\\components\\sections\\about.vue'
export { default as SectionsApplication } from '../..\\components\\sections\\Application.vue'
export { default as SectionsBlog } from '../..\\components\\sections\\Blog.vue'
export { default as SectionsBrowse } from '../..\\components\\sections\\browse.vue'
export { default as SectionsFacilities } from '../..\\components\\sections\\facilities.vue'
export { default as SectionsFetch } from '../..\\components\\sections\\Fetch.vue'
export { default as SectionsFooter } from '../..\\components\\sections\\footer.vue'
export { default as SectionsFreeTour } from '../..\\components\\sections\\freeTour.vue'
export { default as SectionsGallery } from '../..\\components\\sections\\gallery.vue'
export { default as SectionsHeader } from '../..\\components\\sections\\header.vue'
export { default as SectionsHowItWorks } from '../..\\components\\sections\\howItWorks.vue'
export { default as SectionsItems } from '../..\\components\\sections\\items.vue'
export { default as SectionsLocations } from '../..\\components\\sections\\locations.vue'
export { default as SectionsMainImage } from '../..\\components\\sections\\mainImage.vue'
export { default as SectionsOurClients } from '../..\\components\\sections\\ourClients.vue'
export { default as SectionsOurSpaces } from '../..\\components\\sections\\OurSpaces.vue'
export { default as SectionsPageEmploye } from '../..\\components\\sections\\PageEmploye.vue'
export { default as SectionsSettings } from '../..\\components\\sections\\Settings.vue'
export { default as SectionsTestimonials } from '../..\\components\\sections\\testimonials.vue'
export { default as SiAppLoader } from '../..\\components\\si\\AppLoader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
