import { LocationQueryValue } from 'vue-router';
import _ from 'lodash';

// always turn query params into an array
export type Param = LocationQueryValue | LocationQueryValue[];
export function arrayHelper(
  param: Param
): string[] {
  return _.flatten([param]).filter(_.negate(_.isNil)) as string[];
}

// check if there is at least on query param and return null if not
export function singleHelper(
  param: Param
): LocationQueryValue {
  return _.defaultTo(arrayHelper(param)[0], null);
}
