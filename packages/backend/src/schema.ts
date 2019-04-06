import { mapSchema, operationPresets } from 'greldal';

import { accomplishments } from './data-sources/accomplishments';
import { wizards } from './data-sources/wizards';

export const schema = mapSchema([
    ...operationPresets.query.defaults(wizards),
    ...operationPresets.query.defaults(accomplishments),
    ...operationPresets.mutation.defaults(accomplishments)
]);
