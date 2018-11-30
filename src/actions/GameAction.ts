import { action } from 'typesafe-actions';

import { INCREMENT } from '../shared/services/Constants';

export const incrementAction = () => action(INCREMENT);