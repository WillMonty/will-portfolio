<script>
	import { Canvas, T } from '@threlte/core';
	import Wmlogo from '../wmlogo/wmlogo.svelte';
	import { Gizmo, OrbitControls } from '@threlte/extras';
</script>

<Canvas>
	<T.PerspectiveCamera
		fov={20}
		position={[1, 1, 1]}
		oncreate={(ref) => {
			ref.lookAt(0, 0, 0);
		}}
	>
		<OrbitControls>
			<Gizmo />
		</OrbitControls>
	</T.PerspectiveCamera>
	<Wmlogo />
</Canvas>
