import React from 'react';
import { Route } from 'react-router';
import {
  Base,
  PublishRequirements
} from 'components';

export default (
  <Route  component={Base}>
     <Route path='/' component={PublishRequirements} />
  </Route>
)