<template>
  <d2-container class="page">
    <!-- {{aside}} -->
    <!-- <div class="flex justify-center align-center">
      <img style="height:200px;" :src="`${$baseUrl}image/logo2.png`" />
    </div> -->
    <template slot="footer">
      <div style="text-align: center">
        Copyright
        <d2-icon name="copyright" />
        2020 nest
        <!-- <a href="https://github.com/FairyEver">
              @FairyEver
            </a> -->
      </div>
    </template>
  </d2-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapState('d2admin', {
      header: state => state.menu.header,
      aside: state => state.menu.aside
    })
  },
  methods: {
    ...mapActions('d2admin/menu', [
      'asideCollapseToggle'
    ]),
    ...mapMutations('d2admin/menu', [
      'asideSet'
    ]),
    addMenu () {
      this.asideSet([
        { path: '/index', title: '首页', icon: 'home' },
        {
          title: '人机认证',
          icon: 'folder-o',
          path: '',
          children: [
            { path: '/drone_pilot_license_certification', title: '装备驾驶证认证' },
            { path: '/drone_certification', title: '装备认证' }
          ]
        }
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
