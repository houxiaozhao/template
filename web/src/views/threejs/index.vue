<template>
  <d2-container>
    <template slot="header">Page 2 header</template>
    <div
      style="height:100%;width:100%"
      ref="threeCanvas"
    >

    </div>
  </d2-container>
</template>

<script>
import * as THREE from 'three'
import CameraControls from 'camera-controls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
CameraControls.install({ THREE: THREE })

export default {
  data () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cameraControls: null,
      clock: new THREE.Clock(),
      mixer: null
    }
  },
  mounted () {
    this.initScene()
    // const geometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({ color: 0x314255 })
    // const cube = new THREE.Mesh(geometry, material)
    // this.scene.add(cube)
    this.loadModel()
  },
  methods: {
    loadModel () {
      const loader = new GLTFLoader()
      loader.load(
        '/Stork.glb',
        (gltf) => {
          console.log(gltf)
          gltf.scene.scale.set(0.01, 0.01, 0.01)
          // called when the resource is loaded
          this.scene.add(gltf.scene)
          this.mixer = new THREE.AnimationMixer(gltf.scene)
          this.mixer.clipAction(gltf.animations[0]).play()
        },
        (xhr) => {
          // called while loading is progressing
          console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`)
        },
        (error) => {
          // called when loading has errors
          console.error('An error happened', error)
        }
      )
    },
    initScene () {
      const dom = this.$refs.threeCanvas
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(75, dom.clientWidth / dom.clientHeight, 0.1, 1000)

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(dom.clientWidth, dom.clientHeight)
      dom.appendChild(this.renderer.domElement)

      this.camera.position = new THREE.Vector3(10, 10, 10)

      const ambientLight = new THREE.AmbientLight(0xffffff) // soft white light
      this.scene.add(ambientLight)
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
      this.scene.add(directionalLight)

      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(10, 10)
      this.scene.add(gridHelper)

      this.cameraControls = new CameraControls(this.camera, this.renderer.domElement)

      this.animate()
    },
    animate () {
      const delta = this.clock.getDelta()
      this.cameraControls.update(delta)

      if (this.mixer != null) {
        this.mixer.update(delta)
      };
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>
