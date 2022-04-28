import { useMemo, useState } from 'react';
import {getDeviceType} from './util';

export const useDeviceType = () => useMemo(getDeviceType, []);
