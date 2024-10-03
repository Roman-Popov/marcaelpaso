import React, { useState, useRef, useEffect } from 'react';
import type { YMapLocationRequest, LngLat, MapEventUpdateHandler } from 'ymaps3';
import { Box, useTheme } from '@mui/material';
import { Place } from '@mui/icons-material';
import { NoDataBlock } from 'components/no-data-block';
import { withMap } from '../with-map';
import { MapControls } from '../map-controls';

const COORDINATES: LngLat = [56.01667894067478, 54.77387244763266];
const BOUNDS: [LngLat, LngLat] = [
  [53.6975749488958, 53.291418544789074],
  [59.064396000992794, 56.081166519355214],
];

const LOCATION: YMapLocationRequest = {
  center: COORDINATES,
  zoom: 16,
};

type LocationProps = {
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
};

const Map = withMap<LocationProps>((props) => {
  const { mapData, controlData, containerRef } = props;

  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  const [_, setForceUpdateCounter] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const runtimeLocationRef = useRef<null | YMapLocationRequest>(LOCATION);

  const theme = useTheme();

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullScreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const onMapUpdate: MapEventUpdateHandler = ({ location: updatedLocation }) => {
    setShowResetButton(true);
    runtimeLocationRef.current = updatedLocation;
  };

  const onMapReset = () => {
    runtimeLocationRef.current = { ...LOCATION };
    // NOTE [RP] 2024-10-03: to let button disappear
    setForceUpdateCounter((prev) => prev + 1);
    setTimeout(() => { setShowResetButton(false); }, 0);
  };

  const onFullScreenToggle = () => {
    const container = containerRef.current;
    if (container) {
      if (isFullScreen) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen();
      }
    }
  };

  if (!mapData || !containerRef.current) {
    return (
      <NoDataBlock
        type={mapData === null ? 'error' : 'loading'}
        withoutBorder
        fullHeight
      />
    );
  }

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    YMapListener,
  } = mapData;

  return (
    <YMap
      location={runtimeLocationRef.current!}
      restrictMapArea={BOUNDS}
      zoomRange={{ min: 9, max: 22 }}
      showScaleInCopyrights
      theme={theme.palette.mode}
      mode="vector"
    >
      <YMapDefaultFeaturesLayer />
      <YMapDefaultSchemeLayer />
      <YMapMarker coordinates={COORDINATES}>
        <Box sx={{ transform: 'translate(-50%, -50%)', color: 'red' }}>
          <Place sx={{ width: '1.5em', height: '1.5em' }} />
        </Box>
      </YMapMarker>
      <MapControls
        controlData={controlData}
        isFullScreen={isFullScreen}
        mapData={mapData}
        onFullScreenToggle={onFullScreenToggle}
        onMapReset={onMapReset}
        showResetButton={showResetButton}
      />
      <YMapListener
        onUpdate={onMapUpdate}
      />
    </YMap>
  );
});

export const MemoizedMap = React.memo(Map);
