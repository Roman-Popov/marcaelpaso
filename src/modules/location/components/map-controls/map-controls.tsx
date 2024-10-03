import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { OpenInFullRounded, CloseFullscreenRounded } from '@mui/icons-material';
import type { MapDataType, ControlDataType } from '../with-map';

type MapControlsProps = {
  controlData: null | undefined | ControlDataType,
  isFullScreen?: boolean,
  mapData: null | undefined | MapDataType,
  onFullScreenToggle: () => any,
  onMapReset: () => any,
  showResetButton?: boolean,
};

const MapControls = (props: MapControlsProps) => {
  const {
    controlData,
    isFullScreen = false,
    mapData,
    onFullScreenToggle,
    onMapReset,
    showResetButton = false,
  } = props;

  const { t } = useTranslation();

  if (!mapData) {
    return null;
  }

  const { YMapControls, YMapControlButton } = mapData;

  return (
    <>
      {controlData && (
        <YMapControls position="left">
          <controlData.YMapZoomControl />
        </YMapControls>
      )}
      <YMapControls position="top left" orientation="vertical">
        {controlData && <controlData.YMapGeolocationControl />}
        {showResetButton && (
          <YMapControlButton
            onClick={onMapReset}
          >
            <Typography>
              {t('location.toStudio')}
            </Typography>
          </YMapControlButton>
        )}
      </YMapControls>
      <YMapControls position="top right">
        <YMapControlButton onClick={onFullScreenToggle}>
          <Box sx={{ marginBottom: '-0.1em' }}>
            {isFullScreen ? <CloseFullscreenRounded /> : <OpenInFullRounded />}
          </Box>
        </YMapControlButton>
      </YMapControls>
    </>
  );
};

export const MemoizedMapControls = React.memo(MapControls);
