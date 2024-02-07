import React from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const Astronaut = () => {
  const model = useGLTF("./Astronaut.glb");
  const { actions } = useAnimations(model.animations, model.scene);
  return <primitive object={model.scene} />;
};

export default Astronaut;
