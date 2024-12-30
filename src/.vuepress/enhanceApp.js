/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  let redirectLang = 'en-us'

  router.addRoutes([
    { path: '/', redirect: `/${redirectLang}/` },
    { path: '/index.html', redirect: `/${redirectLang}/index.html` },
    { path: '/what-is-fabrixai/', redirect: `/${redirectLang}/what-is-fabrixai/` },
    // { path: '/types-of-user-roles/', redirect: `/${redirectLang}/types-of-user-roles/` },
    // { path: '/api-user-journey-overview/', redirect: `/${redirectLang}/api-user-journey-overview/` },
    // { path: '/stp-platform/en-us/', redirect: '/stp-platform/'}
  ])

  router.beforeEach((to, from, next) => {
    //  Detect if user path has no language, redirect them.
    const isDefinedPage = !!to.name
    const hasNoLangCode = !to.path.toLowerCase().startsWith('/en-us') && !to.path.toLowerCase().startsWith('/zh-hk') && !to.path.toLowerCase().startsWith('/zh-cn')
    const supportedLang = ['en-us', 'zh-hk', 'zh-cn'];
    // const browserDefaultLang = navigator.language.toLowerCase();
    let redirectLang = ''
    // if (browserDefaultLang && supportedLang.includes(browserDefaultLang)) {
    //   redirectLang = browserDefaultLang;
    // }
    // const path = to.path.replace('/zh-hk', '')
    // console.log('to.name', to.name);
    // console.log('to.path', to.path);
    // console.log('path', path);
    // console.log('isDefinedPage', isDefinedPage);
    // console.log('hasNoLangCode', hasNoLangCode);
    // console.log('redirectLang', redirectLang);

    try {
      switch (navigator.language.toLowerCase()) {
        case 'zh-hk':
        case 'zh-mo':
        case 'zh-tw':
          redirectLang = 'zh-hk'
          break

        case 'zh-cn':
        case 'zh-sg':
          //  TODO: change to 'zh-cn' when it is ready.
          redirectLang = 'zh-cn'
          break

        default:
          redirectLang = ''
          break
      }
    } catch (e) {
    } finally {
      if (isDefinedPage && hasNoLangCode) {
        next({ path: `/${redirectLang}${to.path}` })
      } else {
        next()
      }
    }
  })
  // ...apply enhancements for the site.
}
