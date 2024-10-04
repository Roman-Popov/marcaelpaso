import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Link, Typography } from '@mui/material';
import { OpenInFullRounded, CloseFullscreenRounded, RouteRounded } from '@mui/icons-material';
import { COORDINATES } from '../../location-constants';
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
      <YMapControls position="top left" orientation="horizontal">
        {controlData && <controlData.YMapGeolocationControl />}
        <YMapControlButton
          onClick={onMapReset}
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              ':before': { content: 'none' },
            }}
            component={Link}
            rel="noopener noreferrer"
            target="_blank"
            href={`https://yandex.ru/maps?whatshere%5Bpoint%5D=${COORDINATES[0]}%2C${COORDINATES[1]}&z=17`}
          >
            {t('location.getDirections')}
            <RouteRounded />
          </Typography>
        </YMapControlButton>
      </YMapControls>
      <YMapControls position="top right">
        <YMapControlButton onClick={onFullScreenToggle}>
          <Box sx={{ marginBottom: '-0.2em' }}>
            {isFullScreen ? <CloseFullscreenRounded /> : <OpenInFullRounded />}
          </Box>
        </YMapControlButton>
      </YMapControls>
      <YMapControls position="bottom left">
        {showResetButton && (
          <YMapControlButton
            onClick={onMapReset}
          >
            <Typography>
              {t('location.resetMap')}
            </Typography>
          </YMapControlButton>
        )}
      </YMapControls>
    </>
  );
};

export const MemoizedMapControls = React.memo(MapControls);
