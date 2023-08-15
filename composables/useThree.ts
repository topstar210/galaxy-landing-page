import { useWindowSize } from "@vueuse/core";

export const useResponsiveCanvas = () => {
  const canvas: Ref<HTMLCanvasElement | null> = ref(null);
  const { width, height } = useWindowSize({
    includeScrollbar: false,
  });
  const aspectRatio = computed(() => width.value / height.value);
  return { canvas, aspectRatio, width, height };
};
