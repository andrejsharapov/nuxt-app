<template>
  <div class="three-d-model-viewer">
    <div
      ref="container"
      style="width: 100%; height: 500px"
    >
      <!-- <pre>FOV: {{ computedFov }}</pre> -->
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default {
  name: 'ThreeDModelViewer',
  props: {
    modelPath: {
      type: String,
      required: true,
    },
    fov: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      model: null,
      controls: null,
    }
  },
  computed: {
    viewerRef() {
      return this.$refs.container
    },
    themeLightDark() {
      if (this.$vuetify.theme.dark) {
        return 0x1d1f25
      } else {
        return 0xffffff
      }
    },
    computedFov() {
      return this.camera ? this.camera.fov : this.fov
    },
  },
  watch: {
    themeLightDark(newColor) {
      if (this.scene) {
        this.scene.background.set(newColor)
      }
    },
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    this.dispose()
  },
  methods: {
    init() {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(this.themeLightDark ?? 0x1d1f25)

      this.camera = new THREE.PerspectiveCamera(
        this.fov,
        this.viewerRef.clientWidth / this.viewerRef.clientHeight,
        0.1,
        1000
      )
      this.camera.position.z = 5

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(
        this.viewerRef.clientWidth,
        this.viewerRef.clientHeight
      )
      this.renderer.outputEncoding = THREE.SRGBColorSpace
      this.renderer.shadowMap.enabled = true // тени
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // Мягкие тени (или THREE.BasicShadowMap для производительности)

      this.viewerRef.appendChild(this.renderer.domElement)

      const loader = new GLTFLoader()
      loader.load(
        this.modelPath,
        (gltf) => {
          this.model = gltf.scene
          this.scene.add(this.model)

          //  Более реалистичное освещение:
          const ambientLight = new THREE.AmbientLight(0xfafafa)
          this.scene.add(ambientLight)

          const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8) // интенсивность
          directionalLight.position.set(1, 5, 5) // положение
          directionalLight.castShadow = true // Источник света отбрасывает тени
          directionalLight.shadow.mapSize.width = 1024 // качество теней
          directionalLight.shadow.mapSize.height = 1024
          this.scene.add(directionalLight)

          const hemisphereLight = new THREE.HemisphereLight(
            0xffffff,
            0xcccccc,
            0.8
          )
          this.scene.add(hemisphereLight)

          // this.model.traverse(function (child) {
          //   if (child.isMesh) {
          //     child.castShadow = true
          //     child.receiveShadow = true
          //   }
          // })

          const boundingBox = new THREE.Box3().setFromObject(this.model)
          const center = boundingBox.getCenter(new THREE.Vector3())
          this.model.position.sub(center)
        }
        // (xhr) => {
        //   console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        // },
        // (error) => {
        //   console.error('An error happened', error)
        // }
      )

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableDamping = true
      this.controls.dampingFactor = 0.05
      this.controls.screenSpacePanning = false
      this.controls.minDistance = 2
      this.controls.maxDistance = 10

      window.addEventListener('resize', this.onWindowResize)
      this.onWindowResize()

      this.animate()
    },
    onWindowResize() {
      this.camera.aspect =
        this.viewerRef.clientWidth / this.viewerRef.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(
        this.viewerRef.clientWidth,
        this.viewerRef.clientHeight
      )
    },
    onMouseWheel(event) {
      const zoomSpeed = 0.5

      if (this.controls.getDistance() < this.controls.maxDistance) {
        this.camera.fov -= event.deltaY * zoomSpeed * 0.01
        this.camera.fov = Math.max(1, Math.min(179, this.camera.fov))
        this.camera.updateProjectionMatrix()
      }
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.controls.update()
      if (this.model) {
        this.model.rotation.y += 0.01
      }
      this.renderer.render(this.scene, this.camera)
    },
    dispose() {
      if (this.scene) {
        this.scene.traverse(function (obj) {
          if (obj.isMesh) {
            obj.geometry.dispose()
            if (obj.material.map) obj.material.map.dispose()
            obj.material.dispose()
          }
        })
      }
      if (this.renderer) {
        this.renderer.dispose()
        this.viewerRef.removeChild(this.renderer.domElement)
      }
      window.removeEventListener('resize', this.onWindowResize)
    },
  },
}
</script>
