import { BaseObject, Util } from 'maptalks'
import * as THREE from 'three'

var OPTIONS = {
  speed: 0.005,
  radius: 1,
  altitude: 0,
  interactive: false
}
class Circle extends BaseObject {
  // constructor(coordinate, options, material, layer) {
  //   options = Util.extend({}, OPTIONS, options, { layer, coordinate })
  //   super()
  //   //Initialize internal configuration
  //   // https://github.com/maptalks/maptalks.three/blob/1e45f5238f500225ada1deb09b8bab18c1b52cf2/src/BaseObject.js#L135
  //   this._initOptions(options)
  //   const { altitude, radius } = options
  //   //generate geometry
  //   const r = layer.distanceToVector3(radius, radius).x
  //   const geometry = new THREE.CircleBufferGeometry(r, 50)

  //   //Initialize internal object3d
  //   // https://github.com/maptalks/maptalks.three/blob/1e45f5238f500225ada1deb09b8bab18c1b52cf2/src/BaseObject.js#L140
  //   this._createMesh(geometry, material)

  //   //set object3d position
  //   const z = layer.distanceToVector3(altitude, altitude).x
  //   const position = layer.coordinateToVector3(coordinate, z)
  //   this.getObject3d().position.copy(position)
  //   this._scale = 1
  //   // this.getObject3d().rotation.x = -Math.PI;
  // }

  // test animation
  _animation() {
    this._scale = this._scale > 1 ? 0 : this._scale
    this._scale += 0.02
    this.getObject3d().scale.set(this._scale, this._scale, this._scale)
  }
}
export default Circle
