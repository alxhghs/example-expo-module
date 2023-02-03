import * as React from 'react';

import { ExampleExpoModuleViewProps } from './ExampleExpoModule.types';

export default function ExampleExpoModuleView(props: ExampleExpoModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
