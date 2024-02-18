import React from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const Astronaut = () => {
  const model = useGLTF(
    "https://gateway.lighthouse.storage/ipfs/QmXxcCbyHZfNgA3naMkNdFx6ws7AEUQyAKp8z7aKaSvbet/astronaut.glb"
  );
  const { actions } = useAnimations(model.animations, model.scene);
  return <primitive object={model.scene} />;
};

export default Astronaut;
