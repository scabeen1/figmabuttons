import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './_tokensMotion.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1180:0 */
export const _tokensMotion: FC<Props> = memo(function _tokensMotion(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.validMotionTokens}>Valid motion tokens</div>
      <div className={classes.invalid}>Invalid</div>
      <div className={classes.motionMoveIn}>
        <div className={classes.moveIn}>move In</div>
      </div>
      <div className={classes.motionDissolve}>
        <div className={classes.dissolve}>dissolve</div>
      </div>
      <div className={classes.motionSmart}>
        <div className={classes.smart}>smart</div>
      </div>
      <div className={classes.motionPush}>
        <div className={classes.push}>push</div>
      </div>
      <div className={classes.motionBouncy}>
        <div className={classes.bouncy}>bouncy</div>
      </div>
      <div className={classes.motionCustomSpring}>
        <div className={classes.customSpring}>custom spring</div>
      </div>
      <div className={classes.motionInstant}>
        <div className={classes.instant}>instant</div>
      </div>
      <div className={classes.motionNone}>
        <div className={classes.none}>none</div>
      </div>
    </div>
  );
});
