import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([

])

export const menuAside = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  { path: '/company', title: '公司管理', icon: 'home' },
  { path: '/api', title: 'api', icon: 'home' },
  { path: '/menu', title: '菜单', icon: 'home' },
  { path: '/button', title: '按钮', icon: 'home' },
  { path: '/permission', title: '权限', icon: 'home' },
])
