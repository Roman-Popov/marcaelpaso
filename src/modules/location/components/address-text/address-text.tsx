import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  ClickAwayListener,
  Link,
  Tooltip,
  Typography,
} from '@mui/material';
import { CopyAllRounded } from '@mui/icons-material';

const AddressText = () => {
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [copiedSuccessfully, setCopiedSuccessfully] = useState<null | boolean>(null);

  const { t } = useTranslation();

  const handleTransitionExited = () => {
    setCopiedSuccessfully(null);
  };

  const handleTooltipClose = () => {
    setIsTooltipOpen(false);
  };

  const onCopyClick = () => {
    clearTimeout(timeoutId.current);

    try {
      navigator.clipboard.writeText(t('location.addressToCopy'));
      setCopiedSuccessfully(true);
    } catch (error) {
      setCopiedSuccessfully(false);
    }

    setIsTooltipOpen(true);

    timeoutId.current = setTimeout(() => {
      handleTooltipClose();
    }, 2000);
  };

  useEffect(() => () => {
    clearTimeout(timeoutId.current);
  }, []);

  return (
    <>
      <Typography fontSize="1.15em" fontWeight="bold" sx={{ mb: 1.5 }}>{t('location.address')}</Typography>
      <Typography fontSize="0.8em">{t('location.addressGlobal')}</Typography>
      <Typography component="div" sx={{ mb: 1.5 }}>
        {t('location.addressLocal')}
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box sx={{ display: 'inline', ml: 1 }}>
            <Tooltip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              onClose={handleTooltipClose}
              open={isTooltipOpen}
              placement="top"
              PopperProps={{ disablePortal: true }}
              title={copiedSuccessfully ? t('location.copied') : t('location.copyError')}
              TransitionProps={{
                onExited: handleTransitionExited,
              }}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                component="button"
                onClick={onCopyClick}
                sx={{ font: 'initial', ':before': { bottom: '-2px' } }}
              >
                <CopyAllRounded
                  sx={{
                    width: '0.7em',
                    height: '0.7em',
                    verticalAlign: 'text-bottom',
                  }}
                />
              </Link>
            </Tooltip>
          </Box>
        </ClickAwayListener>
      </Typography>
      <Typography>{t('location.details1st')}</Typography>
      <Typography>{t('location.details2nd')}</Typography>
      <Typography sx={{ mb: 5 }}>{t('location.videoDetails')}</Typography>
    </>
  );
};

export const MemoizedAddressText = React.memo(AddressText);
