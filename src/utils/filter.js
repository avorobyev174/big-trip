import { FilterType } from '../const';
import { isFuturePoint, isPresentPoint, isPastPoint } from './point.js';

const filter = {
  [ FilterType.EVERYTHING ]: (points) => points,
  [ FilterType.FUTURE ]: (points) => points.filter((point) => isFuturePoint(point.dateFrom)),
  [ FilterType.PRESENT ]: (points) => points.filter((point) => isPresentPoint(point.dateFrom)),
  [ FilterType.PAST ]: (points) => points.filter((point) => isPastPoint(point.dateFrom)),
};

export { filter };
