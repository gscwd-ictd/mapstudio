import { useCallback } from "react";
import { BaseLayerOptions } from "@mapstudio/app/utils/enums";
import { BaseMapConfig } from "@mapstudio/app/utils/types";
import { BaseMapLayers } from "@mapstudio/app/components/map/BaseMapLayers";

// Custom hookl for toggling the visibility of preset map layers
const useToggleBaseMapVisibility = () => {
  // This function is memoized to prevent unnecessary re-creations
  const toggleLayerVisibility = useCallback((layerTitle: BaseLayerOptions): void => {
    BaseMapLayers.forEach((layerItem: BaseMapConfig) => {
      const isVisible: boolean = layerItem.title === layerTitle;
      layerItem.layer.setVisible(isVisible);
    });
  }, []);

  // const mapBaseTileLayers = map.getLayers().getArray();
  // mapBaseTileLayers.map((layer: any) => {
  //   if (SelectedBaseMap === layer.className_) {
  //     layer.setVisible(true);
  //   } else {
  //     layer.setVisible(false);
  //   }
  // });

  return { toggleLayerVisibility };
};

export default useToggleBaseMapVisibility;
