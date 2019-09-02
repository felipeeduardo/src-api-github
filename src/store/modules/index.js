import user from './user'

const vuex = { user }

const keys = Object.keys(vuex)

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})

export default { modules }
